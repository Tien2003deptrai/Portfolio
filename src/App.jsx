import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home';
import About from './page/About';
import Project from './page/Project';
import Contact from './page/Contact';
import Certifications from './page/Certifications/Certifications';
import CertificationDetail from './page/Certifications/CertificationDetail';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certifications/:id" element={<CertificationDetail />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
