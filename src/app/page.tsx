import Link from "next/link";
import { siteConfig, services } from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import CityAccordion from "@/components/CityAccordion";
import GirondeMapEmbed from "@/components/GirondeMapEmbed";
import ServiceIcon from "@/components/ServiceIcon";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import HomeRealisationsMobileCarousel from "@/components/HomeRealisationsMobileCarousel";
import TestimonialVideo from "@/components/TestimonialVideo";
import { HOME_REALISATIONS_SHOWCASE } from "@/lib/realisations-shared";
import PhoneCtaButton from "@/components/PhoneCtaButton";
import {
  FadeIn,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  ZoomIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations";

function RealisationCard({
  r,
  className = "",
}: {
  r: (typeof HOME_REALISATIONS_SHOWCASE)[number];
  className?: string;
}) {
  return (
    <div
      className={`group rounded-2xl overflow-hidden bg-white shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <div className="relative aspect-[3/4] bg-primary-lighter overflow-hidden">
        <img
          src={r.src}
          alt={r.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold font-heading shadow-sm">
            {r.cat}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-bold text-sm leading-snug">{r.title}</h4>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── Hero Section ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen min-h-[100dvh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/78 to-primary-dark/88 z-[1]" />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px] py-16">
            {/* Badge — apparaît en premier */}
            <FadeIn delay={0.15}>
              <span className="inline-block bg-secondary/15 text-secondary-light px-5 py-2 rounded-full text-sm font-semibold font-heading mb-6 border border-secondary/30">
                Artisan couvreur depuis {siteConfig.foundedYear}
              </span>
            </FadeIn>

            {/* Titre principal */}
            <FadeInUp delay={0.35}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                <span className="text-accent">DT Couverture</span>, votre
                spécialiste <span className="text-accent">toiture</span> en
                Gironde
              </h1>
            </FadeInUp>

            {/* Sous-titre */}
            <FadeInUp delay={0.55}>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Couverture, zinguerie, charpente et rénovation. Intervention
                rapide et devis gratuit sur toute la Gironde.
              </p>
            </FadeInUp>

            {/* Boutons CTA */}
            <FadeInUp delay={0.75}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <i className="fas fa-file-alt" /> Demander un devis gratuit
                </Link>
                <div className="flex flex-col gap-2.5 items-center sm:items-start">
                  <PhoneCtaButton variant="secondary" size="lg" />
                  <div
                    className="flex items-center gap-2 justify-center sm:justify-start pl-0 sm:pl-1"
                    aria-live="polite"
                  >
                    <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
                      <span className="hero-online-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/90" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40" />
                    </span>
                    <span className="text-sm font-medium text-white/90 tracking-tight">
                      Disponible dès maintenant
                    </span>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Garanties */}
            <FadeInUp delay={0.95}>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                {[
                  { icon: "fa-shield-alt", text: "Assurance décennale" },
                  { icon: "fa-certificate", text: "Artisan qualifié" },
                  { icon: "fa-bolt", text: "Intervention rapide" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 text-white/75 text-sm"
                  >
                    <i className={`fas ${item.icon} text-secondary text-lg`} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </FadeInUp>

            {/* Badge Google */}
            <FadeIn delay={1.15}>
              <div className="mt-4 w-fit max-w-[min(16.5rem,92vw)]">
                <GoogleReviewsBadge variant="hero" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* ─── Services ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-off-white" id="services">
        <div className="container-custom">
          {/* En-tête section */}
          <FadeInUp>
            <div className="text-center max-w-[650px] mx-auto mb-14">
              <div className="flex justify-center mb-7">
                <img
                  src="/images/partenaire-compagnons-du-devoir.png"
                  alt="Entreprise partenaire des Compagnons du Devoir"
                  width={267}
                  height={170}
                  className="h-auto w-full max-w-[min(267px,85vw)] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="section-tag">Nos expertises</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos <span className="text-accent">services</span> de couverture
              </h2>
              <p className="text-gray text-lg">
                Des prestations complètes pour tous vos travaux de toiture,
                réalisées par un artisan qualifié et expérimenté.
              </p>
            </div>
          </FadeInUp>

          {/* Grille de services en cascade */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            staggerDelay={0.13}
            initialDelay={0.15}
          >
            {services.map((service) => (
              <StaggerItem key={service.slug} variant="up">
                <Link
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl p-8 border border-lighter-gray hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden block h-full"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-[60px] h-[60px] bg-primary-lighter rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300 text-2xl text-primary group-hover:text-white">
                    <ServiceIcon service={service} className="transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-dark">
                    {service.title}
                  </h3>
                  <p className="text-gray text-sm leading-7 mb-5 hidden md:block">
                    {service.description}
                  </p>
                  <span className="text-secondary font-semibold text-sm font-heading inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                    En savoir plus <i className="fas fa-arrow-right" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner variant="primary" />

      {/* ─── À propos ──────────────────────────────────────────────────────────── */}
      <section className="py-20" id="a-propos">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image — glisse depuis la gauche */}
            <FadeInLeft>
              <div className="relative overflow-visible">
                <div className="bg-primary-lighter rounded-2xl aspect-[4/3] overflow-hidden shadow-lg ring-1 ring-black/5">
                  <img
                    src="/images/camion-dt-couverture.jpg"
                    alt="Camion d&apos;intervention DT Couverture — spécialiste toiture neuf et rénovation en Gironde"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Mobile / tablette : pastille dans le cadre (évite le débordement à gauche). lg+ : chevauchement décoratif. */}
                <div
                  className={[
                    "absolute z-10 rounded-full bg-secondary text-white shadow-lg",
                    "flex flex-col items-center justify-center text-center",
                    "ring-2 ring-white/90 sm:ring-4",
                    "w-[4.75rem] h-[4.75rem] min-[400px]:w-[5.25rem] min-[400px]:h-[5.25rem]",
                    "bottom-3 left-3 translate-x-0 translate-y-0",
                    "lg:bottom-0 lg:left-0 lg:w-28 lg:h-28 lg:-translate-x-1/2 lg:translate-y-1/2",
                    "px-1.5 py-1.5 sm:px-2 sm:py-2",
                  ].join(" ")}
                >
                  <span className="font-heading font-extrabold text-lg min-[400px]:text-xl lg:text-2xl leading-none tabular-nums">
                    10+
                  </span>
                  <span className="text-[0.5625rem] min-[400px]:text-[0.625rem] lg:text-[0.6875rem] font-semibold uppercase tracking-wide leading-snug mt-0.5 max-w-[4.25rem] lg:max-w-none">
                    années d&apos;expérience
                  </span>
                </div>
              </div>
            </FadeInLeft>

            {/* Texte — glisse depuis la droite */}
            <FadeInRight delay={0.18}>
              <div>
                <span className="section-tag">Qui sommes-nous</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  Votre artisan <span className="text-accent">couvreur</span> de
                  confiance
                </h2>
                <p className="text-gray mb-4">
                  Fondée en {siteConfig.foundedYear} par {siteConfig.founder},{" "}
                  <strong>DT Couverture</strong> est une entreprise artisanale
                  spécialisée dans les travaux de couverture par éléments. Basés à{" "}
                  <strong>
                    {siteConfig.address.city} ({siteConfig.address.zip})
                  </strong>
                  , nous intervenons sur toute la Gironde et les départements
                  limitrophes.
                </p>
                <p className="text-gray mb-6">
                  Notre savoir-faire artisanal et notre engagement qualité nous
                  permettent de répondre à tous vos besoins en matière de toiture.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Artisan qualifié et expérimenté",
                    "Assurance décennale",
                    "Devis gratuit et détaillé",
                    "Intervention rapide en Gironde",
                    "Travail soigné et garanti",
                    "Matériaux de qualité",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium">
                      <i className="fas fa-check-circle text-primary text-lg" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <i className="fas fa-file-alt" /> Obtenir un devis gratuit
                </Link>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* ─── Réalisations ──────────────────────────────────────────────────────── */}
      <section className="py-20" id="realisations">
        <div className="container-custom">
          <FadeInUp>
            <div className="text-center max-w-[650px] mx-auto mb-14">
              <span className="section-tag">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos <span className="text-accent">réalisations</span>
              </h2>
              <p className="text-gray text-lg">
                Découvrez quelques-uns de nos chantiers récents en couverture,
                zinguerie et charpente.
              </p>
            </div>
          </FadeInUp>

          {/* Mobile : carousel (pas animé pour éviter les conflits de layout) */}
          <div className="md:hidden">
            <HomeRealisationsMobileCarousel items={HOME_REALISATIONS_SHOWCASE} />
          </div>

          {/* Tablette et plus : grille avec zoom in en cascade */}
          <StaggerContainer
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            staggerDelay={0.12}
            initialDelay={0.1}
          >
            {HOME_REALISATIONS_SHOWCASE.map((r) => (
              <StaggerItem key={r.src} variant="zoom">
                <RealisationCard r={r} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.32}>
            <div className="text-center mt-10">
              <Link href="/realisations" className="btn btn-primary btn-lg">
                <i className="fas fa-images" /> Voir toutes nos réalisations
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ─── Témoignages ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-off-white" id="temoignages">
        <div className="container-custom">
          <FadeInUp>
            <div className="text-center max-w-[650px] mx-auto mb-14">
              <span className="section-tag">Témoignages</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ce que disent <span className="text-accent">nos clients</span>
              </h2>
              <p className="text-gray text-lg">
                La satisfaction de nos clients est notre meilleure récompense.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.15}
            initialDelay={0.1}
          >
            {[
              {
                src: "/videos/temoignage-1.mp4",
                label: "Témoignage client 1",
                mobilePoster: "/images/temoignages/poster-1.png",
              },
              {
                src: "/videos/temoignage-2.mp4",
                label: "Témoignage client 2",
                mobilePoster: "/images/temoignages/poster-2.png",
              },
              {
                src: "/videos/temoignage-3.mp4",
                label: "Témoignage client 3",
                mobilePoster: "/images/temoignages/poster-3.png",
              },
              {
                src: "/videos/temoignage-4.mp4",
                label: "Témoignage client 4",
                mobilePoster: "/images/temoignages/poster-4.png",
              },
            ].map((v, i) => (
              <StaggerItem key={i} variant="up">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-lighter-gray hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <TestimonialVideo
                    src={v.src}
                    label={v.label}
                    mobilePoster={v.mobilePoster}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Zone d'intervention ───────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <FadeInUp>
            <div className="text-center max-w-[650px] mx-auto mb-14">
              <span className="section-tag">Zone d&apos;intervention</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nous intervenons{" "}
                <span className="text-accent">près de chez vous</span>
              </h2>
              <p className="text-gray text-lg">
                Basés à {siteConfig.address.city}, nous couvrons toute la Gironde
                et les départements limitrophes.
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            {/* Carte — glisse depuis la gauche */}
            <FadeInLeft delay={0.1}>
              <GirondeMapEmbed heightClass="h-[400px]" />
            </FadeInLeft>

            {/* Accordéon — glisse depuis la droite */}
            <FadeInRight delay={0.24}>
              <div>
                <h3 className="text-xl font-bold mb-5 text-dark">
                  Principales villes d&apos;intervention
                </h3>
                <CityAccordion />
                <Link href="/zone-intervention" className="btn btn-primary btn-lg mt-6">
                  <i className="fas fa-map-marked-alt" /> Voir toutes nos zones
                </Link>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      <CtaBanner
        variant="dark"
        title="Prêt à démarrer votre projet toiture ?"
        text="Contactez DT Couverture dès maintenant pour un devis gratuit et sans engagement."
      />
    </>
  );
}
