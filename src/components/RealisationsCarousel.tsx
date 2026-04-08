"use client";

import { useCallback, useId, useState } from "react";
import {
  type RealisationCarouselItem,
  resolveRealisationImage,
  titreCourtRealisation,
} from "@/lib/realisations-shared";

export default function RealisationsCarousel({
  items,
}: {
  items: RealisationCarouselItem[];
}) {
  const id = useId();
  const [active, setActive] = useState(0);
  const n = items.length;

  const go = useCallback(
    (delta: number) => {
      setActive((i) => (i + delta + n) % n);
    },
    [n],
  );

  if (n === 0) return null;

  return (
    <div
      className="relative rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Galerie de réalisations couverture et zinguerie"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(-1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(1);
        }
      }}
    >
      <div
        id={`${id}-track`}
        className="mx-auto w-full max-w-full overflow-hidden rounded-xl border border-lighter-gray bg-white shadow-md ring-1 ring-black/5"
      >
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((r, i) => {
            const src = resolveRealisationImage(r, i);
            const heading = titreCourtRealisation(r.title);
            return (
              <article
                key={`${heading}-${i}`}
                className="min-w-full shrink-0"
                aria-hidden={i !== active}
              >
                {/* Photo entière visible, hauteur plafonnée par la fenêtre (dvh) */}
                <div className="relative flex min-h-[min(28dvh,12rem)] max-h-[min(65dvh,40rem)] w-full items-center justify-center bg-primary-lighter px-2 py-2 sm:px-3 sm:py-3">
                  <img
                    src={src}
                    alt={`Réalisation ${r.category} — ${heading}, ${r.location}. ${r.desc.slice(0, 120)}${r.desc.length > 120 ? "…" : ""}`}
                    className="mx-auto h-auto max-h-[min(65dvh,40rem)] w-auto max-w-full object-contain"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="px-3 py-2.5 sm:py-3 border-t border-lighter-gray">
                  <h3 className="text-sm sm:text-base font-bold font-heading text-dark text-center leading-snug">
                    {heading}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lighter-gray bg-white text-dark shadow-sm hover:bg-primary-lighter hover:border-primary/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            aria-controls={`${id}-track`}
            aria-label="Réalisation précédente"
          >
            <i className="fas fa-chevron-left text-sm" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-lighter-gray bg-white text-dark shadow-sm hover:bg-primary-lighter hover:border-primary/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            aria-controls={`${id}-track`}
            aria-label="Réalisation suivante"
          >
            <i className="fas fa-chevron-right text-sm" aria-hidden />
          </button>
        </div>
        <p className="text-sm text-gray tabular-nums" aria-live="polite">
          <span className="font-semibold text-dark">{active + 1}</span>
          <span className="mx-1">/</span>
          <span>{n}</span>
        </p>
      </div>

      <div
        className="mt-3 flex flex-wrap justify-center gap-1.5"
        role="tablist"
        aria-label="Choisir une réalisation"
      >
        {items.map((r, i) => {
          const label = titreCourtRealisation(r.title);
          const selected = i === active;
          return (
            <button
              key={`dot-${label}-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`Voir : ${label}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${
                selected
                  ? "w-6 bg-secondary"
                  : "w-2 bg-lighter-gray hover:bg-gray/50"
              }`}
            />
          );
        })}
      </div>

    </div>
  );
}
