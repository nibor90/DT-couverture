"use client";

import { useState, type FormEvent } from "react";
import { services } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
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
        <button type="submit" className="btn btn-primary btn-lg w-full justify-center">
          <i className="fas fa-paper-plane" /> Envoyer ma demande
        </button>
      </form>
    </div>
  );
}
