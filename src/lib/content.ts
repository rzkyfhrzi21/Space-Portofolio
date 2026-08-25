import type {
  Article,
  Certification,
  EducationItem,
  ExperienceItem,
  NavLink,
  Project,
  Stat,
  Testimonial,
} from "@/types";

import aboutJson from "../../data/about.json";
import aiTwinJson from "../../data/ai-twin.json";
import chatJson from "../../data/chat.json";
import contactJson from "../../data/contact.json";
import educationJson from "../../data/education.json";
import experienceJson from "../../data/experience.json";
import heroJson from "../../data/hero.json";
import navJson from "../../data/nav.json";
import projectsJson from "../../data/projects.json";
import statsJson from "../../data/stats.json";
import techJson from "../../data/tech.json";
import testimonialsJson from "../../data/testimonials.json";
import thoughtsJson from "../../data/thoughts.json";

export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];

export const resumeHref = navJson.resumeHref;
export const githubHref = navJson.githubHref;

export interface SiteContent {
  nav: {
    links: NavLink[];
    hireMe: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    rolePrefix: string;
    roles: string[];
    roleSuffix: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    scroll: string;
  };
  about: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    roles: string[];
    paragraphs: string[];
    fileName: string;
    name: string;
    role: string;
    available: string;
    greeting: string;
  };
  stats: Stat[];
  projects: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    viewAll: string;
    items: Project[];
  };
  experience: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    meta: string;
    current: string;
    items: ExperienceItem[];
  };
  education: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    viewAll: string;
    items: EducationItem[];
    certifications: Certification[];
  };
  thoughts: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    viewAll: string;
    items: Article[];
  };
  tech: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    viewOnGithub: string;
    capabilities: { title: string; description: string; tags: string[] }[];
  };
  testimonials: {
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    relationLabels: Record<string, string>;
    items: Testimonial[];
  };
  aiTwin: {
    badge: string;
    headingLead: string;
    headingAccent: string;
    description: string;
    cta: string;
    stats: { value: string; label: string }[];
    chatName: string;
    online: string;
    greeting: string;
    suggestion: string;
    placeholder: string;
    disclaimer: string;
  };
  chat: {
    trigger: string;
    title: string;
    status: string;
    initialMessage: string;
    placeholder: string;
    disclaimer: string;
    closeLabel: string;
    sendLabel: string;
    fallback: string;
    suggestedQuestions: string[];
    responses: { question: string; answer: string }[];
  };
  contact: {
    marquee: string;
    eyebrow: string;
    headingLead: string;
    headingAccent: string;
    cta: string;
    ctaHref: string;
    socials: {
      label: string;
      href: string;
      icon: "linkedin" | "github" | "instagram";
    }[];
    status: string;
    copyright: string;
  };
}

const id: SiteContent = {
  nav: navJson.id as SiteContent["nav"],
  hero: heroJson.id as SiteContent["hero"],
  about: aboutJson.id as SiteContent["about"],
  stats: statsJson.id as SiteContent["stats"],
  projects: projectsJson.id as SiteContent["projects"],
  experience: experienceJson.id as SiteContent["experience"],
  education: educationJson.id as SiteContent["education"],
  thoughts: thoughtsJson.id as SiteContent["thoughts"],
  tech: techJson.id as SiteContent["tech"],
  testimonials: testimonialsJson.id as SiteContent["testimonials"],
  aiTwin: aiTwinJson.id as SiteContent["aiTwin"],
  chat: chatJson.id as SiteContent["chat"],
  contact: contactJson.id as SiteContent["contact"],
};

const en: SiteContent = {
  nav: navJson.en as SiteContent["nav"],
  hero: heroJson.en as SiteContent["hero"],
  about: aboutJson.en as SiteContent["about"],
  stats: statsJson.en as SiteContent["stats"],
  projects: projectsJson.en as SiteContent["projects"],
  experience: experienceJson.en as SiteContent["experience"],
  education: educationJson.en as SiteContent["education"],
  thoughts: thoughtsJson.en as SiteContent["thoughts"],
  tech: techJson.en as SiteContent["tech"],
  testimonials: testimonialsJson.en as SiteContent["testimonials"],
  aiTwin: aiTwinJson.en as SiteContent["aiTwin"],
  chat: chatJson.en as SiteContent["chat"],
  contact: contactJson.en as SiteContent["contact"],
};

export const content: Record<Locale, SiteContent> = { id, en };

export const defaultContent: SiteContent = id;
