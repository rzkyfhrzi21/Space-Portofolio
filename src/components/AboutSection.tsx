"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  const { about } = useContent();
  return (
    <section id="about" className="bg-bg py-20 md:py-32">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow={about.eyebrow}>
            {about.heading}
          </SectionHeading>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {about.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="size-1 rounded-full bg-accent" />}
                {role}
              </span>
            ))}
          </div>

          <div className="mt-8 h-px w-full bg-stroke" />

          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted md:text-lg">
            {about.paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-stroke bg-surface"
        >
          <div className="flex items-center gap-2 border-b border-stroke px-4 py-3">
            <span className="size-3 rounded-full bg-white/15" />
            <span className="size-3 rounded-full bg-white/15" />
            <span className="size-3 rounded-full bg-white/15" />
            <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              Aditya.jpg
            </span>
          </div>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/about/profile.webp"
              alt="Aditya Imam Zuhdi"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
            <Image
              src="/images/about/signature.webp"
              alt="Signature"
              width={160}
              height={70}
              className="absolute bottom-5 right-5 h-auto w-32 opacity-90 invert"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
