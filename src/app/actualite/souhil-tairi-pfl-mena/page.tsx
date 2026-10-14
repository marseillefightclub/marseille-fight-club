import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Souhil Tairi Passe en Demi-Finales du PFL MENA | Marseille Fight Club",
  description: "Retour sur la victoire par TKO de Souhil Tairi face à Abdullah Saleem au PFL MENA à Jeddah. Analyse du combat, parcours et prochaines étapes.",
  keywords: "PFL MENA, Souhil Tairi, MMA, Marseille Fight Club, TKO, Abdullah Saleem, Jeddah, MMA France, Doctor MMA",
  alternates: {
    canonical: "https://marseillefightclub.com/actualite/souhil-tairi-pfl-mena",
  },
  openGraph: {
    title: "Souhil Tairi en Demi-Finales du PFL MENA après un TKO Magistral",
    description: "Victoire de Souhil Tairi face à Abdullah Saleem au PFL MENA. Analyse officielle par le Marseille Fight Club.",
    url: "https://marseillefightclub.com/actualite/souhil-tairi-pfl-mena",
    type: "article",
    publishedTime: "2025-05-09T10:00:00+02:00",
    modifiedTime: "2025-05-09T10:00:00+02:00",
    authors: ["Marseille Fight Club"],
    images: [
      {
        url: "https://marseillefightclub.com/images/press/souhilStriking.png",
        width: 1200,
        height: 675,
        alt: "Souhil Tairi en action au PFL MENA - Marseille Fight Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Souhil Tairi en Demi-Finales du PFL MENA | Marseille Fight Club",
    description: "Souhil Tairi triomphe par TKO face à Abdullah Saleem à Jeddah.",
    images: ["https://marseillefightclub.com/images/press/souhilStriking.png"],
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Souhil Tairi Passe en Demi-Finales du PFL MENA Après un TKO au Deuxième Round",
    "description": "Face à Abdullah Saleem, combattant koweïtien invaincu, notre pensionnaire Souhil Tairi a montré l'étendue de son talent : encaisser, rester lucide, et finir le travail avec un TKO magistral.",
    "inLanguage": "fr-FR",
    "datePublished": "2025-05-09T10:00:00+02:00",
    "dateModified": "2025-05-09T10:00:00+02:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marseillefightclub.com/actualite/souhil-tairi-pfl-mena"
    },
    "image": [
      "https://marseillefightclub.com/images/press/souhilStriking.png"
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
        "name": "Souhil Tairi"
      },
      {
        "@type": "SportsEvent",
        "name": "PFL MENA"
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
              src="/images/press/souhilStriking.png" 
              alt="Souhil Tairi au PFL MENA" 
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
              <span className="px-3 py-1 bg-mfc-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded shadow-lg">PFL MENA</span>
              <span className="px-3 py-1 bg-black/60 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-white/20 shadow-lg">Événement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] [text-shadow:_0_4px_28px_rgb(0_0_0_/_95%)]">
              Souhil Tairi Passe en Demi-Finales du PFL MENA Après un TKO au Deuxième Round
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-300 font-inter text-xs sm:text-sm uppercase tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <span className="text-white font-medium">9 Mai 2025</span>
              <span className="w-4 h-px bg-white/40"></span>
              <span>Par la rédaction MFC</span>
            </div>
          </header>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            À Jeddah, en Arabie saoudite, dans l'enceinte de l'Onyx Arena, Souhil Tairi a rendu une copie solide lors de la première soirée de la saison 2025 du PFL MENA. Face à Abdullah Saleem, combattant koweïtien invaincu en cinq combats, notre pensionnaire de poids léger a montré ce qu'il sait faire de mieux : encaisser, rester lucide, et finir le travail quand l'ouverture se présente. Victoire par TKO à 3 minutes 20 du deuxième round, sur arrêt de l'arbitre. Tairi est maintenant qualifié pour les demi-finales du tournoi.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Un adversaire à ne pas sous-estimer
          </h2>
          <p>
            Sur le papier, Abdullah Saleem avait de quoi inquiéter. Champion WBC Muay Thai au Koweït, médaillé d'argent en kickboxing aux championnats WAKO d'Amérique du Nord, et ancien membre de la sélection nationale koweïtienne de lutte — autrement dit, un combattant complet, bien construit, avec une vraie expérience debout et au sol. Avec cinq victoires en cinq combats, dont quatre finitions par soumission au premier round, c'est le genre de profil qui ne pardonne pas les erreurs et qui peut terminer un combat en quelques secondes.
          </p>
          <p>
            Ce détail avait son importance : Saleem n'était pas là pour faire de la figuration. Il connaissait déjà les exigences du format tournoi du PFL MENA. Tairi, lui aussi, savait qu'il devait aborder ce choc avec une concentration maximale.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Un premier round difficile, géré avec caractère
          </h2>
          <div className="grid grid-cols-1 gap-12 my-12">
            <div>
              <p>
                Le premier round a été compliqué pour Tairi. Saleem a réussi à l'amener au sol, à prendre son dos et à s'y installer durablement. Pendant de longues secondes, la situation était inconfortable : Saleem dans le dos, cherchant à verrouiller un étranglement, Tairi obligé de gérer position après position sans jamais vraiment pouvoir se relever proprement.
              </p>
              <p className="mt-4">
                Tairi a répondu avec quelques coudes depuis le bas et un upkick bien senti, mais la reprise a globalement appartenu à Saleem. Un point a également été déduit à Tairi pour un coup illégal accidentel avant la fin du round. La situation était claire : il fallait aller chercher la victoire par finition.
              </p>
            </div>
            
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le deuxième round : sang-froid et conclusion
          </h2>
          <p>
            C'est dans l'adversité qu'on reconnaît les grands combattants. Entre les deux rounds, Tairi a gardé son calme. Dès la reprise du deuxième round, il a commencé à poser son jeu debout — jabs, low kicks, déplacements latéraux pour neutraliser les tentatives de saisie de Saleem.
          </p>
          <p>
            La séquence décisive est venue d'un genou puissant à la tête, enchaîné sur des frappes lourdes. Acculé, Saleem a tenté un dernier changement de niveau, mais Tairi a parfaitement contre-attaqué en prenant son dos et en continuant son pilonnage jusqu'à l'intervention de l'arbitre. <strong>TKO à 3:20 du deuxième round.</strong> La mission était accomplie.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-16">
            <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-mfc-red"></span>
              Qui est Souhil Tairi ?
            </h3>
            <p className="mb-4">
              Pour ceux qui ne le connaissent pas encore, Souhil Tairi est un profil atypique dans le MMA mondial. Également <strong>docteur en mathématiques appliquées</strong>, il est surnommé "The Doctor" sur les fiches officielles. Il concilie depuis des années l'enseignement-recherche et la compétition de haut niveau.
            </p>
            <p>
              Au Marseille Fight Club, il est également le coach de la section féminine, un rôle qu'il prend très au sérieux, voyant le MMA comme un véritable outil de reconstruction et d'empowerment pour ses athlètes. Cette dimension humaine fait partie intégrante de son identité de combattant.
            </p>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Un parcours de résilience
          </h2>
          <p>
            Cette victoire s'inscrit dans une dynamique de retour importante. Après avoir atteint les demi-finales la saison précédente et connu un revers difficile en début d'année 2025 à Dubaï, Tairi prouve une nouvelle fois sa capacité à rebondir et à progresser saison après saison dans ce format exigeant du PFL.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le PFL MENA : Cap sur les demi-finales
          </h2>
          <p>
            Le PFL (Professional Fighters League) se distingue par son format de tournoi avec une récompense d'un million de dollars pour le champion. Le PFL MENA est la branche dédiée au Moyen-Orient et à l'Afrique du Nord, un circuit en pleine expansion où le niveau monte d'année en année.
          </p>
          <p className="mb-16">
            La suite pour Tairi ? Une demi-finale contre le vainqueur du duel entre <strong>Salah Eddine Hamli</strong> et <strong>Abbas Khan</strong>. Un nouveau défi de taille attend notre combattant marseillais, mais une chose est sûre : le travail paye, et la rigueur du MFC continuera de porter ses fruits dans l'Octogone.
          </p>

        </article>

        <footer className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="text-gray-500 text-sm font-inter uppercase tracking-widest">
            © 2025 Marseille Fight Club
          </div>
          <div className="flex gap-4">
            {/* Social shares placeholders or secondary links */}
          </div>
        </footer>
      </div>
    </main>
  );
}

