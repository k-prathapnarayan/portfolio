import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnologyShowcase from './components/TechnologyShowcase';
import Capabilities from './components/Capabilities';
import Education from './components/Education';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';
import { useContentProtection } from './hooks/useContentProtection';

const SECTION_IDS = ['hero', 'about', 'skills', 'education', 'projects', 'contact'];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS, 180);
  useContentProtection();

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollProgress />
      <Navbar activeSection={activeSection} />
      
      <main style={{ flex: 1, width: '100%' }}>
        <Hero />
        <About />
        <TechnologyShowcase />
        <Capabilities />
        <Education />
        <Projects />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
