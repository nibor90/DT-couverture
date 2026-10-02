import Script from "next/script";
import { siteConfig } from "@/lib/data";

/**
 * Google Tag Manager — chargé sur toutes les pages via le layout racine.
 * Le script est placé dans le <head> ; le noscript suit l'ouverture de <body>.
 */
export default function GoogleTagManager() {
  const id = siteConfig.gtmId;

  return (
    <Script id="google-tag-manager" strategy="beforeInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  const id = siteConfig.gtmId;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}
