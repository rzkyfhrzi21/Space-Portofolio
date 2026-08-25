"use client";

import { useContent } from "@/hooks/useContent";
import { ScrollRevealText } from "@/components/ScrollRevealText";

export function ExperienceSection() {
  const { experience } = useContent();
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-3xl" />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-stroke" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/75">
                {experience.eyebrow}
              </span>
            </div>
            <h2 className="mt-3 font-body text-3xl font-light text-text-primary md:text-5xl">
              {experience.headingLead}{" "}
              <span className="font-display italic text-white/75">
                {experience.headingAccent}
              </span>
            </h2>
            <p className="mt-3 max-w-sm text-sm text-white/80">
              {experience.description}
            </p>
          </div>
          <div className="hidden md:block">
            <div className="rounded-full border border-stroke px-4 py-2 text-xs text-white/75">
              {experience.meta}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-6 left-0 top-6 w-px md:hidden">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent blur-[1px]" />
          </div>
          <div className="relative space-y-4 pl-4 md:pl-0">
            <div className="absolute bottom-6 left-[139px] top-6 hidden w-px md:block">
              <div className="h-full w-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent blur-[1px]" />
            </div>
            {experience.items.map((exp) => (
              <div
                key={exp.company}
                className="group relative flex cursor-default gap-0 md:gap-8"
              >
                <div className="absolute left-0 top-6 flex -translate-x-1/2 items-center justify-center md:hidden">
                  {exp.current ? (
                    <div className="relative flex items-center justify-center">
                      <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-400/20 duration-1000" />
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-950/90 shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <span className="relative flex h-3 w-3 items-center justify-center rounded-full border border-white/25 bg-bg transition-all duration-300 group-hover:border-white/70 group-hover:bg-white/10">
                        <span className="h-1 w-1 rounded-full bg-white/40 transition-colors duration-300 group-hover:bg-white" />
                      </span>
                    </div>
                  )}
                </div>
                <div className="absolute left-[139px] top-6 hidden -translate-x-1/2 items-center justify-center md:flex">
                  {exp.current ? (
                    <div className="relative flex items-center justify-center">
                      <span className="absolute h-5 w-5 animate-ping rounded-full bg-emerald-400/20 duration-1000" />
                      <span className="relative flex h-4 w-4 items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-950/90 shadow-[0_0_12px_rgba(52,211,153,0.5)] transition-transform duration-300 group-hover:scale-125">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                      </span>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center">
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/25 bg-bg transition-all duration-300 group-hover:scale-125 group-hover:border-white/70 group-hover:bg-white/10 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors duration-300 group-hover:bg-white" />
                      </span>
                    </div>
                  )}
                </div>

                <div className="relative hidden min-w-[120px] flex-col items-end pt-5 md:flex">
                  <div className="text-right font-body text-xs leading-relaxed text-white/75 transition-colors duration-300 group-hover:text-white">
                    <div>{exp.start}</div>
                    <div>{exp.end}</div>
                  </div>
                </div>

                <div className="flex-1 rounded-2xl border border-stroke bg-surface/20 p-5 transition-all duration-300 group-hover:border-white/15 group-hover:bg-surface/40 group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] md:rounded-3xl md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-1 flex items-center gap-2 md:hidden">
                        <div className="h-2 w-2 flex-shrink-0 rounded-full bg-stroke/80 ring-2 ring-bg transition-colors group-hover:bg-white/50" />
                        <span className="text-[10px] tracking-wide text-white/70">
                          {exp.start} - {exp.end}
                        </span>
                      </div>
                      <h3 className="font-body text-base font-medium text-text-primary">
                        {exp.role}
                      </h3>
                      <div className="mt-0.5 text-sm text-white/75">
                        {exp.company}
                      </div>
                    </div>
                    {exp.current && (
                      <div className="flex items-center gap-1.5 rounded-full border border-stroke bg-white/5 px-3 py-1 text-[10px] text-muted">
                        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                        {experience.current}
                      </div>
                    )}
                  </div>
                  <div className="my-4 h-px w-full bg-stroke/50" />
                  <div className="space-y-1.5">
                    <div className="mb-3">
                      <ScrollRevealText
                        paragraphs={[exp.description]}
                        paragraphClassName="flex flex-wrap max-w-2xl text-xs leading-relaxed text-white/80"
                      />
                    </div>
                    {exp.points.map((point, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="mt-[6px] h-1 w-1 flex-shrink-0 rounded-full bg-stroke/80" />
                        <div className="min-w-0 flex-1">
                          <ScrollRevealText
                            paragraphs={[point]}
                            paragraphClassName="flex flex-wrap text-[11px] leading-relaxed text-white/75"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
