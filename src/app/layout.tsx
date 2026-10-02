import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingPhone from "@/components/FloatingPhone";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dt-couverture.fr"),
  title: {
    default: "DT Couverture | Couvreur professionnel en Gironde - Saint-Denis-de-Pile",
    template: "%s | DT Couverture",
  },
  description:
    "DT Couverture - Couvreur professionnel à Saint-Denis-de-Pile (33910). Toiture, zinguerie, charpente, rénovation. Devis gratuit. Intervention rapide en Gironde.",
  keywords: [
    "couvreur",
    "toiture",
    "zinguerie",
    "charpente",
    "rénovation toiture",
    "Saint-Denis-de-Pile",
    "Gironde",
    "33910",
    "DT Couverture",
    "couvreur Gironde",
    "artisan couvreur",
  ],
  authors: [{ name: "DT Couverture" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "DT Couverture",
    images: [
      {
        url: "/images/logo_dt_titre.png",
        width: 1200,
        height: 630,
        alt: "DT Couverture - Couvreur professionnel en Gironde",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://dt-couverture.fr",
  },
  icons: {
    icon: "/images/logo_dt_mobile.png",
    apple: "/images/logo_dt_mobile.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <GoogleTagManager />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <LocalBusinessJsonLd />
      </head>
      <body className="antialiased overflow-x-clip max-w-full">
        <GoogleTagManagerNoScript />
        <Header />
        <main className="min-w-0 w-full overflow-x-clip">{children}</main>
        <Footer />
        <FloatingPhone />
      </body>
    </html>
  );
}
