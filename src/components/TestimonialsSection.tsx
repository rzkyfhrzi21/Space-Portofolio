"use client";

import { Star } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export function TestimonialsSection() {
  const { testimonials } = useContent();
  const loop = [...testimonials.items, ...testimonials.items];

  return (
    <section
      id="testimonials"
      className="relative z-10 w-full overflow-hidden bg-bg py-14 md:py-20"
    >
      <div className="mx-auto mb-8 max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="mb-2 flex items-center gap-3">
          <div className="h-px w-4 bg-stroke" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
            {testimonials.eyebrow}
          </span>
        </div>
        <h2 className="text-2xl font-light text-text-primary md:text-3xl">
          {testimonials.headingLead}{" "}
          <span className="font-display italic text-muted">
            {testimonials.headingAccent}
          </span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div
          className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]"
          style={{ ["--marquee-duration" as string]: "42s" }}
        >
          {loop.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="flex w-[260px] shrink-0 flex-col gap-3 rounded-2xl border border-stroke bg-surface/20 p-5 transition-all duration-300 hover:border-white/10 hover:bg-surface/40 md:w-[380px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-current text-[#89AACC]" />
                  ))}
                </div>
                <span className="rounded-full border border-stroke px-2.5 py-1 text-[9px] text-muted">
                  {testimonials.relationLabels[t.relation] ?? t.relation}
                </span>
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-text-primary">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="h-px w-full bg-stroke/50" />
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-stroke/60 font-display text-[11px] italic text-text-primary">
                  {t.initials}
                </div>
                <div className="flex min-w-0 flex-col gap-0.5 overflow-hidden">
                  <span className="truncate text-xs font-medium text-text-primary">
                    {t.name}
                  </span>
                  <span className="max-w-[220px] truncate text-[10px] text-muted">
                    {t.role} · {t.relation}
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
