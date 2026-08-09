export type ProjectCategory = 'All' | 'E-commerce' | 'Web Apps' | 'SaaS' | 'Real Estate' | 'Healthcare' | 'Education';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDesc: string;
  shortDescription?: string;
  fullDesc?: string;
  fullDescription?: string;
  image: string;
  mobileImage: string;
  tags: string[];
  client: string;
  year: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  features: string[];
  designHighlight: string;
  mockupTemplate: 'ecommerce' | 'saas' | 'realestate' | 'school' | 'healthcare' | 'booking';
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  startingPrice: string;
  deliverables: string[];
  turnaroundTime: string;
  popular?: boolean;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps & Tools';
  icon: string;
  level: string;
  experience: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
  location: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  price: string;
  period: string;
  description: string;
  features: { text: string; included: boolean }[];
  idealFor: string;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Pricing' | 'Process' | 'Support';
  question: string;
  answer: string;
}

export interface QuoteCalculation {
  projectType: string;
  features: string[];
  timeline: string;
  designLevel: string;
  estimatedCostMin: number;
  estimatedCostMax: number;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  message?: string;
}
