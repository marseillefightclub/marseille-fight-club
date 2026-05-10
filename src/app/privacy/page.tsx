import React from "react";

export const metadata = {
  title: "Politique de Confidentialité | Marseille Fight Club",
  description: "Politique de confidentialité concernant l'utilisation du site de Marseille Fight Club.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16 text-mfc-light">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="font-oswald text-4xl text-mfc-red uppercase mb-8">Politique de Confidentialité</h1>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-oswald uppercase text-white">Collecte de données et Statistiques</h2>
          <p className="text-gray-300">
            Nous utilisons <strong>Google Analytics</strong> pour mesurer d'audience afin d'analyser le trafic sur notre site web. 
            Ces données sont entièrement <strong>anonymisées</strong>. Aucune donnée personnelle directement identifiable n'est exploitée ou revendue. 
            Aucun usage commercial de ces statistiques n'est réalisé par le Marseille Fight Club.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-oswald uppercase text-white">Droit d'accès et de suppression</h2>
          <p className="text-gray-300">
            Conformément à la réglementation applicable en matière de protection des données, vous disposez d'un droit d'accès, de rectification et de suppression 
            concernant vos données si celles-ci venaient à être collectées de manière directe (par exemple, envoi d'un message via un moyen de contact direct). 
            <br />Vous pouvez exercer ce droit en nous contactant directement.
          </p>
        </section>
      </div>
    </main>
  );
}
