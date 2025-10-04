import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CandidateDashboard from './pages/CandidateDashboard';
import RecruiterDashboard from './pages/RecruiterDashboard';
import JobSearch from './pages/JobSearch';
import JobDetails from './pages/JobDetails';
import ProfileSetup from './pages/ProfileSetup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/jobs" element={<JobSearch />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/profile/setup" element={<ProfileSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
