import Link from "next/link";
import { siteConfig, services, testimonials } from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import StatsSection from "@/components/StatsSection";
import CityAccordion from "@/components/CityAccordion";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-dark to-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark/92 to-primary-dark/85 z-[1]" />
        <div className="container-custom relative z-[2]">
          <div className="max-w-[700px] py-16">
            <span className="inline-block bg-secondary/15 text-secondary-light px-5 py-2 rounded-full text-sm font-semibold font-heading mb-6 border border-secondary/30">
              Artisan couvreur depuis {siteConfig.foundedYear}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Votre spécialiste <span className="text-accent">toiture</span> en
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
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Services */}
      <section className="py-20 bg-off-white" id="services">
        <div className="container-custom">
          <div className="text-center max-w-[650px] mx-auto mb-14">
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
                <div className="w-[60px] h-[60px] bg-primary-lighter rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <i
                    className={`fas ${service.icon} text-2xl text-primary group-hover:text-white transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-lg font-bold mb-3 text-dark">
                  {service.title}
                </h3>
                <p className="text-gray text-sm leading-7 mb-5">
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
            <div className="relative">
              <div className="bg-primary-lighter rounded-2xl aspect-[4/3] flex items-center justify-center p-8 overflow-hidden">
                <img
                  src="/images/logo_dt_titre.png"
                  alt="DT Couverture - Artisan couvreur en Gironde"
                  className="max-h-full object-contain opacity-70"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:bottom-auto md:-right-4 md:top-auto bg-secondary text-white p-6 rounded-2xl text-center shadow-lg">
                <span className="block font-heading font-extrabold text-4xl leading-none">
                  10+
                </span>
                <span className="text-xs font-semibold uppercase tracking-wide">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rénovation toiture complète", cat: "Couverture", loc: "Saint-Denis-de-Pile (33)" },
              { title: "Installation gouttières zinc", cat: "Zinguerie", loc: "Libourne (33)" },
              { title: "Réparation charpente", cat: "Charpente", loc: "Coutras (33)" },
              { title: "Pose de Velux", cat: "Velux", loc: "Montpon-Ménestérol (24)" },
            ].map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-primary-lighter flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/logo_dt_titre.png"
                    alt={r.title}
                    className="w-3/5 object-contain opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold font-heading">
                      {r.cat}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold mb-1">{r.title}</h4>
                  <p className="text-gray text-sm">{r.loc}</p>
                </div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm border border-lighter-gray hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 text-yellow-400">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="fas fa-star" />
                  ))}
                </div>
                <p className="text-dark-gray italic mb-6 leading-relaxed text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <strong className="block text-sm">{t.author}</strong>
                    <span className="text-gray text-xs">{t.location}</span>
                  </div>
                </div>
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
