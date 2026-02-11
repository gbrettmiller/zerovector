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

const { reading } = en;

function ReadingPage() {
  useEffect(() => { document.title = 'Reading — Zero-Vector Design'; }, []);

  return (
    <div className="zv-page">
      <VectorField />
      <Nav />

      {/* Hero */}
      <PageHero eyebrow={reading.eyebrow} title={reading.title} subtitle={reading.subtitle} />

      {/* Articles */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">Articles</h2>
          </Animate>
          <div className="zv-resource-list">
            {reading.articles.map((item, i) => (
              <Animate key={i}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="zv-resource-card">
                  <div className="zv-resource-card-type">Substack</div>
                  <div className="zv-resource-card-title">{item.title} <ExternalLinkIcon size={14} /></div>
                  <div className="zv-resource-card-desc">{item.description}</div>
                </a>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">Recommended Reading</h2>
          </Animate>
          <div className="zv-resource-list">
            {reading.books.map((book, i) => (
              <Animate key={i}>
                <a href={book.url} target="_blank" rel="noopener noreferrer" className="zv-resource-card">
                  <div className="zv-resource-card-type">Book</div>
                  <div className="zv-resource-card-title">{book.title} <ExternalLinkIcon size={14} /></div>
                  <div className="zv-resource-card-desc">{book.author} — {book.description}</div>
                </a>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="zv-section">
        <div className="zv-container">
          <Animate>
            <h2 className="zv-section-title">Videos &amp; Talks</h2>
          </Animate>
          <div className="zv-resource-list">
            {reading.talks.map((talk, i) => (
              <Animate key={i}>
                <a href={talk.url} target="_blank" rel="noopener noreferrer" className="zv-resource-card">
                  <div className="zv-resource-card-type">{talk.type}</div>
                  <div className="zv-resource-card-title">{talk.title} <ExternalLinkIcon size={14} /></div>
                  <div className="zv-resource-card-desc">{talk.description}</div>
                </a>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ReadingPage;
