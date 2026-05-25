import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Exploit à Dubaï : Ylies 'Broly' Djiroun Terrasse le Champion Invaincu au Premier Round ! | Marseille Fight Club",
  description: "Retour sur la victoire historique d'Ylies 'Broly' Djiroun par TKO au premier round face au champion invaincu Salah Eddine Hamli lors du PFL MENA à la Coca-Cola Arena de Dubaï.",
  keywords: "Ylies Djiroun, Broly, PFL MENA, Victoire, TKO, Premier Round, MMA Dubaï, Coca-Cola Arena, Marseille Fight Club, Jean-Michel Foissard",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-4">
          <Link href="/press" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-mfc-gray/50 group shadow-2xl">
            <a href="/images/press/ylies-victoire-pfl.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image 
                src="/images/press/ylies-victoire-pfl.jpg" 
                alt="Ylies Djiroun Victoire PFL MENA 24 Mai 2026" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-mfc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">PFL MENA</span>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">Co-Main Event</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-6">
            Exploit à Dubaï : Ylies "Broly" Djiroun Terrasse le Champion Invaincu au Premier Round !
          </h1>
          <div className="flex items-center gap-4 text-gray-500 font-inter text-sm uppercase tracking-widest">
            <span>25 Mai 2026</span>
            <span className="w-4 h-px bg-white/20"></span>
            <span>Par la rédaction Marseille Fight Club</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le MMA marseillais vient d'inscrire l'une de ses plus belles pages d'histoire. Ce dimanche 24 mai, sous les projecteurs de la Coca-Cola Arena de Dubaï, Ylies "Broly" Djiroun a réalisé un exploit retentissant en co-main event du PFL MENA : Pride of Arabia. Donné outsider face au champion en titre invaincu, le redoutable Marocain Salah Eddine "Supersalah" Hamli, le guerrier marseillais a pulvérisé tous les pronostics en s'imposant de manière spectaculaire dès le premier round. Une victoire éclair par TKO qui a fait vibrer les 17 000 spectateurs présents.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Un choc attendu à Dubaï
          </h2>
          <p>
            L'enjeu de cette soirée baptisée "Pride of Arabia" était colossal. Pour la première fois depuis le début du conflit régional, la prestigieuse ligue PFL (Professional Fighters League) organisait son événement MENA à Dubaï plutôt qu'en Arabie Saoudite. Dans une salle comble survoltée, le champion invaincu des poids légers Salah Eddine Hamli (11 victoires, 0 défaite) défendait son statut dans ce quart de finale du tournoi. S'entraînant en Espagne aux côtés du champion UFC Ilia Topuria, Hamli était le grand favori : jeune (27 ans), explosif, et auréolé de sa couronne PFL MENA 2025 conquise en décembre dernier.
          </p>
          <p>
            Face à lui, Ylies "Broly" Djiroun, fierté des quartiers nord de Marseille, arrivait dans la cage avec un bilan de 24 victoires pour 9 défaites et une expérience incomparable : PFL en 2019, BRAVE CF, ARES FC, et tant d'autres organisations depuis 2011. À 34 ans, il représentait l'expérience face à la fougue du champion invaincu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group">
              <a href="/images/press/ylies-portrait.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image 
                  src="/images/press/ylies-portrait.jpg" 
                  alt="Portrait d'Ylies Djiroun" 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h2 className="text-3xl font-oswald font-bold text-white uppercase mb-8 tracking-wider">
                La force tranquille
              </h2>
              <p>
                Surnommé "Broly" en référence à sa passion pour Dragon Ball, Ylies incarne les valeurs du Marseille Fight Club : respect, travail et persévérance. Préparé dans la discrétion par son coach de longue date Jean-Michel Foissard, loin du buzz et des provocations, le combattant marseillais avait un plan précis.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le film du combat
          </h2>
          <p>
            Dès les premières secondes, Hamli tente d'imposer son rythme physique en avançant au centre de la cage. Il envoie de lourdes frappes pour intimider le Marseillais. Mais Djiroun reste d'un calme olympien, très mobile sur ses appuis, esquivant les attaques avec fluidité et répliquant par des coups précis qui freinent l'ardeur du champion.
          </p>
          <p>
            Sentant qu'il ne parvient pas à toucher Ylies debout, Hamli commet l'erreur tactique du combat. Il plonge brusquement pour tenter une projection au sol. Anticipant parfaitement le mouvement avec un sprawl impérial, Djiroun bloque la tentative, pivote avec une rapidité déconcertante et passe dans le dos d'un Hamli complètement dépassé.
          </p>
          <p>
            Le Marseillais le plaque instantanément au sol et déclenche une avalanche de frappes lourdes et précises en ground-and-pound. Hamli, incapable de se défendre, subit une pluie de coups chirurgicaux. L'arbitre intervient pour arrêter le combat.
          </p>
          <p className="text-xl text-white font-bold text-center bg-mfc-red/10 border border-mfc-red/30 py-4 my-8 rounded-lg">
            Victoire par TKO en 4 minutes et 20 secondes du premier round.
          </p>
          <p>
            La Coca-Cola Arena explose. Marseille vient de faire tomber le roi invaincu de la catégorie.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Pourquoi cette victoire compte
          </h2>
          <p>
            <strong className="text-white">L'expérience a parlé :</strong> Face à un champion de 27 ans, les 34 ans d'Ylies et ses 33 combats professionnels ont fait la différence. Il a su rester patient et forcer le TKO au moment idéal.
          </p>
          <p>
            <strong className="text-white">Une tactique parfaite :</strong> En étudiant la tendance de Hamli à chercher le takedown quand son striking ne fonctionne pas, le staff marseillais a permis à Ylies d'anticiper l'action décisive.
          </p>
          <p>
            <strong className="text-white">Un symbole pour le club :</strong> Cette victoire propulse le Marseille Fight Club sur la scène internationale. Fondé il y a près de dix ans dans le 10ème arrondissement, le club prouve qu'il forme des combattants capables de briller au plus haut niveau.
          </p>
          <p>
            <strong className="text-white">Un représentant de Marseille :</strong> Issu des quartiers nord, Djiroun incarne cette génération de combattants marseillais qui s'imposent mondialement. Son exploit résonne au-delà du sport : c'est la victoire du travail et de la persévérance.
          </p>

          <div className="relative w-full aspect-video rounded-xl my-12 overflow-hidden border border-white/10 group">
            <a href="/images/press/ylies-training.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image 
                src="/images/press/ylies-training.png" 
                alt="Ylies Djiroun à l'entraînement" 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            La suite : cap sur la demi-finale
          </h2>
          <p>
            Ylies Djiroun est officiellement qualifié pour les demi-finales du tournoi PFL MENA des poids légers. Après avoir stoppé l'invincibilité du champion en titre, il devient un sérieux prétendant au titre et aux 100 000 dollars promis au vainqueur.
          </p>
          <p>
            De retour à Marseille dès cette semaine, il reprendra l'entraînement au club avec la même humilité, prêt pour la suite de l'aventure. Son bilan professionnel s'établit désormais à 25 victoires pour 9 défaites.
          </p>
          <p className="font-bold text-white mt-8">
            En faisant tomber le champion invaincu au premier round, Ylies Djiroun a écrit l'une des plus belles pages de son histoire et celle du Marseille Fight Club. Tout Marseille est fier de toi, champion ! Le rendez-vous est pris pour les demi-finales, et l'aventure ne fait que commencer.
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
