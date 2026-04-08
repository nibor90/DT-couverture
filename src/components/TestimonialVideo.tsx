"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const POSTER_MAX_WIDTH = 720;
const MOBILE_MQ = "(max-width: 767px)";

function subscribeMobile(cb: () => void) {
  const mq = window.matchMedia(MOBILE_MQ);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function getServerMobileSnapshot() {
  return false;
}

function useIsMobile() {
  return useSyncExternalStore(subscribeMobile, getMobileSnapshot, getServerMobileSnapshot);
}

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
  /** Poster fixe mobile (une image par vidéo). */
  mobilePoster,
  /** Desktop : en attendant la capture canvas. */
  fallbackPoster = "/images/camion-dt-couverture.jpg",
}: {
  src: string;
  label: string;
  mobilePoster: string;
  fallbackPoster?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [capturedPoster, setCapturedPoster] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const done = useRef(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobile) return;

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
    const onLoadedMeta = () => attemptCapture();

    el.addEventListener("loadeddata", onLoadedData);
    el.addEventListener("canplay", onCanPlay);
    el.addEventListener("loadedmetadata", onLoadedMeta);

    const timers = [0, 300].map((ms) =>
      window.setTimeout(() => attemptCapture(), ms),
    );

    if (el.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      attemptCapture();
    }

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (!entries[0]?.isIntersecting || cancelled || done.current) return;
              attemptCapture();
            },
            { rootMargin: "120px", threshold: 0.01 },
          )
        : null;
    if (io) io.observe(el);

    return () => {
      cancelled = true;
      el.removeEventListener("loadeddata", onLoadedData);
      el.removeEventListener("canplay", onCanPlay);
      el.removeEventListener("loadedmetadata", onLoadedMeta);
      timers.forEach((id) => window.clearTimeout(id));
      io?.disconnect();
    };
  }, [src, isMobile]);

  const posterAttr =
    isMobile && mounted
      ? mobilePoster
      : mounted && !isMobile
        ? (capturedPoster ?? fallbackPoster)
        : undefined;

  const muted = isMobile ? false : !capturedPoster;

  return (
    <video
      ref={ref}
      src={src}
      poster={posterAttr}
      controls
      playsInline
      preload="metadata"
      muted={muted}
      className="w-full aspect-[9/16] object-cover bg-dark"
      aria-label={label}
    />
  );
}
