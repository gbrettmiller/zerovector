import { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ExternalLinkIcon } from '../components/icons';
import en from '../content/en';

function Animate({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`zv-animate ${isVisible ? 'zv-visible' : ''} ${delay ? `zv-animate-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

const { builders } = en;

function BuildersPage() {
  useEffect(() => { document.title = 'For Builders — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={builders.eyebrow} title={builders.title} subtitle={builders.subtitle} />

      {/* Intro */}
      <section className="zv-section">
        <div className="zv-container">
          {builders.intro.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{builders.getting_started.title}</h2>
          </Animate>
          <div className="zv-principles">
            {builders.getting_started.steps.map((step, i) => (
              <Animate key={i}>
                <div className="zv-principle">
                  <div className="zv-principle-number">{step.number}</div>
                  <div className="zv-principle-content">
                    <div className="zv-principle-title">{step.title}</div>
                    <div className="zv-principle-desc">{step.description}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Boilerplate */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <div className="zv-coming-soon-card">
              <h2 className="zv-section-title">{builders.boilerplate.title}</h2>
              <p className="zv-body-text">{builders.boilerplate.description}</p>
              <div className="zv-coming-soon-badge">{builders.boilerplate.status}</div>
            </div>
          </Animate>
        </div>
      </section>

      {/* Coaching */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{builders.coaching.title}</h2>
            <p className="zv-body-text" style={{ marginBottom: 32 }}>{builders.coaching.description}</p>
            <a href={builders.coaching.link} className="zv-cta zv-cta-outline">{builders.coaching.cta}</a>
          </Animate>
        </div>
      </section>

      {/* Resources */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{builders.resources.title}</h2>
          </Animate>
          <div className="zv-resource-list">
            {builders.resources.items.map((item, i) => (
              <Animate key={i}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="zv-resource-card">
                  <div className="zv-resource-card-type">{item.type}</div>
                  <div className="zv-resource-card-title">{item.title} <ExternalLinkIcon size={14} /></div>
                </a>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BuildersPage;
