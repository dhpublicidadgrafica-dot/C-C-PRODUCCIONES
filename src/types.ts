export type ServiceId = 
  | 'sonido-profesional'
  | 'pasarelas'
  | 'eventos-corporativos'
  | 'decoracion-eventos'
  | 'carpas'
  | 'tarimas'
  | 'pantallas-led'
  | 'pistas-de-baile'
  | 'escenarios';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  equipmentList: { name: string; spec: string; count?: string }[];
  useCases: string[];
  basePriceUSD: number;
  faqs: { question: string; answer: string }[];
  seoTitle: string;
  seoMeta: string;
  keywords: string[];
}

export type EventCategory = 
  | 'todos'
  | 'corporativo'
  | 'concierto'
  | 'boda'
  | 'institucional'
  | 'feria'
  | 'lanzamiento'
  | 'escenario'
  | 'video';

export interface PortfolioProject {
  id: string;
  title: string;
  category: EventCategory;
  targetServiceId?: ServiceId;
  client: string;
  location: string;
  year: string;
  attendees: string;
  coverImage: string;
  images: string[];
  videoUrl?: string;
  summary: string;
  technicalHighlights: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  keywords: string[];
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  company: string;
  logoUrl: string;
  avatarUrl: string;
  comment: string;
  rating: number;
  eventName: string;
  date: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  keyDeliverable: string;
}

export interface QuoteSelection {
  eventType: string;
  guestsCount: number;
  city: string;
  isOutdoor: boolean;
  eventDate: string;
  services: {
    serviceId: ServiceId;
    tier: 'estandar' | 'premium' | 'ultra_luxury';
    quantity?: number;
  }[];
  customNotes: string;
  clientName: string;
  clientCompany: string;
  clientPhone: string;
  clientEmail: string;
}

export interface QuoteItemBreakdown {
  serviceName: string;
  tierLabel: string;
  unitPriceUSD: number;
  totalUSD: number;
  details: string;
}
