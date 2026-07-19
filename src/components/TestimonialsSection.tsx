"use client";

import { useContent } from "@/hooks/useContent";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  const { testimonials } = useContent();
  const relationLabel = testimonials.relationLabels;
  const loop = [...testimonials.items, ...testimonials.items];

  return (
    <section
      id="testimonials"
      className="relative z-10 w-full overflow-hidden bg-bg py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading eyebrow={testimonials.eyebrow}>
          {testimonials.heading}
        </SectionHeading>
      </div>

      <div className="relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div
          className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]"
          style={{ ["--marquee-duration" as string]: "42s" }}
        >
          {loop.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              className="flex w-[340px] shrink-0 flex-col rounded-2xl border border-stroke bg-surface/50 p-6 md:w-[420px]"
            >
              <figcaption className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {relationLabel[t.relation] ?? "Colleague"}
              </figcaption>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full border border-stroke bg-surface-2 text-xs font-semibold text-text">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-text">{t.name}</p>
                  <p className="text-xs text-faint">
                    {t.role} · {t.relation}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
