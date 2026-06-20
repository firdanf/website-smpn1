export interface NewsItem {
  id: string;
  titleEn: string;
  titleId: string;
  contentEn: string;
  contentId: string;
  date: string;
  category: 'news' | 'announcement' | 'achievement';
  image: string;
  readTimeEn: string;
  readTimeId: string;
}

export interface FacilityItem {
  id: string;
  nameEn: string;
  nameId: string;
  descriptionEn: string;
  descriptionId: string;
  iconName: string;
  featuresEn: string[];
  featuresId: string[];
  image: string;
}

export interface Extracurricular {
  id: string;
  nameEn: string;
  nameId: string;
  descriptionEn: string;
  descriptionId: string;
  iconName: string;
  scheduleEn: string;
  scheduleId: string;
  bannerColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  roleEn: string;
  roleId: string;
  quoteEn: string;
  quoteId: string;
  avatar: string;
}

export type Language = 'id' | 'en';

export interface SiteSettings {
  heroImageUrl: string;
  contactEmail: string;
  contactPhone: string;
  locationText: string;
  mapEmbedUrl: string;
}
