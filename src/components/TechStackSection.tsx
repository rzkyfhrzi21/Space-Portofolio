"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { githubHref } from "@/lib/content";
import { useContent, useLocale } from "@/hooks/useContent";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  slug: string;
  invert?: boolean;
}

interface TechCardData {
  label: string;
  tilt: string;
  count: number;
  items: TechItem[];
}

const ICONS_PATH = "/images/tech";

const CARD_BASE =
  "pointer-events-auto group relative flex h-auto min-h-[260px] w-full flex-col rounded-2xl border border-stroke bg-surface/30 pt-5 pb-4 pl-3 pr-4 backdrop-blur-sm transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-white/15 sm:max-w-[280px] md:max-w-[360px] md:pt-6 md:pb-6 md:pl-4 md:pr-6";

const FRONTEND_CARD: TechCardData = {
  label: "Frontend",
  tilt: "-rotate-2",
  count: 9,
  items: [
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextjs", invert: true },
    { name: "TypeScript", slug: "typescript" },
    { name: "JavaScript", slug: "javascript" },
    { name: "HTML5", slug: "html5" },
    { name: "CSS3", slug: "css3" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "Bootstrap", slug: "bootstrap" },
    { name: "Livewire", slug: "livewire" },
  ],
};

const BACKEND_CARD: TechCardData = {
  label: "Backend",
  tilt: "-rotate-2",
  count: 11,
  items: [
    { name: "Go", slug: "go" },
    { name: "Java", slug: "java" },
    { name: "Python", slug: "python" },
    { name: "PHP", slug: "php" },
    { name: "Spring Boot", slug: "spring" },
    { name: "Django REST", slug: "djangorest" },
    { name: "FastAPI", slug: "fastapi" },
    { name: "NestJS", slug: "nestjs" },
    { name: "Express.js", slug: "express", invert: true },
    { name: "Laravel", slug: "laravel" },
    { name: "Flask", slug: "flask", invert: true },
  ],
};

const TOOLS_AI_CARD: TechCardData = {
  label: "Tools & AI",
  tilt: "-rotate-2",
  count: 17,
  items: [
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MySQL", slug: "mysql" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "Redis", slug: "redis" },
    { name: "Docker", slug: "docker" },
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github", invert: true },
    { name: "GitLab", slug: "gitlab" },
    { name: "RabbitMQ", slug: "rabbitmq" },
    { name: "Postman", slug: "postman" },
    { name: "OpenAI", slug: "openai", invert: true },
    { name: "Gemini", slug: "gemini" },
    { name: "SharePoint", slug: "sharepoint" },
    { name: "OpenRouter", slug: "openrouter", invert: true },
    { name: "PowerApps", slug: "power-apps" },
    { name: "Power Automate", slug: "power-automate" },
  ],
};

function TechCard({ card, countLabel }: { card: TechCardData; countLabel: string }) {
  return (
    <div className={`${CARD_BASE} ${card.tilt}`}>
      <div className="mb-3 h-[2px] w-8 accent-gradient" />
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
        {card.label}
      </div>
      <div className="mb-4 flex flex-wrap gap-2 sm:gap-3">
        {card.items.map((item) => (
          <div
            key={item.name}
            className="flex w-[50px] flex-col items-center gap-1 sm:w-[60px]"
          >
            <Image
              src={`${ICONS_PATH}/${item.slug}.svg`}
              alt={item.name}
              width={28}
              height={28}
              loading="lazy"
              className={`h-5 w-5 object-contain sm:h-7 sm:w-7${
                item.invert ? " invert" : ""
              }`}
            />
            <span className="w-full text-center text-[9px] font-medium leading-tight break-words whitespace-normal text-white/85 sm:text-[10px]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto h-px w-full bg-stroke/40" />
      <div className="pt-3 text-[11px] font-medium text-white/70">
        {card.count} {countLabel}
      </div>
    </div>
  );
}

export function TechStackSection() {
  const { tech } = useContent();
  const { locale } = useLocale();
  const countLabel = locale === "en" ? "technologies" : "teknologi";
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const shared = {
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      };
      gsap.fromTo("[data-col-tech]", { yPercent: -8 }, { yPercent: 8, ...shared });
      gsap.fromTo("[data-col-capability]", { yPercent: 8 }, { yPercent: -8, ...shared });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-[220vh] bg-bg pt-16 pb-32 md:min-h-[340vh] md:pt-24 md:pb-48"
    >
      <div className="pointer-events-none sticky top-0 z-10 flex h-[100svh] w-full items-start justify-center px-6 pt-[12vh] md:pt-[14vh]">
        <div className="pointer-events-auto flex max-w-2xl flex-col items-center rounded-[40px] p-8 text-center shadow-2xl backdrop-blur-xl md:rounded-full md:p-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-white/10" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.25em] text-white/75">
              {tech.eyebrow}
            </span>
            <span className="h-px w-8 bg-white/10" />
          </div>
          <h2 className="mb-6 text-3xl leading-none tracking-tight text-text-primary sm:text-5xl md:text-7xl lg:text-[5rem]">
            {tech.headingLead}{" "}
            <span className="font-display italic text-white/75">
              {tech.headingAccent}
            </span>
          </h2>
          <p className="mb-8 max-w-sm text-[13px] leading-relaxed text-white/80">
            {tech.description}
          </p>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group pointer-events-auto relative inline-flex rounded-full p-[2px] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300 group-hover:accent-gradient" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-surface px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-text-primary">
              {tech.viewOnGithub}{" "}
              <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 flex h-full w-full justify-center px-4 pt-[30vh] md:px-0">
        <div className="relative grid h-full w-full max-w-[1400px] grid-cols-2 gap-4 md:gap-40">
          <div
            data-col-tech
            className="flex flex-col items-end gap-6 pt-[18vh] sm:gap-12 md:gap-32 md:pt-[22vh]"
          >
            <TechCard card={FRONTEND_CARD} countLabel={countLabel} />
            <TechCard card={BACKEND_CARD} countLabel={countLabel} />
            <TechCard card={TOOLS_AI_CARD} countLabel={countLabel} />
          </div>
          <div
            data-col-capability
            className="flex flex-col items-start gap-8 pt-[12vh] sm:gap-16 md:gap-40 md:pt-[15vh]"
          >
            {tech.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="pointer-events-auto group relative flex h-auto min-h-[260px] w-full rotate-3 flex-col overflow-hidden rounded-2xl border border-stroke bg-surface/30 p-4 backdrop-blur-sm transition-all duration-300 hover:rotate-0 hover:scale-105 hover:border-white/15 sm:max-w-[280px] md:max-w-[360px] md:p-6"
              >
                <div className="mb-3 h-[2px] w-8 accent-gradient" />
                <h3 className="mb-2 text-sm font-semibold text-text-primary sm:text-base">
                  {cap.title}
                </h3>
                <p className="mb-3 line-clamp-4 text-xs font-normal leading-relaxed text-white/80 sm:mb-4 sm:text-sm sm:line-clamp-none">
                  {cap.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1 sm:gap-1.5">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-stroke/60 px-2 py-0.5 text-[10px] font-medium text-white/80 sm:px-2.5 sm:text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
