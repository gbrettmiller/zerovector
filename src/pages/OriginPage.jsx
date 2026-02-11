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

const { origin } = en;

function OriginPage() {
  useEffect(() => { document.title = 'The Origin — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={origin.eyebrow} title={origin.title} subtitle={origin.subtitle} />

      {/* Intro */}
      <section className="zv-section">
        <div className="zv-container">
          {origin.intro.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className={`zv-body-text ${i === 1 ? 'zv-origin-name' : ''}`}>{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* NASA */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <div className="zv-origin-nasa">
              <div className="zv-origin-nasa-header">
                <div className="zv-origin-nasa-label">{origin.nasa.label}</div>
                <div className="zv-origin-nasa-role">{origin.nasa.role}</div>
                <div className="zv-origin-nasa-team">{origin.nasa.team}</div>
              </div>
            </div>
          </Animate>
          {origin.nasa.body.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <div className="zv-credentials">
              {origin.credentials.map((cred, i) => (
                <div key={i} className="zv-credential">
                  <div className="zv-credential-label">{cred.label}</div>
                  <div className="zv-credential-value">{cred.value}</div>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{origin.why.title}</h2>
          </Animate>
          {origin.why.paragraphs.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* The Author */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{origin.author.title}</h2>
          </Animate>
          <Animate delay={1}>
            <p className="zv-body-text">{origin.author.body}</p>
          </Animate>
        </div>
      </section>

      {/* The Crew */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{origin.crew.title}</h2>
            <p className="zv-section-subtitle">{origin.crew.subtitle}</p>
          </Animate>
          <div className="zv-crew-grid" style={{ marginTop: 48 }}>
            {origin.crew.members.map((member, i) => (
              <Animate key={i}>
                <div className="zv-crew-card">
                  <div className="zv-crew-card-name">{member.name}</div>
                  <div className="zv-crew-card-role">{member.role}</div>
                  <div className="zv-crew-card-desc">{member.desc}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <p className="zv-body-text" style={{ marginBottom: 24 }}>{origin.cta.text}</p>
            <a
              href={origin.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="zv-cta zv-cta-outline"
            >
              {origin.cta.label} <ExternalLinkIcon size={16} />
            </a>
          </Animate>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OriginPage;
