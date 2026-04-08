import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import CtaBanner from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "À propos de DT Couverture | Artisan Couvreur Gironde",
  description:
    "Découvrez DT Couverture, artisan couvreur à Saint-Denis-de-Pile depuis 2015. Teddy Dominique, fondateur, et son équipe vous accompagnent pour tous vos travaux de toiture en Gironde.",
  alternates: { canonical: `${siteConfig.url}/a-propos` },
  openGraph: {
    title: "À propos de DT Couverture",
    description:
      "Artisan couvreur professionnel en Gironde depuis 2015. Découvrez notre histoire, nos valeurs et notre savoir-faire.",
    url: `${siteConfig.url}/a-propos`,
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "À propos", url: `${siteConfig.url}/a-propos` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[700px]">
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              Notre histoire
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Découvrez <span className="text-accent">DT Couverture</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Artisan couvreur passionné depuis {siteConfig.foundedYear}, au
              service de votre toiture en Gironde.
            </p>
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative overflow-visible max-w-lg mx-auto lg:max-w-none lg:mx-0">
              <div className="bg-primary-lighter rounded-2xl aspect-[3/4] sm:aspect-[3/4] overflow-hidden shadow-lg ring-1 ring-black/5">
                <img
                  src="/images/teddy-compagnons-du-devoir.jpg"
                  alt={`${siteConfig.founder}, artisan couvreur — Compagnons du Devoir`}
                  className="w-full h-full object-cover object-[30%_25%]"
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
                Un artisan <span className="text-accent">passionné</span> à
                votre service
              </h2>
              <p className="text-gray mb-4 leading-relaxed">
                <strong>DT Couverture</strong> a été fondée en{" "}
                {siteConfig.foundedYear} par <strong>{siteConfig.founder}</strong>,
                artisan couvreur passionné par son métier. Après une formation
                solide et plusieurs années d&apos;expérience au sein d&apos;entreprises
                reconnues, Teddy a décidé de créer sa propre structure pour
                offrir un service de qualité, personnalisé et proche de ses
                clients.
              </p>
              <p className="text-gray mb-4 leading-relaxed">
                Basée à{" "}
                <strong>
                  {siteConfig.address.city} ({siteConfig.address.zip})
                </strong>
                , l&apos;entreprise est spécialisée dans les travaux de couverture
                par éléments. De la simple réparation de tuiles à la réfection
                complète de toiture, en passant par la zinguerie, la charpente
                et l&apos;isolation, DT Couverture répond à tous les besoins des
                particuliers et professionnels de la Gironde.
              </p>
              <p className="text-gray mb-6 leading-relaxed">
                Notre philosophie repose sur trois piliers : la{" "}
                <strong>qualité du travail</strong>, la{" "}
                <strong>transparence</strong> dans nos relations clients, et le{" "}
                <strong>respect des délais</strong>. Chaque chantier est traité
                avec le même soin et la même attention, quelle que soit sa
                taille.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <span className="section-tag">Nos valeurs</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ce qui nous <span className="text-accent">différencie</span>
            </h2>
            <p className="text-gray text-lg">
              Des engagements concrets qui guident chacune de nos interventions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fa-medal",
                title: "Qualité artisanale",
                text: "Chaque intervention est réalisée dans les règles de l'art, avec des matériaux de qualité et un souci du détail qui fait la différence. Nous ne transigeons jamais sur la qualité.",
              },
              {
                icon: "fa-handshake",
                title: "Transparence totale",
                text: "Devis détaillé et gratuit, pas de surprise. Nous vous expliquons clairement les travaux nécessaires et vous tenons informé à chaque étape du chantier.",
              },
              {
                icon: "fa-clock",
                title: "Réactivité",
                text: "Nous savons que les problèmes de toiture n'attendent pas. C'est pourquoi nous nous engageons à vous répondre rapidement et à intervenir dans les meilleurs délais.",
              },
              {
                icon: "fa-shield-alt",
                title: "Garantie décennale",
                text: "Tous nos travaux sont couverts par une assurance décennale, garantissant la pérennité de nos interventions pendant 10 ans.",
              },
              {
                icon: "fa-leaf",
                title: "Respect de l'environnement",
                text: "Nous privilégions les matériaux durables et recyclables, et nous assurons le tri et l'évacuation responsable des déchets de chantier.",
              },
              {
                icon: "fa-heart",
                title: "Proximité client",
                text: "Artisan local, nous connaissons les spécificités du bâti de la région. Chaque client est unique et mérite une attention particulière.",
              },
            ].map((val) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-lighter-gray hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-lighter rounded-2xl flex items-center justify-center mb-6">
                  <i className={`fas ${val.icon} text-2xl text-primary`} />
                </div>
                <h3 className="text-lg font-bold mb-3">{val.title}</h3>
                <p className="text-gray text-sm leading-7">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-[650px] mx-auto mb-14">
            <span className="section-tag">Garanties</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos <span className="text-accent">certifications</span> et
              garanties
            </h2>
            <p className="text-gray text-lg">
              Des garanties concrètes pour votre tranquillité d&apos;esprit.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "fa-shield-alt",
                title: "Assurance décennale",
                text: "Garantie 10 ans sur tous nos travaux",
              },
              {
                icon: "fa-certificate",
                title: "Artisan qualifié",
                text: "Inscrit au Répertoire National des Entreprises",
              },
              {
                icon: "fa-file-contract",
                title: "Devis gratuit",
                text: "Devis détaillé et sans engagement",
              },
              {
                icon: "fa-check-double",
                title: "Normes DTU",
                text: "Respect strict des normes de construction",
              },
            ].map((cert) => (
              <div
                key={cert.title}
                className="text-center p-8 bg-off-white rounded-2xl hover:bg-primary-lighter transition-colors"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <i className={`fas ${cert.icon} text-3xl text-primary`} />
                </div>
                <h3 className="font-bold mb-2">{cert.title}</h3>
                <p className="text-gray text-sm">{cert.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner variant="dark" />
    </>
  );
}
