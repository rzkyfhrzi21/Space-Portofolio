"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type ScrollRevealTextProps = {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
};

const START_OPACITY = 0.2;

function Word({
  children,
  progress,
  index,
  count,
  reducedMotion,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
  count: number;
  reducedMotion: boolean;
}) {
  const start = count <= 1 ? 0 : index / count;
  const end = count <= 1 ? 1 : (index + 1) / count;
  const opacity = useTransform(progress, [start, end], [START_OPACITY, 1]);

  return (
    <motion.span
      aria-hidden="true"
      style={reducedMotion ? undefined : { opacity }}
      className="mr-[0.25em] inline-block"
    >
      {children}
    </motion.span>
  );
}

export function ScrollRevealText({
  paragraphs,
  className,
  paragraphClassName = "flex flex-wrap text-sm font-normal leading-[1.8] text-white/80 md:text-[15px]",
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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

  if (totalWords === 0) return null;

  const paragraphStarts = paragraphWords.map((_, i) =>
    paragraphWords.slice(0, i).reduce((sum, words) => sum + words.length, 0),
  );

  return (
    <div ref={containerRef} className={className}>
      {paragraphWords.map((words, pIdx) => (
        <p key={pIdx} aria-label={paragraphs[pIdx]} className={paragraphClassName}>
          {words.map((word, wIdx) => (
            <Word
              key={wIdx}
              progress={scrollYProgress}
              index={paragraphStarts[pIdx] + wIdx}
              count={totalWords}
              reducedMotion={reducedMotion}
            >
              {word}
            </Word>
          ))}
        </p>
      ))}
    </div>
  );
}
