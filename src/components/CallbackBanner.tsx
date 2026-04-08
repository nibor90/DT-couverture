"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function CallbackBanner() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const nom = String(fd.get("nom") ?? "").trim();
    const telephone = String(fd.get("telephone") ?? "").trim();
    const rgpd = fd.get("rgpd") === "on";

    if (!rgpd) {
      setError("Veuillez accepter la politique de confidentialité.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, telephone, rgpd: true }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue. Réessayez plus tard.");
        return;
      }
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Impossible d’envoyer la demande. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-secondary py-8">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-1">
              <i className="fas fa-phone-volume mr-2" />
              Besoin d&apos;un couvreur ? Faites-vous rappeler gratuitement
            </h2>
            <p className="text-white/85 text-sm md:text-base">
              Laissez-nous vos coordonnées, nous vous rappelons sous 30 minutes !
            </p>
          </div>
          {submitted ? (
            <div className="bg-white/20 rounded-lg px-8 py-4 text-white font-semibold text-center">
              <i className="fas fa-check-circle mr-2" />
              Merci ! Nous vous rappelons très vite.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-auto max-w-xl lg:max-w-none"
            >
              {error ? (
                <p
                  className="text-white text-sm font-medium mb-2 bg-dark/25 rounded px-2 py-1.5"
                  role="alert"
                >
                  {error}
                </p>
              ) : null}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  autoComplete="name"
                  className="px-4 py-3 border-2 border-white/30 rounded-md bg-white/15 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/25 min-w-[200px] w-full sm:w-auto"
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Votre téléphone"
                  required
                  autoComplete="tel"
                  className="px-4 py-3 border-2 border-white/30 rounded-md bg-white/15 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/25 min-w-[200px] w-full sm:w-auto"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn bg-dark border-dark text-white hover:bg-primary-dark hover:border-primary-dark whitespace-nowrap disabled:opacity-60 disabled:pointer-events-none"
                >
                  <i className="fas fa-paper-plane" />{" "}
                  {loading ? "Envoi…" : "Être rappelé"}
                </button>
              </div>
              <label className="mt-3 flex items-start gap-2 text-xs text-white/80 cursor-pointer max-w-xl lg:max-w-md">
                <input
                  type="checkbox"
                  name="rgpd"
                  required
                  className="mt-0.5 shrink-0 rounded border-white/40"
                />
                <span>
                  J&apos;accepte que mes coordonnées soient utilisées pour me
                  rappeler, conformément à la{" "}
                  <Link
                    href="/politique-de-confidentialite"
                    className="underline underline-offset-2 text-white hover:text-white"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </span>
              </label>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
