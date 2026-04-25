"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function BlogPage() {
  const articles = [
    {
      id: "ylies-djiroun-pride-of-arabia-dubai",
      title: "Ylies Djiroun au PFL MENA : 'Broly' à la Conquête de Dubaï",
      excerpt: "Découvrez le portrait d'Ylies Djiroun avant son combat historique au Pride of Arabia le 24 mai 2026 à la Coca-Cola Arena de Dubaï.",
      category: "Événement",
      date: "23 Avril 2026",
      image: "/images/blog/ylies-victory.jpg"
    },
    {
      id: "wilson-varela-vs-davy-gallon-hexagone-mma-44",
      title: "Wilson Varela En Route Vers Les 100 000 € À L'Hexagone MMA 44",
      excerpt: "Analyse complète de la demi-finale très attendue entre Wilson 'The Prototype' Varela du Marseille Fight Club et Davy Gallon lors de l'Hexagone MMA 44 à l'Arkéa Arena de Bordeaux.",
      category: "Événement",
      date: "21 Avril 2026",
      image: "/images/blog/varela-fight.jpg"
    },
    {
      id: "souhil-tairi-pfl-mena",
      title: "Souhil Tairi au PFL MENA : Un Choc International en Arabie Saoudite",
      excerpt: "Découvrez l'analyse complète du prochain combat de Souhil Tairi au PFL MENA, une étape historique pour sa carrière MMA et le Marseille Fight Club sur la scène mondiale.",
      category: "International",
      date: "21 Avril 2026",
      image: "/images/blog/pfl-mena.png"
    },
    {
      id: "eva-dourthe-ksw-116",
      title: "Eva Dourthe : Masterclass en Terre Polonaise au KSW 116",
      excerpt: "Retour sur la performance magistrale d'Eva Dourthe face à Ewelina Woźniak. Une victoire par soumission qui marque un tournant pour 'La Soldat'.",
      category: "Événement",
      date: "15 Mars 2026",
      image: "/images/blog/eva-dourthe-victory-real.jpg"
    }
  ];

  const heroArticle = articles[0];
  const gridArticles = articles.slice(1);
  const carouselArticles = [...articles].reverse();

  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-mfc-dark pt-32 pb-0 overflow-x-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase tracking-tighter leading-none mb-4">
          The <span className="text-mfc-red">Press</span>
        </h1>
        <p className="text-gray-500 text-lg font-inter uppercase tracking-widest border-l-2 border-mfc-red pl-6">
          Actualités & Analyses du Marseille Fight Club
        </p>
      </div>

      {/* Hero Article */}
      <section className="mb-24">
        <Link href={`/blog/${heroArticle.id}`} className="group block">
          <div className="relative w-full aspect-video md:aspect-21/9 max-h-[500px] overflow-hidden mb-8">
            <Image 
              src={heroArticle.image} 
              alt={heroArticle.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
          </div>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <span className="inline-block px-3 py-1 bg-mfc-red text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                  Featured Story
                </span>
                <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white uppercase leading-none group-hover:text-mfc-red transition-colors duration-300">
                  {heroArticle.title}
                </h2>
              </div>
              <div className="lg:col-span-4 lg:pt-8">
                <p className="text-gray-400 text-lg mb-6 leading-relaxed font-inter">
                  {heroArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white font-oswald uppercase tracking-widest text-sm group-hover:translate-x-3 transition-transform duration-300">
                  Read Article <ArrowRight size={20} className="text-mfc-red" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-40">
        <div className="flex items-center gap-8 mb-16 px-4">
          <div className="h-px grow bg-white/10"></div>
          <h2 className="text-2xl font-oswald font-bold text-white uppercase tracking-widest shrink-0">Derniers Articles</h2>
          <div className="h-px grow bg-white/10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {gridArticles.map((article) => (
            <Link 
              href={`/blog/${article.id}`} 
              key={article.id}
              className="group flex flex-col"
            >
              <div className="relative aspect-4/5 overflow-hidden mb-8">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-6 left-6">
                   <span className="px-3 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-widest">
                     {article.category}
                   </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-mfc-red text-xs font-bold font-oswald uppercase tracking-tighter">— {article.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-oswald font-bold text-white uppercase leading-tight group-hover:text-mfc-red transition-colors duration-300 line-clamp-3">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-mfc-gray py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-tight">À ne pas manquer</h2>
            <p className="text-gray-500 font-inter mt-2">Recommandations de la rédaction</p>
          </div>
          <div className="flex gap-4 mb-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-white/20 text-white hover:bg-mfc-red hover:border-mfc-red transition-all duration-300 rounded-full"
              aria-label="Précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-white/20 text-white hover:bg-mfc-red hover:border-mfc-red transition-all duration-300 rounded-full"
              aria-label="Suivant"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 lg:px-[calc((100vw-80rem)/2+1rem)] cursor-grab active:cursor-grabbing pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselArticles.map((article) => (
            <Link 
              href={`/blog/${article.id}`} 
              key={`${article.id}-carousel`}
              className="shrink-0 w-[85vw] md:w-[450px] snap-start group"
            >
              <div className="relative aspect-video overflow-hidden mb-6">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <h4 className="text-xl font-oswald font-bold text-white uppercase tracking-tight group-hover:text-mfc-red transition-colors line-clamp-1">
                {article.title}
              </h4>
              <p className="text-gray-500 text-sm font-oswald uppercase tracking-widest mt-2">
                Voir l'article —
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer minimal spacing */}
      <div className="h-20 bg-mfc-dark"></div>
    </main>
  );
}

