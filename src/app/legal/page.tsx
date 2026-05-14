import React from "react";

export const metadata = {
  title: "Mentions Légales | Marseille Fight Club",
  description: "Mentions légales de l'association Marseille Fight Club.",
};

export default function LegalPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16 text-mfc-light">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="font-oswald text-4xl text-mfc-red uppercase mb-8">Mentions Légales</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-oswald uppercase text-white">Éditeur du site</h2>
          <p className="text-gray-300">
            <strong>Dénomination :</strong> FOISSARD PROMOTION<br />
            <strong>Forme juridique :</strong> Association déclarée<br />
            <strong>Siège social :</strong> 14 TRAVERSE CHEVALIER 13010 MARSEILLE<br />
            <strong>SIRET :</strong> 853 147 213 00013<br />
            <strong>Code NAF/APE :</strong> 94.99Z<br />
            <strong>Date de création :</strong> 17/05/2017<br />
            <strong>Directeur de la publication :</strong> Jean-Michel Foissard
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-oswald uppercase text-white">Hébergement</h2>
          <p className="text-gray-300">
            Le site est hébergé par <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723<br />
            États-Unis
          </p>
        </section>
      </div>
    </main>
  );
}
