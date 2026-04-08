import Link from "next/link";
import { siteConfig, services } from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import StatsSection from "@/components/StatsSection";
import CityAccordion from "@/components/CityAccordion";
import ServiceIcon from "@/components/ServiceIcon";
import GoogleReviewsBadge from "@/components/GoogleReviewsBadge";
import HomeRealisationsMobileCarousel from "@/components/HomeRealisationsMobileCarousel";
import TestimonialVideo from "@/components/TestimonialVideo";
import { HOME_REALISATIONS_SHOWCASE } from "@/lib/realisations-shared";

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
      {/* Hero Section */}
      <section className="relative min-h-screen min-h-[100dvh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-home.jpg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/78 to-primary-dark/88 z-[1]" />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px] py-16">
            <span className="inline-block bg-secondary/15 text-secondary-light px-5 py-2 rounded-full text-sm font-semibold font-heading mb-6 border border-secondary/30">
              Artisan couvreur depuis {siteConfig.foundedYear}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              <span className="text-accent">DT Couverture</span>, votre
              spécialiste <span className="text-accent">toiture</span> en
              Gironde
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Couverture, zinguerie, charpente et rénovation. Intervention
              rapide et devis gratuit sur toute la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-file-alt" /> Demander un devis gratuit
              </Link>
              <a href={siteConfig.phoneHref} className="btn btn-secondary btn-lg">
                <i className="fas fa-phone-alt" /> {siteConfig.phone}
              </a>
            </div>
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

            <div className="mt-4 w-fit max-w-[min(16.5rem,92vw)]">
              <GoogleReviewsBadge variant="hero" />
            </div>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Services */}
      <section className="py-20 bg-off-white" id="services">
        <div className="container-custom">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-8 border border-lighter-gray hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden"
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
            ))}
          </div>
        </div>
      </section>

      <CtaBanner variant="primary" />

      {/* À propos */}
      <section className="py-20" id="a-propos">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-visible">
              <div className="bg-primary-lighter rounded-2xl aspect-[4/3] overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src="/images/camion-dt-couverture.jpg"
                  alt="Camion d&apos;intervention DT Couverture — spécialiste toiture neuf et rénovation en Gironde"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-secondary text-white shadow-lg flex flex-col items-center justify-center text-center px-2 py-2 ring-4 ring-white/90 z-10">
                <span className="font-heading font-extrabold text-xl sm:text-2xl leading-none">
                  10+
                </span>
                <span className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wide leading-tight mt-1">
                  années d&apos;expérience
                </span>
              </div>
            </div>
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
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Réalisations */}
      <section className="py-20" id="realisations">
        <div className="container-custom">
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
          <div className="md:hidden">
            <HomeRealisationsMobileCarousel items={HOME_REALISATIONS_SHOWCASE} />
          </div>

          {/* Tablette et plus : grille */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {HOME_REALISATIONS_SHOWCASE.map((r) => (
              <RealisationCard key={r.src} r={r} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/realisations" className="btn btn-primary btn-lg">
              <i className="fas fa-images" /> Voir toutes nos réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20 bg-off-white" id="temoignages">
        <div className="container-custom">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <span className="section-tag">Témoignages</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce que disent <span className="text-accent">nos clients</span>
            </h2>
            <p className="text-gray text-lg">
              La satisfaction de nos clients est notre meilleure récompense.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: "/videos/temoignage-1.mp4", label: "Témoignage client 1" },
              { src: "/videos/temoignage-2.mp4", label: "Témoignage client 2" },
              { src: "/videos/temoignage-3.mp4", label: "Témoignage client 3" },
              { src: "/videos/temoignage-4.mp4", label: "Témoignage client 4" },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-lighter-gray hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <TestimonialVideo src={v.src} label={v.label} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20">
        <div className="container-custom">
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
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45216.98!2d-0.0985!3d44.9947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5546b1e69a7b4d%3A0x406651748429c30!2s33910%20Saint-Denis-de-Pile!5e0!3m2!1sfr!2sfr!4v1700000000000"
                className="w-full h-[400px] border-0 rounded-2xl shadow-lg"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention DT Couverture"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-5 text-dark">
                Principales villes d&apos;intervention
              </h3>
              <CityAccordion />
              <Link href="/zone-intervention" className="btn btn-primary btn-lg mt-6">
                <i className="fas fa-map-marked-alt" /> Voir toutes nos zones
              </Link>
            </div>
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
