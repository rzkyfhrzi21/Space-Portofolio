"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { SectionHeading } from "@/components/SectionHeading";

export function ProjectsSection() {
  const { projects } = useContent();
  return (
    <section id="projects" className="bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={projects.eyebrow}>
            {projects.heading}
          </SectionHeading>
          <div className="max-w-md md:text-right">
            <p className="text-sm text-muted md:text-base">
              {projects.description}
            </p>
            <Link
              href="#projects"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-text transition-colors hover:text-accent"
            >
              {projects.viewAll}
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.items.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-stroke bg-surface transition-colors hover:border-white/20"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-stroke bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-text backdrop-blur-sm">
                  {project.category}
                </span>
                <span className="absolute right-4 top-4 rounded-full border border-stroke bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-stroke px-3 py-1 text-[11px] font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
