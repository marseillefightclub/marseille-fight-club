import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wilson \"The Prototype\" Varela en Demi-Finale de l'Hexagone MMA 44 | Marseille Fight Club",
  description: "Découvrez Wilson Varela avant son choc face à Davy Gallon à Bordeaux. Analyse de son parcours, de sa victoire sur Bivol et des enjeux du tournoi.",
  keywords: "Wilson Varela, The Prototype, Hexagone MMA 44, Davy Gallon, MMA Bordeaux, Arkéa Arena, Marseille Fight Club",
  alternates: {
    canonical: "https://marseillefightclub.com/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44",
  },
  openGraph: {
    title: "Wilson \"The Prototype\" Varela en Demi-Finale de l'Hexagone MMA 44",
    description: "Le 29 mai 2026, l'Arkéa Arena accueillera Wilson Varela face au vétéran Davy Gallon. Analyse et préparation MFC.",
    url: "https://marseillefightclub.com/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44",
    type: "article",
    publishedTime: "2026-04-25T10:00:00+02:00",
    modifiedTime: "2026-04-25T10:00:00+02:00",
    authors: ["Marseille Fight Club"],
    images: [
      {
        url: "https://marseillefightclub.com/images/press/varela-fight.jpg",
        width: 1200,
        height: 675,
        alt: "Wilson Varela en plein combat - Marseille Fight Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilson Varela en Demi-Finale de l'Hexagone MMA 44 | Marseille Fight Club",
    description: "Wilson Varela face à Davy Gallon à l'Arkéa Arena de Bordeaux.",
    images: ["https://marseillefightclub.com/images/press/varela-fight.jpg"],
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Wilson \"The Prototype\" Varela en Demi-Finale de l'Hexagone MMA 44 à Bordeaux",
    "description": "Le 29 mai 2026, l'Arkéa Arena accueillera Wilson Varela face au vétéran Davy Gallon. Le champion marseillais arrive dans la forme de sa vie pour ce choc au sommet.",
    "inLanguage": "fr-FR",
    "datePublished": "2026-04-25T10:00:00+02:00",
    "dateModified": "2026-04-25T10:00:00+02:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marseillefightclub.com/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44"
    },
    "image": [
      "https://marseillefightclub.com/images/press/varela-fight.jpg"
    ],
    "author": {
      "@type": "Organization",
      "name": "Marseille Fight Club",
      "url": "https://marseillefightclub.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marseille Fight Club",
      "url": "https://marseillefightclub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marseillefightclub.com/LogoGorill.jpg"
      }
    },
    "about": [
      {
        "@type": "Person",
        "name": "Wilson Varela"
      },
      {
        "@type": "Person",
        "name": "Davy Gallon"
      },
      {
        "@type": "SportsEvent",
        "name": "Hexagone MMA 44"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-mfc-dark pt-24 sm:pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-3 sm:mb-4">
          <Link href="/actualite" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image with Title 50% Straddling (à cheval de moitié, sans fond, transparence totale) */}
        <div>
          <div className="relative w-full h-[460px] sm:h-[540px] md:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group">
            <Image 
              src="/images/press/varela-fight.jpg" 
              alt="Wilson Varela" 
              fill
              style={{ objectFit: 'contain' }}
              className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Title Header: 100% transparent, sans fond, sans flou, à cheval de moitié sur la bordure basse */}
          <header className="relative -mt-28 sm:-mt-32 md:-mt-36 px-2 sm:px-6 z-20 mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2.5 mb-3 sm:mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded shadow-lg">Hexagone MMA</span>
              <span className="px-3 py-1 bg-black/60 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-white/20 shadow-lg">Événement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] [text-shadow:_0_4px_28px_rgb(0_0_0_/_95%)]">
              Wilson &quot;The Prototype&quot; Varela en Demi-Finale de l&apos;Hexagone MMA 44 à Bordeaux
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-300 font-inter text-xs sm:text-sm uppercase tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <span className="text-white font-medium">25 Avril 2026</span>
              <span className="w-4 h-px bg-white/40"></span>
              <span>Par la rédaction MFC</span>
            </div>
          </header>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le 29 mai 2026, l'Arkéa Arena de Bordeaux ouvre ses portes pour l'Hexagone MMA 44. Dans les demi-finales du tournoi des poids légers, Wilson "The Prototype" Varela, champion en titre de l'organisation, retrouve la cage face à Davy Gallon, vétéran du circuit avec plus de 30 combats professionnels au compteur. Une demi-finale qui a tout d'une vraie finale — et dans laquelle le champion marseillais arrive dans la meilleure forme de sa carrière.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Un parcours construit dans la durée
          </h2>
          <p>
            L'histoire de Wilson Varela, c'est celle d'un combattant qui avance, qui encaisse, et qui repart toujours plus fort. Né au Cap-Vert, grandi au Portugal, arrivé en France à 15 ans pour rejoindre son père et son frère, il se construit loin de ses repères, dans un environnement nouveau. Le football avait failli être sa voie — il était sur le point d'intégrer le centre de formation du Sporting Portugal. Le MMA a décidé autrement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 items-center">
            <div>
              <p>
                Il débute les sports de combat par le sambo, avant de se forger un striking redoutable dans le kickboxing, puis de basculer vers les arts martiaux mixtes. Au Marseille Fight Club, sous la direction de Jean-Michel Foissard, il trouve le cadre qui lui correspond et développe un profil de combattant complet — explosif debout, capable de conclure au sol — même si pendant longtemps, le public ne voit que le frappeur. Ce sera une erreur que ses adversaires paieront cher.
              </p>
              <p className="mt-4">
                Sa carrière le mène rapidement au KSW, l'une des organisations les plus puissantes et les plus médiatisées d'Europe, où il enchaîne les victoires et se hisse jusqu'au combat pour la ceinture face à Salahdine Parnasse — l'un des meilleurs combattants européens de sa génération. Un passage au plus haut niveau qui valide son statut et nourrit son ambition.
              </p>
            </div>
            <div className="relative aspect-4/5 rounded-xl overflow-hidden border border-white/10 group">
              <a href="/images/press/varela-belt.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image 
                  src="/images/press/varela-belt.png" 
                  alt="Wilson Varela avec sa ceinture" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Mars 2025 : le titre, par soumission
          </h2>
          <p>
            De retour à l'Hexagone MMA, Wilson Varela s'attaque directement au titre des poids légers face à Nicolae Bivol, prodige de l'organisation, invaincu en cinq combats chez Hexagone. Le public attendait le frappeur. Il a eu le soumissionnaire.
          </p>
          <p>
            Après un premier round engagé, Wilson amène le combat au sol et conclut sur un étranglement en triangle d'une propreté remarquable. Champion, au premier round. Une performance qui dit tout sur l'étendue réelle de son MMA — et sur le travail accompli dans les salles marseillaises. Il avait prévenu avant le combat : <em>"En réalité, je suis beaucoup plus complet que ce que les gens pensent. Je cache bien mon jeu, j'ai totalement confiance en moi."</em>
          </p>
          <p>
            Au micro après sa victoire, il ajoute simplement : "Cette ceinture, elle n'est pas à moi, elle est à nous. On repart sur Marseille, on s'entraîne fort." Pas de mise en scène. Juste un champion qui sait d'où il vient. C'est avec cette ceinture, cette confiance et cette lancée qu'il arrive à Bordeaux le 29 mai.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            En face : Davy Gallon, 30 combats d'expérience
          </h2>
          <p>
            Davy Gallon n'est pas là pour faire de la figuration, et Wilson le sait. Le Normand a construit sa carrière sur la durée, avec 21 victoires en 31 combats professionnels. Judoka de formation, il a ajouté le jiu-jitsu brésilien et le kickboxing à son arsenal, ce qui en fait un combattant polyvalent, difficile à enfermer dans un schéma tactique prévisible.
          </p>
          <p>
            Il s'est notamment illustré en battant Ross Pearson — légende anglaise passée par l'UFC — d'un Rolling Thunder Kick spectaculaire à Londres en 2019, performance qui lui vaut un contrat avec Bellator, l'une des grandes organisations mondiales. Il y remporte plusieurs combats et confirme sa capacité à performer sous pression. Mais à Bordeaux, c'est lui qui devra répondre aux problèmes que lui posera Wilson.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le 29 mai, Bordeaux appartient au Prototype
          </h2>
          <p>
            Wilson Varela arrive à Bordeaux en champion, sur une lancée, avec un MMA complet que ses adversaires sous-estiment encore. Une victoire ici, et c'est une place en finale de tournoi avec une récompense financière majeure à la clé.
          </p>
          <p>
            L'autre demi-finale de la soirée oppose Théo Ulrich, jeune talent invaincu en sept combats, à Nicolae Bivol — le même que Wilson a soumis à Poitiers en mars. La soirée s'annonce dense, l'Arkéa Arena en feu, plus de 8 000 spectateurs attendus.
          </p>
          <p className="font-bold text-white mt-8">
            Le Marseille Fight Club sera dans le coin. Comme toujours. Et Wilson Varela sera prêt. Rendez-vous le 29 mai, en direct sur RMC Sport et DAZN.
          </p>

        </article>

        <footer className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="text-gray-500 text-[10px] font-inter uppercase tracking-widest">
            © 2026 Marseille Fight Club
          </div>
        </footer>
      </div>
    </main>
  );
}
