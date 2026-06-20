import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, BookOpen, Beaker, Dribbble, Compass, Music, Building, CheckCircle2, ChevronRight, X } from 'lucide-react';
import { Language, FacilityItem } from '../types';
import { MOCK_FACILITIES, TRANSLATIONS } from '../translations';

interface FacilitiesProps {
  currentLang: Language;
}

export default function Facilities({ currentLang }: FacilitiesProps) {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);
  const t = TRANSLATIONS[currentLang];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      case 'Beaker':
        return <Beaker className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      case 'Dribbble':
        return <Dribbble className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      case 'Music':
        return <Music className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Building className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" />;
    }
  };

  return (
    <section id="facilities" className="py-20 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Absolute Decorative Vector elements */}
      <div id="facilities_vector" className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div id="facilities_header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
            <Building className="w-3.5 h-3.5" />
            <span>LEARNING CAMPUS ENVIRONMENT</span>
          </div>
          <h2 className="text-white font-sans font-extrabold text-3xl sm:text-4xl tracking-tight">
            {t.facilitiesTitle}
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            {t.facilitiesSubtitle}
          </p>
        </div>

        {/* Facilities Interactive Cards Grid */}
        <div id="facilities_grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_FACILITIES.map((facility, i) => {
            const name = currentLang === 'id' ? facility.nameId : facility.nameEn;
            const description = currentLang === 'id' ? facility.descriptionId : facility.descriptionEn;

            return (
              <motion.div
                key={facility.id}
                id={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setSelectedFacility(facility)}
                className="group flex flex-col bg-slate-950/75 border border-slate-800/80 hover:border-teal-500/40 rounded-2xl p-6 shadow-md hover:shadow-xl cursor-pointer transition-all relative overflow-hidden"
              >
                {/* Floating ambient corner light */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-4 mb-4">
                  {/* Floating Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-teal-500/30 flex items-center justify-center transition-all shadow-inner">
                    {renderIcon(facility.iconName)}
                  </div>
                  
                  <h3 className="text-white font-sans font-extrabold text-lg tracking-tight group-hover:text-teal-400 transition-colors text-left leading-snug line-clamp-1">
                    {name}
                  </h3>
                </div>

                <p className="text-slate-300 font-sans text-sm leading-relaxed text-left line-clamp-3 mb-6 flex-grow">
                  {description}
                </p>

                {/* Card footer detail launch prompt */}
                <div className="flex items-center gap-1.5 text-xs font-sans font-bold text-slate-400 group-hover:text-teal-400 transition-colors tracking-wide uppercase mt-auto">
                  <span>{t.facilityViewDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Detail Overlay Modal Dialog */}
        <AnimatePresence>
          {selectedFacility && (
            <div id="facility_modal_overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                id="facility_modal_box"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-2xl w-full flex flex-col shadow-2xl"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-video w-full overflow-hidden shrink-0">
                  <img
                    src={selectedFacility.image}
                    alt={currentLang === 'id' ? selectedFacility.nameId : selectedFacility.nameEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  
                  {/* Header overlay badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    {renderIcon(selectedFacility.iconName)}
                  </div>

                  <button
                    id="facility_modal_close_top"
                    onClick={() => setSelectedFacility(null)}
                    className="absolute top-4 right-4 bg-slate-950/60 hover:bg-slate-950 border border-white/5 rounded-full p-2 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Substantially descriptive core */}
                <div className="p-6 space-y-6 overflow-y-auto">
                  <div className="text-left space-y-2">
                    <h3 className="text-white font-sans font-extrabold text-xl sm:text-2xl tracking-tight">
                      {currentLang === 'id' ? selectedFacility.nameId : selectedFacility.nameEn}
                    </h3>
                    <p className="text-slate-350 font-sans text-sm leading-relaxed">
                      {currentLang === 'id' ? selectedFacility.descriptionId : selectedFacility.descriptionEn}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="text-left space-y-3">
                    <span className="text-xs font-mono font-bold text-teal-400 tracking-wider uppercase">
                      {t.facilityFeatureLabel}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {(currentLang === 'id' ? selectedFacility.featuresId : selectedFacility.featuresEn).map((feature, idx) => (
                        <div
                          key={idx}
                          id={`facility_feature_${idx}`}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-white font-sans text-xs"
                        >
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                          <span className="font-medium text-left leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal footer section */}
                <div className="border-t border-slate-800 p-4 bg-slate-910 flex justify-end shrink-0">
                  <button
                    id="facility_modal_close_bottom"
                    onClick={() => setSelectedFacility(null)}
                    className="px-5 py-2.5 bg-slate-850 hover:bg-slate-800 text-xs sm:text-sm font-sans font-bold text-slate-300 hover:text-white rounded-lg border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
                  >
                    {t.facilityCloseDetails}
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
