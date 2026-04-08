"use client";

import { useEffect, useRef, useState } from "react";

const POSTER_MAX_WIDTH = 720;

function captureFrame(video: HTMLVideoElement): string | null {
  try {
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (!vw || !vh) return null;
    let w = vw;
    let h = vh;
    if (w > POSTER_MAX_WIDTH) {
      h = Math.round((vh * POSTER_MAX_WIDTH) / vw);
      w = POSTER_MAX_WIDTH;
    }
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, w, h);
    return canvas.toDataURL("image/jpeg", 0.85);
  } catch {
    return null;
  }
}

export default function TestimonialVideo({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [poster, setPoster] = useState<string | null>(null);
  const done = useRef(false);

  useEffect(() => {
    done.current = false;
    setPoster(null);
    const el = ref.current;
    if (!el) return;

    const finish = () => {
      try {
        el.currentTime = 0;
      } catch {
        /* noop */
      }
    };

    const onSeeked = () => {
      if (done.current) return;
      const url = captureFrame(el);
      if (url) {
        done.current = true;
        setPoster(url);
      }
      finish();
    };

    const runSeek = () => {
      if (done.current) return;
      try {
        const dur = el.duration;
        const t =
          dur && !Number.isNaN(dur) && dur > 0
            ? Math.min(0.2, dur * 0.03)
            : 0.1;
        el.addEventListener("seeked", onSeeked, { once: true });
        el.currentTime = t;
      } catch {
        /* noop */
      }
    };

    const onLoadedData = () => {
      runSeek();
      el.removeEventListener("loadeddata", onLoadedData);
    };

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      runSeek();
    } else {
      el.addEventListener("loadeddata", onLoadedData);
    }

    return () => {
      el.removeEventListener("loadeddata", onLoadedData);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster ?? undefined}
      controls
      playsInline
      preload="auto"
      muted={!poster}
      className="w-full aspect-[9/16] object-cover bg-dark"
      aria-label={label}
    />
  );
}
