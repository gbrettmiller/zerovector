import { Link, useLocation } from 'react-router-dom';
import { useProgress } from '../../contexts/ProgressContext';
import LessonBadge from './LessonBadge';
import { topicFilters } from '../../content/learn/resources';
import { approachCategories } from '../../content/learn/approach';

function LearnSidebar({ levels, activeLevelSlug, activeLessonSlug, approach, activeGuideSlug, open, onClose }) {
  const { isComplete, enabled } = useProgress();
  const { pathname } = useLocation();
  const isApproach = pathname.includes('/approach') && pathname.includes('/open/learn');
  const isResources = pathname.includes('/resources');
  const isChat = pathname.includes('/chat');

  return (
    <>
      {open && <div className="ovl-sidebar-backdrop" onClick={onClose} />}
      <aside className={`ovl-sidebar ${open ? 'ovl-sidebar--open' : ''} ${isChat ? 'ovl-sidebar--chat' : ''}`}>
        <div className="ovl-sidebar-scroll">
          {isChat ? (
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
