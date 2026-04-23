import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Eva Dourthe au KSW 116 | 'La Soldat' triomphe en Pologne",
  description: "Retour sur la performance magistrale d'Eva Dourthe face à Ewelina Woźniak au XTB KSW 116. Une victoire par soumission qui marque un tournant.",
  keywords: "Eva Dourthe, KSW 116, MMA France, Marseille Fight Club, Ewelina Woźniak, soumission, armbar, MMA Pologne",
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
            src="/images/blog/eva-dourthe-victory-real.jpg" 
            alt="Eva Dourthe victorieuse avec sa ceinture" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-mfc-dark via-mfc-dark/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">Événement</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-md">KSW 116</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider leading-tight mb-4">
              Eva <span className="text-mfc-red">Dourthe</span> : Masterclass en Terre Polonaise
            </h1>
            <p className="text-gray-400 font-inter text-lg">Publié le 15 Mars 2026 • Par La Rédaction MFC</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le 14 mars 2026, l'Arena Gorzów a vibré au rythme du XTB KSW 116. Dans une atmosphère électrique, la française Eva Dourthe, représentante du Marseille Fight Club, a signé l'une des performances les plus marquantes de sa carrière en s'imposant face à la star locale Ewelina Woźniak.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Profil d'une Guerrière Complète
          </h2>

          <p className="mb-4 mt-6">
            Surnommée "La Soldat", Eva Dourthe n'est plus à présenter aux amateurs de MMA européen. Ceinture noire de Judo, elle a su transposer les codes de la voie de la souplesse vers l'octogone avec une efficacité redoutable.
          </p>
          <p className="mb-8">
            Passée par des organisations prestigieuses comme l'Oktagon MMA, le Cage Warriors ou encore l'Hexagone MMA, Dourthe est arrivée à la KSW avec un bagage technique immense et une détermination sans faille. Son style, mêlant un grappling d'élite et une gestion de la distance millimétrée, fait d'elle une adversaire crainte de toutes.
          </p>

          <div className="relative w-full h-[400px] rounded-xl mb-12 overflow-hidden border border-white/10">
            <Image 
              src="/images/blog/eva-dourthe-action-real.jpg" 
              alt="Eva Dourthe en combat" 
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            L'Exécution : Un Armbar d'Anthologie
          </h2>

          <p className="mb-4">
            Le combat face à Ewelina Woźniak était attendu comme un test de vérité. Dès les premiers échanges, la tension était palpable. Si Woźniak a tenté de faire parler sa puissance de frappe, Dourthe a rapidement imposé son rythme, cherchant le contact et les phases de lutte.
          </p>
          <p className="mb-8">
            C'est au deuxième round que le dénouement est survenu. Après un travail acharné au sol, Eva a réussi à isoler le bras de son adversaire. À <strong>4:18 du Round 2</strong>, la sentence est tombée : une soumission par clé de bras (armbar) parfaitement exécutée qui a forcé la Polonaise à abandonner.
          </p>

          <div className="relative w-full h-[400px] rounded-xl mb-12 overflow-hidden border border-white/10">
            <Image 
              src="/images/blog/eva-dourthe-finish-real.jpg" 
              alt="Fin du combat Eva Dourthe vs Ewelina Woźniak" 
              fill
              className="object-cover"
            />
          </div>

          <blockquote className="p-6 my-8 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            "J'ai ressenti beaucoup de stress avant d'entrer dans l'arène, mais je suis immensément heureuse. Gagner ici, dans cette organisation prestigieuse, c'est un rêve. Je ne pouvais pas espérer mieux pour mes débuts."
            <footer className="text-sm text-mfc-red mt-2 font-oswald uppercase tracking-widest not-italic">— Eva Dourthe, après son combat</footer>
          </blockquote>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Courage malgré l'Adversité
          </h2>


          <p className="mb-8 text-justify">
            Il est important de souligner le courage héroïque d'Ewelina Woźniak. L'athlète polonaise a révélé par la suite s'être blessée sérieusement au sternum dès le début du premier round. Malgré une douleur atroce et des difficultés respiratoires, elle a continué à se battre jusqu'au bout. Hospitalisée après le combat pour un hématome médiastinal et un pneumothorax, elle a dû subir une intervention chirurgicale réussie à la fin du mois de mars.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Un Futur Radieux à la KSW
          </h2>

          <p className="pb-8">
            Avec cette victoire monumentale, Eva Dourthe se propulse directement dans les discussions pour le titre de la catégorie Strawweight de la KSW. Le Marseille Fight Club peut être fier de sa championne, qui continue de porter haut les couleurs du MMA français sur la scène internationale. La suite s'annonce explosive pour "La Soldat".
          </p>

        </article>
      </div>
    </main>
  );
}
