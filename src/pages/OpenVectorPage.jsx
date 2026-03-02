import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import '../styles/site.css';
import en from '../content/en';

const { open, learn } = en;

function OpenVectorPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useSEO({
    title: 'The Open Vector',
    description: 'A free, open curriculum for learning to build with AI. Six levels from orientation to auteur. Start now.',
    path: '/open',
    ogImage: 'https://zerovector.design/og/open-vector.png',
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
          <div className="ov-nav-links">
            <Link to="/open/learn" className="ov-nav-link">Learn</Link>
            <Link to="/investiture" className="ov-nav-link">Investiture</Link>
          </div>
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
          <div className="ov-launch-banner ov-launch-banner--live">
            <div className="ov-launch-beacon ov-launch-beacon--live" aria-hidden="true" />
            <div className="ov-launch-content">
              <div className="ov-launch-label">Now Live</div>
              <div className="ov-launch-date">The Open Vector is here. Free. Always free.</div>
              <div className="ov-launch-cta">
                <Link to="/open/learn" className="ov-btn ov-btn-primary">Start Learning</Link>
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
            {open.curriculum.levels.map((level, i) => {
              const learnLevel = learn.levels.find(l => l.number === level.number);
              const levelPath = learnLevel ? `/open/learn/curriculum/${learnLevel.slug}` : '/open/learn';
              return (
                <Animate key={i}>
                  <Link to={levelPath} className="ov-level">
                    <div className="ov-level-left">
                      <div className="ov-level-number">{level.number}</div>
                      <div className={`ov-level-status ${level.status === 'available' ? 'ov-level-status--available' : ''}`}>
                        {level.status === 'available' ? 'Available' : 'Coming soon'}
                      </div>
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
                  </Link>
                </Animate>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recently Added */}
      {(() => {
        const recentLessons = learn.levels.flatMap(level =>
          level.lessons
            .filter(l => l.badge)
            .map(l => ({
              title: l.title,
              badge: l.badge,
              levelTitle: `${level.number} ${level.title}`,
              path: `/open/learn/curriculum/${level.slug}/${l.slug}`,
              updatedAt: l.updatedAt,
            }))
        ).slice(0, 8);
        if (recentLessons.length === 0) return null;
        return (
          <section className="ov-section">
            <div className="ov-container">
              <hr className="ov-rule" />
              <Animate>
                <div className="ov-label">Recently Added</div>
              </Animate>
              <div className="ov-recently-updated">
                {recentLessons.map((item, i) => (
                  <Animate key={i}>
                    <Link to={item.path} className="ov-recent-item">
                      <span className={`ov-recent-badge ov-recent-badge--${item.badge}`}>
                        {item.badge === 'new' ? 'New' : 'Updated'}
                      </span>
                      <span className="ov-recent-title">{item.title}</span>
                      <span className="ov-recent-level">{item.levelTitle}</span>
                    </Link>
                  </Animate>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

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

      {/* Investiture */}
      <section className="ov-section">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <div className="ov-label">Build</div>
            <Link to="/investiture" className="ov-investiture-card">
              <div className="ov-investiture-badge">Free &amp; Open Source</div>
              <h3 className="ov-investiture-title">Investiture</h3>
              <p className="ov-investiture-desc">
                Ready to build? Get the Zero-Vector starter scaffold. Architecture that teaches
                your AI to write clean code. Clone it. Open Claude Code. Start shipping.
              </p>
              <span className="ov-investiture-cta">Get the Scaffold &rarr;</span>
            </Link>
          </Animate>
        </div>
      </section>

      {/* Support */}
      <section className="ov-section ov-support-section">
        <div className="ov-container">
          <hr className="ov-rule" />
          <Animate>
            <div className="ov-label">Support</div>
            <h2 className="ov-support-title">Keep the Open Vector Free</h2>
            <p className="ov-body">
              The Open Vector is free. Always. No paywalls, no premium tiers, no upsells.
              But hosting, AI, and infrastructure cost real money. If this project has
              helped you, consider chipping in to keep it going.
            </p>
          </Animate>
          <Animate delay={1}>
            <div className="ov-support-links">
              <a
                href="https://ko-fi.com/erikaflowers"
                target="_blank"
                rel="noopener noreferrer"
                className="ov-btn ov-btn-primary"
              >
                Support on Ko-fi
              </a>
              <a
                href="https://github.com/sponsors/erikaflowers"
                target="_blank"
                rel="noopener noreferrer"
                className="ov-btn ov-btn-outline"
              >
                Sponsor on GitHub
              </a>
            </div>
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
              <Link to="/open/learn" className="ov-btn ov-btn-primary">{open.cta.primaryCta}</Link>
              <a href="https://github.com/erikaflowers/zerovector" className="ov-btn ov-btn-outline">{open.cta.secondaryCta}</a>
              <Link to="/" className="ov-btn ov-btn-outline">{open.cta.backCta}</Link>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

export default OpenVectorPage;
