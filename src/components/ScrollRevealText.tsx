"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion, useScroll } from "framer-motion";

type ScrollRevealTextProps = {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
};

const START_OPACITY = 0.2;

interface WordEntry {
  el: HTMLSpanElement | null;
  start: number;
  end: number;
}

export function ScrollRevealText({
  paragraphs,
  className,
  paragraphClassName = "flex flex-wrap text-sm font-normal leading-[1.8] text-white/80 md:text-[15px]",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<WordEntry[]>([]);
  const reducedMotion = Boolean(useReducedMotion());
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.45"],
  });

  const paragraphWords = paragraphs.map((paragraph) =>
    paragraph.split(/\s+/).filter(Boolean),
  );
  const totalWords = paragraphWords.reduce(
    (sum, words) => sum + words.length,
    0,
  );

  const paragraphStarts = paragraphWords.map((_, i) =>
    paragraphWords.slice(0, i).reduce((sum, words) => sum + words.length, 0),
  );

  useEffect(() => {
    if (totalWords === 0) return;
    wordsRef.current.length = totalWords;

    if (reducedMotion) {
      for (const w of wordsRef.current) {
        w.el?.style.setProperty("opacity", "1");
      }
      return;
    }

    const update = (v: number) => {
      for (const w of wordsRef.current) {
        if (!w.el) continue;
        const raw =
          v <= w.start ? 0 : v >= w.end ? 1 : (v - w.start) / (w.end - w.start);
        w.el.style.opacity = String(START_OPACITY + (1 - START_OPACITY) * raw);
      }
    };

    update(scrollYProgress.get());
    return scrollYProgress.on("change", update);
  }, [scrollYProgress, reducedMotion, totalWords]);

  if (totalWords === 0) return null;

  return (
    <div ref={containerRef} className={className}>
      {paragraphWords.map((words, pIdx) => (
        <p
          key={pIdx}
          aria-label={paragraphs[pIdx]}
          className={paragraphClassName}
        >
          {words.map((word, wIdx) => {
            const index = paragraphStarts[pIdx] + wIdx;
            const start = index / totalWords;
            const end = (index + 1) / totalWords;
            return (
              <span
                key={wIdx}
                aria-hidden="true"
                ref={(el) => {
                  wordsRef.current[index] = { el, start, end };
                }}
                className="mr-[0.25em] inline-block"
                style={{ opacity: START_OPACITY }}
              >
                {word}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
