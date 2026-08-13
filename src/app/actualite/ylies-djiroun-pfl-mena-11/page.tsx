import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Ylies Djiroun en demi-finale du PFL MENA 11 à Riyad le 2 octobre 2026 | Marseille Fight Club",
  description: "Après avoir stoppé le champion invaincu Hamli par TKO, Ylies 'Broly' Djiroun dispute la demi-finale du tournoi lightweight PFL MENA 11 face à Basel Shalaan le 2 octobre 2026 à Riyad.",
  keywords: "Ylies Djiroun, PFL MENA, PFL MENA 11, PFL MENA 2026, Riyad MMA, demi-finale PFL MENA, Marseille Fight Club, Basel Shalaan, MMA Marseille, combattant marseillais, PFL MENA lightweight, Ylies Broly Djiroun",
  openGraph: {
    title: "Ylies Djiroun vs Basel Shalaan — Demi-finale PFL MENA 11 | Riyad, 2 octobre 2026",
    description: "Il a fait tomber le champion invaincu à Dubaï. Le 2 octobre, Ylies Djiroun dispute une demi-finale à Riyad qui peut tout changer.",
    type: "article",
    url: "https://marseillefightclub.com/actualite/ylies-djiroun-pfl-mena-11",
    images: ["/images/press/YliesPFL11.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ylies Djiroun vs Basel Shalaan — Demi-finale PFL MENA 11 | Riyad",
    description: "Il a fait tomber le champion invaincu à Dubaï. Le 2 octobre, Ylies Djiroun dispute une demi-finale à Riyad qui peut tout changer.",
    images: ["/images/press/YliesPFL11.png"],
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Ylies Djiroun en demi-finale du PFL MENA 11 à Riyad : le combattant marseillais vise la finale du tournoi lightweight",
    description: "Après avoir stoppé le champion invaincu Hamli par TKO, Ylies 'Broly' Djiroun dispute la demi-finale du tournoi lightweight PFL MENA 11 face à Basel Shalaan le 2 octobre 2026 à Riyad.",
    datePublished: "2026-08-13T20:00:00+02:00",
    dateModified: "2026-08-13T20:00:00+02:00",
    author: {
      "@type": "Organization",
      name: "Marseille Fight Club",
      url: "https://marseillefightclub.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Marseille Fight Club",
      url: "https://marseillefightclub.com",
    },
    image: "https://marseillefightclub.com/images/press/YliesPFL11.png",
    mainEntityOfPage: "https://marseillefightclub.com/actualite/ylies-djiroun-pfl-mena-11",
    articleSection: "MMA",
    keywords: ["Ylies Djiroun", "PFL MENA", "PFL MENA 11", "MMA Marseille", "demi-finale", "Basel Shalaan", "Riyad", "lightweight"],
  };

  const sportsEventJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "PFL MENA 11 — Demi-finales 2026",
    startDate: "2026-10-02",
    location: {
      "@type": "Place",
      name: "Riyad",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riyad",
        addressCountry: "SA",
      },
    },
    competitor: [
      {
        "@type": "Person",
        name: "Ylies Djiroun",
        alternateName: "Broly",
      },
      {
        "@type": "Person",
        name: "Basel Shalaan",
      },
    ],
    organizer: {
      "@type": "Organization",
      name: "Professional Fighters League MENA",
      url: "https://pflmena.com",
    },
  };

  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEventJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Navigation */}
        <div className="mb-4">
          <Link href="/actualite" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour aux articles
          </Link>
        </div>

        {/* Header Image — Official PFL MENA 11 Poster */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-mfc-gray/50 group shadow-2xl">
            <a href="/images/press/YliesPFL11.png" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image
                src="/images/press/YliesPFL11.png"
                alt="Affiche officielle PFL MENA 11 — Ylies Djiroun vs Basel Shalaan, demi-finales, 2 octobre 2026, Riyad"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </a>
          </div>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="px-3 py-1 bg-mfc-red text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">PFL MENA 11</span>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">Demi-finale Lightweight</span>
            <span className="px-3 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm backdrop-blur-sm">2 Octobre 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-6">
            Ylies Djiroun à Riyad : celui qui a fait tomber le champion invaincu joue désormais sa place en finale du PFL MENA
          </h1>
          <div className="flex items-center gap-4 text-gray-500 font-inter text-sm uppercase tracking-widest">
            <span>13 Août 2026</span>
            <span className="w-4 h-px bg-white/20"></span>
            <span>Par la rédaction Marseille Fight Club</span>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">

          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Il y a moins de trois mois, Ylies &quot;Broly&quot; Djiroun stoppait Salah Eddine Hamli par TKO au premier round devant 17 000 spectateurs à la Coca-Cola Arena de Dubaï. Le champion PFL MENA lightweight en titre, invaincu en onze combats professionnels, venait de subir la toute première défaite de sa carrière — et elle portait la signature du Marseillais. C&apos;est le combattant du Marseille Fight Club, 34 ans et plus d&apos;une décennie de carrière professionnelle, qui avait mis fin au mythe de l&apos;invincibilité. Le 2 octobre 2026 à Riyad, Djiroun disputera la demi-finale du tournoi PFL MENA lightweight lors du PFL MENA 11. L&apos;adversaire est identifié. L&apos;enjeu aussi.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Dubaï, 24 mai 2026 : le soir où tout a basculé
          </h2>
          <p>
            Le quart de finale du tournoi PFL MENA lightweight 2026 avait tout d&apos;un piège pour Ylies Djiroun. En face, Salah Eddine &quot;Supersalah&quot; Hamli, 27 ans, onze victoires, zéro défaite, sacré champion PFL MENA des poids légers en décembre 2025. Le Marocain s&apos;entraînait en Espagne aux côtés du champion UFC Ilia Topuria. Les bookmakers le donnaient favori. Le scénario semblait écrit d&apos;avance.
          </p>
          <p>
            Djiroun en a écrit un autre. Patient, mobile, économe dans ses déplacements, il a laissé Hamli se jeter sur lui pendant quatre minutes. Quand le champion a tenté de l&apos;amener au sol en désespoir de cause, le Marseillais a anticipé le mouvement avec un sprawl parfait, s&apos;est glissé dans son dos et l&apos;a plaqué au sol. La suite a duré quelques secondes : une avalanche de frappes lourdes et précises en ground-and-pound, un arbitre qui s&apos;interpose. TKO. Premier round. 4 minutes et 20 secondes.
          </p>
          <p>
            Avec cette victoire, le bilan professionnel d&apos;Ylies Djiroun passe à <strong className="text-white">25 victoires pour 9 défaites</strong>. Plus important encore : il élimine le favori du tournoi et se qualifie pour les demi-finales.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            De Dubaï à Riyad : le changement de dimension
          </h2>
          <p>
            Il y a une différence fondamentale entre gagner un quart de finale et préparer une demi-finale. Le quart de finale, c&apos;est le combat où l&apos;on prouve qu&apos;on a sa place dans le tournoi. La demi-finale, c&apos;est le combat qui décide de la suite : la finale ou l&apos;élimination. Il n&apos;y a pas de deuxième chance. Pas de repêchage. Un seul combat sépare Ylies Djiroun de la finale du tournoi PFL MENA 2026 dans la catégorie lightweight.
          </p>
          <p>
            Le PFL MENA 11, programmé le <strong className="text-white">vendredi 2 octobre 2026 à Riyad</strong>, en Arabie saoudite, accueillera les demi-finales de la saison. L&apos;événement est confirmé par la Professional Fighters League sur son site officiel, avec des billets déjà en vente via Platinumlist. C&apos;est la deuxième fois cette saison que la PFL pose ses octogones en Arabie saoudite, après le PFL MENA 10 en juillet.
          </p>
          <p>
            Pour le combattant du Marseille Fight Club, le cadre a changé. L&apos;exposition aussi. Les demi-finales du PFL MENA attirent systématiquement l&apos;attention des médias sportifs internationaux et constituent un tremplin vers les échelons supérieurs de la ligue.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le tournoi PFL MENA : pourquoi ce combat est décisif
          </h2>
          <p>
            Pour comprendre l&apos;enjeu du 2 octobre, il faut comprendre le format du tournoi PFL MENA. La Professional Fighters League fonctionne sur un système de saison régulière suivi de playoffs, à l&apos;image des ligues sportives nord-américaines. Les combattants s&apos;affrontent en saison régulière, les meilleurs sont qualifiés pour les quarts de finale, puis les demi-finales, puis la finale.
          </p>
          <p>
            L&apos;équation est simple : <strong className="text-white">une victoire en demi-finale = la finale du tournoi PFL MENA lightweight 2026.</strong> Une défaite signifie l&apos;élimination. Chaque combat à ce stade du tournoi est un combat couperet.
          </p>
          <p>
            Le format de la PFL est conçu pour récompenser la régularité et la performance. Atteindre les demi-finales est déjà un accomplissement. Les franchir, c&apos;est entrer dans une autre catégorie de combattant au sein de la ligue.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Basel Shalaan : un adversaire à ne pas sous-estimer
          </h2>
          <p>
            L&apos;affiche officielle du PFL MENA 11, dévoilée par la ligue, confirme le duel : <strong className="text-white">Ylies Djiroun face à Basel Shalaan</strong>. L&apos;Égyptien est un adversaire que peu de gens connaissent en France. C&apos;est précisément ce qui le rend dangereux.
          </p>
          <p>
            Shalaan a fait ses débuts au PFL MENA lors du même événement que Djiroun, le 24 mai 2026 à Dubaï, au PFL MENA 9. Il s&apos;est imposé face à Abdullah Saleem par décision unanime. Une victoire moins spectaculaire que le TKO de Djiroun, mais qui raconte autre chose : la capacité à gérer un combat sur la durée, à aller chercher la décision des juges sans se précipiter. Shalaan est crédité d&apos;un bilan de 7 victoires pour 1 défaite selon le profil PFL MENA, bien que certaines bases de données MMA ne répertorient que son unique combat professionnel répertorié au PFL. L&apos;écart s&apos;explique probablement par des combats disputés dans des organisations régionales moins référencées.
          </p>
          <p>
            Ce que l&apos;on sait de Shalaan invite à la prudence : c&apos;est un combattant jeune, en pleine ascension, qui n&apos;a pas encore été mis à l&apos;épreuve par un adversaire du calibre de Djiroun. Mais son parcours dans le tournoi prouve qu&apos;il a les qualités pour être là. Sous-estimer un demi-finaliste du PFL MENA serait une erreur que Ylies Djiroun, fort de ses 34 combats professionnels, ne commettra pas.
          </p>

          {/* YouTube Teaser */}
          <div className="my-12">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/cd-q9b39I64"
                title="Teaser Ylies Djiroun — Direction Riyad pour la demi-finale du PFL MENA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4 font-inter uppercase tracking-widest">
              Teaser — Ylies Djiroun : direction Riyad pour la demi-finale du PFL MENA
            </p>
          </div>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Pourquoi Ylies peut encore créer la surprise
          </h2>
          <p>
            Le profil d&apos;Ylies Djiroun est atypique dans le paysage du PFL MENA. À 34 ans, il est l&apos;un des combattants les plus expérimentés du tournoi. Là où la plupart de ses adversaires comptent entre cinq et quinze combats professionnels, lui en affiche trente-quatre. Il a combattu au PFL principal en 2019, chez BRAVE CF, à l&apos;ARES Fighting Championship, et dans de nombreuses organisations européennes et internationales depuis 2011.
          </p>
          <p>
            Cette expérience n&apos;est pas un simple chiffre sur un palmarès. Elle se traduit dans la cage par des qualités devenues rares : la gestion du stress sous les projecteurs, la lecture des intentions adverses, la capacité à modifier un plan de combat en cours de round. Le TKO contre Hamli en est l&apos;illustration parfaite. Djiroun n&apos;a pas cherché à imposer sa puissance. Il a attendu que son adversaire commette une erreur. Et il l&apos;a saisie avec une précision chirurgicale.
          </p>
          <p>
            Le principal défi pour Djiroun réside dans le peu d&apos;informations disponibles sur son adversaire. Shalaan est un combattant relativement nouveau sur la scène internationale, ce qui complique la préparation tactique. Mais c&apos;est aussi un terrain sur lequel l&apos;expérience fait la différence : un vétéran de trente-quatre combats sait s&apos;adapter en temps réel, là où un combattant moins aguerri peut se retrouver démuni face à l&apos;imprévu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12 items-center">
            <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 group">
              <a href="/images/press/ylies-portrait.jpg" target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image
                  src="/images/press/ylies-portrait.jpg"
                  alt="Ylies Djiroun, combattant MMA marseillais, PFL MENA"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>
            <div>
              <h2 className="text-3xl font-oswald font-bold text-white uppercase mb-8 tracking-wider">
                Marseille derrière son champion
              </h2>
              <p>
                Au Marseille Fight Club, dans le 10ème arrondissement de la ville, l&apos;annonce de la demi-finale a été accueillie avec la fierté discrète de ceux qui savent ce que la compétition au plus haut niveau exige. Fondé par Jean-Michel Foissard, le club est devenu en quelques années l&apos;un des centres de formation MMA les plus reconnus du sud de la France. Ylies Djiroun en est le fer de lance sur la scène internationale.
              </p>
            </div>
          </div>

          <p>
            Ce que représente Djiroun dépasse le cadre d&apos;un simple combat de MMA. Il est le signal que Marseille produit des athlètes capables de rivaliser dans les ligues internationales majeures. Derrière lui, au club, des dizaines de jeunes combattants et combattantes s&apos;entraînent avec l&apos;ambition de suivre la même voie. Chaque victoire d&apos;Ylies sur la scène PFL MENA est une démonstration concrète que le chemin est possible.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le 2 octobre, une marche vers la finale
          </h2>
          <p>
            Riyad, le 2 octobre. L&apos;enjeu est limpide. Un combat. Trois rounds. De l&apos;autre côté de la cage, un adversaire qui n&apos;a rien à perdre. Et pour Ylies Djiroun, la possibilité d&apos;atteindre la finale du tournoi PFL MENA lightweight 2026 — un objectif qui, il y a encore quelques mois, semblait hors de portée pour un combattant que peu d&apos;observateurs plaçaient parmi les favoris.
          </p>
          <p>
            Mais c&apos;est justement quand on ne l&apos;attend pas que le Marseillais frappe le plus fort. Hamli peut en témoigner.
          </p>

          <p className="text-xl text-white font-bold text-center bg-mfc-red/10 border border-mfc-red/30 py-6 my-12 rounded-lg leading-relaxed">
            PFL MENA 11 — Demi-finales<br />
            Vendredi 2 octobre 2026 — Riyad, Arabie saoudite<br />
            Ylies &quot;Broly&quot; Djiroun (25-9) vs Basel Shalaan
          </p>

          <p className="text-center text-gray-400 font-inter text-sm">
            Informations issues du site officiel <a href="https://pflmena.com" target="_blank" rel="noopener noreferrer" className="text-mfc-red hover:text-white transition-colors">pflmena.com</a>. Le card définitif peut être modifié par l&apos;organisation.
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
