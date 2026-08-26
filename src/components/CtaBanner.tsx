import Link from "next/link";
import PhoneCtaButton from "@/components/PhoneCtaButton";

interface CtaBannerProps {
  title?: string;
  text?: string;
  variant?: "primary" | "dark";
}

export default function CtaBanner({
  title = "Un projet de toiture ? Parlons-en !",
  text = "Obtenez un devis gratuit et personnalisé sous 24h. Notre équipe est à votre écoute pour tous vos projets.",
  variant = "primary",
}: CtaBannerProps) {
  const bg =
    variant === "primary"
      ? "bg-gradient-to-br from-primary-dark to-primary"
      : "bg-gradient-to-br from-dark to-dark-gray";

  return (
    <section className={`${bg} py-16 relative overflow-x-clip overflow-y-hidden`}>
      <div
        className="pointer-events-none absolute -top-1/2 -right-[8%] h-[min(85vw,320px)] w-[min(85vw,320px)] rounded-full bg-white/5 sm:-right-[12%] sm:h-[min(90vw,360px)] sm:w-[min(90vw,360px)] md:-right-[20%] md:h-[400px] md:w-[400px]"
        aria-hidden
      />
      <div className="container-custom text-center relative z-10">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-white/85 text-lg mb-8 max-w-[600px] mx-auto">
          {text}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <PhoneCtaButton variant="white" size="lg" />
          <Link href="/contact" className="btn btn-outline-white btn-lg">
            <i className="fas fa-file-alt" /> Devis en ligne
          </Link>
        </div>
      </div>
    </section>
  );
}
