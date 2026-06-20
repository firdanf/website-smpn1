import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { getSiteSettings } from '../lib/storage';

interface ContactSectionProps {
  currentLang: Language;
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', contactInfo: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);
  const [settings] = useState(getSiteSettings());

  const t = TRANSLATIONS[currentLang];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorStatus(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, contactInfo, subject, message } = formData;

    if (!name.trim() || !contactInfo.trim() || !message.trim()) {
      setErrorStatus(true);
      return;
    }

    setIsSubmitting(true);
    // Mimic API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', contactInfo: '', subject: '', message: '' });
      
      // Auto reset success alert after 5s
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="contact_header" className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION PORTAL</span>
          </div>
          <h2 className="text-white font-sans font-extrabold text-3xl sm:text-4xl tracking-tight leading-none">
            {t.contactTitle}
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details & Map Cluster */}
          <div id="contact_info_column" className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
            <div className="space-y-6 text-left">
              <h3 className="text-white font-sans font-extrabold text-xl tracking-tight">
                {t.contactInfoLabel}
              </h3>

              {/* Detail list cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/15 flex items-center justify-center text-teal-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      {t.contactAddressLabel}
                    </span>
                    <span className="block text-white font-sans text-xs sm:text-sm leading-relaxed">
                      {settings.locationText}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/15 flex items-center justify-center text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      {t.contactPhoneLabel}
                    </span>
                    <span className="block text-white font-mono text-sm leading-none">
                      {settings.contactPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/15 flex items-center justify-center text-teal-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      {t.contactEmailLabel}
                    </span>
                    <span className="block text-white font-mono text-sm leading-none">
                      {settings.contactEmail}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/15 flex items-center justify-center text-teal-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-slate-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                      {t.contactHoursLabel}
                    </span>
                    <span className="block text-white font-sans text-sm leading-none">
                      {t.contactHoursText}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div id="contact_map_preview" className="relative p-2.5 rounded-2xl bg-slate-900 border border-slate-800 aspect-video overflow-hidden">
              <iframe
                src={settings.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="bg-slate-950"
              />
            </div>
          </div>

          {/* Contact Inquiry Interactive Form Column */}
          <div id="contact_form_column" className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 shadow-xl relative h-full">
              
              <form onSubmit={handleSubmit} className="space-y-5 text-left h-full flex flex-col justify-between">
                <div className="space-y-4">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_field_name" className="text-xs font-mono text-slate-350 font-semibold tracking-wider uppercase">
                      {t.contactFormName} <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact_field_name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/40 transition-colors font-sans"
                      placeholder="e.g. Ahmad Fauzi"
                    />
                  </div>

                  {/* Mail or phone contact channel information */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_field_info" className="text-xs font-mono text-slate-355 font-semibold tracking-wider uppercase">
                      {t.contactFormEmail} <span className="text-teal-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact_field_info"
                      name="contactInfo"
                      value={formData.contactInfo}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/40 transition-colors font-sans"
                      placeholder="e.g. ahmad.fauzi@gmail.com / +628..."
                    />
                  </div>

                  {/* Optional Subject choice */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_field_subject" className="text-xs font-mono text-slate-350 font-semibold tracking-wider uppercase">
                      {t.contactFormSubject}
                    </label>
                    <input
                      type="text"
                      id="contact_field_subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/40 transition-colors font-sans"
                      placeholder="e.g. Profil PPDB, Kunjungan Kerja"
                    />
                  </div>

                  {/* Inquiry body description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact_field_message" className="text-xs font-mono text-slate-350 font-semibold tracking-wider uppercase">
                      {t.contactFormMessage} <span className="text-teal-500">*</span>
                    </label>
                    <textarea
                      id="contact_field_message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl py-3 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/40 transition-colors font-sans resize-none"
                      placeholder="Tuliskan pertanyaan penting atau pesan Anda di sini secara detail..."
                    />
                  </div>

                </div>

                {/* Response Alerts cluster & Send CTA */}
                <div className="pt-6 space-y-4 shrink-0">
                  {/* Validation Error Alert box */}
                  {errorStatus && (
                    <div id="contact_validation_err_alert" className="flex items-center gap-2 px-4 py-3 bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-sans font-semibold rounded-xl">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{t.contactFormError}</span>
                    </div>
                  )}

                  {/* Submission success confirmation alert */}
                  {submitted && (
                    <div id="contact_success_alert" className="flex items-center gap-3 px-4 py-3 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs sm:text-sm font-sans font-semibold rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-left leading-normal">{t.contactFormSuccess}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    id="contact_submit_btn"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 disabled:bg-slate-800 text-slate-950 disabled:text-slate-550 font-sans font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-teal-500/10 disabled:shadow-none active:scale-98 transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-950 border-t-transparent" />
                        <span>{t.contactFormSending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>{t.contactFormSend}</span>
                      </>
                    )}
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
