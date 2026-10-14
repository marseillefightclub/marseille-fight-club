import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Lorenzo Navarro conquiert la ceinture Cage Warriors | Marseille Fight Club",
  description: "Lorenzo Navarro remporte la ceinture des poids mouches à Cage Warriors Academy South East 41, une victoire décisive pour le Marseille Fight Club.",
  keywords: "Lorenzo Navarro, Cage Warriors, MFC, Jean-Michel Papy Foissard, titre Cage Warriors, combat, MMA France",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-mfc-dark pt-24 sm:pt-28 pb-20">
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
          <div className="relative w-full h-[520px] sm:h-[680px] md:h-[820px] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group">
            <Image
              src="/images/press/navarro_cage_warriors_title2.png"
              alt="Lorenzo Navarro brandissant la ceinture Cage Warriors"
              fill
              style={{ objectFit: 'contain' }}
              className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Title Header: 100% transparent, sans fond, sans flou, à cheval de moitié sur la bordure basse */}
          <header className="relative -mt-28 sm:-mt-32 md:-mt-36 px-2 sm:px-6 z-20 mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2.5 mb-3 sm:mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded shadow-lg">Cage Warriors</span>
              <span className="px-3 py-1 bg-black/60 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-white/20 shadow-lg">Ceinture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] [text-shadow:_0_4px_28px_rgb(0_0_0_/_95%)]">
              Lorenzo Navarro s&apos;empare de la ceinture Cage Warriors
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-300 font-inter text-xs sm:text-sm uppercase tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <span className="text-white font-medium">20 avril 2026</span>
              <span className="w-4 h-px bg-white/40"></span>
              <span>Par La rédaction MFC</span>
            </div>
          </header>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">

          {/* Lead */}
          <p className="lead text-xl text-white font-medium mb-6 border-l-4 border-mfc-red pl-6">
            Le 18 avril 2026, sous les lumières du Charter Hall à Colchester, Lorenzo Navarro, le « faucon marseillais », a gravé son nom dans l’histoire du MMA en s’emparant de la ceinture des poids mouches de Cage Warriors.
          </p>

          {/* Section 1 – Le combat décisif */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block" />
            Un premier round fusil à blanc
          </h2>
          <p className="mb-4">
            Face à l’invité Siyovush Davlatov, un combattant réputé pour son jeu de pieds et son endurance, Navarro a imposé son rythme dès les premières secondes. Après une entrée agressive, il a exploité une ouverture dans la garde de Davlatov, enchaînant deux coups de poing précis avant d’enchaîner un crochet du gauche qui a ébranlé l’adversaire.
          </p>
          <p className="mb-4">
            La pression s’est intensifiée. Le Français a maîtrisé la distance, alternant striking net et jeux de pieds, forçant Davlatov à reculer. À la 1ᵉʳ minute, un crochet du droit a envoyé Davlatov au tapis, ouvrant la porte à un ground‑and‑pound féroce. En moins de deux minutes, le Français a déclenché une série de coups qui a laissé l’adversaire sans défense, déclenchant l’arbitrage.
          </p>
          <p className="mb-4 font-bold text-mfc-red">
            Victoire par TKO, 1ʳᵉ round – 01:58
          </p>

          {/* Section 2 – Analyse technique */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block" />
            La technique du champion
          </h2>
          <p className="mb-4">
            Navarro a démontré une combinaison rare de puissance et de précision, mêlant le jeu de jambes du Muay‑Thai à la fluidité du striking britannique. Son jab, avec un angle de 30°, a constamment désorienté Davlatov, tandis que le jeu de jambes permettait de contrôler la cage et de couper les trajectoires des coups adverses.
          </p>
          <p className="mb-4">
            Sur le sol, la finition a été tout aussi méthodique. Après la première chute, il a rapidement passé à la position de contrôle latéral, ouvrant la voie à un ground‑and‑pound qui a achevé le combat. Le timing du passage de garde a laissé l’adversaire sans respiration, prouvant une maîtrise du tempo rare à ce niveau.
          </p>

          {/* Section 3 – Le camp de préparation */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block" />
            L’école de l’exigence à MFC
          </h2>
          <p className="mb-4">
            Le camp de préparation a été pensé comme une vraie usine de performance. Sur six semaines, chaque séance a été découpée en trois piliers : condition physique, technique et mental.
          </p>
          <p className="mb-4">
            <strong>Condition physique :</strong> des circuits polariseurs, du volume de sprint‑intervalles et des séances de force fonctionnelle ont permis de développer une explosivité suffisante pour les frappes de puissance.
          </p>
          <p className="mb-4">
            <strong>Technique :</strong> le sparring a été orienté vers le style de Davlatov – foot‑to‑foot, jeu de jambes et coups bas – afin d’anticiper les schémas de l’adversaire. Le travail au sol a été axé sur le contrôle latéral et les transitions rapides vers les positions de finition.
          </p>
          <p className="mb-4">
            <strong>Mentaux :</strong> des sessions de visualisation ont aidé Navarro à se projeter dans les moments critiques, renforçant la résilience qui s'est révélée décisive dans le ring.
          </p>

          {/* Section 4 – Impact pour le club */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block" />
            Un nouveau flambeau pour le Marseille Fight Club
          </h2>
          <p className="mb-4">
            La ceinture, désormais accrochée au mur du training‑room, symbolise la capacité du club à produire des champions de niveau international. Elle renforce le rayonnement du MFC, attire de nouveaux talents et confirme la pertinence de la philosophie de travail instaurée par Jean-Michel.
          </p>
          <p className="mb-4">
            Au niveau médiatique, le titre ouvre des portes : invitations à des talk‑shows, interviews sur les grands médias sportifs et une visibilité accrue sur les réseaux sociaux du club. Tout cela alimente le cycle vertueux d’attraction et de performance.
          </p>

          {/* Section 5 – Regard vers l’avenir */}
          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block" />
            Vers de nouveaux sommets
          </h2>
          <p className="mb-4">
            Aujourd'hui, la question se tourne naturellement vers le prochain défi. Un duel possible avec les meilleurs mouches du monde semble déjà à l'agenda, et le chemin vers les plus grandes organisations est plus ouvert que jamais. Navarro, humble mais ambitieux, se montre prêt :
          </p>
          <blockquote className="p-6 my-8 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            « Cette ceinture n'est que le premier chapitre. Va falloir la défendre maintenant — et je serai prêt »,
            <footer className="text-sm text-mfc-red mt-2 font-oswald uppercase tracking-widest not-italic">— Lorenzo Navarro</footer>
          </blockquote>

          {/* Concluding paragraph */}
          <p className="pb-8">
            La victoire de Lorenzo Navarro marque une étape majeure dans l’histoire du MMA français. Elle témoigne du travail acharné du club, de la vision de Jean‑Michel Foissard, et d’un talent qui n’en a pas fini de briller. Le futur s’annonce prometteur, et les fans du MFC attendent avec impatience le prochain défi du faucon marseillais.
          </p>
          <p className="mt-6 mb-4">Découvrez la préparation de Lorenzo Navarro et l’encadrement mis en place autour du combattant : Papy, Nathan Verpillot et Baptiste Lambot, dans la vidéo de sa chaîne YouTube privée.</p>
          <div className="w-full h-[500px] md:h-[800px] max-w-5xl mx-auto mb-8">
            <iframe src="https://www.youtube.com/embed/NV_akv6H598" title="Lorenzo Navarro préparation" allowFullScreen className="w-full h-full"></iframe>
          </div>
        </article>
      </div>
    </main>
  );
}
