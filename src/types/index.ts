export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  year: string;
  category: string;
  tags: string[];
}

export interface ExperienceItem {
  start: string;
  end: string;
  role: string;
  company: string;
  current?: boolean;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  meta: string;
  period: string;
  badge: string;
}

export interface Certification {
  initials: string;
  title: string;
  issuer: string;
  year: string;
}

export interface Article {
  title: string;
  category: string;
  readingTime: string;
  date: string;
  href?: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  label: string;
  count: string;
  items: TechItem[];
}

export interface AiCapability {
  title: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  initials: string;
  role: string;
  relation: string;
}

export interface Stat {
  value: string;
  label: string;
}
