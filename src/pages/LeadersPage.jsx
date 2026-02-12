import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import Animate from '../components/Animate';
import useSEO from '../hooks/useSEO';
import en from '../content/en';

const { leaders } = en;

function LeadersPage() {
  useSEO({
    title: 'For Leaders',
    description: 'How Zero-Vector Design helps executives and design leaders transform their organizations. Engagement models, the CZVO role, and strategic AI adoption.',
    path: '/leaders',
  });

  return (
    <div className="zv-page zv-info-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={leaders.eyebrow} title={leaders.title} subtitle={leaders.subtitle} />

      {/* Intro */}
      <section className="zv-section">
        <div className="zv-container">
          {leaders.intro.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* CZVO */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{leaders.czvo.title}</h2>
          </Animate>
          {leaders.czvo.description.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{leaders.models.title}</h2>
          </Animate>
          <div className="zv-models">
            {leaders.models.options.map((model, i) => (
              <Animate key={i}>
                <div className="zv-model-card">
                  <div className="zv-model-name">{model.name}</div>
                  <div className="zv-model-desc">{model.description}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{leaders.contact.title}</h2>
            <p className="zv-body-text" style={{ marginBottom: 32 }}>{leaders.contact.description}</p>
            <a href={leaders.contact.link} target="_blank" rel="noopener noreferrer" className="zv-cta">
              {leaders.contact.cta}
            </a>
          </Animate>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default LeadersPage;
