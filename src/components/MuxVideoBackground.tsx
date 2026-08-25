"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type MuxVideoBackgroundProps = {
  playbackId: string;
  flip?: boolean;
  poster?: string;
  priority?: boolean;
};

export function MuxVideoBackground({
  playbackId,
  flip,
  poster,
  priority,
}: MuxVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls: { destroy: () => void } | null = null;
    let cancelled = false;

    const onPlaying = () => setReady(true);

    (async () => {
      const src = `https://stream.mux.com/${playbackId}.m3u8`;
      try {
        const { default: Hls } = await import("hls.js");
        if (cancelled) return;
        if (Hls.isSupported()) {
          const instance = new Hls({ capLevelToPlayerSize: true });
          hls = instance;
          instance.on(Hls.Events.ERROR, (_event, data) => {
            if (data.fatal) {
              console.warn(
                `[MuxVideoBackground] HLS fatal error (${data.type}):`,
                data.details,
              );
            }
          });
          instance.loadSource(src);
          instance.attachMedia(video);
          instance.on(Hls.Events.MEDIA_ATTACHED, () => {
            video.muted = true;
            video.play().catch(() => {});
          });
          video.addEventListener("playing", onPlaying, { once: true });
          return;
        }
      } catch (error) {
        console.warn("[MuxVideoBackground] Failed to load hls.js:", error);
      }
      if (cancelled) return;
      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
        video.addEventListener(
          "loadedmetadata",
          () => {
            video.muted = true;
            video.play().catch(() => {});
            setReady(true);
          },
          { once: true },
        );
      }
    })();

    return () => {
      cancelled = true;
      hls?.destroy();
    };
  }, [playbackId]);

  return (
    <>
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        className={`absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-1000 ${
          flip ? "scale-y-[-1]" : ""
        } ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
