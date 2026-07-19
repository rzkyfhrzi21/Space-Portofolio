"use client";

import { ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/content";

export function ContactSection() {
  const marqueeItems = Array.from({ length: 10 }, () => contact.marquee);

  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] flex-col items-center justify-between overflow-hidden bg-bg pt-16"
    >
      <div className="w-full border-y border-stroke py-5">
        <div className="flex w-max animate-marquee gap-6 whitespace-nowrap [--marquee-duration:40s]">
          {[...marqueeItems, ...marqueeItems].map((text, i) => (
            <span
              key={i}
              className="font-heading text-xl font-medium uppercase tracking-tight text-muted"
            >
              {text} <span className="text-accent">—</span>
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {contact.eyebrow}
        </span>

        <h2 className="max-w-3xl text-balance font-heading text-4xl font-medium leading-[1.05] tracking-tight text-text md:text-6xl lg:text-7xl">
          {contact.heading}
        </h2>

        <a
          href="mailto:hello@izaditya.my.id"
          className="group mt-10 flex items-center gap-2 rounded-full bg-text px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-bg transition-transform hover:scale-[1.03]"
        >
          {contact.cta}
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {contact.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-text"
            >
              {social.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-stroke px-6 py-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-faint md:flex-row md:px-10">
        <span className="flex items-center gap-2">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-emerald-400" />
          {contact.status}
        </span>
        <span>{contact.copyright}</span>
      </div>
    </section>
  );
}
