import type { MetadataRoute } from "next";
import { cities, services, siteConfig } from "@/lib/data";

/**
 * Sitemap complet : toutes les URLs indexables du site Next.js.
 * - Pages « fixes » (STATIC_ENTRIES)
 * - Toutes les fiches services (/services/[slug])
 * - Toutes les pages ville (/[citySlug])
 *
 * Exclut volontairement : /api/* (robots disallow), pages d’erreur.
 */
const STATIC_ENTRIES: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
}[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/a-propos", changeFrequency: "monthly", priority: 0.7 },
  { path: "/realisations", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
  { path: "/zone-intervention", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_ENTRIES.map(({ path, changeFrequency, priority }) => ({
    url: path === "" ? base : `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${base}/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
