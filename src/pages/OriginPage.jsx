import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Animate from '../components/Animate';
import { ExternalLinkIcon } from '../components/icons';
import useSEO from '../hooks/useSEO';
import en from '../content/en';

const { origin } = en;

function OriginPage() {
  useSEO({
    title: 'The Origin',
    description: 'The story behind Zero-Vector Design. 31 years of UX and service design, AI experiments, and one question: what if one person could build the whole thing?',
    path: '/origin',
  });

  return (
    <div className="zv-page zv-info-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={origin.eyebrow} title={origin.title} subtitle={origin.subtitle} />

      {/* Intro — First Person */}
      <section className="zv-section">
        <div className="zv-container">
          {origin.intro.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 2)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Photo Placeholders */}
      <section className="zv-section" style={{ paddingTop: 0 }}>
        <div className="zv-container">
          <Animate>
            <div className="zv-origin-photos">
              {origin.photos.map((photo) => (
                <div key={photo.id} className="zv-origin-photo-placeholder">
                  <span className="zv-origin-photo-label">{photo.alt}</span>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* The AI Journey */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{origin.ai_journey.title}</h2>
          </Animate>
          {origin.ai_journey.paragraphs.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 3)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* The Redefinition */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{origin.redefinition.title}</h2>
          </Animate>
          {origin.redefinition.paragraphs.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 3)}>
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
