import Script from "next/script";
import { siteConfig } from "@/lib/data";

/**
 * Balise Google (gtag.js) — Google Ads.
 * Chargée sur toutes les pages via le layout racine.
 */
export default function GoogleTag() {
  const id = siteConfig.googleAdsId;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
