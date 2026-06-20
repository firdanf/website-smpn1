import { NewsItem } from '../types';
import { MOCK_NEWS } from '../translations';

const STORAGE_KEY = 'smpn1_bantarkalong_news';

export function getNews(): NewsItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (error) {
    console.error('Failed to parse news from local storage', error);
  }
  // Initialize with mock data if none exists
  localStorage.setItem(STORAGE_KEY, JSON.stringify(MOCK_NEWS));
  return MOCK_NEWS;
}

export function saveNews(news: NewsItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(news));
}

export function addNewsItem(item: Omit<NewsItem, 'id'>): NewsItem {
  const news = getNews();
  const newItem: NewsItem = {
    ...item,
    id: `news-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
  };
  news.unshift(newItem);
  saveNews(news);
  return newItem;
}

export function updateNewsItem(id: string, updates: Partial<NewsItem>): void {
  const news = getNews();
  const index = news.findIndex(n => n.id === id);
  if (index !== -1) {
    news[index] = { ...news[index], ...updates };
    saveNews(news);
  }
}

export function deleteNewsItem(id: string): void {
  const news = getNews();
  saveNews(news.filter(n => n.id !== id));
}

const SETTINGS_STORAGE_KEY = 'smpn1_bantarkalong_settings';

export const defaultSiteSettings = {
  heroImageUrl: '/src/assets/images/smp1bantarkalong.jpg',
  contactEmail: 'humas@smpn1bantarkalong.sch.id',
  contactPhone: '+62 821-1234-5678',
  locationText: 'Bantarkalong, Tasikmalaya, Jawa Barat',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.912662058045!2d108.0898863147766!3d-7.584444994530511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65e4d291986423%3A0x8670ab0b5e28a306!2sSMP%20Negeri%201%20Bantarkalong!5e0!3m2!1sen!2sid!4v1709123456789!5m2!1sen!2sid'
};

export function getSiteSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (raw) {
      return { ...defaultSiteSettings, ...JSON.parse(raw) };
    }
  } catch (error) {
    console.error('Failed to parse settings from local storage', error);
  }
  return defaultSiteSettings;
}

export function saveSiteSettings(settings: any): void {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}
