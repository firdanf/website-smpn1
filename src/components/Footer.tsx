import React, { useState, useEffect } from 'react';
import { GraduationCap, MapPin, Phone, Mail, ChevronRight, Globe } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../translations';
import { getSiteSettings } from '../lib/storage';

interface FooterProps {
  currentLang: Language;
  onOpenAdmin?: () => void;
}

export default function Footer({ currentLang, onOpenAdmin }: FooterProps) {
  const t = TRANSLATIONS[currentLang];
  const [settings, setSettings] = useState(getSiteSettings());

  useEffect(() => {
    setSettings(getSiteSettings());
  }, []);

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

  const internalResources = [
    { label: "Dapodik Kemdikbud", href: "https://dapo.kemdikbud.go.id/" },
    { label: "Portal SIAP PPDB", href: "https://ppdb.disdik.jabarprov.go.id/" },
    { label: "Platform Rapor Pendidikan", href: "https://raporpendidikan.kemdikbud.go.id/" },
    { label: "Layanan Belajar ID", href: "https://belajar.id/" }
  ];

  const quickLinks = [
    { id: 'hero', label: t.navHome },
    { id: 'about', label: t.navAbout },
    { id: 'news', label: t.navNews },
    { id: 'facilities', label: t.navFacilities },
    { id: 'extracurriculars', label: t.navExtracurriculars },
    { id: 'admission', label: t.navAdmission },
  ];

  return (
    <footer id="app_footer" className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid cluster */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Presentation column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500 font-bold text-white shadow-md">
                <GraduationCap className="w-5 h-5 text-slate-950" />
              </div>
              <span className="font-sans font-black tracking-tight text-white text-base">
                SMPN 1 BANTARKALONG
              </span>
            </div>

            <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed font-normal">
              {t.schoolSubName} ({t.statAccreditationDesc}). Mendidik dengan keluhuran moral, ketajaman intelektual, dan pengasamaan emosi kepedulian lingkungan semenjak 1982.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-mono font-bold text-teal-400 uppercase">
              <Globe className="w-4 h-4 text-teal-400 animate-spin-slow" />
              <span>NPSN: 20210667</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-bold text-sm tracking-widest uppercase">
              {t.footerLinksHeader}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 text-xs sm:text-sm cursor-pointer transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-650 group-hover:text-teal-500 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Internal Portals / Resources Column */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-bold text-sm tracking-widest uppercase">
              {t.footerResourcesHeader}
            </h4>
            <ul className="space-y-2">
              {internalResources.map((res, idx) => (
                <li key={idx}>
                  <a
                    href={res.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 text-xs sm:text-sm transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-650 group-hover:text-teal-500 transition-colors" />
                    <span>{res.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Summary recap Column */}
          <div className="space-y-4">
            <h4 className="text-white font-sans font-bold text-sm tracking-widest uppercase">
              Sekretariat Humas
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {settings.locationText}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-mono text-xs">{settings.contactPhone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="font-mono text-xs text-slate-350">{settings.contactEmail}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Deep copyright details */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-slate-500 text-xs font-sans font-normal leading-relaxed">
          <span>
            {t.copyrightText}
          </span>
          <div className="flex items-center gap-4">
            {onOpenAdmin && (
              <button 
                onClick={onOpenAdmin}
                className="text-slate-600 hover:text-teal-500 transition-colors"
                title="Admin Portal"
              >
                ADMIN
              </button>
            )}
            <span className="text-[10px] font-mono tracking-wider text-slate-600 uppercase">
              EST. 1982 · DISDIK KAB TASIKMALAYA
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
