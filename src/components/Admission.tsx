import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, HelpCircle, FileText, CheckCircle2, Download } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';

interface AdmissionProps {
  currentLang: Language;
}

export default function Admission({ currentLang }: AdmissionProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const handleDownload = () => {
    setDownloadSuccess(true);
    // Auto reset notification state after 3s
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3000);
  };

  const steps = [
    {
      id: 'step1',
      num: '01',
      title: t.admissionStep1,
      desc: t.admissionStep1Desc,
    },
    {
      id: 'step2',
      num: '02',
      title: t.admissionStep2,
      desc: t.admissionStep2Desc,
    },
    {
      id: 'step3',
      num: '03',
      title: t.admissionStep3,
      desc: t.admissionStep3Desc,
    },
    {
      id: 'step4',
      num: '04',
      title: t.admissionStep4,
      desc: t.admissionStep4Desc,
    },
  ];

  return (
    <section id="admission" className="py-20 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Absolute Decorative Grid */}
      <div id="admission_ring_glow" className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header content Block */}
        <div id="admission_header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono font-bold text-teal-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.admissionStatusLabel}</span>
          </div>
          <h2 className="text-white font-sans font-extrabold text-3xl sm:text-4xl tracking-tight leading-none">
            {t.admissionTitle}
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            {t.admissionSubtitle}
          </p>
        </div>

        {/* Dynamic Interactive Steps Row */}
        <div id="admission_stepper_row" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              id={`admission_step_card_${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700/80 transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Step numbering bubble */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-black text-teal-500/15">
                    {step.num}
                  </span>
                  <HelpCircle className="w-4 h-4 text-slate-700" />
                </div>
                
                <h3 className="text-white font-sans font-bold text-base leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-350 font-sans text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action guidelines downloads and inquiries box */}
        <div id="admission_action_panel" className="max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center gap-6 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400">
            <FileText className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-sans font-extrabold text-lg sm:text-xl tracking-tight">
              Panduan Resmi PPDB Tahun Ajaran Baru 
            </h3>
            <p className="text-slate-400 font-sans text-xs sm:text-sm leading-snug">
              Silakan unduh dokumen panduan komprehensif berisi persyaratan administrasi, jadwal seleksi zonasi, prestasi, serta ketentuan berkas pendaftaran tahun ini.
            </p>
          </div>

          <div className="relative w-full flex flex-col items-center">
            <button
              id="btn_download_admission_rules"
              onClick={handleDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-100 font-sans font-bold text-sm tracking-wide rounded-xl active:scale-98 cursor-pointer transition-all"
            >
              <Download className="w-4 h-4 text-teal-400" />
              {t.admissionCTALabel}
            </button>

            {/* In-view micro notification confirming transaction success */}
            {downloadSuccess && (
              <motion.div
                id="download_micro_notif"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute top-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-lg py-2 px-4 text-xs font-sans font-semibold flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dokumen PDF berhasil diunduh ke folder berkas Anda!</span>
              </motion.div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
