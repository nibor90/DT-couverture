/** Aperçus accueil & grille « Nos réalisations » (hors page /realisations détaillée). */
export const HOME_REALISATIONS_SHOWCASE = [
  { title: "Toiture neuve", cat: "Couverture", src: "/images/realisations/real-1.jpeg" },
  { title: "Pose de fenêtre de toit", cat: "Velux", src: "/images/realisations/real-2.jpg" },
  { title: "Noue zinc & tuiles romanes", cat: "Couverture", src: "/images/realisations/real-3.jpeg" },
  { title: "Avant-toit bois", cat: "Charpente", src: "/images/realisations/real-4.jpeg" },
  { title: "Rénovation lourde", cat: "Rénovation", src: "/images/realisations/real-5.jpeg" },
] as const;

export type HomeRealisationShowcase = (typeof HOME_REALISATIONS_SHOWCASE)[number];

export type RealisationCarouselItem = {
  title: string;
  category: string;
  location: string;
  desc: string;
  image?: string;
};

export const REALISATION_FALLBACK_IMAGES = [
  "/images/realisations/real-1.jpeg",
  "/images/realisations/real-2.jpg",
  "/images/realisations/real-3.jpeg",
  "/images/realisations/real-4.jpeg",
  "/images/realisations/real-5.jpeg",
] as const;

export function titreCourtRealisation(title: string): string {
  const i = title.indexOf("—");
  return i === -1 ? title.trim() : title.slice(0, i).trim();
}

export function resolveRealisationImage(
  item: RealisationCarouselItem,
  index: number,
): string {
  if (item.image) return item.image;
  return REALISATION_FALLBACK_IMAGES[
    index % REALISATION_FALLBACK_IMAGES.length
  ];
}
