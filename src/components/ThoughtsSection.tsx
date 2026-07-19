"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export function ThoughtsSection() {
  const { thoughts } = useContent();
  return (
    <section id="thoughts" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted">
                {thoughts.eyebrow}
              </span>
            </div>
            <h2 className="mb-4 text-4xl leading-none tracking-tight text-text md:text-5xl lg:text-[4rem]">
              {thoughts.headingLead}{" "}
              <span className="font-display italic text-muted">
                {thoughts.headingAccent}
              </span>
            </h2>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted">
              {thoughts.description}
            </p>
          </div>

          <Link
            href="/blog"
            className="group relative inline-flex shrink-0 rounded-full p-[2px] transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full bg-white/10 transition-all duration-300 group-hover:accent-gradient" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-bg px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-text md:px-8 md:py-3.5 md:text-[11px]">
              {thoughts.viewAll}
              <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4">
          {thoughts.items.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={article.href ?? "#thoughts"}
                className="group flex flex-row items-center gap-3 rounded-[32px] border border-stroke bg-surface/30 p-3 transition-colors duration-300 hover:bg-surface sm:gap-6 sm:rounded-full sm:px-6 sm:py-5"
              >
                <div className="flex-1 px-4 sm:px-2">
                  <h3 className="mb-3 text-sm font-medium text-text transition-colors group-hover:text-white sm:mb-2 sm:text-lg md:text-xl">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted sm:gap-4 sm:text-sm">
                    <span className="rounded-full border border-stroke bg-surface/30 px-2.5 py-1 text-[9px] text-muted">
                      {article.category}
                    </span>
                    <span>{article.readingTime}</span>
                    <span className="hidden h-1 w-1 rounded-full bg-stroke sm:block" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center self-center rounded-full border border-stroke transition-all group-hover:border-transparent group-hover:bg-text group-hover:text-bg sm:mr-2 sm:h-12 sm:w-12">
                  <ArrowRight className="h-3 w-3 -rotate-45 transition-transform duration-300 group-hover:rotate-0 sm:h-5 sm:w-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
