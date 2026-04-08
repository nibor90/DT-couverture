import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import CtaBanner from "@/components/CtaBanner";
import CallbackBanner from "@/components/CallbackBanner";
import { BreadcrumbJsonLd, RealisationsItemListJsonLd } from "@/components/JsonLd";
import RealisationsCarousel from "@/components/RealisationsCarousel";
import {
  type RealisationCarouselItem,
  resolveRealisationImage,
  titreCourtRealisation,
} from "@/lib/realisations-shared";

export const metadata: Metadata = {
  title:
    "Réalisations couvreur Bordeaux Métropole & Gironde | Portfolio DT Couverture",
  description:
    "Photos de chantiers : rénovation de toiture, zinguerie, charpente, Velux, démoussage. Couvreur à Bordeaux, Mérignac, Pessac, Bègles, Cenon, Libourne et sur tout le Libournais. Artisan qualifié, devis gratuit.",
  alternates: { canonical: `${siteConfig.url}/realisations` },
  keywords: [
    "couvreur Bordeaux",
    "rénovation toiture Bordeaux",
    "couvreur Bordeaux métropole",
    "couvreur Mérignac",
    "couvreur Pessac",
    "couvreur Bègles",
    "couvreur Talence",
    "couvreur Villenave-d'Ornon",
    "couvreur Cenon",
    "couvreur Floirac",
    "couvreur Libourne",
    "couvreur Gironde",
    "artisan couvreur 33",
    "zinguerie Bordeaux",
    "pose Velux Bordeaux",
    "démoussage toiture Bordeaux",
    "réfection toiture tuiles",
  ],
  openGraph: {
    title:
      "Réalisations couvreur | Bordeaux, Libourne, Gironde — DT Couverture",
    description:
      "Portfolio de chantiers : couverture, zinguerie, charpente, Velux. Intervention Bordeaux et ses environs, Libournais et toute la Gironde.",
    url: `${siteConfig.url}/realisations`,
  },
};

const realisations: RealisationCarouselItem[] = [
  {
    title: "Toiture neuve — vue aérienne",
    category: "Couverture",
    location: "Gironde (33)",
    desc: "Pavillon avec toiture à pans multiples en tuiles brun / gris entrelacées : faîtages et rives propres, lucarne de toit, cheminée maçonnée et finitions soignées depuis les airs.",
    image: "/images/realisations/real-1.jpeg",
  },
  {
    title: "Pose de fenêtre de toit — prise de mesures",
    category: "Velux",
    location: "Gironde (33)",
    desc: "Notre équipe en tenue DT Couverture prend les cotes d’un châssis de fenêtre de toit sur une couverture ancienne en tuiles canal (tuiles décaissées, charpente visible). Préparation indispensable avant pose et raccord d’étanchéité.",
    image: "/images/realisations/real-2.jpg",
  },
  {
    title: "Noue zinc & tuiles romanes",
    category: "Couverture",
    location: "Gironde (33)",
    desc: "Chantier en tuiles canal / romanes : ligne de noue avec solin métallique, tubage de ventilation correctement chemisé dans la pente, bande d’étanchéité en couverture et outillage de découpe sur le faîtage.",
    image: "/images/realisations/real-3.jpeg",
  },
  {
    title: "Avant-toit bois — charpente décorative",
    category: "Charpente",
    location: "Gironde (33)",
    desc: "Ouvrage de contreventement et poutre apparents peints ton ardoise, sous-face lambrée assortie, liaison traditionnelle visible, rejointoyage sur façade crépie blanche, gouttière et bavette blanches.",
    image: "/images/realisations/real-4.jpeg",
  },
  {
    title: "Rénovation lourde — liteaux & lucarnes",
    category: "Rénovation",
    location: "Gironde (33)",
    desc: "Réalisation sur maison individuelle sous échafaudage complet : dépose de l’ancienne couverture, pose d’un écran sous-toiture, liteautage régulier prêt à recevoir les tuiles, deux lucarnes en œuvre, équipe et approvisionnement sur site.",
    image: "/images/realisations/real-5.jpeg",
  },
  {
    title: "Installation gouttières zinc",
    category: "Zinguerie",
    location: "Libourne (33)",
    desc: "Pose de gouttières demi-rondes en zinc naturel avec descentes et raccordements. Travail sur-mesure.",
  },
  {
    title: "Réparation charpente",
    category: "Charpente",
    location: "Coutras (33)",
    desc: "Remplacement de pannes et chevrons endommagés par l'humidité. Traitement préventif de l'ensemble.",
  },
  {
    title: "Aménagement combles & Velux",
    category: "Velux",
    location: "Montpon-Ménestérol (24)",
    desc: "Création d'ouverture et pose de Velux dans des combles aménagés. Habillage intérieur inclus.",
  },
  {
    title: "Démoussage toiture",
    category: "Démoussage",
    location: "Saint-Émilion (33)",
    desc: "Nettoyage, traitement anti-mousse et application d'un hydrofuge coloré sur toiture en tuiles canal.",
  },
  {
    title: "Bâchage d'urgence",
    category: "Urgence",
    location: "Bordeaux (33)",
    desc: "Intervention en urgence suite à des dégâts de tempête. Bâchage immédiat puis réparation définitive.",
  },
  {
    title: "Isolation sarking",
    category: "Isolation",
    location: "Saint-André-de-Cubzac (33)",
    desc: "Isolation par l'extérieur (sarking) lors d'une réfection complète de toiture. Gain énergétique significatif.",
  },
  {
    title: "Réfection couverture tuiles canal",
    category: "Couverture",
    location: "Fronsac (33)",
    desc: "Rénovation d'une toiture traditionnelle en tuiles canal sur maison de maître. Respect du patrimoine local.",
  },
  {
    title: "Chéneaux et abergements",
    category: "Zinguerie",
    location: "Pomerol (33)",
    desc: "Réalisation de chéneaux encaissés et abergements de cheminée en zinc. Étanchéité garantie.",
  },
  {
    title: "Rénovation complète immeuble",
    category: "Couverture",
    location: "Libourne (33)",
    desc: "Réfection de la toiture d'un immeuble de rapport. Couverture ardoises, zinguerie et lucarnes.",
  },
  {
    title: "Pose volets roulants Velux",
    category: "Velux",
    location: "Castillon-la-Bataille (33)",
    desc: "Installation de volets roulants solaires sur Velux existants. Confort thermique et occultation.",
  },
  {
    title: "Traitement charpente",
    category: "Charpente",
    location: "Guitres (33)",
    desc: "Traitement curatif et préventif d'une charpente traditionnelle attaquée par des capricornes.",
  },
];

