"use client";

import { useContent } from "@/hooks/useContent";

export function StatsSection() {
  const { stats } = useContent();
  return (
    <section className="border-y border-stroke bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 divide-y divide-white/10 md:grid-cols-3 md:gap-8 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-4 pb-8 pt-8 text-center md:py-0"
            >
              <span className="mb-4 font-display text-6xl italic leading-none text-text-primary lg:text-[5rem]">
                {stat.value.replace(/\+$/, "")}
                <span className="text-muted">+</span>
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-[0.4em] text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
