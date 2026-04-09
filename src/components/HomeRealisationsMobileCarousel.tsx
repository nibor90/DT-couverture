"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { HomeRealisationShowcase } from "@/lib/realisations-shared";

const AUTO_INTERVAL_MS = 2000;
const SWIPE_MIN_PX = 45;

export default function HomeRealisationsMobileCarousel({
  items,
}: {
  items: readonly HomeRealisationShowcase[];
}) {
  const [active, setActive] = useState(0);
  const n = items.length;
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (delta: number) => {
      setActive((i) => (i + delta + n) % n);
    },
    [n],
  );

  useEffect(() => {
    if (n <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % n);
    }, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [n]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < SWIPE_MIN_PX) return;
    if (dx > 0) go(-1);
    else go(1);
  };

  if (n === 0) return null;

  return (
    <div
      className="w-full max-w-full min-w-0"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="w-full min-w-0 overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-md">
        <div
          className="flex w-full transition-transform duration-500 ease-out motion-reduce:transition-none will-change-transform"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((r) => (
            <div
              key={r.src}
              className="min-w-0 w-full shrink-0 grow-0 basis-full box-border px-px"
            >
              <div className="rounded-2xl overflow-hidden bg-white">
                <div className="relative w-full h-[min(50dvh,17rem)] min-h-[11rem] max-h-[min(52dvh,19rem)] flex items-center justify-center bg-primary-lighter px-2 py-2">
                  <img
                    src={r.src}
                    alt={r.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain pointer-events-none select-none"
                    draggable={false}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold font-heading shadow-sm">
                      {r.cat}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm leading-snug">{r.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-wrap justify-center gap-2 mt-3"
        role="tablist"
        aria-label="Choisir une photo du carrousel"
      >
        {items.map((r, i) => (
          <button
            key={r.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Voir : ${r.title}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
              i === active
                ? "w-7 bg-secondary"
                : "w-2 bg-lighter-gray active:bg-gray/60"
            }`}
          />
        ))}
      </div>

      <p className="text-center text-xs text-gray mt-2">
        Faites défiler avec le doigt ou attendez le défilement automatique
      </p>
    </div>
  );
}
