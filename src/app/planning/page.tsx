import Image from "next/image";
import { Download } from "lucide-react";

export const metadata = {
  title: "Planning | Marseille Fight Club",
  description: "Découvrez notre planning complet des cours au Marseille Fight Club : MMA, Boxe, Grappling, Lutte.",
};

export default function PlanningPage() {
  return (
    <main className="flex-grow bg-mfc-dark pt-32 pb-24 flex flex-col items-center min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <div className="mb-12">
          {/* Mobile button & instruction */}
          <div className="md:hidden">
            <p className="text-gray-400 text-sm mb-3">Astuce : Appuyez sur le bouton, puis maintenez votre doigt sur l'image pour « Ajouter aux photos ».</p>
            <a 
              href="/images/planning.jpg" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-mfc-red text-white py-4 px-6 rounded font-oswald uppercase tracking-widest text-sm w-full active:scale-95 transition-transform shadow-xl"
            >
               <Download size={20} />
               Ouvrir le planning complet
            </a>
          </div>

          {/* Desktop button */}
          <div className="hidden md:block">
             <a 
               href="/images/planning.jpg" 
               download="Planning_MFC.jpg" 
               className="inline-flex items-center justify-center gap-3 bg-mfc-red text-white py-4 px-8 rounded hover:bg-white hover:text-mfc-dark font-oswald uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-red-900/50 hover:scale-105"
             >
                <Download size={20} />
                Télécharger le Planning
             </a>
          </div>
        </div>

        {/* Planning Image Viewer */}
        <div className="relative w-full max-w-5xl mx-auto border-4 border-mfc-gray/50 rounded-2xl overflow-hidden shadow-2xl bg-black">
          <a 
            href="/images/planning.jpg" 
            download="Planning_MFC.jpg" 
            className="block relative w-full cursor-pointer group"
          >

             <Image 
                src="/images/planning.jpg" 
                alt="Planning Marseille Fight Club" 
                width={1200}
                height={800}
                className="w-full h-auto object-contain transition-transform duration-700 md:group-hover:scale-[1.02]"
                priority
             />
          </a>
        </div>
      </div>
    </main>
  );
}
