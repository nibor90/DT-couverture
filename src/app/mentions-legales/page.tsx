import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: `Mentions légales du site DT Couverture. Informations sur l'entreprise ${siteConfig.legalName}, SIREN ${siteConfig.siren}.`,
  alternates: { canonical: `${siteConfig.url}/mentions-legales` },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          { name: "Mentions légales", url: `${siteConfig.url}/mentions-legales` },
        ]}
      />

      <section className="bg-gradient-to-br from-dark to-primary-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-[800px]">
          <div className="prose prose-lg max-w-none text-gray leading-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                1. Éditeur du site
              </h2>
              <p>
                Le site <strong>dt-couverture.fr</strong> est édité par :
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>
                  <strong>Raison sociale :</strong> {siteConfig.legalName} -
                  Entrepreneur individuel
                </li>
                <li>
                  <strong>Nom commercial :</strong> {siteConfig.name}
                </li>
                <li>
                  <strong>SIREN :</strong> {siteConfig.siren}
                </li>
                <li>
                  <strong>SIRET :</strong> {siteConfig.siret}
                </li>
                <li>
                  <strong>N° TVA intracommunautaire :</strong> {siteConfig.tva}
                </li>
                <li>
                  <strong>Code APE :</strong> {siteConfig.ape} -{" "}
                  {siteConfig.activity}
                </li>
                <li>
                  <strong>Siège social :</strong> {siteConfig.address.full}
                </li>
                <li>
                  <strong>Téléphone :</strong>{" "}
                  <a
                    href={siteConfig.phoneHref}
                    className="text-primary font-semibold hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <strong>Email :</strong> {siteConfig.email}
                </li>
                <li>
                  <strong>Directeur de publication :</strong>{" "}
                  {siteConfig.founder}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                2. Hébergement
              </h2>
              <p>
                Le site est hébergé par <strong>Vercel Inc.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA</li>
                <li>
                  Site web :{" "}
                  <a
                    href="https://vercel.com"
                    className="text-primary hover:text-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    vercel.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                3. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, logos,
                graphismes) est la propriété exclusive de {siteConfig.name} ou
                de ses partenaires. Toute reproduction, même partielle, est
                interdite sans autorisation préalable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                4. Responsabilité
              </h2>
              <p>
                {siteConfig.name} s&apos;efforce de fournir des informations
                aussi précises que possible. Toutefois, elle ne pourra être tenue
                responsable des omissions, des inexactitudes ou des carences
                dans la mise à jour.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                5. Assurance professionnelle
              </h2>
              <p>
                {siteConfig.name} est couvert par une assurance responsabilité
                civile professionnelle et une garantie décennale, conformément
                aux obligations légales pour les travaux de couverture.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                6. Cookies
              </h2>
              <p>
                Ce site utilise des cookies techniques nécessaires à son
                fonctionnement, ainsi que Google Tag Manager (
                {siteConfig.gtmId}) et Google Ads ({siteConfig.googleAdsId}) pour
                mesurer l&apos;activité et les conversions. Le détail figure
                dans la{" "}
                <a
                  href="/politique-de-confidentialite"
                  className="text-primary font-semibold hover:underline"
                >
                  politique de confidentialité
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                7. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français.
                En cas de litige, les tribunaux de Libourne seront seuls
                compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
