"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, services } from "@/lib/data";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/#temoignages" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setMobileServicesOpen(false);
  }, [isOpen]);

  const linkClass =
    "px-4 py-2 font-heading font-semibold text-sm text-dark-gray rounded-md hover:text-primary transition-colors relative group flex items-center gap-1";

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="container-custom">
          <nav
            className="flex items-center justify-between py-2 min-h-[70px]"
            aria-label="Navigation principale"
          >
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
              <li>
                <Link href="/" className={linkClass}>
                  Accueil
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-3/5 rounded" />
                </Link>
              </li>
              <li className="relative group/dropdown">
                <Link
                  href="/services"
                  className={`${linkClass} pr-3`}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                  <i
                    className="fas fa-chevron-down opacity-70 text-[10px] transition-transform duration-200 group-hover/dropdown:rotate-180"
                    aria-hidden
                  />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover/dropdown:w-3/5 rounded" />
                </Link>
                <div className="absolute left-0 top-full pt-1.5 opacity-0 invisible pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:pointer-events-auto group-focus-within/dropdown:opacity-100 group-focus-within/dropdown:visible group-focus-within/dropdown:pointer-events-auto transition-[opacity,visibility] duration-150 z-[60] min-w-[240px]">
                  <ul
                    className="bg-white rounded-lg border border-lighter-gray shadow-xl py-2"
                    role="menu"
                  >
                    {services.map((s) => (
                      <li key={s.slug} role="none">
                        <Link
                          href={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-sm font-semibold text-dark-gray hover:bg-primary-lighter hover:text-primary transition-colors"
                          role="menuitem"
                        >
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                    <li role="none" className="border-t border-lighter-gray mt-1 pt-1">
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm font-bold text-secondary font-heading hover:bg-primary-lighter/80 transition-colors"
                        role="menuitem"
                      >
                        Tous les services
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
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
                type="button"
                className="lg:hidden flex flex-col gap-[5px] p-1 z-[1001]"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-controls="mobile-drawer-nav"
                aria-label="Ouvrir le menu"
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
          aria-hidden
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-drawer-nav"
        className={`fixed top-0 right-0 w-4/5 max-w-[350px] h-screen bg-white z-[1000] shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div className="pt-20 px-6 overflow-y-auto max-h-screen pb-10">
          <Link
            href="/"
            className="block py-4 font-heading font-semibold text-dark-gray border-b border-lighter-gray hover:text-primary transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <div className="border-b border-lighter-gray">
            <div className="flex items-center justify-between gap-2">
              <Link
                href="/services"
                className="flex-1 py-4 font-heading font-semibold text-dark-gray hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <button
                type="button"
                className="py-4 px-2 text-dark-gray hover:text-primary"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services-list"
                aria-label={
                  mobileServicesOpen
                    ? "Replier la liste des services"
                    : "Afficher la liste des services"
                }
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                <i
                  className={`fas fa-chevron-down text-sm transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <ul
              id="mobile-services-list"
              className={`overflow-hidden transition-all duration-200 ${
                mobileServicesOpen ? "max-h-[480px] pb-3" : "max-h-0"
              }`}
            >
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block py-2.5 pl-3 text-sm font-medium text-gray border-l-2 border-primary/30 hover:border-secondary hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
