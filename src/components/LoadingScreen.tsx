"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "@/store/hooks";

const WORDS = ["Build", "Engineering", "Create"];
const EXPECTED_VIDEOS = 2;
const MAX_WAIT_MS = 6000;

export function LoadingScreen() {
  const muxReady = useAppSelector((s) => s.ui.muxReady);
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [timedOut, setTimedOut] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setTimedOut(true), MAX_WAIT_MS);
    return () => window.clearTimeout(t);
  }, []);

  const target = timedOut
    ? 100
    : Math.min(100, 15 + (muxReady.length / EXPECTED_VIDEOS) * 85);

  useEffect(() => {
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p >= target) return p;
        return Math.min(target, p + Math.max((target - p) * 0.07, 0.35));
      });
    }, 40);
    return () => window.clearInterval(id);
  }, [target]);

  useEffect(() => {
    const id = window.setInterval(
      () => setWordIndex((i) => (i + 1) % WORDS.length),
      850,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (progress < 99.5 || exiting) return;
    const t = window.setTimeout(() => setExiting(true), 300);
    return () => window.clearTimeout(t);
  }, [progress, exiting]);

  useEffect(() => {
    if (exiting) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [exiting]);

  if (gone) return null;

  return (
    <AnimatePresence onExitComplete={() => setGone(true)}>
      {!exiting && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[200] flex flex-col bg-[#0d0d0d]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute left-6 top-6 text-[11px] font-semibold uppercase tracking-[0.5em] text-white/60 md:left-12 md:top-12"
          >
            Portfolio
          </motion.p>

          <div className="flex flex-1 items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[wordIndex]}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="font-display text-5xl italic text-text-primary md:text-7xl"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <span className="absolute bottom-6 right-6 font-sans text-7xl font-bold leading-none tabular-nums text-text-primary md:bottom-10 md:right-12 md:text-9xl">
            {String(Math.floor(progress)).padStart(3, "0")}
          </span>

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
            <div
              className="h-full origin-left accent-gradient"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
