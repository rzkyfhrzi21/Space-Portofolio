"use client";

import Image from "next/image";
import { useContent } from "@/hooks/useContent";
import { ScrollRevealText } from "@/components/ScrollRevealText";

export function AboutSection() {
  const { about } = useContent();
  return (
    <section id="about" className="bg-bg py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-stroke" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/75">
                {about.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-text-primary md:text-5xl lg:text-6xl">
              {about.headingLead}{" "}
              <span className="italic text-white/75">{about.headingAccent}</span>
            </h2>
            <p className="mb-8 mt-5 flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/75">
              {about.roles.map((role, i) => (
                <span key={role} className="inline-flex items-center gap-3">
                  {i > 0 && (
                    <span className="inline-block h-1 w-1 rounded-full bg-stroke" />
                  )}
                  {role}
                </span>
              ))}
            </p>
            <div className="h-px w-full bg-[linear-gradient(90deg,rgba(137,170,204,0.4)_0%,rgba(255,255,255,0.06)_60%,transparent_100%)]" />

            <ScrollRevealText
              paragraphs={about.paragraphs}
              className="mt-8 space-y-5"
            />

            <div className="mt-10 border-t border-stroke pt-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/75">
                {about.greeting}
              </p>
              <Image
                src="/images/about/signature.webp"
                alt="Tanda tangan"
                width={160}
                height={70}
                className="mt-3 h-14 w-auto opacity-70 invert"
              />
            </div>
          </div>

          <div className="group relative mx-auto max-w-[380px] lg:mx-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-2xl border border-stroke bg-surface">
              <div className="flex items-center gap-2 border-b border-stroke bg-bg/60 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-stroke" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stroke" />
                  <span className="h-2.5 w-2.5 rounded-full bg-stroke" />
                </div>
                <span className="ml-2 text-[10px] uppercase tracking-widest text-muted">
                  {about.fileName}
                </span>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about/profile.webp"
                  alt={about.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface/80 to-transparent" />
              </div>
              <div className="flex items-center justify-between border-t border-stroke bg-bg/40 px-4 py-3">
                <div>
                  <p className="text-[13px] font-semibold text-text-primary">
                    {about.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-muted">{about.role}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  <span className="text-[11px] text-muted">{about.available}</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-[1px] -z-10 rounded-2xl opacity-0 accent-gradient transition-opacity duration-500 group-hover:opacity-60" />
            <div className="absolute -right-3 -top-3 -z-10 h-5 w-5 rotate-45 accent-gradient opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
