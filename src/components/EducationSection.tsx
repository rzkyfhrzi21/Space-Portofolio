"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export function EducationSection() {
  const { education } = useContent();
  return (
    <section
      id="education"
      className="mx-auto max-w-[1200px] bg-bg px-6 pb-16 pt-0 md:px-10 md:pb-24"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
          {education.eyebrow}
        </span>
        <button className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-text">
          {education.viewAll}
          <ArrowUpRight className="size-3.5" />
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        {education.items.map((edu) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl border border-stroke bg-surface p-6"
          >
            <div className="flex items-start justify-between">
              <span className="flex size-12 items-center justify-center rounded-xl border border-stroke bg-surface-2 font-heading text-sm font-bold text-text">
                {edu.badge}
              </span>
              <span className="font-mono text-xs text-muted">{edu.period}</span>
            </div>
            <div className="mt-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-text">
                {edu.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {edu.institution}
              </p>
              <p className="mt-2 text-sm text-muted">{edu.meta}</p>
            </div>
          </motion.div>
        ))}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {education.certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-4 rounded-xl border border-stroke bg-surface p-4 transition-colors hover:border-accent/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-stroke bg-surface-2 font-heading text-xs font-bold text-accent">
                {cert.initials}
              </span>
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-text">
                  {cert.title}
                </h4>
                <p className="text-xs text-muted">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-faint transition-colors group-hover:text-text" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
