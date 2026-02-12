import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NotifyForm from '../components/NotifyForm';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import '../styles/site.css';
import en from '../content/en';

const { open } = en;

function OpenVectorPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useSEO({
    title: 'The Open Vector',
    description: 'A free, open curriculum for learning to build with AI. Five levels from apprentice to auteur. Launching March 2nd. Sign up to get notified.',
    path: '/open',
  });

  useEffect(() => {
    document.body.style.background = '#ffffff';
    document.body.style.color = '#0a0a0a';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="ov-page">
      {/* Custom Nav */}
      <nav className="ov-nav">
        <div className="ov-nav-inner">
          <Link to="/" className="ov-nav-brand">{open.nav.brand}</Link>
          <div className="ov-nav-badge">{open.nav.badge}</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="ov-section ov-hero">
        <div className="ov-container">
          <div className="ov-label">{open.hero.label}</div>
          <h1 className="ov-hero-title">
            <span className="ov-hero-light">{open.hero.title[0]}</span>
            <span className="ov-hero-heavy">{open.hero.title[1]}</span>
            <span className="ov-hero-heavy">{open.hero.title[2]}</span>
          </h1>
          <div className="ov-launch-banner">
            <div className="ov-launch-beacon" aria-hidden="true" />
            <div className="ov-launch-content">
              <div className="ov-launch-label">Coming Soon</div>
              <div className="ov-launch-date">The Open Vector launches March 2nd</div>
              <div className="ov-launch-notify">
                <NotifyForm variant="dark" tag="zerovector" />
              </div>
            </div>
          </div>

          <p className="ov-body">
            {open.hero.body1} <strong>{open.hero.body1Bold}</strong>
          </p>
          <p className="ov-body ov-body-bold">{open.hero.body2}</p>
          <blockquote className="ov-declaration">{open.hero.declaration}</blockquote>
          <div className="ov-free-indicator">
            <span className="ov-free-dot" />
            <span className="ov-free-text">{open.hero.freeIndicator}</span>
          </div>
        </div>
      </section>

      {/* Pledge */}
      <section className="ov-section">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <div className="ov-label">{open.pledge.label}</div>
          </Animate>
          <div className="ov-pledge">
            {open.pledge.items.map((item, i) => (
              <Animate key={i}>
                <div className="ov-pledge-item">
                  <div className="ov-pledge-icon">&sect;</div>
                  <p className="ov-body">
                    <strong>{item.lead}</strong> {item.body}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="ov-section">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <div className="ov-label">{open.curriculum.label}</div>
            <p className="ov-body ov-muted">{open.curriculum.intro}</p>
          </Animate>
          <div className="ov-curriculum">
            {open.curriculum.levels.map((level, i) => (
              <Animate key={i}>
                <div className="ov-level">
                  <div className="ov-level-left">
                    <div className="ov-level-number">{level.number}</div>
                    <div className="ov-level-status">Coming soon</div>
                  </div>
                  <div className="ov-level-right">
                    <h3 className="ov-level-title">{level.title}</h3>
                    <div className="ov-level-subtitle">{level.subtitle}</div>
                    <p className="ov-level-desc">{level.desc}</p>
                    <div className="ov-level-topics">
                      {level.topics.map((topic, j) => (
                        <span key={j} className="ov-topic">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Contrast */}
      <section className="ov-section">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <div className="ov-label">{open.contrast.label}</div>
          </Animate>
          <Animate>
            <div className="ov-contrast-table">
              <div className="ov-contrast-col ov-contrast-them">
                <div className="ov-contrast-col-label">{open.contrast.them.label}</div>
                {open.contrast.them.lines.map((line, i) => (
                  <div key={i} className="ov-contrast-line">{line}</div>
                ))}
              </div>
              <div className="ov-contrast-col ov-contrast-us">
                <div className="ov-contrast-col-label">{open.contrast.us.label}</div>
                {open.contrast.us.lines.map((line, i) => (
                  <div key={i} className="ov-contrast-line">{line}</div>
                ))}
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Saint-Exupéry */}
      <section className="ov-section ov-exupery">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <blockquote className="ov-quote">{open.exupery.quote}</blockquote>
            <cite className="ov-cite">{open.exupery.cite}</cite>
          </Animate>
          <Animate delay={1}>
            <p className="ov-punch">{open.exupery.punch}</p>
          </Animate>
          <Animate delay={2}>
            <p className="ov-close">{open.exupery.close}</p>
          </Animate>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section ov-cta-section">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <h2 className="ov-cta-title">{open.cta.title}</h2>
            <p className="ov-body">{open.cta.body}</p>
          </Animate>
          <Animate delay={1}>
            <div className="ov-cta-buttons">
              <button className="ov-btn ov-btn-primary">{open.cta.primaryCta}</button>
              <button className="ov-btn ov-btn-outline">{open.cta.secondaryCta}</button>
              <Link to="/" className="ov-btn ov-btn-outline">{open.cta.backCta}</Link>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

export default OpenVectorPage;
