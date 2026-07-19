"use client";

import { useContent } from "@/hooks/useContent";

export function StatsSection() {
  const { stats } = useContent();
  return (
    <section className="border-y border-stroke bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-6 text-center md:grid-cols-3 md:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-heading text-5xl font-semibold tracking-tight text-text md:text-6xl">
              {stat.value}
            </span>
            <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
