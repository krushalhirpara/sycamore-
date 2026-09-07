export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export interface NavDropdownItem {
  name: string;
  href: string;
  description: string;
  iconName: string;
  category: 'Amazon Account Management Services' | 'Amazon Advertising Agency' | 'Flipkart Account Management' | 'Flipkart Advertising Agency';
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  title: string; // service name
  category: 'Amazon Account Management Services' | 'Amazon Advertising Agency' | 'Flipkart Account Management' | 'Flipkart Advertising Agency';
  slug: string;
  shortDescription: string;
  heroHeading: string;
  heroDescription: string;
  benefits: string[];
  features: string[];
  process: string[];
  faqs: ServiceFAQ[];
  ctaText: string;
  ctaLink: string;
  seoTitle: string;
  seoDescription: string;
  ogImagePlaceholder: string;
}

export interface StatisticData {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface MetricData {
  label: string;
  value: string;
  accent?: boolean;
}

export interface CaseStudyData {
  slug: string;
  clientName: string;
  marketplace: 'amazon' | 'flipkart';
  tagline: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: MetricData[];
  fullStory: string;
  deliverables: string[];
}

export interface TestimonialData {
  id: string;
  clientName: string;
  company: string;
  role: string;
  testimonialText: string;
  avatarUrl?: string;
  rating: number;
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  date: string;
  category: string;
  readingTime: string;
  featuredImage: string;
  tags: string[];
}
