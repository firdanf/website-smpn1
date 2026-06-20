import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, BookOpen, ChevronRight, X } from 'lucide-react';
import { Language, NewsItem } from '../types';
import { TRANSLATIONS } from '../translations';
import { getNews } from '../lib/storage';

interface NewsSectionProps {
  currentLang: Language;
}

export default function NewsSection({ currentLang }: NewsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'news' | 'announcement' | 'achievement'>('all');
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  useEffect(() => {
    setNewsData(getNews());
  }, []);

  const t = TRANSLATIONS[currentLang];

  const filteredNews = useMemo(() => {
    return newsData.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const title = currentLang === 'id' ? item.titleId : item.titleEn;
      const content = currentLang === 'id' ? item.contentId : item.contentEn;
      
      const matchSearch = 
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchCategory && matchSearch;
    });
  }, [searchQuery, activeCategory, currentLang]);

  const categoryFilters = [
    { id: 'all', label: t.newsFilterAll },
    { id: 'news', label: t.newsFilterNews },
    { id: 'announcement', label: t.newsFilterAnnouncement },
    { id: 'achievement', label: t.newsFilterAchievement },
  ] as const;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'achievement':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20';
      case 'announcement':
        return 'bg-amber-500/15 text-amber-400 border-amber-500/20';
      case 'news':
      default:
        return 'bg-blue-500/15 text-blue-400 border-blue-500/20';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'achievement':
        return t.newsFilterAchievement;
      case 'announcement':
        return t.newsFilterAnnouncement;
      case 'news':
      default:
        return t.newsFilterNews;
    }
  };

  return (
    <section id="news" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="news_header" className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono font-semibold text-teal-400 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>BULLETIN BOARD</span>
          </div>
          <h2 className="text-white font-sans font-extrabold text-3xl sm:text-4xl tracking-tight">
            {t.newsTitle}
          </h2>
          <p className="text-slate-400 font-sans text-sm sm:text-base leading-relaxed">
            {t.newsSubtitle}
          </p>
        </div>

        {/* Dynamic Controls Row (Search and Category Filter) */}
        <div id="news_controls" className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-900">
          
          {/* Category Filters Pills tab-cluster */}
          <div id="category_filter_list" className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                id={`category_filter_btn_${filter.id}`}
                onClick={() => setActiveCategory(filter.id)}
                className={`px-4 py-2 font-sans text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  activeCategory === filter.id
                    ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/10'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div id="news_search_container" className="relative w-full md:max-w-xs order-1 md:order-2">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="news_search_input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.newsSearchPlaceholder}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 transition-colors font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3 flex items-center text-slate-500 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Card Grid Container */}
        <motion.div
          id="news_grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredNews.map((item) => {
              const title = currentLang === 'id' ? item.titleId : item.titleEn;
              const content = currentLang === 'id' ? item.contentId : item.contentEn;
              const readTime = currentLang === 'id' ? item.readTimeId : item.readTimeEn;

              return (
                <motion.article
                  key={item.id}
                  id={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col bg-slate-900/40 border border-slate-800/85 hover:border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
                >
                  {/* Thumbnail Image */}
                  <div className="relative aspect-video w-full overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    
                    {/* Category Label Overlay */}
                    <span className={`absolute top-4 left-4 px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md border tracking-wider ${getCategoryTheme(item.category)}`}>
                      {getCategoryLabel(item.category)}
                    </span>
                  </div>

                  {/* Body cluster */}
                  <div className="p-5 flex flex-col flex-grow justify-between gap-5">
                    <div className="space-y-2">
                      {/* Meta header details */}
                      <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(item.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {readTime} {t.newsReadTime}
                        </span>
                      </div>

                      {/* Header block */}
                      <h3 className="font-sans font-bold text-white text-base md:text-lg group-hover:text-teal-400 transition-colors leading-snug line-clamp-2 text-left">
                        {title}
                      </h3>

                      {/* Content snippet */}
                      <p className="text-slate-300 font-sans text-xs md:text-sm leading-relaxed line-clamp-3 text-left">
                        {content}
                      </p>
                    </div>

                    {/* Interactive CTA link */}
                    <button
                      id={`btn_read_more_${item.id}`}
                      onClick={() => setSelectedNews(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-sans font-bold text-teal-400 hover:text-teal-300 group-hover:translate-x-1 transition-all text-left uppercase tracking-wider cursor-pointer mt-auto w-fit"
                    >
                      Selengkapnya <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search feedback */}
        {filteredNews.length === 0 && (
          <div id="news_empty_state" className="text-center py-20 p-6 rounded-2xl bg-slate-900/25 border border-dashed border-slate-800">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-white text-lg font-bold">{t.newsNoResults}</h3>
          </div>
        )}

        {/* Single News Reader Dialog Modal */}
        <AnimatePresence>
          {selectedNews && (
            <div id="news_reader_modal_overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                id="news_reader_content"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl"
              >
                {/* Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden shrink-0">
                  <img
                    src={selectedNews.image}
                    alt={currentLang === 'id' ? selectedNews.titleId : selectedNews.titleEn}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                  
                  {/* Close button indicator */}
                  <button
                    id="news_modal_close_btn_top"
                    onClick={() => setSelectedNews(null)}
                    className="absolute top-4 right-4 bg-slate-950/60 hover:bg-slate-950 border border-white/5 rounded-full p-2 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 overflow-y-auto space-y-4">
                  <span className={`inline-block px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md border tracking-wider ${getCategoryTheme(selectedNews.category)}`}>
                    {getCategoryLabel(selectedNews.category)}
                  </span>

                  <h3 className="font-sans font-extrabold text-white text-xl sm:text-2xl tracking-tight text-left leading-snug">
                    {currentLang === 'id' ? selectedNews.titleId : selectedNews.titleEn}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pb-4 border-b border-slate-800">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(selectedNews.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {currentLang === 'id' ? selectedNews.readTimeId : selectedNews.readTimeEn} {t.newsReadTime}
                    </span>
                  </div>

                  <p className="text-slate-300 font-sans text-sm sm:text-medium leading-relaxed text-left whitespace-pre-wrap">
                    {currentLang === 'id' ? selectedNews.contentId : selectedNews.contentEn}
                  </p>
                </div>

                {/* Footer bar */}
                <div className="border-t border-slate-800 p-4 bg-slate-910 flex justify-end shrink-0">
                  <button
                    id="news_modal_close_btn_bottom"
                    onClick={() => setSelectedNews(null)}
                    className="px-5 py-2 bg-slate-850 hover:bg-slate-800 text-sm font-sans font-semibold text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-850 hover:border-slate-700 cursor-pointer"
                  >
                    Tutup
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
