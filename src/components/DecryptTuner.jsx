import { useState } from 'react';

const params = [
  { group: 'Eyebrow', keys: [
    { key: 'eyebrowDelay', label: 'Delay', min: 0, max: 1000, step: 25 },
    { key: 'eyebrowSpeed', label: 'Speed', min: 10, max: 200, step: 5 },
    { key: 'eyebrowBlinks', label: 'Blinks', min: 0, max: 8, step: 1 },
    { key: 'eyebrowBlinkSpeed', label: 'Blink ms', min: 40, max: 400, step: 10 },
  ]},
  { group: 'Title', keys: [
    { key: 'titleDelay', label: 'Delay', min: 0, max: 1000, step: 25 },
    { key: 'titleSpeed', label: 'Speed', min: 10, max: 200, step: 5 },
    { key: 'titleBlinks', label: 'Blinks', min: 0, max: 8, step: 1 },
    { key: 'titleBlinkSpeed', label: 'Blink ms', min: 40, max: 400, step: 10 },
  ]},
];

const panel = {
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  zIndex: 9999,
  background: 'rgba(0,0,0,0.92)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(0,255,255,0.2)',
  padding: '16px 20px',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '12px',
  color: '#ccc',
  width: '280px',
  borderRadius: '4px',
  userSelect: 'none',
};

const groupStyle = {
  marginBottom: '12px',
};

const groupLabel = {
  color: '#00ffff',
  fontSize: '11px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  marginBottom: '8px',
};

const row = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
};

const labelStyle = {
  width: '64px',
  flexShrink: 0,
  color: '#888',
};

const valStyle = {
  width: '36px',
  textAlign: 'right',
  color: '#fff',
  flexShrink: 0,
};

const sliderStyle = {
  flex: 1,
  height: '4px',
  accentColor: '#00ffff',
};

const btnStyle = {
  width: '100%',
  padding: '8px',
  background: '#00ffff',
  color: '#000',
  border: 'none',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  marginTop: '8px',
};

const minimized = {
  position: 'fixed',
  bottom: '20px',
  left: '20px',
  zIndex: 9999,
  background: 'rgba(0,0,0,0.85)',
  border: '1px solid rgba(0,255,255,0.3)',
  padding: '6px 12px',
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: '11px',
  color: '#00ffff',
  cursor: 'pointer',
  borderRadius: '4px',
};

function DecryptTuner({ values, onChange, onReplay }) {
  const [open, setOpen] = useState(true);

  if (!open) {
    return <div style={minimized} onClick={() => setOpen(true)}>TUNER</div>;
  }

  return (
    <div style={panel}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ color: '#00ffff', fontWeight: 600 }}>DECRYPT TUNER</span>
        <span style={{ cursor: 'pointer', color: '#666' }} onClick={() => setOpen(false)}>_</span>
      </div>

      {params.map(({ group, keys }) => (
        <div key={group} style={groupStyle}>
          <div style={groupLabel}>{group}</div>
          {keys.map(({ key, label, min, max, step }) => (
            <div key={key} style={row}>
              <span style={labelStyle}>{label}</span>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={values[key]}
                onChange={e => onChange({ ...values, [key]: Number(e.target.value) })}
                style={sliderStyle}
              />
              <span style={valStyle}>{values[key]}</span>
            </div>
          ))}
        </div>
      ))}

      <button style={btnStyle} onClick={onReplay}>
        REPLAY
      </button>
    </div>
  );
}

DecryptTuner.defaults = {
  eyebrowDelay: 200,
  eyebrowSpeed: 45,
  eyebrowBlinks: 2,
  eyebrowBlinkSpeed: 130,
  titleDelay: 100,
  titleSpeed: 70,
  titleBlinks: 3,
  titleBlinkSpeed: 130,
};

export default DecryptTuner;
