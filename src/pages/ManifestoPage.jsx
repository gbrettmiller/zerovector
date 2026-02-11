import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import DecryptText from '../components/DecryptText';
import { ArrowIcon } from '../components/icons';
import en from '../content/en';

function Animate({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`zv-animate ${isVisible ? 'zv-visible' : ''} ${delay ? `zv-animate-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}

const { home } = en;

function ManifestoPage() {
  const [heroPhase, setHeroPhase] = useState(0); // 0=start, 1=eyebrow done, 2=title done

  useEffect(() => {
    document.title = 'Zero-Vector Design';
  }, []);

  return (
    <div className="zv-manifesto">
      <VectorField />
      <Nav />

      {/* Drifting Coordinates */}
      <div className="zv-coordinates">{home.hero.coordinates}</div>

      {/* Hero */}
      <section className="zv-section zv-hero">
        <div className="zv-container">
          <div className="zv-section-number">
            <DecryptText
              text={home.hero.pre}
              delay={200}
              blinks={2}
              blinkSpeed={130}
              speed={115}
              onComplete={() => setHeroPhase(1)}
            />
          </div>
          <h1 className="zv-hero-title">
            <DecryptText
              text={home.hero.title}
              ready={heroPhase >= 1}
              delay={100}
              blinks={3}
              blinkSpeed={160}
              speed={200}
              onComplete={() => setHeroPhase(2)}
            />
          </h1>
          <p className={`zv-hero-subtitle ${heroPhase >= 2 ? 'zv-hero-decrypt-reveal' : 'zv-hero-decrypt-hidden'}`}>
            {home.hero.subtitle}
          </p>
        </div>
      </section>

      {/* 002 — Declaration */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.declaration.number} title={home.declaration.title} />
          </Animate>
          {home.declaration.paragraphs.map((paragraph, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{paragraph}</p>
              {i === 2 && (
                <blockquote className="zv-callout">{home.declaration.callout1}</blockquote>
              )}
            </Animate>
          ))}
          <Animate>
            <blockquote className="zv-callout">{home.declaration.callout2}</blockquote>
          </Animate>
        </div>
      </section>

      {/* 003 — Timeline */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.timeline.number} title={home.timeline.title} subtitle={home.timeline.subtitle} />
          </Animate>
          <div className="zv-timeline">
            {home.timeline.entries.map((entry, i) => (
              <Animate key={i}>
                <div className="zv-timeline-entry">
                  <div className="zv-timeline-year">{entry.year}</div>
                  <div className="zv-timeline-tool">{entry.tool}</div>
                  <div className="zv-timeline-desc">{entry.description}</div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">{home.pipeline.title}</h2>
            <p className="zv-section-subtitle">{home.pipeline.header}</p>
          </Animate>
          <div className="zv-pipeline" style={{ marginTop: 48 }}>
            {home.pipeline.phases.map((phase, i) => (
              <Animate key={i}>
                <div className="zv-pipeline-phase">
                  <div className="zv-pipeline-label">{phase.name}</div>
                  <div>
                    <div className="zv-pipeline-tag zv-pipeline-tag-old">Before</div>
                    <div className="zv-pipeline-old">{phase.old}</div>
                  </div>
                  <div>
                    <div className="zv-pipeline-tag zv-pipeline-tag-new">Zero-Vector</div>
                    <div className="zv-pipeline-new">{phase.new}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 004 — The Seven Principles */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.principles.number} title={home.principles.title} />
          </Animate>
          <div className="zv-seven-principles">
            {home.principles.items.map((p, i) => (
              <Animate key={i}>
                <div className="zv-seven-principle">
                  <div className="zv-seven-principle-numeral">{p.numeral}</div>
                  <div className="zv-seven-principle-content">
                    <h3 className="zv-seven-principle-title">{p.title}</h3>
                    <p className="zv-seven-principle-body">{p.body}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 005 — What This Is Not. What This Is. */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.contrasts.number} title={home.contrasts.title} />
          </Animate>
          <div className="zv-contrasts">
            {home.contrasts.pairs.map((pair, i) => (
              <Animate key={i}>
                <div className="zv-contrast-pair">
                  <div className="zv-contrast-side zv-contrast-not">
                    <div className="zv-contrast-label">Is not</div>
                    <h3 className="zv-contrast-title">{pair.isNot.title}</h3>
                    <p className="zv-contrast-body">{pair.isNot.body}</p>
                  </div>
                  <div className="zv-contrast-side zv-contrast-is">
                    <div className="zv-contrast-label">Is</div>
                    <h3 className="zv-contrast-title">{pair.is.title}</h3>
                    <p className="zv-contrast-body">{pair.is.body}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 006 — Mark III */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.markiii.number} title={home.markiii.title} />
          </Animate>
          {home.markiii.paragraphs.map((paragraph, i) => (
            <Animate key={i} delay={Math.min(i + 1, 4)}>
              <p className="zv-body-text">{paragraph}</p>
            </Animate>
          ))}
          <Animate>
            <div className="zv-suits">
              {home.markiii.suits.map((suit, i) => (
                <div key={i} className="zv-suit">
                  <div className="zv-suit-mark">Mark {suit.mark}</div>
                  <div className="zv-suit-label">{suit.label}</div>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* 007 — Closing */}
      <section className="zv-section zv-closing">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.closing.number} title={home.closing.headline} />
          </Animate>
          <Animate delay={1}>
            <p className="zv-body-text zv-closing-permission">{home.closing.permission}</p>
          </Animate>
          <Animate delay={2}>
            <p className="zv-body-text">{home.closing.body}</p>
          </Animate>
        </div>
      </section>

      {/* Two Paths CTA */}
      <section className="zv-section">
        <div className="zv-container">
          <div className="zv-paths">
            <Animate>
              <Link to={home.paths.builders.link} className="zv-path-card">
                <div className="zv-path-eyebrow">{home.paths.builders.eyebrow}</div>
                <div className="zv-path-title">{home.paths.builders.title}</div>
                <p className="zv-path-desc">{home.paths.builders.description}</p>
                <span className="zv-path-cta">{home.paths.builders.cta} <ArrowIcon size={16} /></span>
              </Link>
            </Animate>
            <Animate delay={1}>
              <Link to={home.paths.leaders.link} className="zv-path-card">
                <div className="zv-path-eyebrow">{home.paths.leaders.eyebrow}</div>
                <div className="zv-path-title">{home.paths.leaders.title}</div>
                <p className="zv-path-desc">{home.paths.leaders.description}</p>
                <span className="zv-path-cta">{home.paths.leaders.cta} <ArrowIcon size={16} /></span>
              </Link>
            </Animate>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ManifestoPage;
