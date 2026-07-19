"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { hero } from "@/lib/content";
import { SpaceBackground } from "@/components/SpaceBackground";

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % hero.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden md:min-h-[100dvh]"
    >
      <SpaceBackground />

      <div className="relative z-10 mt-20 flex flex-col items-center px-6 pb-28 text-center md:pb-32">
        <p
          className="blur-in mb-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.6)" }}
        >
          {hero.eyebrow}
        </p>

        <h1
          className="name-reveal mb-8 font-display text-6xl italic leading-[0.85] tracking-tight text-text md:text-8xl lg:text-[9rem]"
          style={{
            textShadow:
              "0 2px 40px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.3)",
          }}
        >
          {hero.name}
        </h1>

        <div className="blur-in mb-10 inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/20 px-5 py-2 backdrop-blur-sm">
          <span className="text-lg font-medium text-white/60 md:text-2xl">
            {hero.rolePrefix}
          </span>
          <span
            key={roleIndex}
            className="inline-block min-w-[10ch] animate-role-fade-in text-center font-display text-lg font-medium italic text-text md:min-w-[11ch] md:text-2xl"
          >
            {hero.roles[roleIndex]}
          </span>
          <span className="text-lg font-medium text-white/60 md:text-2xl">
            {hero.roleSuffix}
          </span>
        </div>

        <p
          className="blur-in mb-12 max-w-md text-sm leading-relaxed text-white/55"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
        >
          {hero.description}
        </p>

        <div className="blur-in mb-6 inline-flex items-center gap-4">
          <Link
            href={hero.primaryCta.href}
            className="group relative inline-flex rounded-full transition-transform hover:scale-105"
          >
            <span className="relative inline-flex rounded-full bg-white/90 px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-bg backdrop-blur-md transition-all group-hover:bg-white">
              {hero.primaryCta.label}
            </span>
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="group relative inline-flex rounded-full p-[2px] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full border border-white/25 transition-all duration-300 group-hover:border-transparent" />
            <span
              className="absolute inset-0 rounded-full opacity-0 accent-gradient transition-opacity duration-300 group-hover:opacity-100"
              style={{ padding: "1px" }}
            />
            <span className="relative inline-flex rounded-full bg-black/30 px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
              {hero.secondaryCta.label}
            </span>
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-center transition-opacity hover:opacity-80 md:bottom-8"
        aria-label="Scroll to about section"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-muted">
          Gulir
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-white/10">
          <div className="absolute left-0 top-0 h-1/2 w-full animate-scroll-down bg-gradient-to-b from-transparent via-[#89AACC] to-transparent" />
        </div>
      </Link>
    </section>
  );
}
