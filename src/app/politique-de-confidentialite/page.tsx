import type { Metadata } from "next";
import { siteConfig } from "@/lib/data";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: `Politique de confidentialité du site DT Couverture. Informations sur la collecte et le traitement des données personnelles.`,
  alternates: { canonical: `${siteConfig.url}/politique-de-confidentialite` },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: siteConfig.url },
          {
            name: "Politique de confidentialité",
            url: `${siteConfig.url}/politique-de-confidentialite`,
          },
        ]}
      />

      <section className="bg-gradient-to-br from-dark to-primary-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark/60" />
        <div className="container-custom relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-[800px]">
          <div className="prose prose-lg max-w-none text-gray leading-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                1. Collecte des données personnelles
              </h2>
              <p>
                Lors de votre visite sur le site <strong>dt-couverture.fr</strong>,
                nous sommes susceptibles de collecter les données personnelles
                suivantes :
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Ville et code postal</li>
                <li>Description du projet (message libre)</li>
              </ul>
              <p className="mt-3">
                Ces données sont collectées uniquement via les formulaires de
                contact et de demande de devis présents sur le site, avec votre
                consentement explicite.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                2. Finalité du traitement
              </h2>
              <p>Vos données personnelles sont utilisées exclusivement pour :</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Traiter vos demandes de devis et de renseignements</li>
                <li>Vous recontacter par téléphone ou email</li>
                <li>Établir un devis personnalisé</li>
                <li>Assurer le suivi de votre dossier</li>
              </ul>
              <p className="mt-3">
                Vos données ne sont jamais vendues, louées ou transmises à des
                tiers à des fins commerciales.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                3. Responsable du traitement
              </h2>
              <p>
                Le responsable du traitement des données est :
              </p>
              <p className="mt-2">
                <strong>{siteConfig.legalName}</strong>
                <br />
                {siteConfig.address.full}
                <br />
                Email : {siteConfig.email}
                <br />
                Téléphone :{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="text-primary font-semibold hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                4. Durée de conservation
              </h2>
              <p>
                Vos données personnelles sont conservées pendant une durée
                maximale de 3 ans à compter de votre dernière interaction avec
                {siteConfig.name}. Passé ce délai, elles sont automatiquement
                supprimées.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                5. Vos droits
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez des
                droits suivants :
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>
                  <strong>Droit d&apos;accès :</strong> obtenir la confirmation
                  que des données vous concernant sont traitées et en obtenir
                  une copie
                </li>
                <li>
                  <strong>Droit de rectification :</strong> demander la
                  correction de données inexactes
                </li>
                <li>
                  <strong>Droit à l&apos;effacement :</strong> demander la
                  suppression de vos données
                </li>
                <li>
                  <strong>Droit d&apos;opposition :</strong> vous opposer au
                  traitement de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données
                  dans un format structuré
                </li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous à{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:text-secondary"
                >
                  {siteConfig.email}
                </a>{" "}
                ou par courrier à l&apos;adresse du siège social.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                6. Cookies
              </h2>
              <p>
                Le site dt-couverture.fr utilise des cookies techniques
                strictement nécessaires à son fonctionnement.
              </p>
              <p className="mt-3">
                Une balise Google (Google Ads, identifiant{" "}
                {siteConfig.googleAdsId}) est également installée pour mesurer
                l&apos;activité du site et les conversions publicitaires. Cette
                balise peut déposer des cookies de mesure. Pour en savoir plus
                sur le traitement des données par Google, consultez{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  la politique de confidentialité de Google
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                7. Sécurité
              </h2>
              <p>
                Nous mettons en œuvre des mesures techniques et
                organisationnelles appropriées pour protéger vos données
                personnelles contre tout accès non autorisé, perte ou
                altération. Le site utilise le protocole HTTPS pour sécuriser
                les échanges de données.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-4">
                8. Modification de la politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de
                confidentialité à tout moment. Toute modification sera publiée
                sur cette page avec la date de mise à jour.
              </p>
              <p className="mt-3 text-sm">
                <em>Dernière mise à jour : avril 2026</em>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
