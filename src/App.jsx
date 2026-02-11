import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import ManifestoPage from './pages/ManifestoPage';
import PhilosophyPage from './pages/PhilosophyPage';
import PipelinePage from './pages/PipelinePage';
import BuildersPage from './pages/BuildersPage';
import LeadersPage from './pages/LeadersPage';
import ReadingPage from './pages/ReadingPage';
import OriginPage from './pages/OriginPage';
import OpenVectorPage from './pages/OpenVectorPage';
import AskPage from './pages/AskPage';
import QuizPage from './pages/QuizPage';

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<ManifestoPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/pipeline" element={<PipelinePage />} />
        <Route path="/for-builders" element={<BuildersPage />} />
        <Route path="/for-leaders" element={<LeadersPage />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/origin" element={<OriginPage />} />
        <Route path="/ask" element={<AskPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        {/* Redirects from old routes */}
        <Route path="/about" element={<Navigate to="/philosophy" replace />} />
        <Route path="/join" element={<Navigate to="/" replace />} />
        <Route path="/resources" element={<Navigate to="/reading" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/open" element={<OpenVectorPage />} />
    </Routes>
  );
}

export default App;
