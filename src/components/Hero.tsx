"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-mfc-dark z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg-nobricks.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl lg:text-9xl font-oswald font-bold uppercase tracking-tighter text-white drop-shadow-2xl leading-[1.1]"
        >
          Marseille <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Fight Club</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-light max-w-2xl tracking-wide"
        >
          Discipline. Performance. Respect. Le centre de MMA N°1 de la cité phocéenne.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a href="tarifs" className="w-full sm:w-auto text-center px-6 py-5 sm:px-8 sm:py-4 bg-mfc-red text-white font-oswald text-xl uppercase tracking-widest hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/50">
            Rejoignez Nous
          </a>
          <a href="club" className="w-full sm:w-auto text-center px-6 py-5 sm:px-8 sm:py-4 bg-transparent border border-white/30 text-white font-oswald text-xl uppercase tracking-widest hover:bg-white/10 transition-colors duration-300">
            Découvrir le club
          </a>
        </motion.div>

        {/* Instagram Link section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex justify-center w-full"
        >
          <a 
            href="https://www.instagram.com/marseillefightclub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-fuchsia-600 group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:text-white text-white/60 w-7 h-7"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <span className="font-oswald tracking-widest uppercase text-xs">Suivez-nous</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
