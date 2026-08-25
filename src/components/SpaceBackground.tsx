"use client";

import { MuxVideoBackground } from "@/components/MuxVideoBackground";

const HERO_PLAYBACK_ID = "IrZ146m800ITSRBnrRgEwwg4R02AhJIO6A3AC6o95e4zA";

export function SpaceBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black/20">
      <MuxVideoBackground
        playbackId={HERO_PLAYBACK_ID}
        poster="/images/hero-poster.jpg"
        priority
      />
      <div className="absolute inset-0 bg-black/25" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(0,0,0,0.35) 0%, transparent 70%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
