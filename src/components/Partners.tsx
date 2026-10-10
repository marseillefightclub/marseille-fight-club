"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    {
      name: "VRUNK",
      logo: "/images/partners/LogoVrunk.jpg",
      url: "https://vrunkstore.com"
    },
    {
      name: "LE MÉTAL",
      logo: "/images/partners/logoLeMetal.jpg",
      url: "https://lemetal.fr"
    },
    {
      name: "METAL BOXE",
      logo: "/images/partners/LogoMétalBoxe.avif",
      url: "https://metal-boxe.com"
    },
    {
      name: "PRO16",
      logo: "/images/partners/LogoPro16.jpg",
      url: "https://www.instagram.com/pro16_sportperformance/?hl=fr"
    }
  ];

  return (
    <section className="py-24 bg-mfc-dark border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase tracking-wider mb-4">
            Nos <span className="text-mfc-red">Partenaires</span>
          </h2>
          <p className="text-gray-400 font-inter text-lg max-w-2xl mx-auto">
            Des partenaires engagés à nos côtés pour accompagner nos combattants et faire vivre notre passion.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={partner.url} target="_blank" rel="noopener noreferrer" className="block relative w-64 h-32 md:w-80 md:h-40 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="sr-only">{partner.name}</span>
                  {/* Using standard img to avoid Next.js Image strict configuration issues if files are missing, 
                      user should replace with next/image if they prefer */}
                  <img 
                    src={partner.logo} 
                    alt={`Logo officiel de ${partner.name}`} 
                    className={`max-w-full max-h-full object-contain drop-shadow-lg mix-blend-screen invert ${partner.name === 'PRO16' ? 'scale-150 md:scale-[1.75]' : ''}`}
                    loading="lazy"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
