"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface EnfantsAnnouncementPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnfantsAnnouncementPopup({ isOpen, onClose }: EnfantsAnnouncementPopupProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Popup Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enfants-popup-title"
            className="relative w-full max-w-lg bg-mfc-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Background Image / Texture inside popup */}
            <div className="absolute inset-0 bg-[url('/images/hero-bg-nobricks.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-mfc-dark via-mfc-dark/80 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-mfc-red"
              aria-label="Fermer la fenêtre"
            >
              <X size={20} />
            </button>

            <div className="relative z-10 flex flex-col items-center text-center p-8 sm:p-10">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-oswald tracking-widest text-mfc-red bg-mfc-red/10 border border-mfc-red/20 rounded-full uppercase">
                🥊 Rentrée Enfants
              </span>
              
              <h2 id="enfants-popup-title" className="text-xl sm:text-2xl font-light text-gray-300 mb-3">
                La reprise des cours est le
              </h2>
              
              <div className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold uppercase tracking-tighter text-white drop-shadow-xl mb-6 leading-none">
                3 Septembre<br className="hidden sm:block my-2" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">2026</span>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-300 font-light mb-8">
                Les inscriptions se font uniquement <span className="font-bold text-white">sur place</span>.
              </p>
              
              <button
                onClick={onClose}
                className="w-full text-center px-6 py-4 bg-mfc-red text-white font-oswald text-xl uppercase tracking-widest rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-mfc-dark focus:ring-mfc-red"
              >
                Compris
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
