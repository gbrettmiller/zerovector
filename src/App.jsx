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
import InvestiturePage from './pages/InvestiturePage';
import AskPage from './pages/AskPage';
import QuizPage from './pages/QuizPage';
import StartPage from './pages/StartPage';

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/open" element={<OpenVectorPage />} />
      <Route path="/investiture" element={<InvestiturePage />} />
    </Routes>
  );
}

export default App;
