import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface PrincipalMessageProps {
  currentLang: Language;
}

export default function PrincipalMessage({ currentLang }: PrincipalMessageProps) {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative ambient blurred ring */}
      <div id="prof_bg_glow" className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Principal Welcome Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Avatar Profile Grid Block */}
          <motion.div
            id="principal_image_block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-2 border-teal-500/20 p-2 bg-slate-950 shadow-xl group">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                {/* Elegant representation of Indonesian public principal */}
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Drs. H. Ahmad Saepudin, M.Pd."
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top scale-102 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85" />
              </div>

              {/* Tag overlay reflecting structural status */}
              <div className="absolute bottom-4 left-4 right-4 bg-teal-500 text-slate-950 font-sans font-bold text-xs py-1.5 px-3 rounded-lg text-center shadow-md">
                KEPALA SEKOLAH
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <h3 className="text-white font-sans font-bold text-lg leading-normal tracking-tight">
                {t.principalName}
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-1 uppercase tracking-wide">
                NIP. 19680312 199303 1 005
              </p>
            </div>
          </motion.div>

          {/* Welcome Text Content Block */}
          <motion.div
            id="principal_speech_block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-teal-500 rounded-full" />
              <span className="text-xs font-mono font-bold text-teal-400 tracking-widest uppercase">
                {t.principalTitle}
              </span>
            </div>

            <h2 className="text-white font-sans font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight">
              Mendidik dengan Sepenuh Hati, <br />
              Membentuk Masa Depan Berprestasi
            </h2>

            <div className="relative">
              {/* Giant blockquote markers */}
              <span className="absolute -top-6 -left-4 text-slate-700 font-serif text-7xl select-none leading-none opacity-30">“</span>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed text-left relative z-10 italic">
                {t.principalMessage}
              </p>
              <span className="absolute -bottom-12 right-4 text-slate-700 font-serif text-7xl select-none leading-none opacity-30">”</span>
            </div>

            {/* Principal Quote Signoff decoration */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-white font-sans font-bold text-sm">{t.principalName}</span>
                <span className="text-slate-400 text-xs mt-0.5">{t.schoolSubName}</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Vision & Mission Split Grid Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          
          {/* Vision Interactive Panel */}
          <motion.div
            id="vision_card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-teal-500/5 translate-x-4 -translate-y-4 pointer-events-none">
              <Eye className="w-32 h-32" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-white font-sans font-extrabold text-xl sm:text-2xl tracking-tight">
                {t.principalVision}
              </h3>
            </div>

            <p className="text-slate-300 font-sans text-sm leading-relaxed text-left font-normal bg-slate-900/50 p-5 rounded-xl border border-white/5 shadow-inner">
              "{t.principalVisionText}"
            </p>
          </motion.div>

          {/* Mission Interactive Panel */}
          <motion.div
            id="mission_card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-teal-500/5 translate-x-4 -translate-y-4 pointer-events-none">
              <Target className="w-32 h-32" />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-white font-sans font-extrabold text-xl sm:text-2xl tracking-tight">
                {t.principalMission}
              </h3>
            </div>

            <ul id="mission_steps_list" className="space-y-3">
              {t.principalMissionList.map((mission, index) => (
                <li
                  key={index}
                  id={`mission_step_${index}`}
                  className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed text-left font-normal"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/20 text-teal-400 font-mono text-xs font-bold leading-none mt-0.5 shrink-0">
                    {index + 1}
                  </span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
