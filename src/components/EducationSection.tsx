"use client";

import { ArrowRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export function EducationSection() {
  const { education } = useContent();
  return (
    <section
      id="education"
      className="mx-auto max-w-[1200px] bg-bg px-6 pb-16 pt-0 md:px-10 md:pb-24 lg:px-16"
    >
      <div className="mb-12 h-px w-full bg-stroke md:mb-16" />
      <div className="rounded-[28px] border border-stroke bg-surface/30 px-6 py-10 md:px-16 md:py-16">
        <div className="mb-14 flex flex-wrap items-start justify-between gap-8 md:mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-stroke" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                {education.eyebrow}
              </span>
            </div>
            <h2 className="font-body text-3xl font-light text-text-primary md:text-5xl">
              {education.headingLead}{" "}
              <span className="font-display italic text-white/75">
                {education.headingAccent}
              </span>
            </h2>
          </div>
          <a
            href="#education"
            className="group relative inline-flex shrink-0 rounded-full p-[2px] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300 group-hover:accent-gradient" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-bg px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-text-primary md:px-8 md:py-3.5 md:text-[11px]">
              {education.viewAll}
              <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[420px_1fr]">
          {education.items.map((edu) => (
            <div
              key={edu.degree}
              className="relative flex flex-col justify-between gap-10 rounded-2xl border border-stroke bg-gradient-to-b from-white/[0.035] to-transparent p-8"
            >
              <div className="flex flex-col gap-3.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-purple">
                  {education.eyebrow.split("&")[0].trim()}
                </span>
                <h3 className="text-2xl font-light leading-[1.15] tracking-tight text-text-primary md:text-[30px]">
                  {edu.degree}
                </h3>
                <span className="text-sm leading-relaxed text-muted">
                  {edu.institution}
                </span>
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-stroke pt-6">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    {edu.gpaLabel}
                  </span>
                  <span className="text-3xl font-light tracking-tight text-purple">
                    {edu.gpa}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                    {edu.degreeShort}
                  </span>
                  <span className="font-mono text-sm text-text-primary/80">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3.5">
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                {education.eyebrow.split("&")[1]?.trim()}
              </span>
              <span className="font-mono text-[11px] text-muted/70">
                {education.certifications.length} total
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {education.certifications.map((cert) => (
                <button
                  key={cert.title}
                  type="button"
                  className="flex flex-col gap-2.5 rounded-xl border border-stroke bg-white/[0.015] px-5 py-4 text-left transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-muted">{cert.issuer}</span>
                    <span className="font-mono text-[11px] text-muted/60">
                      {cert.year}
                    </span>
                  </div>
                  <span className="text-sm leading-snug text-text-primary">
                    {cert.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
