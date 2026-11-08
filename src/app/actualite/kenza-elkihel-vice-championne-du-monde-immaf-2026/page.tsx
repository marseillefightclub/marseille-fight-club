import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Calendar, CheckCircle2, Shield, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kenza Elkihel Vice-Championne du Monde IMMAF 2026 | Marseille Fight Club",
  description: "Kenza Elkihel décroche la médaille d'argent aux Championnats du Monde IMMAF 2026 à Tbilissi (-52,2 kg). Récit de son parcours, analyse de la finale contre Assita Ouattara et palmarès complet.",
  keywords: "Kenza Elkihel, Kenza Elkihel MMA, Kenza Elkihel palmarès, Vice-championne du monde de MMA amateur, Championnats du monde IMMAF 2026, Assita Ouattara, MMA féminin, Marseille Fight Club, IMMAF Tbilisi",
  alternates: {
    canonical: "https://marseillefightclub.com/actualite/kenza-elkihel-vice-championne-du-monde-immaf-2026",
  },
  openGraph: {
    title: "Kenza Elkihel Vice-Championne du Monde IMMAF 2026 : L'Argent Mondial à Tbilissi",
    description: "Kenza Elkihel hisse le Marseille Fight Club sur le podium mondial lors des Championnats du Monde IMMAF 2026 à Tbilissi.",
    url: "https://marseillefightclub.com/actualite/kenza-elkihel-vice-championne-du-monde-immaf-2026",
    type: "article",
    publishedTime: "2026-11-08T09:00:00+01:00",
    modifiedTime: "2026-11-08T09:00:00+01:00",
    authors: ["Marseille Fight Club"],
    images: [
      {
        url: "https://marseillefightclub.com/images/press/kenza-elkihel-vice-championne-du-monde-immaf.jpg",
        width: 1200,
        height: 675,
        alt: "Kenza Elkihel médaillée d'argent aux Championnats du Monde IMMAF 2026 à Tbilissi pour le Marseille Fight Club.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenza Elkihel Vice-Championne du Monde IMMAF 2026 | Marseille Fight Club",
    description: "Médaille d'argent mondiale pour Kenza Elkihel aux Championnats du Monde IMMAF 2026 à Tbilissi.",
    images: ["https://marseillefightclub.com/images/press/kenza-elkihel-vice-championne-du-monde-immaf.jpg"],
  },
};

export default function KenzaElkihelArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "Kenza Elkihel Vice-Championne du Monde de MMA Amateur : L'Argent Mondial à Tbilissi pour le Marseille Fight Club",
    "description": "Kenza Elkihel décroche la médaille d'argent aux Championnats du Monde IMMAF 2026 à Tbilissi dans la division féminine des -52,2 kg. Retour sur une semaine historique, la finale contre Assita Ouattara et la montée en puissance d'une combattante d'exception.",
    "inLanguage": "fr-FR",
    "datePublished": "2026-11-08T09:00:00+01:00",
    "dateModified": "2026-11-08T09:00:00+01:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marseillefightclub.com/actualite/kenza-elkihel-vice-championne-du-monde-immaf-2026"
    },
    "image": [
      "https://marseillefightclub.com/images/press/kenza-elkihel-vice-championne-du-monde-immaf.jpg"
    ],
    "author": {
      "@type": "Organization",
      "name": "Marseille Fight Club",
      "url": "https://marseillefightclub.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marseille Fight Club",
      "url": "https://marseillefightclub.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marseillefightclub.com/LogoGorill.jpg"
      }
    },
    "about": [
      {
        "@type": "Person",
        "name": "Kenza Elkihel"
      },
      {
        "@type": "Person",
        "name": "Assita Ouattara"
      },
      {
        "@type": "SportsEvent",
        "name": "2026 IMMAF World Championships",
        "startDate": "2026-11-01",
        "endDate": "2026-11-07",
        "location": {
          "@type": "Place",
          "name": "Tbilisi Olympic Palace",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tbilisi",
            "addressCountry": "GE"
          }
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-mfc-dark pt-24 sm:pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-3 sm:mb-4">
          <Link href="/actualite" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image with Title Straddling */}
        <div>
          <div className="relative w-full h-[520px] sm:h-[680px] md:h-[820px] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group">
            <Image 
              src="/images/press/kenza-elkihel-vice-championne-du-monde-immaf.jpg" 
              alt="Kenza Elkihel arborant sa médaille d'argent aux Championnats du Monde IMMAF 2026 à Tbilissi." 
              fill
              style={{ objectFit: 'contain' }}
              className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Title Header */}
          <header className="relative -mt-28 sm:-mt-32 md:-mt-36 px-2 sm:px-6 z-20 mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2.5 mb-3 sm:mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded shadow-lg">IMMAF 2026</span>
              <span className="px-3 py-1 bg-black/70 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-white/20 shadow-lg">Vice-Championne du Monde</span>
              <span className="px-3 py-1 bg-black/70 text-gray-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-white/20 shadow-lg">Strawweight (-52,2 kg)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] [text-shadow:_0_4px_28px_rgb(0_0_0_/_95%)]">
              Kenza Elkihel Vice-Championne du Monde : L&apos;Argent Mondial à Tbilissi pour le Marseille Fight Club
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-300 font-inter text-xs sm:text-sm uppercase tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <span className="text-white font-medium">8 Novembre 2026</span>
              <span className="w-4 h-px bg-white/40"></span>
              <span>Par la rédaction Marseille Fight Club</span>
            </div>
          </header>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le 7 novembre 2026 restera gravé dans les annales du MMA phocéen. À Tbilissi, en Géorgie, lors de la journée de clôture des Championnats du Monde IMMAF 2026, Kenza Elkihel a franchi le palier ultime du circuit amateur en décrochant la médaille d&apos;argent mondiale dans la division Senior des −52,2 kg (Strawweight). Au terme d&apos;une finale d&apos;une intensité exceptionnelle face à la Française Assita Ouattara, la représentante du <Link href="/club" className="text-mfc-red hover:underline">Marseille Fight Club</Link> s&apos;est inclinée aux points par décision unanime, concrétisant une semaine magistrale qui la propulse parmi l&apos;élite planétaire des arts martiaux mixtes.
          </p>

          {/* Fiche Athlète Card */}
          <div className="not-prose my-12 bg-mfc-gray p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-mfc-red/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="flex items-center space-x-3 mb-6 border-b border-white/10 pb-4">
              <Shield className="text-mfc-red" size={28} />
              <h3 className="text-2xl font-oswald uppercase font-bold text-white tracking-wide">
                Fiche Repère : Kenza Elkihel
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest font-oswald mb-1">Athlète</p>
                <p className="text-white font-bold text-base flex items-center">
                  <User size={16} className="text-mfc-red mr-2" /> Kenza Elkihel
                </p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest font-oswald mb-1">Catégorie de poids</p>
                <p className="text-white font-bold text-base">Strawweight (−52,2 kg / 115 lbs)</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest font-oswald mb-1">Division d&apos;âge</p>
                <p className="text-white font-bold text-base">Seniors (Adultes)</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest font-oswald mb-1">Représentation Nationale</p>
                <p className="text-white font-bold text-base">Maroc (Team Morocco)</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest font-oswald mb-1">Club d&apos;entraînement</p>
                <p className="text-white font-bold text-base">Marseille Fight Club (MFC)</p>
              </div>
              <div>
                <p className="text-gray-400 uppercase text-xs tracking-widest font-oswald mb-1">Titre majeur 2026</p>
                <p className="text-mfc-red font-bold text-base flex items-center">
                  <Award size={16} className="text-mfc-red mr-1.5" /> Vice-Championne du Monde IMMAF
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Tbilissi 2026 : Le grand théâtre du MMA amateur mondial
          </h2>
          <p>
            Pour mesurer la portée exacte de cette performance, il convient de rappeler ce que représentent les Championnats du Monde de l&apos;International Mixed Martial Arts Federation (IMMAF). Loin des rassemblements régionaux ou des circuits promotionnels isolés, l&apos;IMMAF est l&apos;unique instance globale à proposer un championnat du monde sous forme de tournoi olympique à élimination directe, homologué par les comités sportifs officiels.
          </p>
          <p>
            Pendant sept jours consécutifs, du 1er au 7 novembre 2026, la capitale géorgienne a réuni des centaines d&apos;athlètes triés sur le volet, délégués par plus de 60 nations. Pas de passe-droit, pas de tirage complaisant : pour survivre dans le tableau des Seniors Strawweight, les prétendantes doivent enchaîner les pesées quotidiennes, maintenir un régime drastique à 52,2 kg, et affronter l&apos;élite du striking et de la lutte dans des combats sans round d&apos;observation.
          </p>
          <p>
            C&apos;est dans cette arène impitoyable que Kenza Elkihel s&apos;est illustrée au plus haut niveau mondial. Déjà aguerrie sur le circuit fédéral français et passée par les exigences de la salle marseillaise, elle est entrée dans le tournoi avec une concentration millimétrée, gravissant marche après marche jusqu&apos;à la confrontation suprême du samedi 7 novembre.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            La finale mondiale : Le duel face à Assita Ouattara
          </h2>
          <p>
            L&apos;affiche de cette finale mondiale féminine des −52,2 kg proposait une confrontation explosive entre deux combattantes qui se connaissent parfaitement pour avoir croisé le fer sur le circuit français : Kenza Elkihel face à la représentante de l&apos;équipe de France, Assita Ouattara.
          </p>
          <p>
            Dès le coup d&apos;envoi de la première reprise, le ton était donné. Assita Ouattara a cherché à imposer son envergure et une pression continue en striking, combinée à des intentions franches de cadrage contre la cage. De son côté, Kenza Elkihel a répondu avec une vigilance tactique exemplaire : gestion rigoureuse des distances, remises rapides en anglaise et recherche d&apos;angles pour désamorcer les enchaînements adverses.
          </p>
          <p>
            Au fil des trois rounds de trois minutes disputés sur un rythme étouffant, les deux athlètes se sont rendu coup pour coup. Kenza a su défendre avec sang-froid plusieurs assauts au sol, cherchant à inverser les positions et à placer des phases de contre-attaque en clinch. Cependant, l&apos;activité soutenue et le contrôle territorial d&apos;Assita Ouattara ont pesé lourd sur les fiches des juges officiels.
          </p>
          
          <div className="not-prose text-xl text-white font-bold text-center bg-mfc-red/10 border border-mfc-red/30 py-5 my-10 rounded-xl shadow-lg">
            <span className="block text-xs uppercase tracking-widest text-mfc-red mb-1 font-oswald">Résultat officiel de la finale IMMAF 2026</span>
            Assita Ouattara (France) bat Kenza Elkihel (Maroc) par décision unanime des juges.
          </div>

          <p>
            À l&apos;issue du combat, les trois juges ont désigné Assita Ouattara vainqueur à l&apos;unanimité. Une issue nette et indiscutable qui consacre une très grande championne du monde tricolore, mais qui ne retire absolument rien à la grandeur de la prestation de Kenza. Être finaliste mondiale IMMAF dans la catégorie Senior, c&apos;est faire partie des deux meilleures combattantes amateurs de la planète à ce poids.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            L&apos;ascension d&apos;une compétitrice : De la MMA League aux sommets mondiaux
          </h2>
          <p>
            Ce sacre de vice-championne du monde n&apos;a rien d&apos;un accident de parcours. Il couronne des années de rigueur, d&apos;entraînements biquotidiens et de confrontation continue avec les meilleures structures de l&apos;Hexagone et d&apos;Europe.
          </p>
          <p>
            Avant de briller en Géorgie, Kenza Elkihel s&apos;est forgé une solide réputation de guerrière méthodique sur le circuit de la Fédération Française de Mixed Martial Arts (FMMAF). Les archives de compétitions Smoothcomp et les bilans nationaux témoignent de cette montée en puissance graduelle :
          </p>
          <ul>
            <li>
              <strong>En mars 2025, lors de la MMA League 19 à Miramas :</strong> engagée dans un bracket particulièrement relevé chez les −56,7 kg (Flyweight), elle s&apos;était hissée jusqu&apos;en finale pour s&apos;emparer de la deuxième place.
            </li>
            <li>
              <strong>En octobre 2025, à la Coupe de France de MMA Amateur à Grenoble :</strong> elle répond une nouvelle fois présente dans l&apos;arène de la Halle Clemenceau, affirmant sa capacité à rivaliser avec les meilleurs gabarits nationaux.
            </li>
            <li>
              <strong>En janvier 2026, à la MMA League 22 de Guyancourt :</strong> sous la bannière officielle du Marseille Fight Club, Kenza frappe un grand coup en catégorie −52,2 kg en dominant sa division et en s&apos;adjugeant la première place face à Ornella Vivaldi. Cette victoire inaugurait avec éclat une saison 2026 placée sous le signe des grands rendez-vous mondiaux.
            </li>
          </ul>

          {/* Tableau Palmarès */}
          <div className="not-prose my-8 overflow-x-auto rounded-xl border border-white/10 bg-black/40 shadow-2xl">
            <table className="w-full text-left text-sm text-gray-300">
              <thead className="bg-mfc-gray text-white font-oswald uppercase text-xs tracking-wider border-b border-white/10">
                <tr>
                  <th scope="col" className="px-5 py-4">Compétition</th>
                  <th scope="col" className="px-5 py-4">Lieu & Date</th>
                  <th scope="col" className="px-5 py-4">Catégorie</th>
                  <th scope="col" className="px-5 py-4">Résultat / Rang</th>
                  <th scope="col" className="px-5 py-4">Affiliation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-light">
                <tr className="hover:bg-white/5 transition-colors bg-mfc-red/5">
                  <td className="px-5 py-4 font-bold text-white flex items-center">
                    <Award size={16} className="text-mfc-red mr-2 shrink-0" /> Championnats du Monde IMMAF 2026
                  </td>
                  <td className="px-5 py-4">Tbilissi (Géorgie) — Nov. 2026</td>
                  <td className="px-5 py-4">Seniors −52,2 kg</td>
                  <td className="px-5 py-4 font-bold text-mfc-red">🥈 Médaille d&apos;Argent (Finaliste)</td>
                  <td className="px-5 py-4 text-xs uppercase tracking-wider text-gray-400">Team Maroc / MFC</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 font-medium text-white">MMA League 22 (FMMAF)</td>
                  <td className="px-5 py-4">Guyancourt (France) — Janv. 2026</td>
                  <td className="px-5 py-4">Féminine AMA B −52,2 kg</td>
                  <td className="px-5 py-4 font-bold text-emerald-400">🥇 1ère Place (Vainqueur)</td>
                  <td className="px-5 py-4 text-xs uppercase tracking-wider text-gray-400">Marseille Fight Club</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 font-medium text-white">Coupe de France MMA Amateur 2025</td>
                  <td className="px-5 py-4">Grenoble (France) — Oct. 2025</td>
                  <td className="px-5 py-4">Féminine U21/U21+</td>
                  <td className="px-5 py-4 font-medium text-white">Podium Fédéral</td>
                  <td className="px-5 py-4 text-xs uppercase tracking-wider text-gray-400">Circuit National</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-5 py-4 font-medium text-white">MMA League 19 (FMMAF)</td>
                  <td className="px-5 py-4">Miramas (France) — Mars 2025</td>
                  <td className="px-5 py-4">Féminine AMA B −56,7 kg</td>
                  <td className="px-5 py-4 font-bold text-mfc-red">🥈 2ème Place (Finaliste)</td>
                  <td className="px-5 py-4 text-xs uppercase tracking-wider text-gray-400">Team Maroc / MFC</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            La forge marseillaise : L&apos;exigence au service du talent
          </h2>
          <p>
            On ne monte pas sur un podium mondial sans un écosystème d&apos;entraînement à la hauteur des exigences du très haut niveau. C&apos;est dans les travées du <Link href="/club" className="text-mfc-red hover:underline">Marseille Fight Club</Link>, sous le regard attentif de <Link href="/coachs" className="text-mfc-red hover:underline">Jean-Michel Foissard</Link> et de l&apos;ensemble du staff technique, que Kenza peaufine quotidiennement ses armes.
          </p>
          <p>
            Au MFC, les combattants professionnels comme les espoirs partagent le même tatami, la même sueur et le même esprit de corps. Côtoyer au quotidien des figures de premier plan telles que <Link href="/actualite/wilson-varela-victoire-marian-ziolkowski-ksw-122" className="text-mfc-red hover:underline">Wilson Varela</Link>, engagé sur les sommets du KSW, ou <Link href="/actualite/ylies-djiroun-victoire-assem-ghanem-pfl-mena-11" className="text-mfc-red hover:underline">Ylies Djiroun</Link>, en route pour la finale du PFL MENA, offre un modèle d&apos;exigence et de professionnalisme incomparable.
          </p>
          <p>
            Cette émulation collective profite particulièrement au pôle féminin du club, qui s&apos;affirme comme l&apos;un des plus compétitifs d&apos;Europe. La présence au club d&apos;<Link href="/actualite/eva-dourthe-ksw-116" className="text-mfc-red hover:underline">Eva Dourthe</Link>, victorieuse avec éclat au KSW 116 en Pologne et figure de la Team Dourthe, crée un terreau d&apos;entraînement exceptionnel. Des rounds de sparring appuyés, un travail méticuleux sur les transitions cage-sol et une discipline de fer constituent le socle sur lequel Kenza bâtit son ascension.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Une fierté pour le club et le MMA féminin
          </h2>
          <p>
            Cette médaille d&apos;argent dépasse le cadre individuel : elle résonne avec une force toute particulière pour l&apos;ensemble du sport de combat et illustre la vitalité du MMA féminin au plus haut niveau. Voir une combattante issue de la salle phocéenne atteindre la finale des championnats du monde amateurs IMMAF constitue un signal fort et pionnier pour toutes les passionnées de sports de combat.
          </p>
          <p>
            Par son attitude mesurée en dehors de la cage, sa combativité exemplaire et son humilité dans l&apos;effort, Kenza Elkihel s&apos;impose comme une véritable source d&apos;inspiration pour toute une génération de jeunes pratiquantes. Elle démontre avec brio que le travail silencieux, répété jour après jour à la salle, est capable d&apos;ouvrir les portes des plus grandes arènes de la planète.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Quel avenir après cette consécration mondiale ?
          </h2>
          <p>
            À l&apos;issue de ce tournoi géorgien éprouvant, l&apos;heure est d&apos;abord à la récupération physique et à la célébration méritée auprès de ses proches, de son équipe et de ses supporters.
          </p>
          <p>
            Néanmoins, dans le sport moderne, une médaille mondiale IMMAF agit comme un révélateur immédiat auprès des promoteurs et des recruteurs. Historiquement, le vivier amateur de l&apos;IMMAF a servi de tremplin aux plus grands champions actuels de l&apos;UFC, du PFL et du KSW.
          </p>
          <p>
            Si Kenza et son encadrement n&apos;ont pour l&apos;instant annoncé aucun calendrier prématuré concernant un passage chez les professionnelles, une chose est certaine : elle a prouvé qu&apos;elle possédait l&apos;étoffe, la maturité mentale et le bagage technique pour évoluer au sommet. Qu&apos;il s&apos;agisse de confirmer sur le circuit amateur ou de faire le grand saut vers le monde professionnel, Kenza Elkihel a marqué les esprits à Tbilissi.
          </p>

          {/* Conclusion */}
          <div className="not-prose my-12 border-t border-b border-white/10 py-8 text-center sm:text-left">
            <h4 className="text-2xl font-oswald uppercase text-white font-bold mb-3">
              Félicitations Kenza !
            </h4>
            <p className="text-gray-300 font-inter text-base leading-relaxed mb-4">
              L&apos;ensemble des entraîneurs, des combattants, des licenciés et des supporters du Marseille Fight Club adressent leurs plus chaleureuses félicitations à Kenza pour cet exploit historique. Porter si haut les couleurs du club et la fierté marseillaise sur le podium mondial honore l&apos;ensemble de nos membres. Le travail continue !
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/actualite" className="inline-flex items-center text-xs uppercase tracking-widest font-oswald font-bold text-mfc-red hover:text-white transition-colors">
                ← Voir toutes les actualités du MFC
              </Link>
              <Link href="/club" className="inline-flex items-center text-xs uppercase tracking-widest font-oswald font-bold text-gray-400 hover:text-white transition-colors">
                Découvrir le club et nos champions →
              </Link>
            </div>
          </div>

        </article>

        <footer className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <div className="text-gray-500 text-[10px] font-inter uppercase tracking-widest">
            © 2026 Marseille Fight Club — Rédaction Sportive Officielle
          </div>
        </footer>
      </div>
    </main>
  );
}

