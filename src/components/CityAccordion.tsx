"use client";

import { useState } from "react";
import Link from "next/link";
import {
  citiesAroundSaintDenis,
  citiesAroundBordeaux,
  getCityInterventionHref,
  cities,
} from "@/lib/data";

interface AccordionItemProps {
  title: string;
  icon: string;
  subtitle: string;
  cityNames: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function cityHasLandingPage(cityName: string): boolean {
  return cities.some((c) => c.name === cityName);
}

function AccordionItem({
  title,
  icon,
  subtitle,
  cityNames,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border border-lighter-gray rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 bg-white hover:bg-off-white transition-colors text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-primary" : "bg-primary-lighter"}`}
          >
            <i
              className={`fas ${icon} text-lg transition-colors duration-300 ${isOpen ? "text-white" : "text-primary"}`}
            />
          </div>
          <div>
            <h3 className="font-bold text-dark text-base md:text-lg">{title}</h3>
            <p className="text-gray text-sm">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline-block bg-primary-lighter text-primary text-xs font-bold px-3 py-1 rounded-full">
            {cityNames.length} villes
          </span>
          <i
            className={`fas fa-chevron-down text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-6 pt-2 bg-off-white/50">
          <div className="flex flex-wrap gap-2">
            {cityNames.map((cityName) => {
              const href = getCityInterventionHref(cityName);
              const hasPage = cityHasLandingPage(cityName);
              return (
                <Link
                  key={cityName}
                  href={href}
                  className="bg-primary-lighter text-primary-dark px-3 py-1.5 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={
                    hasPage
                      ? `Couvreur à ${cityName} — page dédiée`
                      : `Intervention couvreur à ${cityName} — zone d'intervention`
                  }
                >
                  {cityName}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CityAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      <AccordionItem
        title="Autour de Bordeaux"
        icon="fa-city"
        subtitle="Métropole bordelaise et périphérie — rayon 30 km"
        cityNames={citiesAroundBordeaux}
        isOpen={openIndex === 0}
        onToggle={() => toggle(0)}
      />
      <AccordionItem
        title="Autour de Saint-Denis-de-Pile"
        icon="fa-map-marker-alt"
        subtitle="Libournais, Nord Gironde et Dordogne — rayon 30 km"
        cityNames={citiesAroundSaintDenis}
        isOpen={openIndex === 1}
        onToggle={() => toggle(1)}
      />
    </div>
  );
}
