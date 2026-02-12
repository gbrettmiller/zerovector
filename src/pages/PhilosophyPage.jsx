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

const { philosophy } = en;

function PhilosophyPage() {
  useEffect(() => { document.title = 'Philosophy — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page zv-info-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={philosophy.eyebrow} title={philosophy.title} subtitle={philosophy.subtitle} />

      {/* What ZV Is + What ZV Is Not — Two Column */}
      <section className="zv-section">
        <div className="zv-container">
          <div className="zv-philosophy-split">
            <div className="zv-philosophy-what-is">
              <Animate>
                <h2 className="zv-section-title">What Zero-Vector Is</h2>
              </Animate>
              {philosophy.what_it_is.map((p, i) => (
                <Animate key={i} delay={Math.min(i + 1, 3)}>
                  <p className="zv-body-text">{p}</p>
                </Animate>
              ))}
            </div>
            <div className="zv-philosophy-what-is-not">
              <Animate>
                <h3 className="zv-philosophy-sidebar-title">What It Is Not</h3>
              </Animate>
              {philosophy.what_it_is_not.map((item, i) => (
                <Animate key={i} delay={Math.min(i + 1, 4)}>
                  <div className="zv-philosophy-not-item">
                    <div className="zv-philosophy-not-claim">{item.claim}</div>
                    <div className="zv-philosophy-not-explanation">{item.explanation}</div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principle Zero + The Seven Principles */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <div className="zv-principle-zero">
              <div className="zv-principle-zero-numeral">{philosophy.principle_zero.numeral}</div>
              <h2 className="zv-principle-zero-title">{philosophy.principle_zero.title}</h2>
            </div>
          </Animate>
          <Animate delay={1}>
            <h2 className="zv-section-title" style={{ marginTop: 64 }}>The Seven Principles</h2>
          </Animate>
          <div className="zv-philosophy-principles">
            {philosophy.principles.map((p, i) => (
              <Animate key={i}>
                <div className="zv-philosophy-principle">
                  <div className="zv-philosophy-principle-numeral">{p.numeral}</div>
                  <div className="zv-philosophy-principle-content">
                    <h3 className="zv-philosophy-principle-title">{p.title}</h3>
                    <p className="zv-philosophy-principle-body">{p.body}</p>
                    <p className="zv-philosophy-principle-why">{p.why}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* The Arc — replaces Double Diamond */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{philosophy.arc.title}</h2>
            <p className="zv-section-subtitle">{philosophy.arc.intro}</p>
          </Animate>
          {philosophy.arc.paragraphs.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Why "Zero Vector" — Name Origin */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{philosophy.name_origin.title}</h2>
          </Animate>
          {philosophy.name_origin.paragraphs.map((p, i) => (
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
