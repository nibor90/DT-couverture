import { siteConfig } from "@/lib/data";

type GirondeMapEmbedProps = {
  className?: string;
  heightClass?: string;
};

export default function GirondeMapEmbed({
  className = "w-full border-0 rounded-2xl shadow-lg",
  heightClass = "h-[400px]",
}: GirondeMapEmbedProps) {
  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden rounded-2xl">
      <iframe
        src={siteConfig.mapsEmbedGirondeUrl}
        className={`${className} ${heightClass} max-w-full`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Département de la Gironde — zone d'intervention DT Couverture"
      />
      <p className="text-xs text-gray mt-2">
        <a
          href={siteConfig.mapsGirondeExternalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Ouvrir Gironde dans Google Maps
        </a>
      </p>
    </div>
  );
}
