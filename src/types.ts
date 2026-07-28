export type NavigationPage = 'home' | 'about' | 'portfolio' | 'insights' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: 'WordPress' | 'React Apps' | 'UI Redesigns' | 'Safari Solutions' | 'Web3';
  subtitle: string;
  description: string;
  client: string;
  year: string;
  image: string;
  secondaryImages?: string[];
  liveUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  techStack: string[];
  challenge?: string;
  solution?: string;
  featured?: boolean;
  bentoSpan?: string; // grid span styling for home bento
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  metric: string;
}

export interface EstimateConfig {
  platform: 'wordpress' | 'react' | 'hybrid';
  features: string[];
  timelineWeeks: number;
  maintenancePlan: boolean;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  deliverables: string[];
  badge: string;
}
