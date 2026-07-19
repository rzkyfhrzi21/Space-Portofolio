"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function SpaceBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onCanPlay = () => setReady(true);
    video.addEventListener("canplay", onCanPlay);
    video.play().catch(() => {});
    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <div className="absolute inset-0 -z-0 overflow-hidden bg-black">
      <Image
        src="/images/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />

      <video
        ref={videoRef}
        className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/space.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 48%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}
