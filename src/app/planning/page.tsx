"use client";

import Image from "next/image";
import { Download, Check } from "lucide-react";
import { useState } from "react";

export default function PlanningPage() {
  const [downloading, setDownloading] = useState(false);
  const [done, setDone] = useState(false);

  const handleMobileDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    setDone(false);

    try {
      const response = await fetch("/images/planning.jpg");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Planning_MFC.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setDone(true);
      setTimeout(() => setDone(false), 3000);
    } catch {
      alert("Erreur lors du téléchargement. Appuyez longuement sur l'image ci-dessous et sélectionnez \"Enregistrer l'image\".");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <main className="flex-grow bg-mfc-dark pt-32 pb-24 flex flex-col items-center min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        
        <div className="mb-12">
          {/* Mobile button */}
          <div className="md:hidden">
            <button 
              onClick={handleMobileDownload}
              disabled={downloading}
              className={`flex items-center justify-center gap-3 text-white py-4 px-6 rounded font-oswald uppercase tracking-widest text-sm w-full active:scale-95 transition-all duration-300 shadow-xl ${
                done 
                  ? "bg-green-600" 
                  : downloading 
                    ? "bg-mfc-red/70 cursor-wait" 
                    : "bg-mfc-red"
              }`}
            >
              {done ? (
                <>
                  <Check size={20} />
                  Image sauvegardée !
                </>
              ) : downloading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Téléchargement...
                </>
              ) : (
                <>
                  <Download size={20} />
                  Appuyez pour télécharger
                </>
              )}
            </button>
            <p className="text-gray-500 text-xs mt-3 font-inter">
              💡 Vous pouvez aussi appuyer longuement sur l&apos;image pour l&apos;enregistrer dans votre galerie
            </p>
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
          {/* Desktop: click to download */}
          <a 
            href="/images/planning.jpg" 
            download="Planning_MFC.jpg" 
            className="hidden md:block relative w-full cursor-pointer group"
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

          {/* Mobile: plain image (long press to save) */}
          <div className="md:hidden relative w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/planning.jpg" 
              alt="Planning Marseille Fight Club" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
