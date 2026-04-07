import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-dark text-light-gray pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* About */}
          <div>
            <Image
              src="/images/logo_dt_titre.png"
              alt="DT Couverture"
              width={200}
              height={60}
              className="h-[60px] w-auto mb-4 brightness-125"
            />
            <p className="text-sm leading-7 mb-5">
              Artisan couvreur professionnel basé à {siteConfig.address.city}.
              Spécialiste toiture, zinguerie et charpente en Gironde depuis{" "}
              {siteConfig.foundedYear}.
            </p>
            <div className="flex gap-3">
              {[
                { href: siteConfig.social.facebook, icon: "fab fa-facebook-f", label: "Facebook" },
                { href: siteConfig.social.instagram, icon: "fab fa-instagram", label: "Instagram" },
                { href: siteConfig.social.google, icon: "fab fa-google", label: "Google" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-md bg-white/8 flex items-center justify-center text-light-gray hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-[1.05rem] font-bold mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-[3px] after:bg-secondary after:rounded">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-light-gray hover:text-secondary hover:pl-1 transition-all duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-[1.05rem] font-bold mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-[3px] after:bg-secondary after:rounded">
              Liens utiles
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Accueil", href: "/" },
                { label: "À propos", href: "/a-propos" },
                { label: "Réalisations", href: "/realisations" },
                { label: "Zone d'intervention", href: "/zone-intervention" },
                { label: "Contact", href: "/contact" },
                { label: "Mentions légales", href: "/mentions-legales" },
                { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-light-gray hover:text-secondary hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[1.05rem] font-bold mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-9 after:h-[3px] after:bg-secondary after:rounded">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start text-sm">
                <i className="fas fa-map-marker-alt text-secondary mt-1 min-w-[16px]" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex gap-3 items-center text-sm hover:text-secondary transition-colors"
                >
                  <i className="fas fa-phone text-secondary min-w-[16px]" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex gap-3 items-center text-sm hover:text-secondary transition-colors"
                >
                  <i className="fas fa-envelope text-secondary min-w-[16px]" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 text-center">
          <p className="text-sm mb-3">
            &copy; {new Date().getFullYear()} DT Couverture - Tous droits
            réservés
          </p>
          <p className="text-xs text-gray leading-relaxed">
            <strong>Mentions légales :</strong> {siteConfig.legalName} -
            Entrepreneur individuel | SIREN : {siteConfig.siren} | SIRET :{" "}
            {siteConfig.siret} | N° TVA : {siteConfig.tva} | APE :{" "}
            {siteConfig.ape} - {siteConfig.activity} | Siège :{" "}
            {siteConfig.address.full}
          </p>
        </div>
      </div>
    </footer>
  );
}
