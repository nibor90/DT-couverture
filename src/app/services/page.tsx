import type { Metadata } from "next";
import Link from "next/link";
import ServiceIcon from "@/components/ServiceIcon";
import { services, siteConfig } from "@/lib/data";
import CallbackBanner from "@/components/CallbackBanner";
import CtaBanner from "@/components/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Nos Services de Couverture en Gironde",
  description:
    "Découvrez tous les services de DT Couverture : toiture, zinguerie, charpente, isolation, Velux, démoussage, réparation urgente. Artisan couvreur en Gironde.",
  alternates: { canonical: `${siteConfig.url}/services` },
  openGraph: {
    title: "Services de Couverture | DT Couverture Gironde",
    description:
      "Toiture, zinguerie, charpente, isolation, Velux, démoussage. Artisan couvreur qualifié en Gironde. Devis gratuit.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[700px]">
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              Nos expertises
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Tous nos <span className="text-accent">services</span> de
              couverture
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              DT Couverture vous propose une gamme complète de prestations pour
              la toiture, la zinguerie et la charpente. Découvrez nos
              spécialités et demandez votre devis gratuit.
            </p>
          </div>
        </div>
      </section>

      <CallbackBanner />

      {/* Services grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white rounded-2xl p-8 border border-lighter-gray hover:-translate-y-1.5 hover:shadow-xl hover:border-transparent transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary-lighter rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300 text-2xl text-primary group-hover:text-white">
                    <ServiceIcon service={service} className="transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray text-sm leading-7 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <span
                          key={i}
                          className="text-xs bg-off-white text-dark-gray px-3 py-1 rounded-full"
                        >
                          <i className="fas fa-check text-primary mr-1" />
                          {b}
                        </span>
                      ))}
                    </div>
                    <span className="text-secondary font-semibold text-sm font-heading inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                      Voir les détails <i className="fas fa-arrow-right" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
