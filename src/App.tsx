import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PrincipalMessage from './components/PrincipalMessage';
import NewsSection from './components/NewsSection';
import Facilities from './components/Facilities';
import Extracurriculars from './components/Extracurriculars';
import Admission from './components/Admission';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import { Language } from './types';

export default function App() {
  const [currentLang, setLang] = useState<Language>('id');
  const [activeSection, setActiveSection] = useState('hero');
  const [view, setView] = useState<'home' | 'admin'>('home');

  useEffect(() => {
    if (view === 'admin') return;

    const sections = ['hero', 'about', 'news', 'facilities', 'extracurriculars', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset focus
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  if (view === 'admin') {
    return <AdminDashboard onClose={() => setView('home')} />;
  }

  return (
    <div id="school_landing_app" className="bg-slate-950 min-h-screen text-white scroll-smooth selection:bg-teal-400 selection:text-slate-950">
      {/* Navigation Header */}
      <Header 
        currentLang={currentLang} 
        setLang={setLang} 
        activeSection={activeSection} 
      />

      {/* Hero Header Section */}
      <Hero currentLang={currentLang} />

      {/* Profile Section (Principal Message & Vision) */}
      <PrincipalMessage currentLang={currentLang} />

      {/* Bulletin Board Section (News, Achievements, Circulars) */}
      <NewsSection currentLang={currentLang} />

      {/* Environment Section (Facilities Explorer) */}
      <Facilities currentLang={currentLang} />

      {/* Talent & Reviews Section (Clubs & Testimonials) */}
      <Extracurriculars currentLang={currentLang} />

      {/* Stepper Section (Admissions / PPDB Flow) */}
      <Admission currentLang={currentLang} />

      {/* Communication Section (Inquiry desk Form) */}
      <ContactSection currentLang={currentLang} />

      {/* Footer directories */}
      <Footer currentLang={currentLang} onOpenAdmin={() => setView('admin')} />
    </div>
  );
}
