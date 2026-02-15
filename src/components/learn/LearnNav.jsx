import { Link, useLocation } from 'react-router-dom';
import { SignInButton } from './SignInPrompt';
import en from '../../content/en';

const { learn } = en;

function LearnNav({ sidebarOpen, onToggle }) {
  const { pathname } = useLocation();
  const isApproach = pathname.includes('/approach') && pathname.includes('/open/learn');
  const isCurriculum = (pathname.includes('/curriculum') || pathname === '/open/learn') && !isApproach;
  const isResources = pathname.includes('/resources');
  const isChat = pathname.includes('/chat');

  return (
    <nav className="ovl-nav">
      <div className="ovl-nav-inner">
        <button
          className="ovl-nav-toggle"
          onClick={onToggle}
          aria-label={sidebarOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={sidebarOpen}
        >
          <span className={`ovl-hamburger ${sidebarOpen ? 'ovl-hamburger--open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
        <Link to="/open/learn" className="ovl-nav-brand">{learn.nav.brand}</Link>
        <div className="ovl-nav-badge">{learn.nav.badge}</div>
        <div className="ovl-nav-primary">
          <Link
            to="/open/learn/curriculum"
            className={`ovl-nav-tab ${isCurriculum ? 'ovl-nav-tab--active' : ''}`}
          >
            Curriculum
          </Link>
          <Link
            to="/open/learn/approach"
            className={`ovl-nav-tab ${isApproach ? 'ovl-nav-tab--active' : ''}`}
          >
            Approach
          </Link>
          <Link
            to="/open/learn/resources"
            className={`ovl-nav-tab ${isResources ? 'ovl-nav-tab--active' : ''}`}
          >
            Go Further
          </Link>
          <Link
            to="/open/learn/chat"
            className={`ovl-nav-tab ${isChat ? 'ovl-nav-tab--active' : ''}`}
          >
            Chat
          </Link>
        </div>
        <div className="ovl-nav-right">
          <Link to="/open" className="ovl-nav-back">{learn.nav.backLabel}</Link>
          <SignInButton />
        </div>
      </div>
    </nav>
  );
}

export default LearnNav;
