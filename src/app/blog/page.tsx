import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const articles = [
    {
      id: "wilson-varela-vs-davy-gallon-hexagone-mma-44",
      title: "Wilson Varela En Route Vers Les 100 000 € À L'Hexagone MMA 44",
      excerpt: "Analyse complète de la demi-finale très attendue entre Wilson 'The Prototype' Varela du Marseille Fight Club et Davy Gallon lors de l'Hexagone MMA 44 à l'Arkéa Arena de Bordeaux.",
      category: "Événement",
      date: "21 Avril 2026",
      image: "/images/blog/hexagone-44.png"
    },
    {
      id: "souhil-tairi-pfl-mena",
      title: "Souhil Tairi au PFL MENA : Un Choc International en Arabie Saoudite",
      excerpt: "Découvrez l'analyse complète du prochain combat de Souhil Tairi au PFL MENA, une étape historique pour sa carrière MMA et le Marseille Fight Club sur la scène mondiale.",
      category: "International",
      date: "21 Avril 2026",
      image: "/images/blog/pfl-mena.png"
    }
  ];

  return (
    <main className="min-h-screen bg-mfc-dark pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-oswald font-bold text-white mb-4 uppercase tracking-wider text-center">
          Notre <span className="text-mfc-red">Blog</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto text-center mb-16">
          Retrouvez toutes les actualités du club, les annonces de combats de nos athlètes, et nos conseils d'entraînement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link 
              href={`/blog/${article.id}`} 
              key={article.id}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-mfc-red/50 transition-all duration-300 hover:shadow-2xl hover:shadow-mfc-red/10 flex flex-col h-full"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-mfc-red text-white text-xs font-bold uppercase tracking-widest rounded-sm">
                     {article.category}
                   </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm font-inter mb-3">{article.date}</p>
                <h2 className="text-2xl font-oswald font-bold text-white uppercase tracking-wide mb-3 group-hover:text-mfc-red transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-400 font-inter text-sm mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-auto inline-flex items-center text-white/50 font-oswald uppercase tracking-widest text-sm group-hover:text-mfc-red transition-colors duration-300">
                  Lire l'article <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
