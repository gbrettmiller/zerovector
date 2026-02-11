import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SubstackIcon, LinkedInIcon } from './icons';

const navLinks = [
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/pipeline', label: 'Pipeline' },
  { to: '/for-builders', label: 'For Builders' },
  { to: '/for-leaders', label: 'For Leaders' },
  { to: '/reading', label: 'Reading' },
  { to: '/origin', label: 'The Origin' },
  { to: '/open', label: 'Open Vector' },
  { to: '/ask', label: 'Ask' },
  { to: '/quiz', label: 'Quiz' },
];

function Nav() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="zv-nav">
      <div className="zv-nav-inner">
        <Link to="/" className="zv-nav-brand">ZERO VECTOR</Link>

        {/* Desktop links */}
        <div className="zv-nav-links">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`zv-nav-link ${pathname === to ? 'zv-nav-link-active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <div className="zv-nav-divider" />
          <a
            href="https://eflowers.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="zv-nav-icon"
            aria-label="Substack"
          >
            <SubstackIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/helloeflowers/"
            target="_blank"
            rel="noopener noreferrer"
            className="zv-nav-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`zv-nav-hamburger ${menuOpen ? 'zv-nav-hamburger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="zv-nav-mobile">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`zv-nav-mobile-link ${pathname === to ? 'zv-nav-link-active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="zv-nav-mobile-social">
            <a href="https://eflowers.substack.com" target="_blank" rel="noopener noreferrer" className="zv-nav-icon" aria-label="Substack">
              <SubstackIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/helloeflowers/" target="_blank" rel="noopener noreferrer" className="zv-nav-icon" aria-label="LinkedIn">
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
