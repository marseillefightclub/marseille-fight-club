import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ylies Djiroun au PFL MENA | 'Broly' à la Conquête de Dubaï",
  description: "Découvrez le portrait d'Ylies Djiroun avant son combat historique au Pride of Arabia le 24 mai 2026 à la Coca-Cola Arena de Dubaï.",
  keywords: "Ylies Djiroun, PFL MENA, Pride of Arabia, Marseille Fight Club, MMA Dubaï, Coca-Cola Arena, combat MMA, Broly MMA",
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
            src="/images/blog/ylies-victory.jpg" 
            alt="Ylies Djiroun victorieux dans la cage" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-mfc-dark via-mfc-dark/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">Événement</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-md">PFL MENA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider leading-tight mb-4">
              Ylies <span className="text-mfc-red">Djiroun</span> : Dubaï Attend Sa Tempête
            </h1>
            <p className="text-gray-400 font-inter text-lg">Publié le 23 Avril 2026 • Par La Rédaction MFC</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le 24 mai 2026 restera gravé comme une date charnière pour le Marseille Fight Club. Dans le cadre prestigieux du PFL MENA : "Pride of Arabia", notre fer de lance Ylies Djiroun s'apprête à fouler le sol de la Coca-Cola Arena à Dubaï. Un rendez-vous avec l'histoire pour celui que l'on surnomme "Broly".
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Ylies Djiroun : L'Expérience et la Puissance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 items-center">
            <div>
              <p className="mb-4">
                Avec un palmarès impressionnant de <strong>24 victoires pour 9 défaites</strong>, Ylies Djiroun ne vient pas à Dubaï pour faire de la figuration. Vétéran aguerri des plus grandes organisations mondiales, il incarne l'excellence technique et la résilience du MMA français.
              </p>
              <p>
                Son surnom, "Broly", n'est pas usurpé. Derrière son calme olympien se cache une force de la nature capable de renverser n'importe quel combat. À 33 ans, le représentant du <strong>Marseille Fight Club</strong> est au sommet de son art, alliant un grappling d'élite à un striking toujours plus percutant.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border border-white/10">
              <Image 
                src="/images/blog/ylies-portrait.jpg" 
                alt="Portrait d'Ylies Djiroun, combattant MMA" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Choc : Direction la Coca-Cola Arena
          </h2>

          <p className="mb-4">
            Le cadre ne pourrait être plus grandiose. La Coca-Cola Arena de Dubaï, temple de l'entertainment au Moyen-Orient, sera le théâtre de ce quart de finale des poids légers. Face à lui se dressera <strong>Salah Eddine Hamli</strong>, un adversaire de taille pour un combat qui s'annonce explosif.
          </p>
          <p className="mb-12">
            "Le PFL MENA est la plateforme idéale pour montrer que Marseille est une terre de guerriers", confie Ylies. "On a travaillé dur au club, l'objectif est clair : la victoire et rien d'autre."
          </p>

          <div className="relative w-full h-[400px] rounded-xl mb-12 overflow-hidden border border-white/10">
            <Image 
              src="/images/blog/ylies-training.png" 
              alt="Ylies Djiroun en préparation au Marseille Fight Club" 
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Une Préparation Millimétrée au MFC
          </h2>

          <p>
            Sous l'œil attentif des coachs du Marseille Fight Club, Ylies a suivi un camp d'entraînement intensif. Sparring de haut niveau, séances de lutte acharnées et préparation physique spécifique au climat de Dubaï ont rythmé son quotidien ces dernières semaines.
          </p>

          <blockquote className="p-6 my-8 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            "Ylies est dans une forme olympique. Il a cette capacité rare à rester focalisé sous la pression. Dubaï va découvrir un athlète complet, prêt à tout pour décrocher sa place en demi-finale."
            <footer className="text-sm text-mfc-red mt-2 font-oswald uppercase tracking-widest not-italic">— Staff Technique, Marseille Fight Club</footer>
          </blockquote>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Tous Derrière Ylies !
          </h2>

          <p className="pb-8">
            Le rendez-vous est pris. Le 24 mai 2026, Marseille sera derrière son champion. Que vous soyez à Dubaï ou devant vos écrans, ne manquez pas cette performance qui s'annonce épique. La tempête "Broly" arrive sur le PFL MENA, et rien ne semble pouvoir l'arrêter.
          </p>

        </article>
      </div>
    </main>
  );
}
