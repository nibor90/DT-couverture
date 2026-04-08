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
