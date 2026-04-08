import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, cities } from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import CityAccordion from "@/components/CityAccordion";
import GirondeMapEmbed from "@/components/GirondeMapEmbed";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Zone d'intervention | Couvreur Gironde et Dordogne",
  description:
    "DT Couverture intervient sur toute la Gironde : Libourne, Coutras, Saint-Émilion, Bordeaux, Saint-André-de-Cubzac et alentours. Couvreur professionnel, devis gratuit.",
  alternates: { canonical: `${siteConfig.url}/zone-intervention` },
  openGraph: {
    title: "Zone d'intervention DT Couverture | Couvreur Gironde",
    description:
      "Nous intervenons sur toute la Gironde et les départements limitrophes. Couvreur de proximité.",
    url: `${siteConfig.url}/zone-intervention`,
  },
};

export default function ZoneInterventionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Zone d'intervention", url: `${siteConfig.url}/zone-intervention` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[700px]">
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              Zone d&apos;intervention
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Nous intervenons{" "}
              <span className="text-accent">près de chez vous</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Basés à {siteConfig.address.city}, nous couvrons toute la Gironde
              et les départements limitrophes dans un rayon de 50 km.
            </p>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Map + cities */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <GirondeMapEmbed heightClass="h-[500px]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-dark">
                Toutes nos villes d&apos;intervention
              </h2>
              <p className="text-gray mb-8 leading-relaxed">
                Nous intervenons principalement dans le Libournais, le Nord
                Gironde et la métropole bordelaise. Notre zone de couverture
                s&apos;étend dans un rayon d&apos;environ 30 km autour de{" "}
                {siteConfig.address.city} et de Bordeaux.
              </p>
              <CityAccordion />
              <a
                href={siteConfig.phoneHref}
                className="btn btn-primary btn-lg mt-6"
              >
                <i className="fas fa-phone-alt" /> Vérifier notre disponibilité
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City pages links */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <span className="section-tag">Couvreur local</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre couvreur <span className="text-accent">près de chez vous</span>
            </h2>
            <p className="text-gray text-lg">
              Retrouvez nos pages dédiées par ville pour en savoir plus sur nos
              interventions dans votre commune.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group bg-white rounded-2xl p-8 border border-lighter-gray hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-lighter rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                    <i className="fas fa-map-marker-alt text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-gray text-sm">
                      {city.postalCode} — {city.distance}
                    </span>
                  </div>
                </div>
                <p className="text-gray text-sm leading-relaxed mb-4 line-clamp-3">
                  {city.heroText}
                </p>
                <span className="text-secondary font-semibold text-sm font-heading inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                  Voir les détails <i className="fas fa-arrow-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner variant="dark" />
    </>
  );
}
