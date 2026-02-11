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

const { pipeline } = en;

function PipelinePage() {
  useEffect(() => { document.title = 'Pipeline — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={pipeline.eyebrow} title={pipeline.title} subtitle={pipeline.subtitle} />

      {/* Overview */}
      <section className="zv-section">
        <div className="zv-container">
          {pipeline.overview.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Phase Deep Dives */}
      {Object.entries(pipeline.phases).map(([id, phase]) => (
        <section key={id} className="zv-section zv-pipeline-deep">
          <div className="zv-container">
            <Animate>
              <h2 className="zv-section-title">{phase.title}</h2>
            </Animate>
            {phase.deep.map((p, i) => (
              <Animate key={i} delay={Math.min(i + 1, 4)}>
                <p className="zv-body-text">{p}</p>
              </Animate>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default PipelinePage;
