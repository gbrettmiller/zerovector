import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { ExternalLinkIcon, ArrowIcon } from '../components/icons';
import en from '../content/en';

function Animate({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`zv-animate ${isVisible ? 'zv-visible' : ''} ${delay ? `zv-animate-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
}

const { start } = en;

function StartPage() {
  useEffect(() => { document.title = 'Get Started — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page zv-info-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={start.eyebrow} title={start.title} subtitle={start.subtitle} />

      {/* Intro */}
      <section className="zv-section">
        <div className="zv-container">
          {start.intro.map((p, i) => (
            <Animate key={i} delay={Math.min(i + 1, 2)}>
              <p className="zv-body-text">{p}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Announcement Placeholder */}
      <section className="zv-section" style={{ paddingTop: 0 }}>
        <div className="zv-container">
          <Animate>
            <div className={`zv-start-announcement ${start.announcement.placeholder ? 'zv-start-announcement-placeholder' : ''}`}>
              <div className="zv-start-announcement-label">Featured</div>
              <h3 className="zv-start-announcement-title">{start.announcement.title}</h3>
              <p className="zv-start-announcement-desc">{start.announcement.description}</p>
              {start.announcement.placeholder ? (
                <span className="zv-start-announcement-cta zv-start-announcement-cta-disabled">{start.announcement.cta}</span>
              ) : (
                <a href={start.announcement.url} target="_blank" rel="noopener noreferrer" className="zv-start-announcement-cta">
                  {start.announcement.cta} <ExternalLinkIcon size={14} />
                </a>
              )}
            </div>
          </Animate>
        </div>
      </section>

      {/* Connect */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{start.connect.title}</h2>
          </Animate>
          <div className="zv-start-connect" style={{ marginTop: 32 }}>
            {start.connect.items.map((item, i) => (
              <Animate key={i} delay={i + 1}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="zv-start-connect-card">
                  <h3 className="zv-start-connect-card-title">{item.title}</h3>
                  <p className="zv-start-connect-card-desc">{item.description}</p>
                  <span className="zv-start-connect-card-cta">{item.cta} <ExternalLinkIcon size={14} /></span>
                </a>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Two Big CTAs — Investiture + Open Vector */}
      <section className="zv-section">
        <div className="zv-container">
          <div className="zv-start-actions">
            <Animate>
              <Link to={start.actions.investiture.url} className="zv-start-action-card">
                <div className="zv-start-action-eyebrow">{start.actions.investiture.eyebrow}</div>
                <h3 className="zv-start-action-title">{start.actions.investiture.title}</h3>
                <p className="zv-start-action-desc">{start.actions.investiture.description}</p>
                <span className="zv-start-action-cta">{start.actions.investiture.cta} <ArrowIcon size={16} /></span>
              </Link>
            </Animate>
            <Animate delay={1}>
              <Link to={start.actions.openVector.url} className="zv-start-action-card">
                <div className="zv-start-action-eyebrow">{start.actions.openVector.eyebrow}</div>
                <h3 className="zv-start-action-title">{start.actions.openVector.title}</h3>
                <p className="zv-start-action-desc">{start.actions.openVector.description}</p>
                <span className="zv-start-action-cta">{start.actions.openVector.cta} <ArrowIcon size={16} /></span>
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default StartPage;
