"use client";

import { useState, type FormEvent } from "react";

export default function CallbackBanner() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
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
            <form onSubmit={handleSubmit} className="w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  required
                  className="px-4 py-3 border-2 border-white/30 rounded-md bg-white/15 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/25 min-w-[200px] w-full sm:w-auto"
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Votre téléphone"
                  required
                  className="px-4 py-3 border-2 border-white/30 rounded-md bg-white/15 text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/25 min-w-[200px] w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="btn bg-dark border-dark text-white hover:bg-primary-dark hover:border-primary-dark whitespace-nowrap"
                >
                  <i className="fas fa-paper-plane" /> Être rappelé
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
