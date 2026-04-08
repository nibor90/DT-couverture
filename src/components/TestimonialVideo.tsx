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
  /** Toujours affiché en attendant la capture (mobile / économiseur de données). */
  fallbackPoster = "/images/camion-dt-couverture.jpg",
}: {
  src: string;
  label: string;
  fallbackPoster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  /** Data URL capturée ; jusqu’ici on utilise l’attribut natif `poster` + fallback. */
  const [capturedPoster, setCapturedPoster] = useState<string | null>(null);
  const done = useRef(false);

  useEffect(() => {
    done.current = false;
    setCapturedPoster(null);
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    const finish = () => {
      try {
        el.currentTime = 0;
      } catch {
        /* noop */
      }
    };

    const tryCapture = (): boolean => {
      if (cancelled || done.current) return true;
      const url = captureFrame(el);
      if (url) {
        done.current = true;
        setCapturedPoster(url);
        finish();
        return true;
      }
      return false;
    };

    const onSeeked = () => {
      if (cancelled || done.current) return;
      if (!tryCapture()) finish();
    };

    const runSeek = () => {
      if (cancelled || done.current) return;
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

    const attemptCapture = () => {
      if (cancelled || done.current) return;
      if (el.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (cancelled || done.current) return;
          if (tryCapture()) return;
          runSeek();
        });
      });
    };

    const onLoadedData = () => attemptCapture();
    const onCanPlay = () => attemptCapture();

    el.addEventListener("loadeddata", onLoadedData);
    el.addEventListener("canplay", onCanPlay);

    const delayed = window.setTimeout(() => attemptCapture(), 300);

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      attemptCapture();
    }

    return () => {
      cancelled = true;
      el.removeEventListener("loadeddata", onLoadedData);
      el.removeEventListener("canplay", onCanPlay);
      window.clearTimeout(delayed);
    };
  }, [src]);

  const posterAttr = capturedPoster ?? fallbackPoster;

  return (
    <video
      ref={ref}
      src={src}
      poster={posterAttr}
      controls
      playsInline
      preload="auto"
      muted={!capturedPoster}
      className="w-full aspect-[9/16] object-cover bg-dark"
      aria-label={label}
    />
  );
}
