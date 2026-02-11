import { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
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

const { philosophy } = en;

function PhilosophyPage() {
  useEffect(() => { document.title = 'Philosophy — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={philosophy.eyebrow} title={philosophy.title} subtitle={philosophy.subtitle} />

      {/* What Zero-Vector Is */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">What Zero-Vector Is</h2>
          </Animate>
          {philosophy.what_it_is.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* What Zero-Vector Is Not */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">What Zero-Vector Is Not</h2>
          </Animate>
          <div className="zv-misconceptions">
            {philosophy.what_it_is_not.map((item, i) => (
              <Animate key={i}>
                <div className="zv-misconception">
                  <div className="zv-misconception-claim">{item.claim}</div>
                  <div className="zv-misconception-explanation">{item.explanation}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">Core Principles</h2>
          </Animate>
          <div className="zv-principles">
            {philosophy.principles.map((p, i) => (
              <Animate key={i}>
                <div className="zv-principle">
                  <div className="zv-principle-number">{p.number}</div>
                  <div className="zv-principle-content">
                    <div className="zv-principle-title">{p.title}</div>
                    <div className="zv-principle-desc">{p.description}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* The Double Diamond, Transformed */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">The Double Diamond, Transformed</h2>
          </Animate>
          {philosophy.diamond.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PhilosophyPage;
