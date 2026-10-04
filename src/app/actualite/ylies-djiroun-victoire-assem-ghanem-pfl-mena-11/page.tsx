import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ylies Djiroun en finale : victoire choc au PFL MENA 11 | Marseille Fight Club",
  description: "Victoire historique d'Ylies Djiroun au PFL MENA 11 ! Le combattant du Marseille Fight Club bat Assem Ghanem par TKO et file en finale du PFL MENA 2026.",
  keywords: "Ylies Djiroun PFL MENA 11, Ylies Djiroun victoire, Marseille Fight Club, MMA Marseille, PFL MENA 2026, Assem Ghanem, Finale PFL MENA, Jean-Michel Foissard",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-4">
          <Link href="/actualite" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-mfc-gray/50 group shadow-2xl">
            <a href="/images/press/ylies-pfl-mena-11-winner.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image 
                src="/images/press/ylies-pfl-mena-11-winner.jpg" 
                alt="Ylies Djiroun célèbre sa victoire par TKO contre Assem Ghanem lors de la demi-finale du PFL MENA 11 à Riyad sous les couleurs du Marseille Fight Club." 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-mfc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">PFL MENA 11</span>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">Demi-Finale</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-6">
            De Marseille à la Finale : Ylies Djiroun Foudroie Assem Ghanem au PFL MENA 11
          </h1>
          <div className="flex items-center gap-4 text-gray-500 font-inter text-sm uppercase tracking-widest">
            <span>2 Octobre 2026</span>
            <span className="w-4 h-px bg-white/20"></span>
            <span>Par la rédaction Marseille Fight Club</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            C’est une performance qui fera date dans l’histoire du MMA phocéen. Vendredi 2 octobre 2026, dans l’arène de Riyad en Arabie saoudite, Ylies « Broly » Djiroun a décroché son billet pour la finale du tournoi lightweight en survolant le PFL MENA 11. Confronté à un changement d’adversaire de dernière minute, le représentant du Marseille Fight Club n'a pas tremblé et s'est imposé par TKO dès le premier round face à l'Égyptien Assem Ghanem. Une victoire éclatante qui valide des mois de travail acharné et propulse une nouvelle fois les couleurs de Marseille sur la scène internationale.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le PFL MENA : L'exigence du très haut niveau international
          </h2>
          <p>
            Pour comprendre la portée de l'exploit d'Ylies Djiroun, il faut mesurer l'enjeu du terrain sur lequel il évolue. La Professional Fighters League (PFL) est l’une des plus grandes organisations mondiales de MMA, reconnue pour son format sportif unique sous forme de championnat, calqué sur les grandes ligues nord-américaines. Sa division MENA (Moyen-Orient et Afrique du Nord) regroupe l’élite des combattants de la région dans un tournoi impitoyable où seule la victoire garantit la survie.
          </p>
          <p>
            Arriver en demi-finale d'un tel tournoi n'est jamais le fruit du hasard. C’est le parcours du combattant absolu. Chaque victoire vous rapproche du sommet, mais la moindre erreur vous élimine définitivement. En se qualifiant pour la finale, Ylies Djiroun ne valide pas seulement une victoire de plus : il franchit un palier majeur dans sa carrière, s'offrant l'opportunité de marquer l'histoire de la compétition et de décrocher le titre suprême des poids légers.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Ylies Djiroun face au défi Assem Ghanem : Le choc des générations
          </h2>
          <p>
            Pour cette demi-finale cruciale, les amateurs de sports de combat ont eu droit à une opposition de styles fascinante.
          </p>
          
          <h3 className="text-2xl font-oswald font-bold text-white uppercase mt-10 mb-4 tracking-wide">
            Ylies « Broly » Djiroun : L'expérience et la polyvalence
          </h3>
          <p>
            Véritable fer de lance du MMA marseillais, Ylies Djiroun s’est construit un palmarès solide forgé dans l'exigence. Avec un impressionnant bilan professionnel porté aujourd'hui à 26 victoires pour 9 défaites, il a prouvé qu'il savait durer au plus haut niveau. À 34 ans, il représente le mélange parfait entre maturité tactique et puissance de frappe. Surnommé « Broly », il est ce combattant tout-terrain, capable d'éteindre un adversaire debout comme de le soumettre au sol. Son parcours dans cette saison 2026 est impressionnant, marqué notamment par sa retentissante <Link href="/actualite/ylies-djiroun-pride-of-arabia-dubai" className="text-mfc-red hover:underline">victoire contre le champion invaincu Salah Eddine Hamli</Link> il y a quelques mois. Ylies n'est plus là pour faire ses preuves, il est là pour prendre la couronne.
          </p>

          <h3 className="text-2xl font-oswald font-bold text-white uppercase mt-10 mb-4 tracking-wide">
            Assem Ghanem : L'étoile montante égyptienne
          </h3>
          <p>
            Face à lui se dressait un profil particulièrement dangereux : Assem Ghanem. Arrivé invaincu dans la cage avec un palmarès professionnel immaculé de 7 victoires pour 0 défaite, le jeune Égyptien de la S&B Academy représentait la fougue et la confiance d'une nouvelle génération qui n'a jamais connu la défaite. Avec son allonge redoutable et sa pression constante, Ghanem avait les armes physiques et techniques pour briser les rêves marseillais. Il ne s'agissait pas d'un combat gagné d'avance, mais d'un véritable test face à un adversaire en pleine ascension.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            L'imprévu de la pesée : Le combat avant le combat
          </h2>
          <p>
            La semaine précédant l'événement a pourtant été marquée par un incroyable coup de théâtre. Initialement, Ylies Djiroun devait affronter Basel Ahmed Shalaan dans cette demi-finale. Mais à seulement vingt-quatre heures de l'affrontement, le scénario a basculé : Shalaan ne parvient pas à valider son poids sur la balance. Les officiels du PFL agissent vite et appellent Assem Ghanem en remplacement de dernière minute.
          </p>
          <p>
            Dans le sport de haut niveau, un changement d'adversaire la veille du combat est un séisme psychologique. Toute la stratégie peaufinée pendant deux mois, les plans de jeu répétés des centaines de fois, l'analyse vidéo des failles de l'adversaire... Tout doit être reconfiguré en l'espace de quelques heures. C'est dans ces moments d'incertitude absolue que la véritable nature d'un combattant se révèle. La capacité d'Ylies à rester hermétique à la pression, à s'adapter immédiatement à un nouveau profil physique et technique, prouve sa dimension internationale.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le combat : La foudre frappe au premier round
          </h2>
          <p>
            Ce vendredi soir à Riyad, la tension est palpable lorsque les portes de la cage se referment. Ylies Djiroun entre concentré, le regard verrouillé sur son objectif. Face à lui, Ghanem, fort de son statut d'invaincu, semble prêt à bousculer la hiérarchie.
          </p>
          <p>
            Dès les premiers échanges, la différence d'expérience saute aux yeux. L'Égyptien tente d'imposer son rythme et de faire parler sa fougue, notamment en cherchant à amener le combat au sol, un domaine où il se sait performant. Mais Ylies lit parfaitement les intentions de son adversaire. Le Marseillais bloque la tentative de takedown avec une assurance déconcertante, asseyant immédiatement son autorité physique dans l'arène.
          </p>
          <p>
            Le tournant du combat intervient de manière foudroyante. Sur une accélération magistrale, Ylies Djiroun trouve la faille dans la garde égyptienne. Une séquence offensive d'une précision chirurgicale et d'une puissance dévastatrice s'abat sur Ghanem. Les coups nets et lourds de Broly font vaciller le jeune invaincu, le poussant dans ses retranchements jusqu'à ce qu'il ne puisse plus se défendre intelligemment.
          </p>
          <p>
            L'arbitre n'a d'autre choix que de s'interposer pour protéger le combattant égyptien.
          </p>
          
          <p className="text-xl text-white font-bold text-center bg-mfc-red/10 border border-mfc-red/30 py-4 my-8 rounded-lg">
            Victoire par TKO à 3 minutes et 6 secondes du premier round.
          </p>

          <p>
            La cage exulte, Marseille chavire : l'expérience a terrassé l'invincibilité.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Une victoire qui valide la méthode du Marseille Fight Club
          </h2>
          <p>
            Si seul Ylies lève les bras dans l'octogone, cette victoire spectaculaire est aussi celle d'une institution. Le <Link href="/club" className="text-mfc-red hover:underline">Marseille Fight Club</Link> démontre une nouvelle fois sa capacité à préparer des athlètes pour l'élite mondiale. 
          </p>
          <p>
            Ce TKO éclair ne doit rien à la chance. Il est le résultat direct d'une préparation méthodique, de séances de sparring éprouvantes et d'une rigueur quotidienne instaurée au sein du club. La gestion millimétrée du changement d'adversaire de dernière minute met en lumière l'excellence de l'encadrement technique. Menée par Jean-Michel Foissard, l'équipe a su trouver les mots justes, adapter la stratégie en urgence et maintenir Ylies dans des dispositions mentales optimales.
          </p>
          <p>
            La force du MFC réside dans ce travail de l'ombre : cette culture de la discipline qui permet de transformer la pression d'un grand rendez-vous en énergie destructrice le soir du combat. C'est cette alchimie entre un athlète talentueux, des partenaires d'entraînement dévoués et un coin visionnaire qui fabrique aujourd'hui les succès internationaux de Marseille.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Cap sur la finale : Le dernier sommet
          </h2>
          <p>
            La victoire au PFL MENA 11 n'était pas une fin en soi, mais la clé qui ouvre la porte de l'histoire. Ylies Djiroun est désormais officiellement qualifié pour la grande finale du tournoi PFL MENA 2026 dans la catégorie des poids légers.
          </p>
          <p>
            Son ultime adversaire est connu : il s'agit du redoutable Mohammad Fahmi, un grappler de très haut niveau, finaliste de l'édition 2025. L'enjeu est clair, la couronne régionale est à portée de poings. Ylies sait que le plus dur reste à faire, et l'heure n'est pas au relâchement. Il s'agit d'un nouveau profil, d'un nouveau défi de taille, et la préparation devra être d'une exigence sans précédent.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            La fierté de Marseille
          </h2>
          <p>
            Aujourd'hui, tout un club et toute une ville célèbrent cette qualification éclatante. En faisant tomber l'invaincu Assem Ghanem avec une telle autorité, Ylies Djiroun a envoyé un message clair à l'ensemble de la division : il n'est pas venu pour participer, mais pour régner.
          </p>
          <p className="font-bold text-white mt-8">
            De retour dans le 10ème arrondissement de Marseille, l'entraînement va rapidement reprendre ses droits. L'ambition est immense, la détermination est totale. Le Marseille Fight Club est en route pour la finale, prêt à inscrire son nom en lettres d'or dans l'histoire du PFL MENA. L'aventure marseillaise en Arabie saoudite est loin d'être terminée.
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
