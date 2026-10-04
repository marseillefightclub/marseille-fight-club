import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Nos Partenaires | Marseille Fight Club",
  description: "Découvrez les partenaires du Marseille Fight Club et les marques qui accompagnent le développement de nos combattants.",
};

export default function NosPartenairesPage() {
  const partners = [
    {
      id: "vrunk",
      name: "VRUNK",
      logo: "/images/partners/LogoVrunk.jpg",
      url: "https://vrunkstore.com",
      description: "Marque de prêt-à-porter streetwear née à Marseille. Fortement implantée dans la culture urbaine, VRUNK propose des collections de vêtements combinant confort et style urbain."
    },
    {
      id: "le-metal",
      name: "LE MÉTAL",
      logo: "/images/partners/logoLeMetal.jpg",
      url: "https://lemetal.fr",
      description: "Entreprise métallurgique marseillaise spécialisée dans la fourniture de métaux. Véritable pilier de l'artisanat local, LE MÉTAL apporte un soutien de poids au développement des athlètes du club."
    },
    {
      id: "metal-boxe",
      name: "METAL BOXE",
      logo: "/images/partners/LogoMétalBoxe.avif",
      url: "https://metal-boxe.com",
      description: "Marque française de référence fondée en 1999, spécialisée dans les équipements pour les sports de combat. Metal Boxe équipe aussi bien les débutants que les athlètes professionnels avec des gants, des protections et des tenues d'entraînement de qualité."
    }
  ];

  return (
    <main className="min-h-screen bg-mfc-dark pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-mfc-red hover:text-white transition-colors duration-300 font-oswald tracking-widest uppercase text-sm">
            <ArrowLeft className="mr-2" size={18} />
            Retour à l'accueil
          </Link>
        </div>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase tracking-tight leading-tight mb-6">
            Nos <span className="text-mfc-red">Partenaires</span>
          </h1>
          <p className="text-xl text-gray-300 font-inter leading-relaxed max-w-3xl border-l-4 border-mfc-red pl-6">
            Le Marseille Fight Club s'entoure de partenaires qui partagent notre passion du sport, notre exigence et notre engagement auprès des combattants. Leur soutien contribue au développement du club et à l'accompagnement de nos athlètes.
          </p>
        </header>

        {/* Partners List */}
        <div className="space-y-12">
          {partners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-full md:w-1/3 flex justify-center items-center h-40">
                {/* Using img for simpler fallback if Next Image fails with unoptimized local assets, 
                    user can update the path easily */}
                <img 
                  src={partner.logo} 
                  alt={`Logo officiel de la marque ${partner.name}`}
                  className="max-w-full max-h-full object-contain invert mix-blend-screen"
                  loading="lazy"
                />
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-wider mb-4">
                  {partner.name}
                </h2>
                <p className="text-gray-400 font-inter leading-relaxed mb-8">
                  {partner.description}
                </p>
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-mfc-red text-white font-oswald font-bold uppercase tracking-widest rounded hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Découvrir la boutique
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-[10px] font-inter uppercase tracking-widest">
            © {new Date().getFullYear()} Marseille Fight Club - Partenaires Officiels
          </p>
        </footer>
      </div>
    </main>
  );
}
