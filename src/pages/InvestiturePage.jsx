import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import '../styles/site.css';
import en from '../content/en';

const { investiture: inv } = en;

function InvestiturePage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useSEO({
    title: 'Investiture',
    description: 'A decoupled, enterprise-ready application scaffold for AI-assisted development. Clone it, open Claude Code, start building. Architecture that teaches your AI to write clean code.',
    path: '/investiture',
    ogImage: 'https://zerovector.design/og/investiture.png',
  });

  useEffect(() => {
    document.body.style.background = '#0a1628';
    document.body.style.color = '#e8e0d0';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      document.body.style.minHeight = '';
    };
  }, []);

  return (
    <div className="inv-page">
      {/* Stormlight — floating spren particles */}
      <div className="inv-stormlight" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span key={i} className="inv-spren" style={{ '--spren': i }} />
        ))}
      </div>

      {/* Nav */}
      <nav className="inv-nav">
        <div className="inv-nav-inner">
          <Link to="/" className="inv-nav-back">{inv.nav.back}</Link>
          <span className="inv-nav-brand">{inv.nav.brand}</span>
          <Link to="/open/learn" className="inv-nav-link">Learn</Link>
          <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-nav-link">{inv.nav.github}</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="inv-section inv-hero">
        <div className="inv-container">
          <div className="inv-label">{inv.hero.label}</div>
          <div className="inv-badge">{inv.hero.badge}</div>
          <div className="inv-hero-glow" aria-hidden="true" />
          <h1 className="inv-hero-title">
            <span className="inv-hero-light">{inv.hero.title[0]}</span>
            <span className="inv-hero-heavy">{inv.hero.title[1]}</span>
          </h1>
          <p className="inv-subtitle">{inv.hero.subtitle}</p>
        </div>
      </section>

      {/* CTA — Start Building (inverted) */}
      <section className="inv-section" style={{ paddingTop: 0 }}>
        <div className="inv-container">
          <Animate>
            <div className="inv-cta-inverted">
              <h2 className="inv-cta-inverted-title">{inv.cta.title}</h2>
              <p className="inv-cta-inverted-body">{inv.cta.body}</p>
              <div className="inv-cta-inverted-buttons">
                <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--dark">{inv.cta.primaryCta}</a>
                <a href={inv.cta.secondaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--dark-outline">{inv.cta.secondaryCta}</a>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Ethos: What Is / Is Not */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.ethos.label}</div>
          </Animate>
          <div className="inv-two-col">
            <Animate>
              <div className="inv-card inv-card--gold">
                <h3 className="inv-card-title">{inv.ethos.whatIs.title}</h3>
                <p className="inv-card-body">{inv.ethos.whatIs.body}</p>
              </div>
            </Animate>
            <Animate delay={1}>
              <div className="inv-card inv-card--gold">
                <h3 className="inv-card-title">{inv.ethos.whatIsNot.title}</h3>
                <p className="inv-card-body">{inv.ethos.whatIsNot.body}</p>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.problem.label}</div>
          </Animate>
          <div className="inv-two-col">
            <Animate>
              <div className="inv-card inv-card--steel">
                <h3 className="inv-card-title">{inv.problem.problem.title}</h3>
                <p className="inv-card-body">{inv.problem.problem.body}</p>
              </div>
            </Animate>
            <Animate delay={1}>
              <div className="inv-card inv-card--gold">
                <h3 className="inv-card-title">{inv.problem.solution.title}</h3>
                <p className="inv-card-body">{inv.problem.solution.body}</p>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="inv-section inv-section--blueprint">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.architecture.label}</div>
            <p className="inv-intro">{inv.architecture.intro}</p>
          </Animate>
          <div className="inv-layers">
            {inv.architecture.layers.map((layer, i) => (
              <Animate key={i}>
                <div className="inv-layer">
                  <div className="inv-layer-number">{layer.number}</div>
                  <div className="inv-layer-content">
                    <h3 className="inv-layer-title">{layer.title}</h3>
                    <div className="inv-layer-path">./{layer.path}{layer.file}</div>
                    <p className="inv-layer-desc">{layer.desc}</p>
                  </div>
                </div>
                {i < inv.architecture.layers.length - 1 && (
                  <div className="inv-layer-connector" />
                )}
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.audience.label}</div>
          </Animate>
          <div className="inv-three-col">
            {inv.audience.groups.map((group, i) => (
              <Animate key={i} delay={i}>
                <div className="inv-card inv-card--gold">
                  <h3 className="inv-card-title">{group.title}</h3>
                  <p className="inv-card-body">{group.body}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">{inv.quickstart.label}</div>
            <p className="inv-intro">{inv.quickstart.intro}</p>
          </Animate>
          <Animate delay={1}>
            <div className="inv-terminal">
              <div className="inv-terminal-bar">
                <div className="inv-terminal-dots" aria-hidden="true">
                  <span /><span /><span />
                </div>
                <span className="inv-terminal-title">terminal</span>
              </div>
              <div className="inv-terminal-body">
                {inv.quickstart.commands.map((cmd, i) => (
                  <div key={i} className="inv-terminal-line">
                    <span className="inv-terminal-prompt">$</span>
                    <span className="inv-terminal-cmd">{cmd}</span>
                  </div>
                ))}
                <div className="inv-terminal-line">
                  <span className="inv-terminal-prompt">$</span>
                  <span className="inv-terminal-cursor" />
                </div>
              </div>
            </div>
          </Animate>
          <Animate delay={2}>
            <p className="inv-after">{inv.quickstart.after}</p>
          </Animate>
        </div>
      </section>

      {/* Quote */}
      <section className="inv-section inv-quote-section">
        <div className="inv-container">
          <hr className="inv-rule inv-rule--diamond" />
          <Animate>
            <blockquote className="inv-quote">{inv.quote.text}</blockquote>
            <cite className="inv-cite">{inv.quote.cite}</cite>
          </Animate>
          <Animate delay={1}>
            <p className="inv-context">{inv.quote.context}</p>
          </Animate>
        </div>
      </section>

      {/* Learn More */}
      <section className="inv-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-label">Learn More</div>
          </Animate>
          <div className="inv-two-col">
            <Animate>
              <Link to="/open/learn" className="inv-card inv-card--gold inv-card--linked">
                <h3 className="inv-card-title">The Open Vector</h3>
                <p className="inv-card-body">Free curriculum. From orientation to auteur. Learn the philosophy behind the scaffold.</p>
              </Link>
            </Animate>
            <Animate delay={1}>
              <Link to="/philosophy" className="inv-card inv-card--gold inv-card--linked">
                <h3 className="inv-card-title">The Philosophy</h3>
                <p className="inv-card-body">Seven principles for building with AI. The thinking that shapes the scaffold.</p>
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="inv-section inv-cta-section">
        <div className="inv-container">
          <hr className="inv-rule" />
          <Animate>
            <div className="inv-cta-buttons">
              <a href={inv.cta.primaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--primary">{inv.cta.primaryCta}</a>
              <a href={inv.cta.secondaryUrl} target="_blank" rel="noopener noreferrer" className="inv-btn inv-btn--outline">{inv.cta.secondaryCta}</a>
              <Link to="/" className="inv-btn inv-btn--outline">{inv.cta.backCta}</Link>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

export default InvestiturePage;
