"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { useContent } from "@/hooks/useContent";

const socialIcons = {
  linkedin: LinkedinIcon,
  github: GithubIcon,
  instagram: InstagramIcon,
} as const;

export function ContactSection() {
  const { contact } = useContent();
  const marqueeItems = Array.from({ length: 10 }, () => contact.marquee);

  return (
    <section
      id="contact"
      className="relative flex min-h-[80vh] flex-col items-center justify-between overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/25" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(0,0,0,0.25) 0%, transparent 70%)",
          }}
        />
        <div className="absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mt-10 w-full overflow-hidden whitespace-nowrap md:mt-20">
        <div className="contact-marquee-track inline-block">
          {[...marqueeItems, ...marqueeItems].map((text, i) => (
            <span
              key={i}
              className="pr-8 font-display text-8xl italic tracking-tight text-text/10 md:text-[10rem] lg:text-[12rem]"
            >
              {text} -
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mb-20 mt-[-10vh] flex flex-col items-center px-6 text-center md:mt-[-20vh]">
        <div className="mb-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-muted">
          {contact.eyebrow}
        </div>

        <h2 className="mb-10 max-w-2xl text-4xl leading-none tracking-tight text-text md:text-5xl lg:text-[5rem]">
          {contact.headingLead} <br />
          <span className="font-display italic text-muted">
            {contact.headingAccent}
          </span>
        </h2>

        <a
          href={contact.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex rounded-full p-[2px] transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300 group-hover:accent-gradient" />
          <span className="relative flex items-center gap-3 rounded-full bg-bg px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-text">
            {contact.cta}
            <ArrowUpRight className="h-4 w-4 opacity-70" />
          </span>
        </a>
      </div>

      <div className="relative z-10 mt-auto flex w-full max-w-[1400px] flex-col items-center gap-8 border-t border-white/5 px-6 pt-8">
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-6">
            {contact.socials.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#878787]/50 transition-colors hover:text-text"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500/80" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#878787]/50">
              {contact.status}
            </span>
          </div>
        </div>

        <div className="text-[10px] font-medium uppercase tracking-widest text-[#878787]/40">
          {contact.copyright}
        </div>
      </div>
    </section>
  );
}
