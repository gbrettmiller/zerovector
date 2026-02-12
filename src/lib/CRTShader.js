/**
 * CRT Shader Effect — WebGL post-processing for canvas elements
 *
 * Inspired by CRTFilter.js (MIT, Aka/Ichiaka) and RetroArch CRT-Royale.
 * Rewritten for React compatibility and performance:
 *   - Uses texImage2D(canvas) instead of getImageData (GPU-direct, no CPU readback)
 *   - No DOM manipulation (caller manages both canvases)
 *   - Single render() call per frame (no internal rAF loop)
 *   - Fixed vertex shader math from original CRTFilter
 *
 * Usage:
 *   const crt = new CRTShader(glCanvas, config);
 *   // In your animation loop:
 *   crt.render(sourceCanvas);
 *   // On cleanup:
 *   crt.destroy();
 */

export class CRTShader {
  constructor(glCanvas, config = {}) {
    this.canvas = glCanvas;
    this.gl = glCanvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true })
           || glCanvas.getContext('webgl', { alpha: true, premultipliedAlpha: true });

    if (!this.gl) {
      console.error('CRTShader: WebGL not supported');
      this.failed = true;
      return;
    }

    this.config = {
      barrelDistortion: 0.04,       // Screen curvature (0 = flat, 0.1 = very curved)
      chromaticAberration: 0.0008,  // RGB fringing at edges
      scanlineIntensity: 0.18,      // Scanline darkness (0 = none, 1 = black lines)
      scanlineCount: 800.0,         // Number of scanline cycles across height
      phosphorMask: 0.15,           // Aperture grille RGB stripe intensity
      bloom: 0.06,                  // Phosphor glow bleed
      noise: 0.025,                 // Static noise
      vignette: 0.25,               // Edge darkening
      brightness: 1.15,             // Overall brightness (compensate for scanline/mask darkening)
      flicker: 0.003,               // Screen flicker
      ...config
    };

    this._initShaders();
    this._initBuffers();
    this._initTexture();
  }

  _initShaders() {
    const gl = this.gl;

    const vertexSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision mediump float;

      varying vec2 v_texCoord;
      uniform sampler2D u_texture;
      uniform float u_time;
      uniform vec2 u_resolution;

      uniform float u_barrel;
      uniform float u_aberration;
      uniform float u_scanline;
      uniform float u_scanlineCount;
      uniform float u_phosphor;
      uniform float u_bloom;
      uniform float u_noise;
      uniform float u_vignette;
      uniform float u_brightness;
      uniform float u_flicker;

      // Barrel distortion — attempt to simulate CRT curvature
      vec2 barrel(vec2 uv, float amt) {
        vec2 c = uv - 0.5;
        float d = dot(c, c);
        return uv + c * d * amt;
      }

      void main() {
        vec2 uv = barrel(v_texCoord, u_barrel);

        // Transparent outside the curved screen area
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          return;
        }

        // --- Process premultiplied colors (same as original shader) ---
        // The 2D canvas stores premultiplied alpha. Lines at 7% alpha
        // produce dark, subtle RGB values — that IS the intended look.
        // We process those premultiplied values through CRT effects
        // and use alpha purely to mask content vs empty background.
        float srcAlpha = texture2D(u_texture, uv).a;

        // --- Chromatic aberration (RGB split) ---
        vec3 col;
        col.r = texture2D(u_texture, uv + vec2(u_aberration, 0.0)).r;
        col.g = texture2D(u_texture, uv).g;
        col.b = texture2D(u_texture, uv - vec2(u_aberration, 0.0)).b;

        // --- Bloom (sample neighbors for phosphor glow bleed) ---
        vec2 px = 1.0 / u_resolution;
        vec3 bloomCol = vec3(0.0);
        bloomCol += texture2D(u_texture, uv + vec2(px.x, 0.0)).rgb;
        bloomCol += texture2D(u_texture, uv - vec2(px.x, 0.0)).rgb;
        bloomCol += texture2D(u_texture, uv + vec2(0.0, px.y)).rgb;
        bloomCol += texture2D(u_texture, uv - vec2(0.0, px.y)).rgb;
        bloomCol += texture2D(u_texture, uv + vec2(px.x, px.y)).rgb;
        bloomCol += texture2D(u_texture, uv - vec2(px.x, px.y)).rgb;
        bloomCol += texture2D(u_texture, uv + vec2(px.x, -px.y)).rgb;
        bloomCol += texture2D(u_texture, uv - vec2(px.x, -px.y)).rgb;
        bloomCol *= 0.125;
        col += bloomCol * u_bloom;

        // --- Scanlines (horizontal dark bands) ---
        float scan = sin(uv.y * u_scanlineCount + u_time * 1.5) * 0.5 + 0.5;
        scan = pow(scan, 1.5);
        col *= 1.0 - u_scanline * (1.0 - scan);

        // --- Phosphor mask (aperture grille — RGB vertical stripes) ---
        float maskX = mod(gl_FragCoord.x, 6.0);
        vec3 mask = vec3(0.75);
        if (maskX < 2.0) mask.r = 1.0;
        else if (maskX < 4.0) mask.g = 1.0;
        else mask.b = 1.0;
        col *= mix(vec3(1.0), mask, u_phosphor);

        // --- Vignette (CRT edge falloff) ---
        vec2 vig = uv * (1.0 - uv);
        float vigFactor = vig.x * vig.y * 15.0;
        vigFactor = pow(vigFactor, u_vignette);
        col *= vigFactor;

        // --- Static noise (gated to content areas) ---
        float n = fract(sin(dot(uv + vec2(u_time * 0.17), vec2(12.9898, 78.233))) * 43758.5453);
        col += (n - 0.5) * u_noise * step(0.003, srcAlpha);

        // --- Flicker ---
        col *= 1.0 + u_flicker * sin(u_time * 8.0);

        // --- Brightness ---
        col *= u_brightness;

        // Alpha: smoothstep masks content (any source alpha > ~1%) to opaque,
        // empty areas to transparent. The premultiplied RGB values ARE the
        // intended subtle look — they just need to be visible, not transparent.
        float outAlpha = smoothstep(0.0, 0.01, srcAlpha);

        gl_FragColor = vec4(col, outAlpha);
      }
    `;

    const vShader = this._compile(gl.VERTEX_SHADER, vertexSource);
    const fShader = this._compile(gl.FRAGMENT_SHADER, fragmentSource);

    this.program = gl.createProgram();
    gl.attachShader(this.program, vShader);
    gl.attachShader(this.program, fShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('CRTShader: link error', gl.getProgramInfoLog(this.program));
      this.failed = true;
      return;
    }

    gl.useProgram(this.program);

    // Cache uniform locations (avoids per-frame lookups)
    this.uniforms = {};
    const names = [
      'u_texture', 'u_time', 'u_resolution',
      'u_barrel', 'u_aberration', 'u_scanline', 'u_scanlineCount',
      'u_phosphor', 'u_bloom', 'u_noise', 'u_vignette',
      'u_brightness', 'u_flicker'
    ];
    for (const name of names) {
      this.uniforms[name] = gl.getUniformLocation(this.program, name);
    }
  }

  _compile(type, source) {
    const gl = this.gl;
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('CRTShader: compile error', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  _initBuffers() {
    const gl = this.gl;
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    // Full-screen quad in clip space [-1, 1]
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,   1, -1,  -1,  1,
      -1,  1,   1, -1,   1,  1,
    ]), gl.STATIC_DRAW);

    const loc = gl.getAttribLocation(this.program, 'a_position');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  }

  _initTexture() {
    const gl = this.gl;
    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  }

  /** Call once per frame with the source 2D canvas */
  render(sourceCanvas) {
    if (this.failed) return;

    const gl = this.gl;
    const cfg = this.config;

    // Upload source canvas directly as texture (no getImageData!)
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceCanvas);

    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(this.program);

    // Uniforms
    gl.uniform1f(this.uniforms.u_time, performance.now() / 1000.0);
    gl.uniform2f(this.uniforms.u_resolution, this.canvas.width, this.canvas.height);
    gl.uniform1f(this.uniforms.u_barrel, cfg.barrelDistortion);
    gl.uniform1f(this.uniforms.u_aberration, cfg.chromaticAberration);
    gl.uniform1f(this.uniforms.u_scanline, cfg.scanlineIntensity);
    gl.uniform1f(this.uniforms.u_scanlineCount, cfg.scanlineCount);
    gl.uniform1f(this.uniforms.u_phosphor, cfg.phosphorMask);
    gl.uniform1f(this.uniforms.u_bloom, cfg.bloom);
    gl.uniform1f(this.uniforms.u_noise, cfg.noise);
    gl.uniform1f(this.uniforms.u_vignette, cfg.vignette);
    gl.uniform1f(this.uniforms.u_brightness, cfg.brightness);
    gl.uniform1f(this.uniforms.u_flicker, cfg.flicker);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  resize(width, height) {
    this.canvas.width = width;
    this.canvas.height = height;
  }

  destroy() {
    const gl = this.gl;
    if (!gl) return;
    if (this.program) gl.deleteProgram(this.program);
    if (this.texture) gl.deleteTexture(this.texture);
  }
}
