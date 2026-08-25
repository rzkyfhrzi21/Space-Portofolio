"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import type { Project } from "@/types";

export function ProjectsSection() {
  const { projects } = useContent();
  const [active, setActive] = useState<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 200, damping: 25, mass: 0.6 });
  const py = useSpring(my, { stiffness: 200, damping: 25, mass: 0.6 });

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    mx.set(e.clientX + 28);
    my.set(e.clientY - 120);
  };

  return (
    <section id="projects" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/75">
                {projects.eyebrow}
              </span>
            </div>
            <h2 className="mb-4 text-4xl leading-none tracking-tight text-text-primary md:text-5xl lg:text-[4rem]">
              {projects.headingLead}{" "}
              <span className="font-display italic text-white/75">
                {projects.headingAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-white/80">
              {projects.description}
            </p>
          </div>
          <a
            href="#projects"
            className="group relative hidden shrink-0 rounded-full p-[2px] transition-transform hover:scale-105 md:inline-flex"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300 group-hover:accent-gradient" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-bg px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-text-primary">
              {projects.viewAll}
              <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>

        <div className="border-t border-white/[0.09]" onMouseMove={onMouseMove}>
          {projects.items.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={i + 1}
              onEnter={() => setActive(i)}
              onLeave={() => setActive(null)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <a
            href="#projects"
            className="group relative inline-flex rounded-full p-[2px]"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300 group-hover:accent-gradient" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-bg px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-text-primary">
              {projects.viewAll}
              <ArrowRight className="h-4 w-4 opacity-70" />
            </span>
          </a>
        </div>
      </div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden aspect-[16/10] w-[clamp(240px,26vw,400px)] overflow-hidden rounded-2xl border bg-surface shadow-2xl lg:block"
        animate={{
          opacity: active === null ? 0 : 1,
          scale: active === null ? 0.9 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          x: px,
          y: py,
          borderColor: active === null ? undefined : `${projects.items[active].accent}66`,
        }}
      >
        {projects.items.map((project, i) => (
          <Image
            key={project.slug}
            src={project.image}
            alt=""
            fill
            sizes="400px"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
        <div className="pointer-events-none absolute bottom-3.5 left-4 text-[9.5px] uppercase tracking-[0.22em] text-white/80">
          View project ↗
        </div>
      </motion.div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  onEnter,
  onLeave,
}: {
  project: Project;
  index: number;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div className="border-b border-white/[0.09]">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        className="group relative grid grid-cols-[32px_minmax(0,1fr)_auto] items-start gap-4 overflow-hidden px-1 py-6 sm:grid-cols-[clamp(44px,6vw,76px)_minmax(0,1fr)_auto] sm:gap-6 md:gap-10 md:py-9"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(90% 150% at 6% 50%, ${project.accent}26, transparent 68%)`,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-[-1px] left-0 right-0 h-px origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, ${project.accent}00)`,
          }}
        />
        <span className="relative self-start pt-1.5 text-[11px] tracking-wider text-white/30">
          {String(index).padStart(2, "0")}
        </span>
        <div className="relative min-w-0">
          <div className="transition-transform duration-700 ease-out group-hover:translate-x-2 md:group-hover:translate-x-4">
            <h3 className="font-display text-xl italic leading-[1.02] tracking-tight text-text-primary sm:text-3xl md:text-5xl lg:text-[3.25rem]">
              {project.title}
            </h3>
            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-700 ease-out group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <div className="overflow-hidden">
                <p className="max-w-[480px] text-[13px] leading-relaxed text-white/60 line-clamp-2 md:line-clamp-none">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[9.5px] uppercase tracking-wider text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-shrink-0 items-center gap-3 pt-1 sm:gap-5 sm:pt-1.5 md:gap-8">
          <div className="text-right">
            <span
              className="inline-flex max-w-[110px] items-center truncate rounded-full border px-2.5 py-1 text-[8.5px] uppercase tracking-[0.18em] transition-all duration-500 sm:max-w-none sm:px-3 sm:py-1.5 sm:text-[9.5px] sm:tracking-[0.2em]"
              style={{
                borderColor: `${project.accent}33`,
                background: `${project.accent}10`,
                color: project.accent,
              }}
            >
              <span className="sm:hidden">{project.categoryShort}</span>
              <span className="hidden sm:inline">{project.category}</span>
            </span>
            <p className="mt-2 text-[10px] text-white/35">{project.year}</p>
          </div>
          <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-white/[0.14] text-white/55 transition-all duration-700 ease-out group-hover:-rotate-45 sm:h-11 sm:w-11">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </a>
    </div>
  );
}
