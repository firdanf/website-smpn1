import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, GraduationCap, Shield } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
}

export default function Header({ currentLang, setLang, activeSection }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'news', label: t.navNews },
    { id: 'facilities', label: t.navFacilities },
    { id: 'extracurriculars', label: t.navExtracurriculars },
    { id: 'contact', label: t.navContact },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isScrolled = scrollY > 20;

  return (
    <>
      <header
        id="app_header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
            : 'bg-gradient-to-b from-slate-950/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Emblem holding brand identity */}
            <div 
              id="header_logo"
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-teal-500 font-bold text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6 text-slate-950" />
                <div className="absolute -bottom-1 -right-1 bg-slate-900 text-[9px] font-semibold text-teal-400 px-1 rounded-sm border border-teal-500/30">
                  1
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold leading-none tracking-tight text-white text-base md:text-lg group-hover:text-teal-400 transition-colors">
                  SMPN 1 BANTARKALONG
                </span>
                <span className="text-[10px] md:text-xs text-slate-400 font-mono tracking-widest mt-0.5 uppercase">
                  Kab. Tasikmalaya
                </span>
              </div>
            </div>

            {/* Desktop Navigation Link Cluster */}
            <nav id="desktop_nav" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav_link_${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 font-sans text-sm font-medium rounded-lg transition-colors leading-normal duration-200 cursor-pointer ${
                      isActive 
                        ? 'text-teal-400 font-semibold' 
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-teal-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Multilingual Toggle and Mobile Trigger */}
            <div className="flex items-center gap-4">
              {/* Language Selector Pill */}
              <div 
                id="language_selector_container"
                className="flex items-center gap-1.5 bg-slate-800/85 md:bg-slate-800/50 hover:bg-slate-800/80 p-1 rounded-lg border border-white/5 transition-all"
              >
                <div className="flex gap-0.5">
                  <button
                    id="lang_toggle_id"
                    onClick={() => setLang('id')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      currentLang === 'id'
                        ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ID
                  </button>
                  <button
                    id="lang_toggle_en"
                    onClick={() => setLang('en')}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                      currentLang === 'en'
                        ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                id="mobile_menu_trigger"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-white/5 text-slate-300 hover:text-white cursor-pointer transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Slider */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile_menu_drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-slate-950/95 border-b border-white/10 backdrop-blur-lg lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile_nav_link_${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 font-sans text-base font-medium rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-teal-500/10 text-teal-400 font-semibold border-l-4 border-teal-500'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
