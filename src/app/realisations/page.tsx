import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import CtaBanner from "@/components/CtaBanner";
import CallbackBanner from "@/components/CallbackBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Nos Réalisations | Chantiers Toiture Gironde",
  description:
    "Découvrez les réalisations de DT Couverture en Gironde : rénovation toiture, zinguerie, charpente, pose de Velux, démoussage. Photos de nos chantiers.",
  alternates: { canonical: `${siteConfig.url}/realisations` },
  openGraph: {
    title: "Réalisations DT Couverture | Portfolio Toiture Gironde",
    description:
      "Photos de nos chantiers en Gironde. Rénovation, couverture, zinguerie, Velux. Artisan couvreur qualifié.",
    url: `${siteConfig.url}/realisations`,
  },
};

const realisations = [
  { title: "Rénovation toiture complète", category: "Couverture", location: "Saint-Denis-de-Pile (33)", desc: "Réfection complète d'une toiture en tuiles mécaniques sur maison individuelle. Remplacement de la sous-toiture et isolation." },
  { title: "Installation gouttières zinc", category: "Zinguerie", location: "Libourne (33)", desc: "Pose de gouttières demi-rondes en zinc naturel avec descentes et raccordements. Travail sur-mesure." },
  { title: "Réparation charpente", category: "Charpente", location: "Coutras (33)", desc: "Remplacement de pannes et chevrons endommagés par l'humidité. Traitement préventif de l'ensemble." },
  { title: "Pose de Velux", category: "Velux", location: "Montpon-Ménestérol (24)", desc: "Création d'ouverture et pose de 3 Velux dans des combles aménagés. Habillage intérieur inclus." },
  { title: "Démoussage toiture", category: "Démoussage", location: "Saint-Émilion (33)", desc: "Nettoyage, traitement anti-mousse et application d'un hydrofuge coloré sur toiture en tuiles canal." },
  { title: "Bâchage d'urgence", category: "Urgence", location: "Bordeaux (33)", desc: "Intervention en urgence suite à des dégâts de tempête. Bâchage immédiat puis réparation définitive." },
  { title: "Isolation sarking", category: "Isolation", location: "Saint-André-de-Cubzac (33)", desc: "Isolation par l'extérieur (sarking) lors d'une réfection complète de toiture. Gain énergétique significatif." },
  { title: "Réfection couverture tuiles canal", category: "Couverture", location: "Fronsac (33)", desc: "Rénovation d'une toiture traditionnelle en tuiles canal sur maison de maître. Respect du patrimoine local." },
  { title: "Chéneaux et abergements", category: "Zinguerie", location: "Pomerol (33)", desc: "Réalisation de chéneaux encaissés et abergements de cheminée en zinc. Étanchéité garantie." },
  { title: "Rénovation complète immeuble", category: "Couverture", location: "Libourne (33)", desc: "Réfection de la toiture d'un immeuble de rapport. Couverture ardoises, zinguerie et lucarnes." },
  { title: "Pose volets roulants Velux", category: "Velux", location: "Castillon-la-Bataille (33)", desc: "Installation de volets roulants solaires sur Velux existants. Confort thermique et occultation." },
  { title: "Traitement charpente", category: "Charpente", location: "Guitres (33)", desc: "Traitement curatif et préventif d'une charpente traditionnelle attaquée par des capricornes." },
];

export default function RealisationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Réalisations", url: `${siteConfig.url}/realisations` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[700px]">
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Nos <span className="text-accent">réalisations</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Découvrez en images quelques-uns de nos chantiers récents.
              Chaque projet est réalisé avec le même soin et la même exigence de qualité.
            </p>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Réalisations */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((r, i) => (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 border border-lighter-gray"
              >
                <div className="relative aspect-[4/3] bg-primary-lighter flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo_dt_titre.png"
                    alt={r.title}
                    className="w-3/5 object-contain opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold font-heading">
                      {r.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{r.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    <i className="fas fa-map-marker-alt mr-1" />
                    {r.location}
                  </p>
                  <p className="text-gray text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner variant="dark" />
    </>
  );
}
