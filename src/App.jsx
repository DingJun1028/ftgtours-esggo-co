import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CorporateTravel from './pages/corporate-travel';
import FamilyDay from './pages/family-day';
import EsgTeamDay from './pages/esg-team-day';
import WellbeingRetreat from './pages/wellbeing-retreat';
import ExecutiveRetreat from './pages/executive-retreat';
import EsgImpactNote from './pages/esg-impact-note';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/corporate-travel" element={<CorporateTravel />} />
            <Route path="/family-day" element={<FamilyDay />} />
            <Route path="/esg-team-day" element={<EsgTeamDay />} />
            <Route path="/wellbeing-retreat" element={<WellbeingRetreat />} />
            <Route path="/executive-retreat" element={<ExecutiveRetreat />} />
            <Route path="/esg-impact-note" element={<EsgImpactNote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
