import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const navLinks = [
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/approach', label: 'Approach' },
  { to: '/for-builders', label: 'For Builders' },
  { to: '/for-leaders', label: 'For Leaders' },
  { to: '/media', label: 'Media' },
  { to: '/origin', label: 'The Origin' },
  { to: '/open', label: 'Open Vector' },
  { to: '/ask', label: 'Ask' },
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
          <Link
            to="/start"
            className={`zv-nav-start ${pathname === '/start' ? 'zv-nav-start-active' : ''}`}
          >
            Start
          </Link>
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
          <Link
            to="/start"
            className={`zv-nav-mobile-link zv-nav-start-mobile ${pathname === '/start' ? 'zv-nav-link-active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Start
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
