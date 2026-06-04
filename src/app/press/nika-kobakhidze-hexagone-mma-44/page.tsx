import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Nika Kobakhidze Champion Hexagone MMA 44 | Marseille Fight Club",
  description: "Nika Kobakhidze remporte la ceinture mondiale des poids plumes à l'Hexagone MMA 44. Revivez la victoire épique par soumission du combattant du Marseille Fight Club.",
  keywords: "Nika Kobakhidze, Hexagone MMA 44, Marseille Fight Club, Jean-Michel Foissard, ceinture Hexagone MMA, MMA Marseille, MMA France, champion poids plume",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link href="/press" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase">
            <ArrowLeft className="mr-2" size={20} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image */}
        <div className="relative w-full h-[450px] md:h-[600px] rounded-xl overflow-hidden mb-10 shadow-2xl shadow-mfc-red/10 border border-white/5 bg-[#0a0a0a]">
          <Image 
            src="/images/press/nika-kobakhidze-belt.png" 
            alt="Nika Kobakhidze Champion Hexagone MMA 44 avec la ceinture" 
            fill
            className="object-contain object-right md:object-right-top p-4 md:p-8"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mfc-dark via-mfc-dark/80 to-transparent md:via-mfc-dark/40"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">Événement</span>
              <span className="px-3 py-1 bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-sm backdrop-blur-md">Hexagone MMA 44</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300">
          
          {/* Title Block */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-wider leading-tight mb-4">
              Nika Kobakhidze conquiert l'Hexagone MMA : une ceinture qui prend la route de Marseille
            </h1>
            <p className="text-gray-400 font-inter text-lg">Publié le 1 juin 2026 • Par La Rédaction MFC</p>
          </div>

          <p className="lead text-xl text-white font-medium mb-6 border-l-4 border-mfc-red pl-6">
            L'Arkéa Arena de Bordeaux a tremblé. Nika Kobakhidze, le joyau géorgien, a écrit l'une des pages les plus glorieuses de sa jeune carrière lors de l'Hexagone MMA 44. Face à un adversaire réputé infranchissable, il a fait parler la foudre, la résilience et une intelligence martiale affûtée pour s'emparer de l'or.
          </p>
          
          <p className="mb-6">
            L'enjeu était colossal : la ceinture vacante des poids plumes (-66 kg) de l'Hexagone MMA. Face à lui se dressait Muhammad (Magomed) Abdulaev, un adversaire redoutable et invaincu avant cette rencontre, réputé pour sa lutte asphyxiante et sa force athlétique impressionnante. Mais dans la cage bordelaise, c'est l'âme d'un véritable guerrier qui a fini par briller de mille feux.
          </p>
          
          <p className="mb-12">
            Ce triomphe n'est pas le fruit du hasard. C'est l'aboutissement d'une préparation titanesque, d'une alchimie parfaite entre un combattant acharné et un staff technique dévoué. Plus qu'une simple victoire individuelle, c'est le couronnement du travail mené de main de maître par Jean-Michel Foissard et toute son équipe. Une ceinture amplement méritée vient de prendre ses quartiers dans la cité phocéenne, marquant de son empreinte l'histoire du MMA France.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Un combattant façonné par le travail et le sacrifice
          </h2>

          <p className="mb-4">
            Pour comprendre la détermination qui habite Nika Kobakhidze, il faut remonter à ses racines géorgiennes. Le Caucase est une terre de lutteurs, de combattants au tempérament de feu pour qui l'abnégation est une seconde nature. Nika a apporté avec lui ce patrimoine génétique et culturel lorsqu'il a posé ses valises en France. Loin de la facilité, son parcours dans le MMA est jalonné de sacrifices, de sueur et d'une volonté inébranlable de se hisser au sommet.
          </p>

          <p className="mb-4">
            Son intégration dans le sud a marqué un véritable tournant dans son évolution sportive. Accueilli au sein d'une structure qui prône la rigueur et l'excellence, Nika a su adapter son style. Initialement doté d'une base solide en grappling et d'une force de caractère naturelle, il a peaufiné son striking, aiguisé ses transitions et structuré sa vision du combat.
          </p>

          <p className="mb-8">
            Sur le circuit européen, sa réputation n'est plus à faire. Il est perçu comme un athlète complet, un "grinder" capable d'imposer un rythme infernal à ses adversaires tout en conservant une lucidité technique remarquable. Ses précédents combats ont tous été des démonstrations de sa progression constante. Mais pour cette opportunité de titre, face à un adversaire du calibre d'Abdulaev, il fallait franchir un nouveau cap. Et c'est exactement ce qu'il a fait, prouvant que le talent sans le travail acharné n'est rien.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le camp de préparation : l'école de l'exigence
          </h2>

          <p className="mb-4">
            On ne part pas à la guerre sans avoir forgé ses armes dans le feu. Le camp de préparation de Nika pour l'Hexagone MMA 44 a été l'un des plus intenses jamais organisés dans nos murs. Sous la houlette de Jean-Michel "Papy", véritable architecte de la victoire, chaque aspect de la performance a été décortiqué, analysé et optimisé.
          </p>

          <p className="mb-4">
            La préparation physique a été poussée à l'extrême. Nika a dû accumuler du coffre pour tenir la distance des cinq rounds potentiels, tout en développant une force explosive capable de contrer la lutte redoutée de son adversaire. Au quotidien, le travail sur les tatamis marseillais s'est apparenté à un véritable laboratoire tactique. Le gameplan était clair : ne pas se laisser enfermer, maintenir une distance de frappe punitive et profiter de la moindre faille lors des phases de transition.
          </p>

          <p className="mb-8">
            Mais la clé d'un tel camp réside aussi dans l'environnement. Les partenaires d'entraînement de la salle ont joué un rôle crucial, simulant la pression constante et les amenées au sol d'Abdulaev. Son entraîneur a su maintenir son poulain dans un état de concentration absolu, travaillant minutieusement la dimension psychologique. La résilience mentale face à la difficulté a été le maître-mot de ces longues semaines de labeur. Cette victoire, Nika l'a construite jour après jour, round de sparring après round de sparring, porté par la culture du travail qui définit l'identité même du club.
          </p>

          <div className="relative w-full h-[500px] md:h-[700px] rounded-xl mb-12 overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <Image 
              src="/images/press/nika-kobakhidze-winner.jpg" 
              alt="Nika Kobakhidze célébrant sa victoire" 
              fill
              className="object-contain p-2"
            />
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le débrief technique du combat : au bout de l'effort, la délivrance
          </h2>

          <p className="mb-4">
            Le choc a tenu toutes ses promesses. Dès l'entame du combat, Muhammad Abdulaev a dévoilé ses intentions. Fidèle à sa réputation, l'homme jusqu'alors invaincu a mis une pression constante, cherchant à imposer son wrestling étouffant. Les premiers rounds ont été une véritable épreuve de force. Nika s'est retrouvé acculé contre la cage, devant faire face à des tentatives de takedowns incessantes et à un contrôle pesant au sol.
          </p>

          <p className="mb-4">
            Beaucoup auraient craqué mentalement face à cette adversité. Mais le travail accompli à la salle a porté ses fruits. Faisant preuve d'une défense héroïque, Nika a limité les dégâts, réussissant à se relever et à préserver son énergie. C'est à partir du troisième round que la dynamique a commencé à s'inverser. Les ajustements prodigués par Jean-Michel Foissard depuis le coin ont été appliqués à la lettre. Nika a trouvé son rythme en striking, plaçant des enchaînements précis qui ont entamé la réserve d'énergie de son adversaire.
          </p>

          <p className="mb-8">
            Le tournant du combat intervient dans la quatrième reprise. Abdulaev, visiblement éprouvé par le striking incisif du combattant marseillais, tente une énième entrée en lutte désespérée. Mais cette fois, Nika anticipe parfaitement. Avec une fluidité déconcertante, il renverse la situation lors d'un scramble au sol, s'empare du dos de son adversaire et verrouille un étranglement arrière (rear naked choke) foudroyant. La pression est insoutenable, Abdulaev est forcé de taper. L'arbitre met fin au combat. Nika Kobakhidze est le nouveau champion de l'Hexagone MMA !
          </p>

          <blockquote className="p-6 my-8 border-l-4 border-mfc-red bg-white/5 rounded-r-lg italic text-xl">
            "Quand il m'a mis la pression en lutte au début, j'ai écouté mon coin, j'ai été patient et, dès que l'opportunité de l'étranglement s'est présentée, j'y ai mis toute ma force."
            <footer className="text-sm text-mfc-red mt-2 font-oswald uppercase tracking-widest not-italic">— Nika Kobakhidze, Champion des Poids Plumes</footer>
          </blockquote>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Ce que cette victoire représente pour le clan marseillais
          </h2>

          <p className="mb-4">
            Remporter la ceinture de l'Hexagone MMA n'est pas un aboutissement mineur. Pour la carrière de Nika, c'est une consécration qui le propulse sur le devant de la scène internationale. Il s'affirme désormais comme l'un des poids plumes les plus redoutables d'Europe, prouvant qu'il a l'étoffe des plus grands champions.
          </p>

          <p className="mb-4">
            Pour son équipe, l'impact est tout aussi monumental. Cette victoire vient asseoir la réputation du club comme une véritable usine à champions. Elle valide des années d'un travail de l'ombre, rigoureux et passionné. C'est tout le rayonnement du MMA dans le sud de la France qui s'en trouve sublimé. L'encadrement démontre une fois de plus sa capacité à amener ses athlètes au sommet de leur discipline, sur les plus grandes scènes.
          </p>

          <p className="mb-8">
            Plus important encore, c'est un message retentissant envoyé à tous les jeunes pratiquants qui transpirent sur les tapis marseillais. Nika Kobakhidze incarne la preuve vivante qu'avec du cœur, de l'humilité et une éthique de travail irréprochable, les rêves les plus ambitieux sont à portée de main.
          </p>



          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-12 mb-6 tracking-widest flex items-center">
            <span className="bg-mfc-red w-8 h-1 mr-4 block"></span>
            Le regard tourné vers l'avenir
          </h2>

          <p className="pb-8">
            La joie est immense. Cependant, l'histoire ne fait que commencer. Cette ceinture d'Hexagone MMA n'est pas une ligne d'arrivée, mais une nouvelle étape. Nika Kobakhidze a maintenant une cible dans le dos, et les défis futurs seront encore plus grands. Mais avec l'encadrement exceptionnel de Jean-Michel Foissard et la force de tout son entourage derrière lui, le nouveau roi des poids plumes est prêt à régner. Le train est en marche, et rien ne semble pouvoir l'arrêter. L'équipe continue d'avancer.
          </p>

        </article>
      </div>
    </main>
  );
}
