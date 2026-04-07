"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/#temoignages" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-light-gray text-sm py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex gap-6">
              <span>
                <i className="fas fa-map-marker-alt text-secondary mr-1.5" />
                {siteConfig.address.full}
              </span>
              <span>
                <i className="fas fa-clock text-secondary mr-1.5" />
                {siteConfig.hours}
              </span>
            </div>
            <a
              href={siteConfig.phoneHref}
              className="text-white font-semibold hover:text-secondary transition-colors"
            >
              <i className="fas fa-phone text-secondary mr-1.5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between py-2 min-h-[70px]">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo_dt_titre.png"
                alt="DT Couverture - Logo"
                width={200}
                height={60}
                className="h-[60px] w-auto hidden md:block"
                priority
              />
              <Image
                src="/images/logo_dt_mobile.png"
                alt="DT Couverture"
                width={50}
                height={50}
                className="h-[50px] w-auto md:hidden"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-4 py-2 font-heading font-semibold text-sm text-dark-gray rounded-md hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/5 rounded" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <a
                href={siteConfig.phoneHref}
                className="btn-primary btn hidden sm:inline-flex text-sm !px-4 !py-2.5"
              >
                <i className="fas fa-phone" />
                <span className="hidden md:inline">{siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.phoneHref}
                className="sm:hidden w-[42px] h-[42px] rounded-full bg-secondary text-white flex items-center justify-center"
              >
                <i className="fas fa-phone" />
              </a>
              <button
                className="lg:hidden flex flex-col gap-[5px] p-1 z-[1001]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
              >
                <span
                  className={`block w-7 h-[3px] bg-dark rounded transition-transform duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-7 h-[3px] bg-dark rounded transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-7 h-[3px] bg-dark rounded transition-transform duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-[350px] h-screen bg-white z-[1000] shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-4 font-heading font-semibold text-dark-gray border-b border-lighter-gray hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="btn btn-primary w-full justify-center mt-6"
          >
            <i className="fas fa-phone" />
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </>
  );
}
