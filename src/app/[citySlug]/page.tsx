import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  cities,
  getCityInterventionHref,
  services,
  siteConfig,
  testimonials,
} from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbJsonLd, FAQJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";

interface PageProps {
  params: Promise<{ citySlug: string }>;
}

export async function generateStaticParams() {
  return cities.map((c) => ({ citySlug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${siteConfig.url}/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${siteConfig.url}/${city.slug}`,
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const otherCities = cities.filter((c) => c.slug !== citySlug).slice(0, 6);

  const tocItems = [
    ...city.sections.map((s, i) => ({ id: `section-${i}`, label: s.title })),
    { id: "services", label: `Nos services à ${city.name}` },
    { id: "specificites", label: "Spécificités locales" },
    { id: "communes", label: "Communes proches desservies" },
    { id: "avantages", label: "Pourquoi nous choisir" },
    { id: "faq", label: "Questions fréquentes" },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Zone d'intervention", url: `${siteConfig.url}/zone-intervention` },
          { name: `Couvreur ${city.name}`, url: `${siteConfig.url}/${city.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`Couvreur à ${city.name}`}
        description={city.metaDescription}
        url={`${siteConfig.url}/${city.slug}`}
      />
      <FAQJsonLd questions={city.faq} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[750px]">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/zone-intervention"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Zone d&apos;intervention
              </Link>
              <i className="fas fa-chevron-right text-white/40 text-xs" />
              <span className="text-white text-sm">{city.name}</span>
            </div>
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              <i className="fas fa-map-marker-alt mr-1" /> {city.name} ({city.postalCode})
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              {city.h1}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              {city.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-file-alt" /> Devis gratuit à {city.name}
              </Link>
              <a href={siteConfig.phoneHref} className="btn btn-secondary btn-lg">
                <i className="fas fa-phone-alt" /> {siteConfig.phone}
              </a>
            </div>
            {city.population && (
              <div className="flex items-center gap-6 mt-8 text-white/60 text-sm">
                <span><i className="fas fa-users mr-2" />{city.population} habitants</span>
                <span><i className="fas fa-road mr-2" />À {city.distance} de notre siège</span>
                <span><i className="fas fa-shield-alt mr-2" />Garantie décennale</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Contenu principal */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">

            {/* Colonne principale */}
            <div>
              {/* Table des matières */}
              <nav className="bg-off-white rounded-2xl p-6 mb-10 border border-lighter-gray">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-list text-primary" /> Sommaire
                </h2>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-start gap-2 text-sm text-gray hover:text-primary transition-colors"
                      >
                        <span className="bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="line-clamp-2">{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Sections de contenu */}
              {city.sections.map((section, i) => (
                <div key={i} id={`section-${i}`} className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold mb-5 text-dark">
                    {section.title}
                  </h2>
                  {section.content.split("\n\n").map((p, j) => (
                    <p key={j} className="text-gray leading-8 mb-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              {/* Services proposés */}
              <div id="services" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-dark">
                  Nos services de couverture à {city.name}
                </h2>
                <p className="text-gray leading-8 mb-6">
                  À {city.name}, DT Couverture vous propose l&apos;ensemble de
                  ses prestations de couverture, zinguerie, charpente et
                  isolation. Cliquez sur un service pour en savoir plus :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-start gap-4 p-5 bg-off-white rounded-xl hover:bg-primary-lighter hover:shadow-md transition-all duration-300 border border-lighter-gray"
                    >
                      <div className="w-12 h-12 bg-primary-lighter rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors text-lg text-primary group-hover:text-white">
                        <ServiceIcon service={service} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm group-hover:text-primary transition-colors mb-1">
                          {service.shortTitle} à {city.name}
                        </h3>
                        <p className="text-gray text-xs leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Spécificités locales */}
              <div id="specificites" className="mb-12 scroll-mt-24">
                <div className="bg-gradient-to-r from-primary-lighter to-white rounded-2xl p-8 border-l-4 border-primary">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <i className="fas fa-info-circle text-primary" />
                    Spécificités locales à {city.name}
                  </h2>
                  <p className="text-dark-gray leading-8">
                    {city.localSpecificities}
                  </p>
                </div>
              </div>

              {/* Communes proches */}
              <div id="communes" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-4">
                  Communes proches de {city.name} desservies
                </h2>
                <p className="text-gray leading-8 mb-4">
                  DT Couverture intervient à {city.name} et dans toutes les
                  communes environnantes :
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {city.nearbyCommunes.map((commune) => {
                    const href = getCityInterventionHref(commune);
                    return (
                      <Link
                        key={commune}
                        href={href}
                        className="bg-off-white text-dark-gray text-sm font-medium px-4 py-2 rounded-full border border-lighter-gray inline-flex items-center transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <i className="fas fa-map-pin text-primary mr-1 text-xs shrink-0" aria-hidden />
                        {commune}
                      </Link>
                    );
                  })}
                </div>
                <p className="text-gray text-sm">
                  Vous ne trouvez pas votre commune ?{" "}
                  <a href={siteConfig.phoneHref} className="text-primary font-semibold hover:underline">
                    Appelez-nous au {siteConfig.phone}
                  </a>{" "}
                  pour vérifier notre disponibilité dans votre secteur.
                </p>
              </div>

              {/* Pourquoi nous choisir */}
              <div id="avantages" className="mb-12 scroll-mt-24">
                <div className="bg-primary-lighter rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    Pourquoi choisir DT Couverture à {city.name} ?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { icon: "fa-road", text: `Proximité : à seulement ${city.distance} de ${city.name}` },
                      { icon: "fa-shield-alt", text: "Artisan qualifié avec assurance décennale" },
                      { icon: "fa-file-invoice", text: "Devis gratuit et détaillé sur place sous 48h" },
                      { icon: "fa-bolt", text: "Intervention urgence sous 24h, 7j/7" },
                      { icon: "fa-hard-hat", text: "Plus de 500 chantiers réalisés en Gironde" },
                      { icon: "fa-gem", text: "Matériaux de qualité et travail soigné" },
                      { icon: "fa-comments", text: "Un seul interlocuteur de A à Z" },
                      { icon: "fa-hand-holding-usd", text: "Accompagnement aides MaPrimeRénov' et CEE" },
                    ].map((b, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                          <i className={`fas ${b.icon} text-primary text-sm`} />
                        </div>
                        <span className="text-sm font-medium text-dark">{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Témoignage local */}
              {testimonials
                .filter((t) => t.location === city.name)
                .slice(0, 1)
                .map((t, i) => (
                  <div
                    key={i}
                    className="bg-off-white rounded-2xl p-8 mb-12 border border-lighter-gray"
                  >
                    <h2 className="text-xl font-bold mb-4">
                      <i className="fas fa-star text-yellow-400 mr-2" />
                      Avis client à {city.name}
                    </h2>
                    <div className="text-yellow-400 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <i key={j} className="fas fa-star" />
                      ))}
                    </div>
                    <p className="text-dark-gray italic leading-relaxed mb-4">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm">
                        {t.initials}
                      </div>
                      <div>
                        <strong className="block text-sm">{t.author}</strong>
                        <span className="text-gray text-xs">{t.location}</span>
                      </div>
                    </div>
                  </div>
                ))}

              {/* FAQ */}
              <div id="faq" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <i className="fas fa-question-circle text-primary mr-2" />
                  Questions fréquentes — Couvreur à {city.name}
                </h2>
                <div className="space-y-4">
                  {city.faq.map((item, i) => (
                    <details
                      key={i}
                      className="bg-off-white rounded-xl border border-lighter-gray group"
                      {...(i === 0 ? { open: true } : {})}
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-dark hover:text-primary transition-colors list-none">
                        <span className="flex items-center gap-3">
                          <span className="bg-primary text-white text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          {item.question}
                        </span>
                        <i className="fas fa-chevron-down text-primary transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 text-gray leading-8 border-t border-lighter-gray pt-4">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* CTA final */}
              <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">
                  Besoin d&apos;un couvreur à {city.name} ?
                </h2>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Contactez DT Couverture pour un devis gratuit et sans
                  engagement. Intervention rapide à {city.name} et dans toutes
                  les communes environnantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn !bg-white !text-primary font-bold btn-lg hover:!bg-off-white">
                    <i className="fas fa-file-alt" /> Demander un devis gratuit
                  </Link>
                  <a href={siteConfig.phoneHref} className="btn btn-secondary btn-lg">
                    <i className="fas fa-phone-alt" /> {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="lg:sticky lg:top-24 space-y-8">
                <ContactForm />

                {/* Téléphone CTA */}
                <div className="bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl p-6 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-phone-alt text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Appel direct</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Réponse immédiate, devis en 24h
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="block btn !bg-white !text-secondary font-bold w-full"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Nos services */}
                <div className="bg-off-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-dark">
                    <i className="fas fa-tools text-primary mr-2" />
                    Nos services
                  </h3>
                  <div className="space-y-2">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
                      >
                        <span className="text-primary group-hover:text-primary-dark text-sm w-5 flex justify-center">
                          <ServiceIcon service={s} />
                        </span>
                        <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
                          {s.shortTitle}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Autres villes */}
                <div className="bg-off-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-dark">
                    <i className="fas fa-map-marked-alt text-primary mr-2" />
                    Autres zones
                  </h3>
                  <div className="space-y-2">
                    {otherCities.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/${c.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
                      >
                        <i className="fas fa-map-marker-alt text-primary group-hover:text-primary-dark text-sm" />
                        <div>
                          <span className="text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                            Couvreur {c.name}
                          </span>
                          <span className="block text-gray text-xs">
                            {c.distance} — {c.postalCode}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/zone-intervention"
                    className="block text-center text-primary font-semibold text-sm mt-4 hover:underline"
                  >
                    Voir toutes nos zones →
                  </Link>
                </div>

                {/* Garanties */}
                <div className="bg-off-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-dark">Nos garanties</h3>
                  <div className="space-y-3">
                    {[
                      { icon: "fa-shield-alt", text: "Garantie décennale" },
                      { icon: "fa-certificate", text: "Artisan qualifié" },
                      { icon: "fa-file-invoice", text: "Devis gratuit sous 48h" },
                      { icon: "fa-bolt", text: "Urgence 24h/24" },
                      { icon: "fa-star", text: "4.8/5 avis clients" },
                    ].map((g, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <i className={`fas ${g.icon} text-primary`} />
                        <span className="text-sm font-medium">{g.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBanner variant="dark" />
    </>
  );
}
