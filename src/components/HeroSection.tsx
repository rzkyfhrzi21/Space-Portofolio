"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { hero } from "@/lib/content";
import { SpaceBackground } from "@/components/SpaceBackground";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-center"
    >
      <SpaceBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-4xl flex-col items-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-stroke bg-black/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted backdrop-blur-sm"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          {hero.eyebrow}
        </motion.span>

        <motion.h1
          variants={item}
          className="font-heading text-[15vw] font-medium leading-[0.95] tracking-tight text-text sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-balance text-base leading-relaxed text-muted md:text-lg"
        >
          {hero.description}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href={hero.primaryCta.href}
            className="group flex items-center gap-2 rounded-full bg-text px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-bg transition-transform hover:scale-[1.03]"
          >
            {hero.primaryCta.label}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="flex items-center gap-2 rounded-full border border-stroke bg-black/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-text backdrop-blur-sm transition-colors hover:border-accent/50"
          >
            {hero.secondaryCta.label}
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted"
      >
        <ArrowDown className="size-4 animate-bounce" />
        Gulir
      </motion.div>
    </section>
  );
}
