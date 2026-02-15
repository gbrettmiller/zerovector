import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import LearnLayout from './layouts/LearnLayout';
import ManifestoPage from './pages/ManifestoPage';
import PhilosophyPage from './pages/PhilosophyPage';
import PipelinePage from './pages/PipelinePage';
import BuildersPage from './pages/BuildersPage';
import LeadersPage from './pages/LeadersPage';
import ReadingPage from './pages/ReadingPage';
import OriginPage from './pages/OriginPage';
import OpenVectorPage from './pages/OpenVectorPage';
import InvestiturePage from './pages/InvestiturePage';
import AskPage from './pages/AskPage';
import QuizPage from './pages/QuizPage';
import StartPage from './pages/StartPage';
import NotFoundPage from './pages/NotFoundPage';
import LearnHubPage from './pages/learn/LearnHubPage';
import LearnIndexPage from './pages/learn/LearnIndexPage';
import LevelPage from './pages/learn/LevelPage';
import LessonPage from './pages/learn/LessonPage';
import LearnResourcesPage from './pages/learn/LearnResourcesPage';
import LearnChatPage from './pages/learn/LearnChatPage';
import ApproachIndexPage from './pages/learn/ApproachIndexPage';
import GuidePage from './pages/learn/GuidePage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<ManifestoPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/approach" element={<PipelinePage />} />
        <Route path="/for-builders" element={<BuildersPage />} />
        <Route path="/for-leaders" element={<LeadersPage />} />
        <Route path="/media" element={<ReadingPage />} />
        <Route path="/origin" element={<OriginPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        {/* Redirects from old routes */}
        <Route path="/about" element={<Navigate to="/philosophy" replace />} />
        <Route path="/join" element={<Navigate to="/" replace />} />
        <Route path="/pipeline" element={<Navigate to="/approach" replace />} />
        <Route path="/reading" element={<Navigate to="/media" replace />} />
        <Route path="/resources" element={<Navigate to="/media" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/open" element={<OpenVectorPage />} />
      <Route path="/open/learn" element={<LearnLayout />}>
        <Route index element={<LearnHubPage />} />
        <Route path="curriculum" element={<LearnIndexPage />} />
        <Route path="curriculum/:levelSlug" element={<LevelPage />} />
        <Route path="curriculum/:levelSlug/:lessonSlug" element={<LessonPage />} />
        <Route path="approach" element={<ApproachIndexPage />} />
        <Route path="approach/:guideSlug" element={<GuidePage />} />
        <Route path="resources" element={<LearnResourcesPage />} />
        <Route path="chat" element={<LearnChatPage />} />
      </Route>
      <Route path="/investiture" element={<InvestiturePage />} />
    </Routes>
  );
}

export default App;
