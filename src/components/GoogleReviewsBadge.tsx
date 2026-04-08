import { siteConfig } from "@/lib/data";

/** Icône « G » Google (couleurs repères marque). */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4c-7.682 0-14.344 4.337-17.694 10.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.222 0-9.631-3.318-11.303-8H6.297C8.777 38.281 15.709 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571.006.006 0 0 1 0-.002 3 3 0 0 1-.422.323l6.19 5.238C35.088 39.905 36 36.899 36 33c0-1.425-.148-2.811-.389-4.917z"
      />
    </svg>
  );
}

const RATING = 4.8;

export default function GoogleReviewsBadge({
  variant = "default",
}: {
  variant?: "default" | "hero";
}) {
  const href = siteConfig.social.google;
  const isLink = Boolean(href && href !== "#");

  const cardClass =
    variant === "hero"
      ? "rounded-md border border-white/25 bg-white/95 backdrop-blur-sm px-2 py-1.5 sm:px-2.5 sm:py-1.5 shadow-md shadow-black/15 w-fit max-w-[min(16.5rem,92vw)]"
      : "rounded-2xl border border-lighter-gray bg-white px-6 py-6 sm:px-10 sm:py-7 shadow-sm w-full";

  const layoutClass =
    variant === "hero"
      ? "flex flex-row items-center gap-1.5 sm:gap-2"
      : "flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8";

  const inner = (
    <div className={`${layoutClass} ${cardClass}`}>
      <div className="shrink-0 flex items-center justify-center">
        <GoogleG
          className={
            variant === "hero"
              ? "w-6 h-6 sm:w-7 sm:h-7 drop-shadow-sm shrink-0"
              : "w-14 h-14 sm:w-16 sm:h-16 drop-shadow-sm"
          }
        />
      </div>
      <div
        className={
          variant === "hero"
            ? "text-left min-w-0 flex flex-col gap-0"
            : "text-center sm:text-left min-w-0"
        }
      >
        <p
          className={
            variant === "hero"
              ? "text-[11px] sm:text-xs font-bold font-heading text-dark leading-none whitespace-nowrap"
              : "text-lg sm:text-xl font-bold font-heading text-dark leading-tight"
          }
        >
          {siteConfig.name}
        </p>
        <p
          className={
            variant === "hero"
              ? "text-[9px] sm:text-[10px] text-gray leading-none mt-px"
              : "text-sm text-gray mt-1 mb-3"
          }
        >
          Avis clients Google
        </p>
        <div
          className={
            variant === "hero"
              ? "flex flex-nowrap items-center gap-1 mt-0.5"
              : "flex flex-wrap items-center justify-center sm:justify-start gap-3"
          }
          aria-label={`Note moyenne ${RATING.toFixed(1).replace(".", ",")} sur 5 sur Google`}
        >
          <span
            className={
              variant === "hero"
                ? "text-base sm:text-lg font-extrabold font-heading text-dark tabular-nums leading-none shrink-0"
                : "text-3xl sm:text-4xl font-extrabold font-heading text-dark tabular-nums"
            }
          >
            {RATING.toFixed(1).replace(".", ",")}
          </span>
          <span
            className={
              variant === "hero"
                ? "text-[10px] sm:text-xs text-gray font-medium leading-none shrink-0"
                : "text-lg text-gray font-medium"
            }
          >
            /5
          </span>
          <div
            className={
              variant === "hero"
                ? "flex gap-px text-amber-400 text-[9px] sm:text-[10px] leading-none shrink-0"
                : "flex gap-0.5 text-amber-400 text-base sm:text-lg leading-none"
            }
            aria-hidden
          >
            {[0, 1, 2, 3, 4].map((i) => {
              const fill = Math.min(1, Math.max(0, RATING - i));
              if (fill >= 1) {
                return <i key={i} className="fas fa-star" />;
              }
              if (fill <= 0) {
                return (
                  <i key={i} className="fas fa-star text-lighter-gray/40" />
                );
              }
              return (
                <span
                  key={i}
                  className="relative inline-block w-[1.1em] h-[1em] align-middle"
                >
                  <i className="fas fa-star text-lighter-gray/40 absolute left-0 top-0" />
                  <span
                    className="absolute left-0 top-0 h-full overflow-hidden"
                    style={{ width: `${fill * 100}%` }}
                  >
                    <i className="fas fa-star text-amber-400" />
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const wrapClass =
    variant === "hero"
      ? "inline-block w-fit max-w-[min(16.5rem,92vw)] outline-none rounded-md transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark/80"
      : "block max-w-xl mx-auto outline-none rounded-2xl focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

  if (isLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`Fiche Google — ${siteConfig.name} (avis clients)`}
        className={`${wrapClass} group`}
      >
        {inner}
        <span className="sr-only">
          Ouvrir la fiche Google et les avis de {siteConfig.name}
        </span>
      </a>
    );
  }

  return (
    <div
      className={
        variant === "hero"
          ? "inline-block w-fit max-w-[min(16.5rem,92vw)]"
          : "max-w-xl mx-auto"
      }
    >
      {inner}
    </div>
  );
}
