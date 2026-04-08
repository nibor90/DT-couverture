import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact & Devis Gratuit | Couvreur Gironde",
  description:
    "Contactez DT Couverture pour un devis gratuit. Couvreur à Saint-Denis-de-Pile, intervention en Gironde. Téléphone, email ou formulaire en ligne.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contactez DT Couverture | Devis Gratuit",
    description:
      "Demandez votre devis gratuit pour tous travaux de toiture en Gironde. Réponse sous 24h.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-dark to-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <div className="max-w-[700px]">
            <span className="section-tag !bg-secondary/15 !text-secondary-light border border-secondary/30">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Contactez <span className="text-accent">DT Couverture</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Pour toute demande de renseignements ou de devis gratuit,
              n&apos;hésitez pas à nous contacter. Nous vous répondons sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-off-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
            {/* Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                {[
                  {
                    icon: "fa-phone-alt",
                    title: "Téléphone",
                    content: (
                      <a
                        href={siteConfig.phoneHref}
                        className="text-primary font-medium hover:text-secondary transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                    ),
                  },
                  {
                    icon: "fa-envelope",
                    title: "Email",
                    content: (
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-primary font-medium hover:text-secondary transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    ),
                  },
                  {
                    icon: "fa-map-marker-alt",
                    title: "Adresse",
                    content: (
                      <p className="text-gray text-sm">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.zip} {siteConfig.address.city}
                      </p>
                    ),
                  },
                  {
                    icon: "fa-clock",
                    title: "Horaires",
                    content: (
                      <p className="text-gray text-sm">{siteConfig.hours}</p>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 items-start py-4 border-b border-lighter-gray last:border-0"
                  >
                    <div className="w-11 h-11 min-w-[44px] bg-primary-lighter rounded-lg flex items-center justify-center">
                      <i className={`fas ${item.icon} text-primary`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-dark mb-0.5">
                        {item.title}
                      </h4>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA téléphone */}
              <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 text-center">
                <p className="text-white/85 mb-4 font-medium">
                  Besoin d&apos;une réponse rapide ?
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="btn btn-primary btn-lg w-full justify-center !bg-secondary !border-secondary"
                >
                  <i className="fas fa-phone-alt" /> Appelez-nous directement
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45216.98!2d-0.0985!3d44.9947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5546b1e69a7b4d%3A0x406651748429c30!2s33910%20Saint-Denis-de-Pile!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  className="w-full h-[300px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation DT Couverture"
                />
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
