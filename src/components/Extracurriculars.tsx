import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, HeartPulse, Trophy, MessageCircle, Shield, Tv, Clock, Users, Sparkles, Star } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_EXTRACURRICULARS, MOCK_TESTIMONIALS } from '../translations';

interface ExtracurricularsProps {
  currentLang: Language;
}

export default function Extracurriculars({ currentLang }: ExtracurricularsProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = TRANSLATIONS[currentLang];

  const renderIcon = (name: string) => {
    const cls = "w-5 h-5 text-teal-400";
    switch (name) {
      case 'Compass': return <Compass className={cls} />;
      case 'HeartPulse': return <HeartPulse className={cls} />;
      case 'Trophy': return <Trophy className={cls} />;
      case 'MessageCircle': return <MessageCircle className={cls} />;
      case 'Shield': return <Shield className={cls} />;
      case 'Tv': return <Tv className={cls} />;
      default: return <Sparkles className={cls} />;
    }
  };

  return (
    <section id="extracurriculars" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="extracurricular_header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>TALENT & EXTRA CURRICULAR PATHWAYS</span>
          </div>
          <h2 className="text-white font-sans font-extrabold text-3xl sm:text-4xl tracking-tight">
            {t.extracurricularsTitle}
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            {t.extracurricularsSubtitle}
          </p>
        </div>

        {/* Extracurricular Cards Grid Layout */}
        <div id="extracurricular_grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {MOCK_EXTRACURRICULARS.map((ex, idx) => {
            const name = currentLang === 'id' ? ex.nameId : ex.nameEn;
            const description = currentLang === 'id' ? ex.descriptionId : ex.descriptionEn;
            const schedule = currentLang === 'id' ? ex.scheduleId : ex.scheduleEn;

            return (
              <motion.div
                key={ex.id}
                id={ex.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group"
              >
                <div className="space-y-4">
                  {/* Icon Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/15 group-hover:scale-105 transition-transform">
                      {renderIcon(ex.iconName)}
                    </div>
                    {/* Activity Badge indicators */}
                    <span className="text-[10px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
                      OSIS APPROVED
                    </span>
                  </div>

                  <div className="text-left space-y-2">
                    <h3 className="text-white font-sans font-bold text-base md:text-lg leading-snug tracking-tight group-hover:text-teal-400 transition-colors">
                      {name}
                    </h3>
                    <p className="text-slate-350 font-sans text-xs sm:text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>

                {/* Grid meta schedule details footer */}
                <div className="pt-4 mt-6 border-t border-slate-800/80 text-left space-y-2 shrink-0">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="line-clamp-1">{schedule}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Altar of Reviews/Testimonials (The dynamic student trust section) */}
        <div id="school_testimonials" className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
          
          {/* Subtle gold star indicator */}
          <div className="absolute top-6 right-6 p-4 text-teal-400/5 select-none pointer-events-none">
            <Star className="w-24 h-24 stroke-[1]" />
          </div>

          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-teal-400 fill-teal-400" />
              ))}
            </div>

            {/* Testimonials Slides Container */}
            <div className="min-h-[140px] flex items-center justify-center">
              <p className="text-slate-200 font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed italic max-w-3xl">
                "{currentLang === 'id' ? MOCK_TESTIMONIALS[activeTestimonial].quoteId : MOCK_TESTIMONIALS[activeTestimonial].quoteEn}"
              </p>
            </div>

            {/* Persona credit details */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <img
                src={MOCK_TESTIMONIALS[activeTestimonial].avatar}
                alt={MOCK_TESTIMONIALS[activeTestimonial].name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border border-teal-500/35"
              />
              <div className="text-center sm:text-left">
                <span className="block text-white font-sans font-bold text-sm tracking-tight">
                  {MOCK_TESTIMONIALS[activeTestimonial].name}
                </span>
                <span className="block text-slate-400 text-xs font-mono mt-0.5 tracking-wider uppercase">
                  {currentLang === 'id' ? MOCK_TESTIMONIALS[activeTestimonial].roleId : MOCK_TESTIMONIALS[activeTestimonial].roleEn}
                </span>
              </div>
            </div>

            {/* Sliding navigational dot indicators */}
            <div className="flex gap-2">
              {MOCK_TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  id={`testimonial_dot_${idx}`}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx
                      ? 'bg-teal-500 w-8 shadow-sm'
                      : 'bg-slate-750 hover:bg-slate-650'
                  }`}
                  aria-label={`Show testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
