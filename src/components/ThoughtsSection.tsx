"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function ThoughtsSection() {
  return (
    <section id="thoughts" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Jurnal" description="Catatan dan pemikiran tentang teknologi dan kehidupan.">
            Catatan terbaru
          </SectionHeading>
          <button className="flex w-fit items-center gap-1.5 rounded-full border border-stroke px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:text-text">
            Lihat semua tulisan
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        <div className="mt-12 divide-y divide-stroke border-y border-stroke">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#thoughts"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col gap-3 py-7 md:flex-row md:items-center md:justify-between md:gap-10"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <span className="text-accent">{article.category}</span>
                  <span className="size-1 rounded-full bg-faint" />
                  <span className="text-muted">{article.readingTime}</span>
                </div>
                <h3 className="mt-3 max-w-2xl font-heading text-xl font-semibold leading-snug tracking-tight text-text transition-colors group-hover:text-accent md:text-2xl">
                  {article.title}
                </h3>
              </div>
              <div className="flex items-center gap-5">
                <span className="font-mono text-xs text-muted">
                  {article.date}
                </span>
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-stroke text-muted transition-all group-hover:border-accent/50 group-hover:text-text">
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
