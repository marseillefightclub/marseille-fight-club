import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Wilson Varela vs Davy Gallon | Hexagone MMA 44 - Marseille Fight Club",
  description: "Analyse complète de la demi-finale très attendue entre Wilson 'The Prototype' Varela du Marseille Fight Club et Davy Gallon lors de l'Hexagone MMA 44 à l'Arkéa Arena de Bordeaux pour le tournoi à 100 000 €.",
  keywords: "MMA, Hexagone MMA 44, Wilson Varela, Davy Gallon, Marseille Fight Club, combat semi-finale, renommée mondiale, enjeux 100 000 €, Arkéa Arena",
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
            src="/images/blog/hexagone-44.png" 
            alt="Ambiance spectaculaire dans la cage lors de l'Hexagone MMA 44" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-mfc-dark via-mfc-dark/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">Événement</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-md">MMA</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider leading-tight mb-4">
              Wilson <span className="text-mfc-red">Varela</span> En Route Vers Les 100 000 € À L'Hexagone MMA 44
            </h1>
            <p className="text-gray-400 font-inter text-lg">Publié le 21 Avril 2026 • Par La Rédaction MFC</p>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            L'heure de vérité approche. Le 29 mai 2026, l'arène bouillonnante de l'Arkéa Arena de Bordeaux vibrera au rythme des frappes et des takedowns à l'occasion de l'Hexagone MMA 44. Au cœur de cette soirée de renommée mondiale, un combat semi-finale capte toutes les attentions : notre combattant du Marseille Fight Club, Wilson « The Prototype » Varela, fera face au redoutable Davy Gallon. L'enjeu ? Une place en finale du tournoi Lightweight et la promesse d'un chèque monumental de 100 000 €.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Prototype : La Fierté du Marseille Fight Club
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 items-center">
            <div>
              <p className="mb-4">
                Avec un palmarès professionnel impressionnant de <strong>13 victoires pour 7 défaites</strong>, Wilson Varela règne désormais sur sa catégorie. Arborant fièrement la ceinture de <strong>Champion du monde Hexagone MMA</strong>, « The Prototype » est le fer de lance absolu du Marseille Fight Club.
              </p>
              <p>
                Régulier dans de prestigieuses promotions à l'international, Wilson a su s'imposer grâce à un striking chirurgical et une agressivité calculée. Il ne se contente plus de participer : il domine. Ses adversaires savent pertinemment qu'à l'instant où la cage se ferme, ils font face à un champion accompli à l'aura écrasante.
              </p>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
              <Image 
                src="/images/blog/varela-belt.png" 
                alt="Wilson Varela avec la ceinture Hexagone MMA" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Une Férocité Intacte
          </h2>
          
          <div className="relative w-full h-[400px] rounded-xl mb-10 overflow-hidden border border-white/10">
            <Image 
              src="/images/blog/varela-fight.jpg" 
              alt="Wilson Varela hurlant sa victoire dans la cage" 
              fill
              className="object-cover"
            />
          </div>
          <p className="mb-12">
            L'image parle d'elle-même. Cette rage de vaincre, cristallisée lors de ses victoires historiques par K.O. sur la scène internationale, traduit une faim de loup qui ne l'a jamais quitté. Même avec le statut de champion incontesté, Wilson Varela conserve dans le regard la férocité insatiable de ses premières années au Marseille Fight Club.
          </p>



          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Les Enjeux d'un Combat à 100 000 €
          </h2>
          
          <p>
            L'organisation a mis le paquet avec les enjeux de ce tournoi. Outre la gloire sportive d'atteindre la finale, le prix est historique : <strong>100 000 €</strong>. Pour Wilson, ce n'est pas seulement une question d'argent, c'est l'opportunité de solidifier son statut sur la scène internationale et de propulser la renommée du Marseille Fight Club.
          </p>

          <blockquote className="p-6 my-8 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            "Wilson a une faim de loup. Davy est solide, mais The Prototype frappe avec des angles que Gallon ne verra pas venir."
            <footer className="text-sm text-mfc-red mt-2 font-oswald uppercase tracking-widest not-italic">— Coach Principal, Marseille Fight Club</footer>
          </blockquote>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Les Coulisses d'un Camp d'Entraînement Hardcore
          </h2>

          <p>
            Pendant plus de deux mois, le Marseille Fight Club a fermé ses portes aux distractions pour se transformer en un bunker de préparation. La préparation physique a été poussée à l'extrême : sessions de sparring à haute intensité, drills de défense de takedown pour contrer Gallon, et préparation mentale de pointe. 
          </p>
          <p>
            En interne, on raconte que Wilson n'a jamais été aussi rapide. "<em>Sa progression au sol depuis son dernier camp est phénoménale</em>," murmure l'on dans les vestiaires du MFC. La cohésion de l'équipe marseillaise sera son armure lorsque les portes de la cage se fermeront.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Hexagone MMA 44 : Le Choc du 29 Mai
          </h2>

          <p>
            L'Arkéa Arena sera le théâtre d'une nuit de violence et de technique. Le format du <em>Hexagone MMA 44</em> est pensé pour le spectacle total : entrées pyrotechniques, show à l'américaine et commentateurs de classe mondiale. Les fans attendent cette demi-finale avec impatience, beaucoup la qualifiant de "vraie finale avant l'heure".
          </p>



          <p className="pb-8">
            Si Wilson « The Prototype » Varela parvient à lever les bras à l'issue de ce choc titanique contre Davy Gallon, il ne s'assurera pas simplement un billet pour la finale. Il cimentera sa place parmi l'élite européenne des poids légers et fera rayonner les couleurs du <strong>Marseille Fight Club</strong> à l'international. Rendez-vous le 29 mai. Ne clignez pas des yeux.
          </p>

        </article>
      </div>
    </main>
  );
}
