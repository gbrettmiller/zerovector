import { Link, useLocation } from 'react-router-dom';

function LearnBreadcrumbs({ levelSlug, lessonSlug, levels, guideSlug, approach }) {
  const { pathname } = useLocation();
  const isCurriculum = pathname.includes('/curriculum');
  const isResources = pathname.includes('/resources');
  const isChat = pathname.includes('/chat');
  const isApproach = pathname.includes('/approach') && pathname.includes('/open/learn');

  const level = levels.find(l => l.slug === levelSlug);
  const lesson = level?.lessons.find(l => l.slug === lessonSlug);
  const guide = isApproach && guideSlug ? approach?.guides?.find(g => g.slug === guideSlug) : null;

  // Hub page — no breadcrumbs
  if (!isCurriculum && !isResources && !isChat && !isApproach) return null;

  return (
    <nav className="ovl-breadcrumbs" aria-label="Breadcrumb">
      <Link to="/open/learn" className="ovl-crumb">Open Vector</Link>
      {isCurriculum && (
        <>
          <span className="ovl-crumb-sep">/</span>
          {level ? (
            <Link to="/open/learn/curriculum" className="ovl-crumb">Curriculum</Link>
          ) : (
            <span className="ovl-crumb ovl-crumb--current">Curriculum</span>
          )}
        </>
      )}
      {isResources && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <span className="ovl-crumb ovl-crumb--current">Go Further</span>
        </>
      )}
      {isChat && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <span className="ovl-crumb ovl-crumb--current">Chat</span>
        </>
      )}
      {isApproach && (
        <>
          <span className="ovl-crumb-sep">/</span>
          {guide ? (
            <Link to="/open/learn/approach" className="ovl-crumb">Approach</Link>
          ) : (
            <span className="ovl-crumb ovl-crumb--current">Approach</span>
          )}
        </>
      )}
      {guide && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <span className="ovl-crumb ovl-crumb--current">{guide.title}</span>
        </>
      )}
      {level && (
        <>
          <span className="ovl-crumb-sep">/</span>
          {lesson ? (
            <Link to={`/open/learn/curriculum/${level.slug}`} className="ovl-crumb">
              {level.number} {level.title}
            </Link>
          ) : (
            <span className="ovl-crumb ovl-crumb--current">
              {level.number} {level.title}
            </span>
          )}
        </>
      )}
      {lesson && (
        <>
          <span className="ovl-crumb-sep">/</span>
          <span className="ovl-crumb ovl-crumb--current">{lesson.title}</span>
        </>
      )}
    </nav>
  );
}

export default LearnBreadcrumbs;
