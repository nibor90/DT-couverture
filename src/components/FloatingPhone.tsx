"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

export default function FloatingPhone() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating phone */}
      <a
        href={siteConfig.phoneHref}
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 bg-secondary text-white w-14 h-14 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center text-2xl z-[999] animate-pulse-phone hover:scale-110 transition-transform group"
        aria-label={`Appelez-nous 24h/24 et 7j/7 au ${siteConfig.phone}`}
      >
        <i className="fas fa-phone-alt" />
        <span className="sr-only">{siteConfig.phone}</span>
        <span className="absolute right-[calc(100%+0.75rem)] bg-dark text-white px-3 py-1.5 rounded-md text-sm font-semibold whitespace-nowrap opacity-0 translate-x-2.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none hidden md:block">
          24h/24 et 7j/7
          <span className="block">{siteConfig.phone}</span>
        </span>
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 left-5 md:bottom-8 md:left-8 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center z-[999] shadow-lg hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-5"
        }`}
        aria-label="Retour en haut"
      >
        <i className="fas fa-chevron-up" />
      </button>
    </>
  );
}
