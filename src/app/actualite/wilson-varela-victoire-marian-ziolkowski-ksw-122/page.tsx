import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wilson Varela bat Marian Ziółkowski au KSW 122 | Marseille Fight Club",
  description: "Wilson Varela bat Marian Ziółkowski par soumission (clé de bras) au 1er round du KSW 122 à Rzeszów. Analyse du résultat et de la revanche par le Marseille Fight Club.",
  keywords: "Wilson Varela, Marian Ziółkowski, KSW 122, Wilson Varela victoire, Wilson Varela soumission, Marseille Fight Club, MMA Marseille, Jean-Michel Foissard",
  alternates: {
    canonical: "https://marseillefightclub.com/actualite/wilson-varela-victoire-marian-ziolkowski-ksw-122",
  },
  openGraph: {
    title: "KSW 122 : Wilson Varela bat Marian Ziółkowski par soumission au premier round",
    description: "Wilson Varela s'impose par soumission face à Marian Ziółkowski au 1er round du KSW 122 à Rzeszów. Compte rendu officiel par le Marseille Fight Club.",
    url: "https://marseillefightclub.com/actualite/wilson-varela-victoire-marian-ziolkowski-ksw-122",
    type: "article",
    publishedTime: "2026-10-11T09:00:00+02:00",
    modifiedTime: "2026-10-11T09:00:00+02:00",
    authors: ["Marseille Fight Club"],
    images: [
      {
        url: "https://marseillefightclub.com/images/press/WilsonVarela.jpeg",
        width: 1200,
        height: 675,
        alt: "Wilson Varela vainqueur au KSW 122 - Marseille Fight Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KSW 122 : Wilson Varela bat Marian Ziółkowski par soumission",
    description: "Wilson Varela s'impose par soumission au 1er round du KSW 122.",
    images: ["https://marseillefightclub.com/images/press/WilsonVarela.jpeg"],
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "KSW 122 : Wilson Varela bat Marian Ziółkowski par soumission au premier round",
    "description": "Wilson Varela s'impose par soumission (clé de bras) face à Marian Ziółkowski au premier round du KSW 122 à Rzeszów. Compte rendu officiel par le Marseille Fight Club.",
    "inLanguage": "fr-FR",
    "datePublished": "2026-10-11T09:00:00+02:00",
    "dateModified": "2026-10-11T09:00:00+02:00",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marseillefightclub.com/actualite/wilson-varela-victoire-marian-ziolkowski-ksw-122"
    },
    "image": [
      "https://marseillefightclub.com/images/press/WilsonVarela.jpeg"
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
        "name": "Wilson Varela"
      },
      {
        "@type": "Person",
        "name": "Marian Ziółkowski"
      },
      {
        "@type": "SportsEvent",
        "name": "XTB KSW 122",
        "startDate": "2026-10-10",
        "location": {
          "@type": "Place",
          "name": "Hala Podpromie",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rzeszów",
            "addressCountry": "PL"
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

        {/* Header Image with Title 50% Straddling (à cheval de moitié, sans fond, transparence totale) */}
        <div>
          <div className="relative w-full h-[520px] sm:h-[680px] md:h-[820px] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group">
            <Image 
              src="/images/press/WilsonVarela.jpeg" 
              alt="Wilson Varela célébrant sa victoire dans la cage, avec l'inscription Winner." 
              fill
              style={{ objectFit: 'contain' }}
              className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Title Header: 100% transparent, sans fond, sans flou, à cheval de moitié sur la bordure basse */}
          <header className="relative -mt-28 sm:-mt-32 md:-mt-36 px-2 sm:px-6 z-20 mb-8 sm:mb-12">
            <div className="flex flex-wrap gap-2.5 mb-3 sm:mb-4">
              <span className="px-3 py-1 bg-mfc-red text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded shadow-lg">KSW 122</span>
              <span className="px-3 py-1 bg-black/60 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded border border-white/20 shadow-lg">Poids Légers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,1)] [text-shadow:_0_4px_28px_rgb(0_0_0_/_95%)]">
              KSW 122 : Wilson Varela bat Marian Ziółkowski par soumission au premier round
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-gray-300 font-inter text-xs sm:text-sm uppercase tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,1)]">
              <span className="text-white font-medium">10 Octobre 2026</span>
              <span className="w-4 h-px bg-white/40"></span>
              <span>Par la rédaction Marseille Fight Club</span>
            </div>
          </header>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none font-inter text-gray-300 leading-relaxed">
          
          <p className="lead text-xl text-white font-medium mb-12 border-l-4 border-mfc-red pl-6">
            Le 10 octobre 2026, à la Hala Podpromie de Rzeszów en Pologne, Wilson Varela s&apos;est imposé face à l&apos;ancien champion des poids légers Marian Ziółkowski lors du KSW 122. Le combattant du Marseille Fight Club a conclu l&apos;affrontement par soumission sur une clé de bras à 3 minutes et 40 secondes du premier round. Cette victoire marque l&apos;épilogue de leur rivalité sportive entamée en 2024 et confirme la polyvalence technique du représentant marseillais sur le circuit européen.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Wilson Varela s&apos;impose par soumission au KSW 122
          </h2>
          <p>
            Programmée sur la carte principale de l&apos;événement XTB KSW 122 à Rzeszów, la confrontation chez les poids légers (-70,3 kg / 155 lbs) opposait Wilson Varela au Polonais Marian Ziółkowski. Ancien détenteur de la ceinture de la catégorie, Ziółkowski abordait ce duel sur son sol avec l&apos;ambition de consolider son statut face à un adversaire qu&apos;il connaissait bien.
          </p>
          <p>
            Dès l&apos;entame de ce premier round, l&apos;engagement a trouvé sa conclusion au sol. Wilson Varela est parvenu à isoler le bras de son adversaire pour verrouiller une clé de bras (<em>armbar</em>), forçant Marian Ziółkowski à signifier son abandon à l&apos;arbitre.
          </p>
          
          <p className="text-xl text-white font-bold text-center bg-mfc-red/10 border border-mfc-red/30 py-4 my-8 rounded-lg">
            Victoire par soumission (clé de bras) à 3 minutes et 40 secondes du premier round.
          </p>

          <p>
            La décision officielle a été enregistrée à 3 minutes et 40 secondes de la première reprise. Cette issue par arrêt de l&apos;arbitre sur soumission technique accorde à Varela une victoire nette face à l&apos;un des combattants les plus expérimentés de l&apos;organisation polonaise.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Une revanche dans la continuité du KSW 93
          </h2>
          <p>
            Ce face-à-face constituait le second chapitre d&apos;une opposition née au printemps 2024. Le 6 avril 2024, lors du KSW 93 à l&apos;Adidas Arena de Paris, Wilson Varela et Marian Ziółkowski s&apos;étaient rencontrés une première fois. Le combat avait alors tourné à l&apos;avantage de Varela, déclaré vainqueur par TKO à 2 minutes et 31 secondes de la première reprise, à la suite d&apos;une blessure à l&apos;épaule contractée par Ziółkowski.
          </p>
          <p>
            Si ce premier résultat était dûment homologué, les circonstances de l&apos;arrêt avaient laissé l&apos;opposition inachevée sur le plan purement martial. En retrouvant l&apos;athlète polonais au KSW 122, Varela a cette fois obtenu une décision par une prise de soumission réglementaire. Ce succès apporte une conclusion claire à leur face-à-face, en remplaçant l&apos;interruption médicale de 2024 par une manœuvre technique finalisée.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Le parcours d&apos;un combattant complet au Marseille Fight Club
          </h2>
          <p>
            Né au Cap-Vert et arrivé adolescent en France, Wilson « The Prototype » Varela a construit son bagage dans les sports de combat à travers le sambo et le kickboxing professionnel avant de faire la transition vers les arts martiaux mixtes.
          </p>
          <p>
            Affilié au <Link href="/club" className="text-mfc-red hover:underline">Marseille Fight Club</Link>, où il s&apos;entraîne sous la direction de l&apos;entraîneur <Link href="/coachs" className="text-mfc-red hover:underline">Jean-Michel Foissard</Link>, Varela a progressivement élargi sa palette tactique. Souvent identifié pour sa puissance de frappe debout — illustrée par des victoires rapides par K.-O. sur le circuit —, il s&apos;est appliqué à faire du combat au sol une arme de premier plan. Il avait déjà démontré cette compétence en remportant le titre des poids légers d&apos;<Link href="/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44" className="text-mfc-red hover:underline">Hexagone MMA</Link> grâce à un étranglement en triangle au premier round.
          </p>
          <p>
            La victoire acquise à Rzeszów reflète cette continuité : la capacité à conclure un combat au sol contre un spécialiste de la gestion de distance atteste du travail accompli au quotidien dans la salle marseillaise.
          </p>

          <h2 className="text-3xl font-oswald font-bold text-white uppercase mt-16 mb-8 tracking-wider">
            Quelles perspectives après cette victoire ?
          </h2>
          <p>
            Cette victoire contre un ancien champion place Wilson Varela dans une position favorable au sein de la division des poids légers du KSW. Après avoir disputé un combat pour le titre fin 2024 face à Salahdine Parnasse et engrangé de l&apos;expérience sur les scènes internationales, le pensionnaire du MFC démontre sa capacité à rivaliser avec les figures établies de l&apos;organisation.
          </p>
          <p>
            À ce stade, l&apos;organisation n&apos;a pas encore communiqué d&apos;échéance pour son prochain engagement ni précisé l&apos;impact de ce combat sur le classement officiel de la division. Sur le plan sportif, cette soumission précoce confirme néanmoins que Wilson Varela demeure une valeur sûre et compétitive au sein du plateau européen.
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
