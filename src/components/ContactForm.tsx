"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";
import { trackFormSubmit } from "@/lib/gtm";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const prenom = String(fd.get("prenom") ?? "").trim();
    const nom = String(fd.get("nom") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const tel = String(fd.get("tel") ?? "").trim();
    const service = String(fd.get("service") ?? "").trim();
    const ville = String(fd.get("ville") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
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
          prenom,
          nom,
          email,
          tel,
          service,
          ville,
          message,
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
      trackFormSubmit("devis");
    } catch {
      setError("Impossible d’envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
        <div className="text-6xl text-green-500 mb-4">
          <i className="fas fa-check-circle" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Message envoyé !</h3>
        <p className="text-gray mb-6">
          Merci pour votre demande. Nous vous recontacterons dans les plus brefs
          délais.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn btn-primary"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-dark">
        Demande de devis gratuit
      </h3>
      {error ? (
        <div
          className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {error}
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="prenom"
              className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
            >
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              placeholder="Votre prénom"
              className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="nom"
              className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
            >
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              placeholder="Votre nom"
              className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="votre@email.com"
              className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
          </div>
          <div>
            <label
              htmlFor="tel"
              className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
            >
              Téléphone *
            </label>
            <input
              type="tel"
              id="tel"
              name="tel"
              required
              placeholder="07 77 30 47 20"
              className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
          >
            Type de prestation
          </label>
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all bg-white"
          >
            <option value="">-- Choisir un service --</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="ville"
            className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
          >
            Ville / Code postal
          </label>
          <input
            type="text"
            id="ville"
            name="ville"
            placeholder="Ex: Saint-Denis-de-Pile 33910"
            className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-dark-gray mb-1.5 font-heading"
          >
            Décrivez votre projet *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Décrivez votre projet, la nature des travaux souhaités, l'urgence éventuelle..."
            className="w-full px-4 py-3 border-2 border-lighter-gray rounded-md text-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-y min-h-[120px]"
          />
        </div>
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="rgpd"
            name="rgpd"
            required
            className="mt-1 cursor-pointer"
          />
          <label htmlFor="rgpd" className="text-xs text-gray">
            J&apos;accepte que mes données soient utilisées pour traiter ma demande
            conformément à la{" "}
            <a
              href="/politique-de-confidentialite"
              className="text-primary underline"
            >
              politique de confidentialité
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary btn-lg w-full justify-center disabled:opacity-60 disabled:pointer-events-none"
        >
          <i className="fas fa-paper-plane" />{" "}
          {loading ? "Envoi en cours…" : "Envoyer ma demande"}
        </button>
      </form>
    </div>
  );
}
