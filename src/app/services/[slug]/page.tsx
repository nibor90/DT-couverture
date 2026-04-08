import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, siteConfig } from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import {
  BreadcrumbJsonLd,
  FAQJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceIcon from "@/components/ServiceIcon";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${siteConfig.url}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  const tocItems = [
    ...service.sections.map((s, i) => ({ id: `section-${i}`, label: s.title })),
    { id: "etapes", label: "Les étapes de notre intervention" },
    { id: "tarifs", label: "Tarifs indicatifs" },
    { id: "signes", label: "Quand faire appel à un professionnel ?" },
    { id: "avantages", label: "Pourquoi choisir DT Couverture ?" },
    { id: "faq", label: "Questions fréquentes" },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={service.title}
        description={service.description}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
      {service.faq.length > 0 && <FAQJsonLd questions={service.faq} />}

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[750px]">
            <div className="flex items-center gap-3 mb-6 text-sm">
              <Link href="/" className="text-white/50 hover:text-white transition-colors">Accueil</Link>
              <i className="fas fa-chevron-right text-white/30 text-xs" />
              <Link href="/services" className="text-white/50 hover:text-white transition-colors">Services</Link>
              <i className="fas fa-chevron-right text-white/30 text-xs" />
              <span className="text-white">{service.title}</span>
            </div>
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm text-3xl text-secondary">
              <ServiceIcon service={service} />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              {service.h1}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              {service.heroText}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-file-alt" /> Devis gratuit
              </Link>
              <a href={siteConfig.phoneHref} className="btn btn-secondary btn-lg">
                <i className="fas fa-phone-alt" /> {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-16">
            {/* Main content */}
            <div>
              {/* Table of contents */}
              <nav className="bg-off-white rounded-2xl p-6 mb-12 border border-lighter-gray">
                <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-list-ul text-primary" /> Sommaire
                </h2>
                <ol className="space-y-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-gray hover:text-primary transition-colors flex items-start gap-2"
                      >
                        <span className="text-primary font-bold shrink-0">{i + 1}.</span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Sections détaillées */}
              {service.sections.map((section, i) => (
                <div key={i} id={`section-${i}`} className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl md:text-3xl font-bold mb-5 text-dark leading-tight">
                    {section.title}
                  </h2>
                  <div className="text-gray leading-8 text-[0.98rem]">
                    {section.content.split('. ').reduce<string[][]>((acc, sentence, idx, arr) => {
                      const chunkSize = Math.ceil(arr.length / Math.min(3, Math.ceil(arr.length / 3)));
                      const chunkIndex = Math.floor(idx / chunkSize);
                      if (!acc[chunkIndex]) acc[chunkIndex] = [];
                      acc[chunkIndex].push(sentence);
                      return acc;
                    }, []).map((paragraph, pIdx) => (
                      <p key={pIdx} className={pIdx > 0 ? "mt-4" : ""}>
                        {paragraph.join('. ')}{paragraph[paragraph.length - 1].endsWith('.') ? '' : '.'}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Étapes / Process */}
              <div id="etapes" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark">
                  Les étapes de notre intervention
                </h2>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-heading font-bold text-lg shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1 pb-6 border-b border-lighter-gray last:border-0">
                        <h3 className="font-bold text-dark mb-1">{step.step}</h3>
                        <p className="text-gray text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarifs indicatifs */}
              <div id="tarifs" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark">
                  Tarifs indicatifs — {service.shortTitle}
                </h2>
                <div className="bg-white rounded-2xl border border-lighter-gray overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-dark text-white">
                          <th className="text-left px-6 py-4 font-semibold">Prestation</th>
                          <th className="text-right px-6 py-4 font-semibold">Fourchette de prix TTC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.priceRange.items.map((item, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-off-white" : "bg-white"}>
                            <td className="px-6 py-3.5 text-dark font-medium">{item.label}</td>
                            <td className="px-6 py-3.5 text-right text-secondary font-bold whitespace-nowrap">{item.range}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-primary-lighter text-sm text-dark-gray">
                    <i className="fas fa-info-circle text-primary mr-1.5" />
                    {service.priceRange.note}
                  </div>
                </div>
              </div>

              {/* Signes */}
              <div id="signes" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-dark">
                  Quand faire appel à un professionnel ?
                </h2>
                <p className="text-gray mb-6 leading-relaxed">
                  Si vous constatez un ou plusieurs de ces signes, contactez DT Couverture pour un diagnostic gratuit :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.signs.map((sign, i) => (
                    <div key={i} className="flex items-start gap-3 bg-off-white rounded-xl p-4">
                      <i className="fas fa-exclamation-triangle text-secondary mt-0.5 shrink-0" />
                      <span className="text-sm text-dark font-medium leading-relaxed">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Avantages */}
              <div id="avantages" className="bg-primary-lighter rounded-2xl p-8 mb-12 scroll-mt-24">
                <h2 className="text-2xl font-bold mb-6 text-dark">
                  Pourquoi choisir DT Couverture pour votre {service.shortTitle.toLowerCase()} ?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <i className="fas fa-check-circle text-primary mt-0.5 shrink-0" />
                      <span className="text-sm font-medium leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div id="faq" className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark">
                  Questions fréquentes — {service.title}
                </h2>
                <div className="space-y-4">
                  {service.faq.map((item, i) => (
                    <details
                      key={i}
                      className="bg-off-white rounded-xl p-6 group open:bg-white open:shadow-md open:border open:border-lighter-gray transition-all"
                    >
                      <summary className="font-bold text-dark cursor-pointer list-none flex items-center justify-between gap-4">
                        <span className="leading-snug">{item.question}</span>
                        <i className="fas fa-chevron-down text-primary text-sm transition-transform duration-300 group-open:rotate-180 shrink-0" />
                      </summary>
                      <p className="mt-4 text-gray leading-7 text-sm">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Sticky wrapper */}
              <div className="lg:sticky lg:top-24 space-y-8">
                <ContactForm />

                {/* Autres services */}
                <div className="bg-off-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-5 text-dark">
                    Nos autres services
                  </h3>
                  <div className="space-y-2.5">
                    {otherServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 bg-primary-lighter rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors text-lg text-primary group-hover:text-white">
                          <ServiceIcon service={s} />
                        </div>
                        <span className="font-semibold text-sm text-dark group-hover:text-primary transition-colors leading-snug">
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA téléphone */}
                <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-phone-alt text-2xl text-white" />
                  </div>
                  <p className="text-white font-bold text-lg mb-2">
                    Besoin d&apos;un devis ?
                  </p>
                  <p className="text-white/75 text-sm mb-5">
                    Appelez-nous pour une réponse immédiate
                  </p>
                  <a
                    href={siteConfig.phoneHref}
                    className="btn btn-primary btn-lg w-full justify-center !bg-secondary !border-secondary"
                  >
                    <i className="fas fa-phone-alt" /> {siteConfig.phone}
                  </a>
                </div>

                {/* Trust badges */}
                <div className="bg-off-white rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 text-dark">
                    Nos garanties
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: "fa-shield-alt", text: "Assurance décennale" },
                      { icon: "fa-certificate", text: "Artisan qualifié RNE" },
                      { icon: "fa-file-contract", text: "Devis gratuit sous 48h" },
                      { icon: "fa-bolt", text: "Intervention rapide" },
                      { icon: "fa-thumbs-up", text: "500+ chantiers réalisés" },
                    ].map((badge) => (
                      <div key={badge.text} className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <i className={`fas ${badge.icon} text-primary text-sm`} />
                        </div>
                        <span className="text-sm font-medium text-dark">{badge.text}</span>
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
