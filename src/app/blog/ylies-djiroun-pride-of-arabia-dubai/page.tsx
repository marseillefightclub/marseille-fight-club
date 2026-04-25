import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ylies \"Broly\" Djiroun Face au Champion en Titre à Dubaï — Le MFC au PFL MENA",
  description: "Ylies Djiroun affronte le champion Salah Eddine Hamli au PFL MENA à Dubaï. Analyse du combat, portrait de Broly et contexte de l'événement.",
  keywords: "Ylies Djiroun, Broly, PFL MENA, Salah Eddine Hamli, MMA Dubaï, Coca-Cola Arena, Marseille Fight Club",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-4">
          <Link href="/blog" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden mb-12 border border-white/5 bg-mfc-gray/50">
          <Image 
            src="/images/blog/ylies-victory.jpg" 
            alt="Ylies Djiroun" 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-mfc-dark via-transparent to-transparent"></div>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="px-3 py-1 bg-mfc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">PFL MENA</span>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">Co-Main Event</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-6">
            Ylies "Broly" Djiroun Face au Champion en Titre à Dubaï — Le MFC en Co-Main Event du PFL MENA
          </h1>
          <div className="flex items-center gap-4 text-gray-500 font-inter text-sm uppercase tracking-widest">
            <span>25 Avril 2026</span>
            <span className="w-4 h-px bg-white/20"></span>
            <span>Par la rédaction MFC</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le 24 mai 2026, la Coca-Cola Arena de Dubaï accueillera le coup d'envoi de la saison 2026 du PFL MENA, sous le titre "Pride of Arabia". Dans le co-main event de la soirée, Ylies "Broly" Djiroun, 24 victoires et 9 défaites au compteur, affrontera Salah Eddine "Supersalah" Hamli, invaincu en 11 combats, dans un quart de finale des poids légers. Un choc de génération, un choc de styles, et une affiche qui positionne Marseille au cœur d'un des tournois régionaux les plus suivis du MMA mondial.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Qui est Ylies Djiroun ?
          </h2>
          <p>
            Issu des quartiers nord de Marseille, Ylies Djiroun a construit sa carrière dans la discrétion avant de s'imposer progressivement sur la scène internationale. Il a commencé le sport de combat en 2009 dans un club de sambo à Marseille, et depuis, il n'a jamais vraiment arrêté d'apprendre. Judo, karaté, Muay Thai, taekwondo, kickboxing — il a traversé de nombreuses disciplines avant de les fondre dans une pratique du MMA à la fois complète et personnelle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10">
              <Image 
                src="/images/blog/ylies-portrait.jpg" 
                alt="Portrait d'Ylies Djiroun" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p>
                Jean-Michel Foissard, fondateur du Marseille Fight Club, lui a tout apporté, autant sur le plan de l'entraînement physique que sur le plan mental — c'est Djiroun lui-même qui le dit. Ce lien avec le MFC est solide, ancré dans les années, et il dit beaucoup sur la manière dont le club forme ses combattants : pas dans la précipitation, pas dans la mise en scène, mais dans la durée et l'honnêteté du travail quotidien.
              </p>
              <p className="mt-4">
                Son surnom, "Broly" ? Il vient de sa passion pour les mangas, Dragon Ball en tête. Pas de mystère, pas de construction marketing — juste un combattant qui assume ses influences et qui s'est construit comme ça.
              </p>
            </div>
          </div>

          <p>
            Au fil de sa carrière, il a remporté deux titres de champion d'Europe et accumulé une expérience rare pour un combattant français de sa génération, en évoluant dans plusieurs organisations à travers le monde — dont le PFL, Brave CF, et ARES FC. Avec 24 victoires et 9 défaites, il entre dans ce quart de finale avec davantage d'expérience en cage que la quasi-totalité des combattants présents sur cette carte.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            En face : le champion en titre
          </h2>
          <p>
            L'adversaire ne sera pas de tout repos. Salah Eddine "Supersalah" Hamli est le champion en titre du PFL MENA dans la catégorie poids légers, titre qu'il a décroché en décembre 2025 à Al Khobar, en Arabie saoudite, devenant au passage le premier Marocain à remporter ce titre dans le circuit. Sa finale de championnat contre l'Irakien Mohammad Fahmi s'est conclue par une soumission au D'arce choke au deuxième round — propre, dominante, sans discussion possible.
          </p>
          <p>
            Hamli s'entraîne au Climent Club à Alicante, en Espagne, aux côtés de la star des poids plumes Ilia Topuria. Ce détail n'est pas anodin : le niveau de sparring et les méthodes de préparation auxquels il a accès chaque jour sont de premier plan. À 27 ans, il affiche un palmarès vierge de défaites et s'est imposé comme l'un des finisseurs les plus dangereux de la région, avec un arsenal de soumissions redoutable et une capacité à contrôler les combats.
          </p>
          <p>
            Il a notamment soumis Mohsen Mohammadseifi — cinq fois champion du monde de Wushu Sanda — dès le premier round par étranglement arrière. Djiroun sait ce qui l'attend.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Un contexte de soirée particulier
          </h2>
          <p>
            C'est la première fois que le PFL MENA organise un événement hors d'Arabie saoudite. Dubaï représente un choix stratégique pour la ligue, et le poids symbolique de ce déplacement est réel. Comme l'a déclaré Jérôme Mazet, directeur général du PFL MENA : "Dubaï est un marché clé pour le PFL MENA et un hub mondial pour le sport et le entertainment, ce qui en fait le cadre idéal pour notre ouverture de saison 2026."
          </p>

          <div className="relative w-full aspect-video rounded-xl my-12 overflow-hidden border border-white/10">
            <Image 
              src="/images/blog/ylies-training.png" 
              alt="Ylies Djiroun à l'entraînement" 
              fill
              className="object-cover"
            />
          </div>

          <p>
            La Coca-Cola Arena, située dans le quartier City Walk, peut accueillir jusqu'à 17 000 spectateurs — une infrastructure à la hauteur des ambitions de la soirée. L'événement sera diffusé en direct sur STARZPLAY dans la région MENA, à partir de 17h heure du Golfe.
          </p>
          <p>
            La carte est dense : en plus du co-main event Hamli vs Djiroun, la soirée mettra en avant la toute première apparition de Zamzam Al Hammadi, 18 ans, prometteuse émirate auréolée de titres mondiaux en MMA et en jiu-jitsu brésilien. L'événement porte clairement une ambition : faire de Dubaï un rendez-vous incontournable sur la carte mondiale du MMA.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Ce combat, vu d'ici
          </h2>
          <p>
            Sur le papier, Djiroun est l'outsider. Hamli est invaincu, champion en titre, en pleine ascension, et l'affrontement se joue sur son terrain géographique — le circuit MENA qu'il a dominé de bout en bout la saison dernière. Mais les palmarès ne font pas les combats.
          </p>
          <p>
            Ce que Djiroun apporte dans cette cage, c'est quelque chose qu'aucun bilan chiffré ne résume : une dizaine d'années de compétition internationale, des défaites digérées et transformées, une capacité à s'adapter qui ne s'achète pas. Il est décrit par les observateurs du circuit comme le test le plus sérieux qu'Hamli ait eu à affronter jusqu'ici — ce qui, au vu du niveau du champion, n'est pas une formule anodine.
          </p>
          <p>
            Le MFC sera représenté au plus haut niveau ce soir-là. Pas dans un combat de remplissage, pas dans un préliminaire — en co-main event d'une soirée diffusée dans toute la région MENA, face à l'homme qui porte la ceinture. C'est là où on voulait être.
          </p>
          <p className="font-bold text-white mt-8">
            Le reste appartient au 24 mai.
          </p>

          <div className="mt-16 p-6 bg-white/5 border-t border-white/10 text-[10px] text-gray-500 font-inter italic">
            Données issues des sources officielles PFL, Arab News, Sherdog et Tapology. Le combat est prévu le 24 mai 2026 à la Coca-Cola Arena, Dubaï.
          </div>

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
