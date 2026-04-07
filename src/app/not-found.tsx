import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="container-custom">
        <div className="max-w-[500px] mx-auto">
          <div className="text-8xl font-heading font-extrabold text-primary/20 mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold mb-4 text-dark">
            Page introuvable
          </h1>
          <p className="text-gray mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
            Retournez à l&apos;accueil pour retrouver votre chemin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn btn-primary btn-lg">
              <i className="fas fa-home" /> Retour à l&apos;accueil
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg !border-lighter-gray">
              <i className="fas fa-envelope" /> Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
