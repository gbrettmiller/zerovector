import { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import en from '../content/en';

function Animate({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`zv-animate ${isVisible ? 'zv-visible' : ''} ${delay ? `zv-animate-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

const { approach } = en;

function PipelinePage() {
  useEffect(() => { document.title = 'Approach — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page zv-info-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={approach.eyebrow} title={approach.title} subtitle={approach.subtitle} />

      {/* Intro */}
      <section className="zv-section">
        <div className="zv-container">
          {approach.intro.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 2)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Phase Deep Dives — Two Column */}
      {approach.phases.map((phase) => (
        <section key={phase.id} className="zv-section zv-approach-phase">
          <div className="zv-container">
            <Animate>
              <div className="zv-approach-phase-header">
                <span className="zv-approach-phase-number">{phase.number}</span>
                <h2 className="zv-section-title">{phase.name}</h2>
              </div>
            </Animate>
            <div className="zv-approach-phase-columns">
              <div className="zv-approach-phase-agnostic">
                <Animate>
                  <div className="zv-approach-column-label">What This Is</div>
                </Animate>
                {phase.agnostic.map((p, i) => (
                  <Animate key={i} delay={Math.min(i + 1, 2)}>
                    <p className="zv-body-text">{p}</p>
                  </Animate>
                ))}
              </div>
              <div className="zv-approach-phase-zv">
                <Animate>
                  <div className="zv-approach-column-label">The Zero-Vector Way</div>
                </Animate>
                {phase.zeroVector.map((p, i) => (
                  <Animate key={i} delay={Math.min(i + 1, 2)}>
                    <p className="zv-body-text">{p}</p>
                  </Animate>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default PipelinePage;
