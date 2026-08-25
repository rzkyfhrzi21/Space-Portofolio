"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { useContent } from "@/hooks/useContent";

const AVATAR_GRADIENT = "bg-[linear-gradient(90deg,#89AACC,#4E85BF)]";

export function AiTwinSection() {
  const { aiTwin } = useContent();

  return (
    <section
      id="ai-twin"
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#4E85BF]/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4E85BF]/30 bg-[#1e3a5f]/40 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#89AACC]" />
              <span className="text-xs font-medium text-[#93c5fd]">
                {aiTwin.badge}
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-light leading-tight text-text-primary md:text-5xl">
              {aiTwin.headingLead}{" "}
              <span className="font-display italic text-white/75">
                {aiTwin.headingAccent}
              </span>
            </h2>
            <p className="mb-8 max-w-md text-sm font-normal leading-relaxed text-white/80 md:text-base">
              {aiTwin.description}
            </p>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-sm font-semibold text-bg transition-all duration-200 hover:scale-105 hover:bg-text-primary/90"
            >
              <span>{aiTwin.cta}</span>
              <MessageCircle className="h-4 w-4" />
            </button>
            <div className="mt-10 flex flex-wrap items-center gap-5 sm:gap-8">
              {aiTwin.stats.map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && (
                    <div className="hidden h-8 w-px self-center bg-stroke sm:block" />
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-xl italic text-text-primary md:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-white/75">
                      {stat.label}
                    </span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute -inset-4 -z-10 rounded-full bg-[#4E85BF]/[0.06] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-stroke bg-surface/40 p-5 backdrop-blur-sm transition-colors duration-500 hover:border-[#4E85BF]/20 md:p-7">
              <div className="mb-5 flex items-center gap-3 border-b border-stroke pb-5">
                <div className="relative h-10 w-10 shrink-0">
                  <div className={`absolute inset-0 rounded-full ${AVATAR_GRADIENT}`} />
                  <div className="absolute inset-[1.5px] flex items-center justify-center rounded-full bg-bg">
                    <span className="font-display text-[13px] italic text-text-primary">
                      AI
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-text-primary">
                    {aiTwin.chatName}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                    <span className="text-xs text-green-400">{aiTwin.online}</span>
                  </div>
                </div>
              </div>

              <div className="mb-3 flex justify-start gap-2.5">
                <div className={`mt-0.5 h-6 w-6 shrink-0 rounded-full ${AVATAR_GRADIENT}`} />
                <div className="max-w-[85%] break-words rounded-2xl rounded-tl-sm border border-stroke bg-bg px-4 py-2.5 text-sm leading-relaxed text-muted">
                  {aiTwin.greeting}
                </div>
              </div>
              <div className="mb-4 flex justify-start gap-2.5">
                <div className={`h-6 w-6 shrink-0 rounded-full ${AVATAR_GRADIENT}`} />
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-stroke bg-bg px-4 py-3">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-muted"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="mb-3 inline-flex cursor-default rounded-full border border-stroke px-3 py-1.5 text-[10px] text-muted/70 transition-colors hover:border-white/15">
                {aiTwin.suggestion}
              </div>
              <div className="pointer-events-none relative flex cursor-default items-center justify-between gap-2 rounded-xl border border-stroke bg-surface px-3 py-2 opacity-70">
                <span className="pl-1 text-sm text-muted/60">
                  {aiTwin.placeholder}
                </span>
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-lg ${AVATAR_GRADIENT}`}
                >
                  <Send className="h-3.5 w-3.5 text-white" />
                </div>
              </div>
              <p className="mt-3 text-center text-[10px] text-muted">
                {aiTwin.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
