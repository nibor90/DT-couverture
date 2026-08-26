import { siteConfig } from "@/lib/data";

type Variant = "primary" | "secondary" | "white";
type Size = "sm" | "md" | "lg";

interface PhoneCtaButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  white: "btn-white",
};

const labelClass: Record<Variant, string> = {
  primary: "text-white drop-shadow-sm",
  secondary: "text-secondary",
  white: "text-secondary",
};

const sizeClass: Record<Size, string> = {
  sm: "text-sm !px-4 !py-2",
  md: "",
  lg: "btn-lg !py-3.5",
};

export default function PhoneCtaButton({
  variant = "secondary",
  size = "lg",
  className = "",
}: PhoneCtaButtonProps) {
  return (
    <a
      href={siteConfig.phoneHref}
      className={`btn ${variantClass[variant]} ${sizeClass[size]} animate-pulse-phone !flex-col !gap-1 !items-center justify-center ${className}`}
      aria-label={`Appelez-nous 24h/24 et 7j/7 au ${siteConfig.phone}`}
    >
      <span
        className={`font-extrabold uppercase tracking-[0.16em] leading-none ${labelClass[variant]} ${
          size === "sm" ? "text-[0.68rem]" : "text-[0.78rem] md:text-[0.85rem]"
        }`}
      >
        24h/24 et 7j/7
      </span>
      <span className="inline-flex items-center gap-2 leading-none">
        <i className="fas fa-phone-alt" aria-hidden />
        {siteConfig.phone}
      </span>
    </a>
  );
}
