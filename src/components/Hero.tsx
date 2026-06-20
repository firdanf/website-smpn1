import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Users, Calendar, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { getSiteSettings } from '../lib/storage';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = TRANSLATIONS[currentLang];
  const [heroImg, setHeroImg] = useState('/src/assets/images/school_hero_1781910425435.jpg');

  useEffect(() => {
    const settings = getSiteSettings();
    setHeroImg(settings.heroImageUrl);
  }, []);

  const stats = [
    {
      id: 'stat1',
      icon: <Users className="w-6 h-6 text-teal-400" />,
      title: t.statStudents,
      description: t.statStudentsDesc,
    },
    {
      id: 'stat2',
      icon: <GraduationCap className="w-6 h-6 text-teal-400" />,
      title: t.statTeachers,
      description: t.statTeachersDesc,
    },
    {
      id: 'stat3',
      icon: <Calendar className="w-6 h-6 text-teal-400" />,
      title: t.statExtracurriculars,
      description: t.statExtracurricularsDesc,
    },
    {
      id: 'stat4',
      icon: <Award className="w-6 h-6 text-teal-400" />,
      title: t.statAccreditation,
      description: t.statAccreditationDesc,
    },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-slate-950 pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Absolute Ambient Background Lights */}
      <div id="hero_bg_glow_1" className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div id="hero_bg_glow_2" className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline & Narrative Column */}
          <div id="hero_text_column" className="lg:col-span-7 flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-teal-400 font-mono tracking-wider"
            >
              <Award className="w-4 h-4 text-teal-400" />
              <span>{t.statAccreditation}: {t.statAccreditationDesc}</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight sm:leading-none text-left"
            >
              SMPN 1 <br className="hidden sm:inline"/>
              <span className="text-teal-400 relative">
                BANTARKALONG
                <span className="absolute left-0 bottom-1 w-full h-1 bg-teal-500/30 -z-10 rounded-lg"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-sm md:text-base text-slate-300 max-w-xl text-left leading-relaxed font-normal"
            >
              {t.schoolDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                id="hero_btn_admission"
                onClick={() => handleScrollTo('admission')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-slate-950 font-sans font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-teal-500/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                {t.heroCTAAdmission}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="hero_btn_explore"
                onClick={() => handleScrollTo('facilities')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-700 text-slate-100 border border-slate-800 hover:border-slate-700 font-sans font-semibold text-sm tracking-wide rounded-xl active:scale-[0.98] transition-all cursor-pointer"
              >
                {t.heroCTAQuickTour}
              </button>
            </motion.div>
          </div>

          {/* Hero Banner Image Column */}
          <motion.div
            id="hero_image_column"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Container */}
            <div className="relative aspect-video lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-950 border border-slate-800">
              <img
                src={heroImg}
                alt="SMPN 1 Bantarkalong Campus Building"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fail-safe graceful fallback if local server image path differs in dynamic container
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80';
                }}
                className="w-full h-full object-cover select-none scale-102 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-teal-400 tracking-wider">ESTABLISHED IN</span>
                  <span className="text-white text-sm font-sans font-bold leading-none mt-1">1982 · Bantarkalong, Tasikmalaya</span>
                </div>
              </div>
            </div>
            
            {/* Soft backdrop element */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-3xl -z-10 blur-xl opacity-80" />
          </motion.div>
        </div>

        {/* Institution Quantitative Milestones Section */}
        <motion.div
          id="hero_milestones_row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-slate-800/80"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              id={`hero_stat_block_${i}`}
              className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left p-2 hover:bg-slate-800/20 rounded-xl transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-white text-lg sm:text-xl leading-snug">
                  {stat.title}
                </span>
                <span className="text-xs text-slate-400 mt-0.5 leading-normal">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
