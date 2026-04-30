"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlanningOpen, setIsPlanningOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Le Club", href: "/club" },
    { name: "Coachs", href: "/coachs" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Press", href: "/blog" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-mfc-dark/95 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/LogoGorill.jpg" 
                alt="Marseille Fight Club Logo Gorilla" 
                fill
                className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                sizes="(max-width: 768px) 56px, 64px"
                priority
              />
            </div>
            <span className="font-oswald font-bold text-2xl tracking-widest text-white uppercase sm:block hidden">
              Marseille <span className="text-mfc-red">Fight Club</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-white/80 uppercase font-oswald tracking-widest text-sm hover:text-mfc-red transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => setIsPlanningOpen(true)}
              className="px-6 py-2 bg-mfc-red text-white uppercase font-oswald tracking-widest text-sm hover:bg-white hover:text-mfc-dark transition-colors duration-300 shadow-lg shadow-red-900/20"
            >
              Planning
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 -mr-2">
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-0 top-[72px] bg-mfc-dark/95 backdrop-blur-xl border-t border-white/10 px-4 py-8 h-[calc(100vh-72px)] overflow-y-auto"
        >
          <div className="flex flex-col gap-8 items-center justify-center h-full pb-20">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white uppercase font-oswald tracking-widest text-3xl hover:text-mfc-red transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsPlanningOpen(true);
              }}
              className="mt-8 w-full block text-center px-6 py-5 bg-mfc-red text-white uppercase font-oswald tracking-widest text-xl hover:bg-white hover:text-mfc-dark transition-colors duration-300"
            >
              Planning
            </button>
          </div>
        </motion.div>
      )}
      {/* Planning Modal */}
      <AnimatePresence>
        {isPlanningOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsPlanningOpen(false)}
          >
            <div 
              className="relative w-full max-w-6xl max-h-[90vh] h-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsPlanningOpen(false)}
                className="absolute -top-12 right-0 md:-right-10 text-white/70 hover:text-white transition-colors p-2 z-50 flex items-center justify-center"
              >
                <X size={40} />
              </button>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src="/images/planning.jpg" 
                  alt="Planning Marseille Fight Club" 
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
