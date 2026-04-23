import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Souhil Tairi au PFL MENA | Un Choc International en Arabie Saoudite",
  description: "Découvrez l'analyse complète du prochain combat de Souhil Tairi au PFL MENA en Arabie saoudite, une étape historique pour sa carrière MMA et le Marseille Fight Club.",
  keywords: "PFL MENA, Souhil Tairi, Marseille Fight Club, MMA Arabie saoudite, combat international, carrière MMA, événement PFL, MMA France",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10 shadow-2xl shadow-mfc-red/10 border border-white/5">
          <Image 
            src="/images/blog/pfl-mena.png" 
            alt="Ambiance spectaculaire dans la cage lors du PFL MENA en Arabie saoudite" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mfc-dark via-mfc-dark/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">International</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-md">PFL MENA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider leading-tight mb-4">
              Souhil <span className="text-mfc-red">Tairi</span> Triomphe Au PFL MENA Par TKO
            </h1>
            <p className="text-gray-400 font-inter text-lg">Publié le 21 Avril 2026 • Par La Rédaction MFC</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            La conquête internationale est en marche ! Sous les lumières flamboyantes de l'Arabie saoudite, notre combattant Souhil Tairi a marqué les esprits dans la cage du très convoité PFL MENA. Face à Abdullah Saleem, le représentant du Marseille Fight Club a délivré une performance magistrale, s'imposant par un TKO dévastateur au deuxième round.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Soldat Tairi : Un Profil Taillé Pour l'International
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 items-center">
            <div>
              <p className="mb-4">
                Le Professional Fighters League (PFL) ne pardonne aucune erreur, et Souhil s'y est présenté avec la détermination des grands champions. Membre incontournable du <strong>Marseille Fight Club</strong>, Tairi a prouvé que son éthique de travail militaire portait ses fruits au plus haut niveau mondial.
              </p>
              <p>
                Ceux qui s'entraînent avec lui le savent : son cardio et son <em>Fight IQ</em> clinique lui permettent de s'adapter à n'importe quelle situation. C'est exactement cette lucidité qui a fait la différence lors de cette soirée mémorable, validant le travail acharné accompli dans nos salles.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
              <Image 
                src="/images/blog/souhil-portrait.png" 
                alt="Souhil Tairi, combattant du Marseille Fight Club au PFL" 
                fill
                className="object-contain object-top"
              />
            </div>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Choc Face à Abdullah Saleem
          </h2>

          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-xl mb-8 overflow-hidden border border-white/10 bg-black/20">
            <Image 
              src="/images/blog/souhil-victory.png" 
              alt="Victoire par TKO de Souhil Tairi face à Abdullah Saleem" 
              fill
              className="object-contain"
            />
          </div>
          <p className="mb-4">
            Le face-à-face avec Abdullah Saleem promettait des étincelles, et le combat a tenu toutes ses promesses. Dès le premier round, Souhil a imposé son rythme, utilisant son allonge et sa vivacité pour étouffer les tentatives adverses.
          </p>
          <p className="mb-12">
            La conclusion est intervenue de manière spectaculaire dans la deuxième reprise. Avec une précision chirurgicale, Tairi a trouvé la faille, enchaînant des frappes lourdes destructrices qui ont forcé l'arbitre à mettre un terme immédiat à l'affrontement. <strong>Victoire par TKO au 2ème round !</strong>
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Sueur et Larmes : La Récompense du Camp
          </h2>

          <p>
            Cette victoire éclatante au Moyen-Orient n'est pas le fruit du hasard. Au MFC, les dernières semaines avant le départ ont été électriques. L'atmosphère lourde et concentrée s'est ressentie jusque dans la cage. Les répétitions incessantes de phases de transition et de striking clinique ont répondu présent le jour J.
          </p>

          <blockquote className="p-6 my-8 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            "Souhil a suivi le plan de match à la lettre. Il a eu la maturité de geler les ardeurs de Saleem pour imposer sa boxe destructrice. Le monde sait maintenant de quoi il est capable."
            <footer className="text-sm text-mfc-red mt-2 font-oswald uppercase tracking-widest not-italic">— Coach Principal, Marseille Fight Club</footer>
          </blockquote>



          <p className="pb-8">
            L'impact de cette victoire par TKO résonne bien au-delà de la cage saoudienne. En s'imposant avec autant d'autorité au <strong>PFL MENA</strong>, Souhil Tairi fait le plein de points pour la saison régulière et confirme sa place parmi les hommes les plus dangereux du circuit. La montée en puissance internationale du Marseille Fight Club est en marche. La guerre continue, et Tairi est prêt pour la suite.
          </p>

        </article>
      </div>
    </main>
  );
}
