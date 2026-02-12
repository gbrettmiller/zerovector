import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import VectorField from '../components/VectorField';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeader';
import DecryptText from '../components/DecryptText';
import { ArrowIcon } from '../components/icons';
import BootSequence from '../components/BootSequence';
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

function ChevronIcon({ size = 20, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrincipleCard({ principle, open, onToggle }) {
  return (
    <div className={`zv-principle-card ${open ? 'zv-principle-card--open' : ''}`}>
      <div className="zv-principle-card-row">
        <div className="zv-principle-card-numeral">{principle.numeral}</div>
        <div className="zv-principle-card-content">
          <div className="zv-principle-card-header">
            <h3>
              <button
                className="zv-principle-card-toggle"
                onClick={onToggle}
                aria-expanded={open}
              >
                <span className="zv-principle-card-title">{principle.title}</span>
                <ChevronIcon
                  size={20}
                  className={`zv-principle-card-chevron ${open ? 'zv-principle-card-chevron--open' : ''}`}
                />
              </button>
            </h3>
            <PrincipleShare title={principle.title} body={principle.body} />
          </div>
          <p className="zv-principle-card-body">{principle.body}</p>
        </div>
      </div>
      {principle.detail && (
        <div className={`zv-principle-card-detail ${open ? 'zv-principle-card-detail--open' : ''}`}>
          <div className="zv-principle-card-detail-inner">
            <div className="zv-principle-card-detail-content">
              {principle.detail.text.map((paragraph, i) => (
                <p key={i} className="zv-principle-card-detail-text">{paragraph}</p>
              ))}
              {principle.detail.links?.length > 0 && (
                <div className="zv-principle-card-detail-links">
                  {principle.detail.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <ArrowIcon size={12} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function PrincipleShare({ title, body }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const fullText = `"${title}"\n\n${body}\n\n— Zero-Vector Design\nzerovector.design`;

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setOpen(false);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  const shareX = () => {
    const text = encodeURIComponent(`"${title}"\n\n— Zero-Vector Design\nzerovector.design`);
    window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
    setOpen(false);
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://zerovector.design')}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="zv-principle-share" ref={ref}>
      <button
        className={`zv-principle-share-trigger ${copied ? 'zv-principle-share-copied' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Share this principle"
      >
        {copied ? 'Copied' : 'Share'}
      </button>
      {open && (
        <div className="zv-principle-share-menu">
          <button onClick={copyText}>Copy text</button>
          <button onClick={shareX}>Post to X</button>
          <button onClick={shareLinkedIn}>Share on LinkedIn</button>
        </div>
      )}
    </div>
  );
}

const { home } = en;

function ManifestoPage() {
  const [booted, setBooted] = useState(() => {
    try { return !!sessionStorage.getItem('zv-booted'); } catch { return false; }
  });
  const [heroPhase, setHeroPhase] = useState(0); // 0=start, 1=eyebrow done, 2=title done
  const [openPrinciples, setOpenPrinciples] = useState(new Set());
  const allPrinciplesOpen = openPrinciples.size === home.principles.items.length;

  const toggleAllPrinciples = () => {
    if (allPrinciplesOpen) {
      setOpenPrinciples(new Set());
    } else {
      setOpenPrinciples(new Set(home.principles.items.map((_, i) => i)));
    }
  };

  const togglePrinciple = (index) => {
    setOpenPrinciples(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  useEffect(() => {
    document.title = 'Zero-Vector Design';
  }, []);

  return (
    <div className="zv-manifesto">
      <BootSequence onComplete={() => setBooted(true)} />
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
              ready={booted}
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
      <section className="zv-section zv-section--declaration">
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
      <section className="zv-section zv-section--timeline">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.timeline.number} title={home.timeline.title} subtitle={home.timeline.subtitle} />
          </Animate>
          <div className="zv-timeline-layout">
            <div className="zv-timeline-narrative">
              {home.timeline.narrative.map((paragraph, i) => (
                <Animate key={i} delay={Math.min(i + 1, 3)}>
                  <p className="zv-body-text">{paragraph}</p>
                </Animate>
              ))}
            </div>
            <div className="zv-timeline">
              {home.timeline.entries.map((entry, i) => (
                <Animate key={i}>
                  <div className="zv-timeline-entry">
                    <div className="zv-timeline-year">{entry.year}</div>
                    <div className="zv-timeline-milestone">{entry.milestone}</div>
                    <div className="zv-timeline-desc">{entry.description}</div>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 004 — Pipeline */}
      <section className="zv-section zv-section--pipeline">
        <div className="zv-container">
          <Animate>
            <SectionHeader number={home.pipeline.number} title={home.pipeline.title} subtitle={home.pipeline.header} />
          </Animate>
          {home.pipeline.intro.map((paragraph, i) => (
            <Animate key={i} delay={Math.min(i + 1, 2)}>
              <p className="zv-body-text">{paragraph}</p>
            </Animate>
          ))}
          <div className="zv-pipeline" style={{ marginTop: 48 }}>
            {home.pipeline.phases.map((phase, i) => (
              <Animate key={i}>
                <div className="zv-pipeline-phase">
                  <div className="zv-pipeline-label">{phase.name}</div>
                  <div className="zv-pipeline-card zv-pipeline-card-old">
                    <div className="zv-pipeline-tag zv-pipeline-tag-old">Before</div>
                    <div className="zv-pipeline-old">{phase.old}</div>
                  </div>
                  <div className="zv-pipeline-card zv-pipeline-card-new">
                    <div className="zv-pipeline-tag zv-pipeline-tag-new">Zero-Vector</div>
                    <div className="zv-pipeline-new">{phase.new}</div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* 005 — The Seven Principles */}
      <section className="zv-section zv-section--principles">
        <div className="zv-container">
          <Animate>
            <div className="zv-principles-header">
              <SectionHeader number={home.principles.number} title={home.principles.title} />
              <button
                className="zv-principles-expand-toggle"
                onClick={toggleAllPrinciples}
              >
                {allPrinciplesOpen ? 'Collapse all' : 'Expand all'}
              </button>
            </div>
          </Animate>
          <Animate delay={1}>
            <p className="zv-body-text zv-principles-intro">{home.principles.intro}</p>
          </Animate>
          <div className="zv-principles-grid">
            {home.principles.items.map((p, i) => (
              <Animate key={i}>
                <PrincipleCard
                  principle={p}
                  open={openPrinciples.has(i)}
                  onToggle={() => togglePrinciple(i)}
                />
              </Animate>
            ))}
          </div>
          <Animate>
            <div className="zv-principle-zero-home">
              <div className="zv-principle-zero-home-numeral">PRINCIPLE ZERO</div>
              <div className="zv-principle-zero-home-text">{home.principles.principle_zero}</div>
            </div>
          </Animate>
        </div>
      </section>

      {/* 006 — What This Is Not. What This Is. */}
      <section className="zv-section zv-section--contrasts">
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

      {/* 007 — Set Coordinates */}
      <section className="zv-section zv-section--closing zv-closing">
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
          <Animate delay={3}>
            <div className="zv-paths zv-closing-paths">
              <Link to={home.closing.paths.builders.link} className="zv-path-card">
                <div className="zv-path-eyebrow">{home.closing.paths.builders.eyebrow}</div>
                <div className="zv-path-title">{home.closing.paths.builders.title}</div>
                <p className="zv-path-desc">{home.closing.paths.builders.description}</p>
                <span className="zv-path-cta">{home.closing.paths.builders.cta} <ArrowIcon size={16} /></span>
              </Link>
              <Link to={home.closing.paths.leaders.link} className="zv-path-card">
                <div className="zv-path-eyebrow">{home.closing.paths.leaders.eyebrow}</div>
                <div className="zv-path-title">{home.closing.paths.leaders.title}</div>
                <p className="zv-path-desc">{home.closing.paths.leaders.description}</p>
                <span className="zv-path-cta">{home.closing.paths.leaders.cta} <ArrowIcon size={16} /></span>
              </Link>
            </div>
          </Animate>
          <Animate delay={4}>
            <div className="zv-closing-substack">
              <p className="zv-closing-substack-text">{home.closing.substack.text}</p>
              <a href={home.closing.substack.url} target="_blank" rel="noopener noreferrer" className="zv-cta">
                {home.closing.substack.cta} <ArrowIcon size={14} />
              </a>
            </div>
          </Animate>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ManifestoPage;
