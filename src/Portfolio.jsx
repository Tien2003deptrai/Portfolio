import { useState, useEffect } from 'react';

import { projects } from './util/Project';
import { skills } from './util/Skill';
import Home from './page/Home';
import About from './page/About';
import Project from './page/Project';
import Contact from './page/Contact';
import Navbar from './components/Navbar';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-400/5 transition-colors duration-700"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-emerald-400/10 rounded-full blur-2xl transition-all duration-500 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        >
        </div>
      </div>

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="relative z-10">
        {activeSection === 'home' && (
          <Home setActiveSection={setActiveSection} />
        )}

        {activeSection === 'about' && (
          <About skills={skills} />
        )}

        {activeSection === 'projects' && (
          <Project projects={projects} />
        )}

        {activeSection === 'contact' && (
          <Contact />
        )}
      </main>
    </div>
  );
};

export default Portfolio;
