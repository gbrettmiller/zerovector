import { Link, useOutletContext } from 'react-router-dom';
import { SignInPrompt } from '../../components/learn/SignInPrompt';
import LessonBadge from '../../components/learn/LessonBadge';
import useSEO from '../../hooks/useSEO';
import { approachCategories } from '../../content/learn/approach';

function LearnHubPage() {
  const { learn } = useOutletContext();

  useSEO({
    title: 'Learn — The Open Vector',
    description: 'The Open Vector learning platform. Curriculum, resources, and everything you need to build with intention.',
    path: '/open/learn',
  });

  const totalLessons = learn.levels.reduce((sum, l) => sum + l.lessons.length, 0);
  const availableLevels = learn.levels.filter(l => l.status === 'available').length;

  const recentLessons = learn.levels.flatMap(level =>
    level.lessons
      .filter(l => l.badge)
      .map(l => ({
        title: l.title,
        badge: l.badge,
        levelTitle: `${level.number} ${level.title}`,
        path: `/open/learn/curriculum/${level.slug}/${l.slug}`,
      }))
  ).slice(0, 5);

  return (
    <div className="ovl-hub">
      <header className="ovl-hub-header">
        <h1 className="ovl-hub-title">{learn.index.title}</h1>
        <p className="ovl-hub-subtitle">{learn.index.subtitle}</p>
        <p className="ovl-hub-intro">{learn.index.intro}</p>
      </header>
      <SignInPrompt />
      <div className="ovl-hub-sections">
        <Link to="/open/learn/curriculum" className="ovl-hub-card">
          <div className="ovl-hub-card-icon">
            <span className="ovl-hub-card-glyph">&sect;</span>
          </div>
          <div className="ovl-hub-card-body">
            <h2 className="ovl-hub-card-title">Curriculum</h2>
            <p className="ovl-hub-card-desc">
              {learn.levels.length} levels, {totalLessons} lessons. From orientation to auteur.
              {availableLevels > 0 && ` ${availableLevels} levels available now.`}
            </p>
            <span className="ovl-hub-card-action">Browse levels &rarr;</span>
          </div>
        </Link>
        <Link to="/open/learn/approach" className="ovl-hub-card">
          <div className="ovl-hub-card-icon">
            <span className="ovl-hub-card-glyph">&dagger;</span>
          </div>
          <div className="ovl-hub-card-body">
            <h2 className="ovl-hub-card-title">Approach</h2>
            <p className="ovl-hub-card-desc">
              Step-by-step walkthroughs. IKEA instructions for the Zero Vector workflow.
              {learn.approach && ` ${learn.approach.guides.length} guides across ${approachCategories.length} categories.`}
            </p>
            <span className="ovl-hub-card-action">Browse guides &rarr;</span>
          </div>
        </Link>
        <Link to="/open/learn/resources" className="ovl-hub-card">
          <div className="ovl-hub-card-icon">
            <span className="ovl-hub-card-glyph">&para;</span>
          </div>
          <div className="ovl-hub-card-body">
            <h2 className="ovl-hub-card-title">Go Further</h2>
            <p className="ovl-hub-card-desc">
              Books, articles, courses, tools, and reference materials. A curated library of external resources to deepen your practice.
            </p>
            <span className="ovl-hub-card-action">Browse resources &rarr;</span>
          </div>
        </Link>
        <Link to="/open/learn/chat" className="ovl-hub-card">
          <div className="ovl-hub-card-icon">
            <span className="ovl-hub-card-glyph">&loz;</span>
          </div>
          <div className="ovl-hub-card-body">
            <h2 className="ovl-hub-card-title">Chat</h2>
            <p className="ovl-hub-card-desc">
              Ask the Open Vector. An AI learning companion powered by Claude that can answer questions about design, building, and everything in the curriculum.
            </p>
            <span className="ovl-hub-card-action">Start a conversation &rarr;</span>
          </div>
        </Link>
      </div>
      {recentLessons.length > 0 && (
        <div className="ovl-hub-recent">
          <div className="ovl-hub-recent-header">Recently Added</div>
          <div className="ovl-hub-recent-list">
            {recentLessons.map((item, i) => (
              <Link key={i} to={item.path} className="ovl-hub-recent-item">
                <LessonBadge badge={item.badge} />
                <span className="ovl-hub-recent-title">{item.title}</span>
                <span className="ovl-hub-recent-level">{item.levelTitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LearnHubPage;
