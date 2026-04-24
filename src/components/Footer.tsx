"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-oswald font-bold text-white uppercase tracking-widest mb-4">
              Marseille <span className="text-mfc-red">Fight Club</span>
            </h3>
            <p className="text-gray-400 font-light max-w-sm">
              Rejoignez notre communauté de combattants. Marseille dans l'âme, bienveillance dans le vestiaire, fierté sur la cage..
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-bold text-white uppercase mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="club" className="text-gray-400 hover:text-mfc-red transition-colors">Le Club</a></li>
              <li><a href="coachs" className="text-gray-400 hover:text-mfc-red transition-colors">Nos Coachs</a></li>
              <li><a href="tarifs" className="text-gray-400 hover:text-mfc-red transition-colors">Tarifs & Inscription</a></li>
              <li><a href="blog" className="text-gray-400 hover:text-mfc-red transition-colors">Blog & Actualités</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-oswald font-bold text-white uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>268 Avenue de la Capelette</li>
              <li>13010 Marseille, France</li>
              <li><a href="mailto:contact@marseillefightclub.com" className="hover:text-mfc-red transition-colors">contact@marseillefightclub.com</a></li>
              <li>+33 6 43 40 76 45</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Marseille Fight Club. Tous droits réservés.
            </p>
            <span className="hidden md:inline text-gray-700">|</span>
            <p className="text-gray-500 text-sm">
              Développé par <a href="https://mickaelcode.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:underline">Mickael</a>
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/marseillefightclub/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-mfc-red hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FF0000] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg cursor-pointer">
              <span className="sr-only">YouTube</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background logo text */}
      <div className="absolute bottom-[-100px] left-0 w-full overflow-hidden flex justify-center pointer-events-none opacity-5 select-none">
        <span className="text-[250px] font-oswald font-black leading-none whitespace-nowrap">
          MFC MARSEILLE
        </span>
      </div>
    </footer>
  );
}
