import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Aymard Guih vs Marian Ziółkowski au KSW 118 | MFC × KSW 118",
  description: "Le 16 mai 2026, Aymard Guih affronte l'ancien champion Marian Ziółkowski sur la main card du KSW 118 à l'Arena Kalisz. Analyse, parcours, préparation MFC.",
  keywords: "Aymard Guih, Marian Ziółkowski, KSW 118, MMA, Poids Légers, Lightweight, Marseille Fight Club, Arena Kalisz, Pologne, Jean-Michel Foissard",
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
        <div className="relative w-full h-[500px] md:h-[650px] rounded-xl overflow-hidden mb-10 shadow-2xl shadow-mfc-red/10 border border-white/5 bg-black">
          <Image 
            src="/images/blog/aymard-guih-ksw118.png" 
            alt="Affiche Aymard Guih vs Marian Ziółkowski — KSW 118, Arena Kalisz" 
            fill
            className="object-contain"
          />
          <div className="absolute inset-0 bg-linear-to-t from-mfc-dark via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">MFC × KSW 118</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-md">16 Mai 2026</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">
          
          {/* Title Block */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase tracking-wider leading-tight mb-4">
              Aymard <span className="text-mfc-red">Guih</span> face à un ancien champion — la nuit où tout peut changer
            </h1>
            <p className="text-gray-500 font-inter text-base">2 mai 2026 — Par La Rédaction MFC</p>
          </div>

          <p className="lead text-xl text-white font-medium mb-14 border-l-4 border-mfc-red pl-6">
            Le 16 mai à Kalisz, en Pologne, Aymard « Barracuda » Guih monte dans l'octogone face à Marian « Golden Boy » Ziółkowski. Ancien champion KSW des poids légers, trois défaites dans les jambes. C'est ce genre de combat que les vrais compétiteurs cherchent.
          </p>

          {/* Fighter Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 not-prose">
            
            {/* Guih Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-mfc-red/40 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 bg-mfc-red rounded-full"></div>
                <div>
                  <h3 className="text-xl font-oswald font-bold text-white uppercase">Aymard Guih</h3>
                  <p className="text-mfc-red text-sm font-oswald uppercase tracking-widest">« Barracuda » — MFC Marseille</p>
                </div>
              </div>
              <div className="space-y-3 text-sm font-inter">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Bilan pro</span>
                  <span className="text-white font-semibold">19-14-1</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">KSW</span>
                  <span className="text-white font-semibold">2V – 1D</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Taille</span>
                  <span className="text-white font-semibold">1,76 m</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Style</span>
                  <span className="text-white font-semibold">Complet — boxe, lutte, sol</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Anciens titres</span>
                  <span className="text-white font-semibold">Double champion Hexagone</span>
                </div>
              </div>
            </div>

            {/* Ziółkowski Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 bg-gray-500 rounded-full"></div>
                <div>
                  <h3 className="text-xl font-oswald font-bold text-white uppercase">Marian Ziółkowski</h3>
                  <p className="text-gray-400 text-sm font-oswald uppercase tracking-widest">« Golden Boy » — WCA Warsaw</p>
                </div>
              </div>
              <div className="space-y-3 text-sm font-inter">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Bilan pro</span>
                  <span className="text-white font-semibold">25-11-1</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Titre KSW</span>
                  <span className="text-white font-semibold">Ancien champion lightweight</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-gray-500">Taille</span>
                  <span className="text-white font-semibold">1,85 m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Forme récente</span>
                  <span className="text-white font-semibold">3 défaites de suite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Aymard — qui il est vraiment */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Aymard — Qui Il Est Vraiment
          </h2>

          <p className="mb-4">
            Né à Abidjan, formé à Marseille. Il débute par le judo — presque par hasard, sur les conseils d'un futur patron — avant de bifurquer vers le MMA il y a une quinzaine d'années. Depuis, plus de 30 combats pro à travers toute l'Europe : Bellator, Cage Warriors, Hexagone MMA. C'est là qu'il décroche les ceintures welterweight et middleweight sous la direction de Jean-Michel Foissard, devenant le premier double champion de l'organisation.
          </p>
          <p className="mb-8">
            Gabarit compact mais profil complet — capable de boxer à distance comme d'imposer son rythme au sol, Aymard sait dicter le combat quelle que soit la situation. Au KSW, il s'impose face à Barrio (décision partagée, KSW 93) et Śmiełowski (décision unanime, KSW 100), avant de s'incliner contre Makarowski à Lyon en mai 2025. Il repart, il travaille, il revient.
          </p>

          {/* Ziółkowski — l'état des lieux */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Ziółkowski — L'État des Lieux
          </h2>

          <p className="mb-4">
            Sur le papier, c'est toujours un nom lourd. Trois défenses de ceinture KSW réussies, un combat face à Gamrot avant que celui-ci devienne top 10 UFC. Le genre de palmarès qui impose le respect dans n'importe quelle salle.
          </p>
          <p className="mb-8">
            Mais depuis deux ans, c'est une autre histoire. Trois défaites consécutives : d'abord face à un athlète du Marseille Fight Club par TKO au deuxième round à Paris en avril 2024. Ensuite Salahdine Parnasse, par TKO au deuxième round à Lyon en mai 2025. Puis Marcin Held à KSW 112 en novembre 2025. À 1,85 m, avec son jab et ses coups de pied pour tenir l'espace, Ziółkowski est un combattant de distance dangereux — mais il arrive à Kalisz dos au mur, devant son public, avec trois défaites à effacer.
          </p>

          {/* Le MFC connaît déjà Ziółkowski */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le MFC Connaît Déjà Ziółkowski
          </h2>

          <p className="mb-8">
            C'est un détail qui compte : le Marseille Fight Club a déjà un dossier complet sur le Polonais. C'est Wilson Varela, entraîné par Jean-Michel Foissard à Marseille, qui lui a infligé la première de ces trois défaites à Paris. Les patterns de Ziółkowski ont été étudiés, décortiqués. Aymard arrive avec cette connaissance collective dans les jambes — pas juste en tant que combattant individuel, mais en tant que produit d'un club qui a déjà fait ses preuves face à cet adversaire.
          </p>

          {/* Camp de préparation */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le Camp de Préparation MFC
          </h2>

          <p className="mb-8">
            Sous la direction de Jean-Michel Foissard, le camp a été construit autour des failles identifiées lors du combat Varela-Ziółkowski. Sparrings ciblés avec des gabarits longilignes, travail de pression et de coupure d'angles, préparation physique axée sur l'explosivité et l'endurance de rythme. L'objectif : ne jamais laisser Ziółkowski s'installer dans sa zone de confort.
          </p>

          {/* Pourquoi Aymard peut gagner */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Pourquoi Aymard Peut Gagner
          </h2>

          <p className="mb-4">
            Ziółkowski aime contrôler la distance — jab, coups de pied, espace géré. Mais Aymard n'est pas un combattant qui subit. Son style complet lui permet de forcer des situations que le Polonais n'aime pas — rythme élevé, transitions, combat qui change de visage à chaque round. Et Aymard, lui, n'a rien à perdre.
          </p>
          <p className="mb-8 text-white font-semibold text-xl">
            Battre un ex-champion KSW sur son sol, ça redéfinit une carrière.
          </p>
          
          <blockquote className="p-6 my-10 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            « Je connais mon chemin. Ceux qui me connaissent savent que je ne recule jamais. Ziółkowski, c'est exactement le combat que je voulais. »
            <footer className="text-sm text-mfc-red mt-3 font-oswald uppercase tracking-widest not-italic">— Aymard « Barracuda » Guih</footer>
          </blockquote>

          {/* Event Info Card */}
          <div className="not-prose bg-white/5 border border-white/10 rounded-xl p-8 mt-14 mb-10">
            <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-6 tracking-widest">Le 16 Mai à Kalisz</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-inter">
              <div className="flex justify-between sm:flex-col sm:gap-1 border-b sm:border-b-0 border-white/5 pb-3 sm:pb-0">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Date</span>
                <span className="text-white font-semibold">Sam. 16 mai 2026</span>
              </div>
              <div className="flex justify-between sm:flex-col sm:gap-1 border-b sm:border-b-0 border-white/5 pb-3 sm:pb-0">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Lieu</span>
                <span className="text-white font-semibold">Arena Kalisz, Pologne</span>
              </div>
              <div className="flex justify-between sm:flex-col sm:gap-1 border-b sm:border-b-0 border-white/5 pb-3 sm:pb-0">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Événement</span>
                <span className="text-white font-semibold">XTB KSW 118</span>
              </div>
              <div className="flex justify-between sm:flex-col sm:gap-1">
                <span className="text-gray-500 uppercase tracking-widest text-xs">Diffusion</span>
                <span className="text-white font-semibold">RMC Sport 1</span>
              </div>
            </div>
          </div>

          <p className="mb-4">
            En main event : Kuberski vs Michalski pour le titre intérimaire des middleweights. En co-main : le titre féminin bantamweight entre Czyżewska et Luzar-Smajić. Guih-Ziółkowski est sur la main card — le KSW sait ce que ce combat vaut.
          </p>
          <p className="pb-8 text-white font-medium">
            Tout le MFC sera là. Suivez-nous sur les réseaux — on couvre la nuit en direct.
          </p>

        </article>
      </div>
    </main>
  );
}
