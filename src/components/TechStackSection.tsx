"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { githubHref } from "@/lib/content";
import { useContent } from "@/hooks/useContent";
import { SectionHeading } from "@/components/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function TechStackSection() {
  const { tech } = useContent();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-tech-card]");
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      const chips = gsap.utils.toArray<HTMLElement>("[data-tech-chip]");
      gsap.from(chips, {
        opacity: 0,
        scale: 0.85,
        duration: 0.4,
        stagger: 0.02,
        ease: "back.out(1.6)",
        scrollTrigger: {
          trigger: root.querySelector("[data-tech-grid]"),
          start: "top 75%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate bg-bg py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={tech.eyebrow}>{tech.heading}</SectionHeading>
          <a
            href={githubHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-stroke px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted transition-colors hover:text-text"
          >
            {tech.viewOnGithub}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <p className="mt-4 max-w-xl text-base text-muted md:text-lg">
          {tech.description}
        </p>

        <div
          data-tech-grid
          className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {tech.categories.map((cat) => (
            <div
              key={cat.label}
              data-tech-card
              className="rounded-2xl border border-stroke bg-surface/50 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-text">
                  {cat.label}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.14em] text-faint">
                  {cat.count}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    data-tech-chip
                    className="flex items-center gap-2 rounded-lg border border-stroke bg-bg/60 px-3 py-2 text-sm text-muted transition-colors hover:border-accent/40 hover:text-text"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={18}
                      height={18}
                      className="size-[18px] object-contain"
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tech.capabilities.map((cap) => (
            <div
              key={cap.title}
              data-tech-card
              className="flex flex-col rounded-2xl border border-stroke bg-gradient-to-b from-surface/60 to-surface/20 p-6"
            >
              <h3 className="font-heading text-xl font-semibold text-text">
                {cap.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {cap.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
