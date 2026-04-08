import type { ServiceData } from "@/lib/data";

/** Icône Font Awesome ou pictos métier (gouttière, nettoyeur HP…). */
function ServiceIcon({
  service,
  className = "",
}: {
  service: ServiceData;
  className?: string;
}) {
  if (service.slug === "zinguerie") {
    return (
      <span className={`inline-flex items-center justify-center ${className}`} aria-hidden>
        <svg
          viewBox="0 0 32 32"
          className="w-[1em] h-[1em] shrink-0"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 9c0-.55.45-1 1-1h26c.55 0 1 .45 1 1v1.25c0 1.24-.73 2.36-1.86 2.86l-.14.06c-.4.17-.83.26-1.27.26H22v8.25a1.25 1.25 0 11-2.5 0V17h-5v5.25a1.25 1.25 0 11-2.5 0V13.17H7.27c-.44 0-.87-.09-1.27-.26l-.14-.06A3.07 3.07 0 013 11.25V9zm2-3.25c0-.97.78-1.75 1.75-1.75h20.5c.97 0 1.75.78 1.75 1.75V7H4V5.75z" />
        </svg>
      </span>
    );
  }

  if (service.slug === "nettoyage-demoussage") {
    return (
      <span className={`inline-flex items-center justify-center ${className}`} aria-hidden>
        <svg
          viewBox="0 0 32 32"
          className="w-[1em] h-[1em] shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="13" width="17" height="6" rx="1.5" fill="currentColor" />
          <path d="M3 19v8h6v-5.5a2 2 0 00-2-2H3z" fill="currentColor" />
          <rect x="19" y="13.5" width="5" height="5" rx="1" fill="currentColor" />
          <path
            d="M26 11.5l6-4.5M26 16h7M26 20.5l6 4.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
    );
  }

  return <i className={`fas ${service.icon} ${className}`} aria-hidden />;
}

export default ServiceIcon;
