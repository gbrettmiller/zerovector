import { Link, useLocation } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import LessonBadge from './LessonBadge';
import NotifyForm from '../NotifyForm';
import { topicFilters } from '../../content/learn/resources';
import { approachCategories } from '../../content/learn/approach';

function LearnSidebar({ levels, activeLevelSlug, activeLessonSlug, approach, activeGuideSlug, open, onClose }) {
  const { isComplete, enabled } = useProgress();
  const { pathname } = useLocation();
  const isApproach = pathname.includes('/approach') && pathname.includes('/open/learn');
  const isResources = pathname.includes('/resources');
  const isChat = pathname.includes('/chat');
  const isContribute = pathname.includes('/contribute');
  const isFAQ = pathname.includes('/faq');
  const isChangelog = pathname.includes('/changelog');
  const isProgress = pathname.includes('/progress');
  const isGlossary = pathname.includes('/glossary');
  const isHub = pathname === '/open/learn' || pathname === '/open/learn/' || isFAQ || isChangelog || isProgress || isGlossary;

  return (
    <>
      {open && <div className="ovl-sidebar-backdrop" onClick={onClose} />}
      <aside className={`ovl-sidebar ${open ? 'ovl-sidebar--open' : ''} ${isChat ? 'ovl-sidebar--chat' : ''} ${isContribute ? 'ovl-sidebar--contribute' : ''}`}>
        <div className="ovl-sidebar-scroll">
          {isContribute ? (
            <div className="ovl-sidebar-contribute">
              <div className="ovl-sidebar-section-label">Founding Contributors</div>
              <Link to="/open/learn/contribute" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&starf;</span>
                <span>Join as a Founder</span>
              </Link>
              <div className="ovl-sidebar-section-label" style={{ marginTop: '16px' }}>Contribute</div>
              <a
                href="https://github.com/erikaflowers/zerovector"
                target="_blank"
                rel="noopener noreferrer"
                className="ovl-sidebar-hub-link"
              >
                <span className="ovl-sidebar-hub-glyph">&sect;</span>
                <span>GitHub Repo</span>
              </a>
              <a
                href="https://github.com/erikaflowers/zerovector/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="ovl-sidebar-hub-link"
              >
                <span className="ovl-sidebar-hub-glyph">&para;</span>
                <span>Open Issues</span>
              </a>
              <div className="ovl-sidebar-section-label" style={{ marginTop: '16px' }}>Support</div>
              <a
                href="https://ko-fi.com/erikaflowers"
                target="_blank"
                rel="noopener noreferrer"
                className="ovl-sidebar-hub-link"
              >
                <span className="ovl-sidebar-hub-glyph">&hearts;</span>
                <span>Ko-fi</span>
              </a>
              <a
                href="https://github.com/sponsors/erikaflowers"
                target="_blank"
                rel="noopener noreferrer"
                className="ovl-sidebar-hub-link"
              >
                <span className="ovl-sidebar-hub-glyph">&loz;</span>
                <span>GitHub Sponsors</span>
              </a>
            </div>
          ) : isChat ? (
            <div className="ovl-sidebar-chat">
              <div className="ovl-sidebar-section-label">Try Asking</div>
              <div
                className="ovl-sidebar-topic"
                style={{ cursor: 'default' }}
              >
                What is vibe coding?
              </div>
              <div
                className="ovl-sidebar-topic"
                style={{ cursor: 'default' }}
              >
                How do I structure a project?
              </div>
              <div
                className="ovl-sidebar-topic"
                style={{ cursor: 'default' }}
              >
                Explain systems thinking
              </div>
              <div
                className="ovl-sidebar-topic"
                style={{ cursor: 'default' }}
              >
                Where should I start?
              </div>
              <div
                className="ovl-sidebar-topic"
                style={{ cursor: 'default' }}
              >
                What are AI agents?
              </div>
              <div className="ovl-sidebar-section-label" style={{ marginTop: '16px' }}>About</div>
              <div className="ovl-sidebar-chat-about">
                Powered by Claude. Answers are grounded in the Open Vector curriculum.
              </div>
            </div>
          ) : isApproach ? (
            <div className="ovl-sidebar-approach">
              <Link to="/open/learn/approach" className="ovl-sidebar-home" onClick={onClose}>
                All Guides
              </Link>
              {approachCategories.map(cat => {
                const guides = (approach?.guides || []).filter(g => g.category === cat.key);
                if (guides.length === 0) return null;
                const hasActiveGuide = guides.some(g => g.slug === activeGuideSlug);
                return (
                  <div
                    key={cat.key}
                    className={`ovl-sidebar-level ${hasActiveGuide ? 'ovl-sidebar-level--active' : ''}`}
                  >
                    <div className="ovl-sidebar-level-header">
                      <span className="ovl-sidebar-level-title">{cat.label}</span>
                    </div>
                    <div className="ovl-sidebar-lessons">
                      {guides.map(guide => (
                        <Link
                          key={guide.slug}
                          to={`/open/learn/approach/${guide.slug}`}
                          className={`ovl-sidebar-lesson ${guide.slug === activeGuideSlug ? 'ovl-sidebar-lesson--active' : ''}`}
                          onClick={onClose}
                        >
                          {enabled && isComplete('approach', guide.slug) && (
                            <span className="ovl-sidebar-check">&check;</span>
                          )}
                          <span className="ovl-sidebar-lesson-label">{guide.title}</span>
                          <LessonBadge badge={guide.badge} />
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : isResources ? (
            <div className="ovl-sidebar-resources">
              <div className="ovl-sidebar-section-label">Browse by Topic</div>
              {topicFilters.filter(t => t.key !== 'all').map(topic => (
                <div key={topic.key} className="ovl-sidebar-topic">
                  {topic.label}
                </div>
              ))}
            </div>
          ) : isHub ? (
            <div className="ovl-sidebar-hub">
              <div className="ovl-sidebar-section-label">Sections</div>
              <Link to="/open/learn/curriculum" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&sect;</span>
                <span>Curriculum</span>
              </Link>
              <Link to="/open/learn/approach" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&dagger;</span>
                <span>Approach</span>
              </Link>
              <Link to="/open/learn/resources" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&para;</span>
                <span>Go Further</span>
              </Link>
              <Link to="/open/learn/chat" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&loz;</span>
                <span>Chat</span>
              </Link>
              <Link to="/open/learn/contribute" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&hearts;</span>
                <span>Contribute</span>
              </Link>
              <Link to="/open/learn/faq" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">?</span>
                <span>FAQ</span>
              </Link>
              <Link to="/open/learn/glossary" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&alpha;</span>
                <span>Glossary</span>
              </Link>
              <Link to="/open/learn/progress" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&equiv;</span>
                <span>Your Progress</span>
              </Link>
              <Link to="/open/learn/changelog" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&Delta;</span>
                <span>Changelog</span>
              </Link>
              <div className="ovl-sidebar-section-label" style={{ marginTop: '24px' }}>Build</div>
              <Link to="/investiture" className="ovl-sidebar-hub-link" onClick={onClose}>
                <span className="ovl-sidebar-hub-glyph">&diams;</span>
                <span>Investiture</span>
                <span className="ovl-sidebar-hub-badge">Scaffold</span>
              </Link>
              <div className="ovl-sidebar-section-label" style={{ marginTop: '24px' }}>Quick Stats</div>
              <div className="ovl-sidebar-hub-stat">
                <span className="ovl-sidebar-hub-stat-num">{levels.length}</span>
                <span className="ovl-sidebar-hub-stat-label">Levels</span>
              </div>
              <div className="ovl-sidebar-hub-stat">
                <span className="ovl-sidebar-hub-stat-num">{levels.reduce((sum, l) => sum + l.lessons.length, 0)}</span>
                <span className="ovl-sidebar-hub-stat-label">Lessons</span>
              </div>
              <div className="ovl-sidebar-hub-stat">
                <span className="ovl-sidebar-hub-stat-num">{approach?.guides?.length || 0}</span>
                <span className="ovl-sidebar-hub-stat-label">Guides</span>
              </div>
              <div className="ovl-sidebar-section-label" style={{ marginTop: '24px' }}>Stay Updated</div>
              <div className="ovl-sidebar-email">
                <NotifyForm variant="learn" tag="zerovector" />
              </div>
            </div>
          ) : (
            <>
              <Link to="/open/learn/curriculum" className="ovl-sidebar-home" onClick={onClose}>
                All Levels
              </Link>
              {levels.map(level => {
                const isActiveLevel = level.slug === activeLevelSlug;
                return (
                  <div
                    key={level.slug}
                    className={`ovl-sidebar-level ${isActiveLevel ? 'ovl-sidebar-level--active' : ''}`}
                  >
                    <Link
                      to={`/open/learn/curriculum/${level.slug}`}
                      className="ovl-sidebar-level-header"
                      onClick={onClose}
                    >
                      <span className="ovl-sidebar-level-number">{level.number}</span>
                      <span className="ovl-sidebar-level-title">{level.title}</span>
                    </Link>
                    {isActiveLevel && (
                      <div className="ovl-sidebar-lessons">
                        {level.lessons.map(lesson => (
                          <Link
                            key={lesson.slug}
                            to={`/open/learn/curriculum/${level.slug}/${lesson.slug}`}
                            className={`ovl-sidebar-lesson ${lesson.slug === activeLessonSlug ? 'ovl-sidebar-lesson--active' : ''}`}
                            onClick={onClose}
                          >
                            {enabled && isComplete(level.slug, lesson.slug) && (
                              <span className="ovl-sidebar-check">✓</span>
                            )}
                            <span className="ovl-sidebar-lesson-label">{lesson.title}</span>
                            <LessonBadge badge={lesson.badge} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </aside>
    </>
  );
}

export default LearnSidebar;
