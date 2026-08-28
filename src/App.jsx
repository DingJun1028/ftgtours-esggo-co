import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import CorporateTravel from './pages/corporate-travel';
import FamilyDay from './pages/family-day';
import EsgTeamDay from './pages/esg-team-day';
import WellbeingRetreat from './pages/wellbeing-retreat';
import ExecutiveRetreat from './pages/executive-retreat';
import EsgImpactNote from './pages/esg-impact-note';
import Contact from './pages/contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
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
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
