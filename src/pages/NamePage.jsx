import { Link } from 'react-router-dom';
import DecryptText from '../components/DecryptText';
import Animate from '../components/Animate';
import ZeroVectorAnimation from '../components/ZeroVectorAnimation';
import { ArrowIcon } from '../components/icons';
import useSEO from '../hooks/useSEO';
import en from '../content/en';

const { name } = en;

function NamePage() {
  useSEO({
    title: 'Zero Vector — The Name',
    description: 'It started as a joke about vector art tools. It ended up describing a new discipline. The meaning behind the name Zero Vector.',
    path: '/name',
    ogImage: 'https://zerovector.design/og/name.png',
  });

  return (
    <div className="zv-name-page">
      {/* Hero */}
      <section className="zv-section zv-name-hero">
        <div className="zv-container">
          <div className="zv-name-hero-eyebrow">{name.eyebrow}</div>
          <h1 className="zv-name-hero-title">
            <DecryptText text={name.title} speed={80} />
          </h1>
          <p className="zv-name-hero-subtitle">{name.subtitle}</p>
        </div>
      </section>

      {/* Animation */}
      <section className="zv-section zv-name-animation-section">
        <div className="zv-container">
          <ZeroVectorAnimation stages={name.stages} />
        </div>
      </section>

      {/* Conclusion */}
      <section className="zv-section">
        <div className="zv-container">
          {name.conclusion.map((line, i) => (
            <Animate key={i} delay={i}>
              <p className="zv-body-text zv-name-conclusion-line">{line}</p>
            </Animate>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <div className="zv-name-nav-cards">
              <Link to="/philosophy" className="zv-name-nav-card">
                <div className="zv-name-nav-card-eyebrow">Read</div>
                <div className="zv-name-nav-card-title">The Philosophy</div>
                <span className="zv-name-nav-card-cta">Seven principles <ArrowIcon size={14} /></span>
              </Link>
              <Link to="/" className="zv-name-nav-card">
                <div className="zv-name-nav-card-eyebrow">Read</div>
                <div className="zv-name-nav-card-title">The Manifesto</div>
                <span className="zv-name-nav-card-cta">Back to the beginning <ArrowIcon size={14} /></span>
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}

export default NamePage;