const itemListForJsonLd = realisations.map((r, i) => ({
  name: titreCourtRealisation(r.title),
  description: r.desc,
  image: `${siteConfig.url}${resolveRealisationImage(r, i)}`,
}));

export default function RealisationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Réalisations", url: `${siteConfig.url}/realisations` },
        ]}
      />
      <RealisationsItemListJsonLd items={itemListForJsonLd} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[760px]">
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Nos <span className="text-accent">réalisations</span> couvreur
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Découvrez en images nos chantiers de couverture, zinguerie,
              charpente et pose de fenêtres de toit. De Bordeaux Métropole au
              Libournais, chaque projet est mené avec exigence et transparence.
            </p>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* SEO — champ sémantique Bordeaux & environs */}
      <section className="py-14 bg-off-white border-y border-lighter-gray">
        <div className="container-custom max-w-[900px]">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-5">
            Couvreur Bordeaux et périphérie : exemples de savoir-faire sur le
            terrain
          </h2>
          <div className="space-y-4 text-gray leading-relaxed">
            <p>
              Que vous recherchiez un{" "}
              <strong>couvreur à Bordeaux</strong>, sur la rive droite
              (Cenon, Floirac, Bouliac) ou la rive gauche (Mérignac, Pessac,
              Talence, Bègles, Villenave-d&apos;Ornon), nous nous déplaçons
              pour les diagnostics, les réparations urgentes et les
              rénovations complètes de toiture. Ces interventions complètent
              notre activité historique en{" "}
              <strong>Gironde nord et Libournais</strong> (Libourne, Coutras,
              Saint-André-de-Cubzac, Fronsac), au cœur de notre zone
              d&apos;intervention quotidienne.
            </p>
            <p>
              Le portfolio ci-dessous illustre des chantiers types :{" "}
              <strong>réfection de toiture en tuiles canal ou mécaniques</strong>
              , <strong>zinguerie</strong> (gouttières zinc, chéneaux,
              abergements), <strong>charpente</strong>,{" "}
              <strong>pose et remplacement de Velux</strong>,{" "}
              <strong>démoussage et traitement hydrofuge</strong>, ainsi que des
              <strong> interventions d&apos;urgence</strong> après intempéries.
              Un savoir-faire d&apos;artisan utile autant pour les maisons de
              ville bordelaises que pour les pavillons et propriétés viticoles
              des communes autour de l&apos;agglomération et du bassin
              libournais.
            </p>
            <p>
              Faire appel à un <strong>artisan couvreur qualifié près de Bordeaux</strong>{" "}
              permet de sécuriser l&apos;étanchéité, de respecter les règles de
              l&apos;art et, le cas échéant, les prescriptions en secteur
              protégé ou périmètre ABF. Parcourez le carrousel pour visualiser
              le niveau de finition que nous appliquons sur chaque chantier —
              puis demandez votre <strong>devis gratuit</strong> pour votre
              projet.
            </p>
          </div>
        </div>
      </section>

      {/* Carrousel */}
      <section
        className="py-16 md:py-20"
        aria-labelledby="realisations-carousel-heading"
      >
        <div className="container-custom">
          <h2
            id="realisations-carousel-heading"
            className="text-2xl md:text-3xl font-bold text-dark mb-3 text-center"
          >
            Galerie des chantiers
          </h2>
          <p className="text-gray text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            Utilisez les flèches, les pastilles, ou placez le focus sur le
            carrousel (Tab) puis les touches{" "}
            <span className="whitespace-nowrap">← →</span>.
          </p>
          <RealisationsCarousel items={realisations} />
        </div>
      </section>

      <CtaBanner variant="dark" />
    </>
  );
}
