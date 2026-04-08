"use client";

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
    const tel = String(fd.get("tel") ?? "").trim();
    const rgpd = fd.get("rgpd") === "on";

    if (!rgpd) {
      setError("Veuillez accepter la politique de confidentialité.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "rappel",
          nom,
          tel,
          rgpd: true,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue. Réessayez plus tard.");
        return;
      }
      setSubmitted(true);
      form.reset();
    } catch {
      setError("Impossible d’envoyer le message. Vérifiez votre connexion.");
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
                <div
                  className="mb-3 rounded-lg border border-red-300 bg-white px-4 py-3 text-sm text-red-800 shadow-sm"
                  role="alert"
                >
                  {error}
                </div>
              ) : null}
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="text"
                  id="callback-nom"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  autoComplete="name"
                  className="px-4 py-3 border-2 border-white/30 rounded-md bg-white/15 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/25 min-w-[200px] w-full sm:w-auto"
                />
                <input
                  type="tel"
                  id="callback-tel"
                  name="tel"
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
                  {loading ? "Envoi en cours…" : "Être rappelé"}
                </button>
              </div>
              <div className="mt-3 flex items-start gap-2 max-w-xl lg:max-w-md">
                <input
                  type="checkbox"
                  id="callback-rgpd"
                  name="rgpd"
                  required
                  className="mt-1 cursor-pointer shrink-0"
                />
                <label
                  htmlFor="callback-rgpd"
                  className="text-xs text-white/90"
                >
                  J&apos;accepte que mes données soient utilisées pour traiter ma
                  demande conformément à la{" "}
                  <a
                    href="/politique-de-confidentialite"
                    className="text-white underline underline-offset-2"
                  >
                    politique de confidentialité
                  </a>
                  .
                </label>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
