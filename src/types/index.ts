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
  categoryShort: string;
  accent: string;
  href: string;
  tags: string[];
}

export interface ExperienceItem {
  start: string;
  end: string;
  role: string;
  company: string;
  current?: boolean;
  description: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  gpaLabel: string;
  gpa: string;
  degreeShort: string;
  period: string;
}

export interface Certification {
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
