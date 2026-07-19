"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="PENGALAMAN SAYA">
            Riwayat kerja.
          </SectionHeading>
          <div className="max-w-md md:text-right">
            <p className="text-sm text-muted md:text-base">
              Perusahaan dan peran yang membentuk perjalanan engineering saya.
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              3 Peran · 3+ Tahun
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-0">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 gap-4 border-t border-stroke py-8 md:grid-cols-[220px_1fr] md:gap-10"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted">
                  <span>{exp.start}</span>
                  <span className="h-px w-4 bg-stroke" />
                  <span>{exp.end}</span>
                </div>
                {exp.current && (
                  <span className="flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-text">
                    <span className="size-1.5 animate-pulse-dot rounded-full bg-accent" />
                    Saat ini
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-text md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {exp.company}
                </p>
                <ul className="mt-5 space-y-3">
                  {exp.points.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-faint" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
