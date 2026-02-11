import { useState } from 'react';
import DecryptText from './DecryptText';

function PageHero({ eyebrow, title, subtitle }) {
  const [titleDone, setTitleDone] = useState(false);

  return (
    <section className="zv-section zv-page-hero">
      <div className="zv-container">
        <div className="zv-section-number zv-hero-entrance">{eyebrow}</div>
        <h1 className="zv-page-title">
          <DecryptText
            text={title}
            delay={300}
            blinks={2}
            blinkSpeed={120}
            speed={55}
            onComplete={() => setTitleDone(true)}
          />
        </h1>
        <p className={`zv-hero-subtitle ${titleDone ? 'zv-hero-decrypt-reveal' : 'zv-hero-decrypt-hidden'}`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default PageHero;
