"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { openInstagramStory } from "@/utils/instagram";

const coaches = [
  {
    name: "Jean Michel Foissard 'Papy'",
    role: "Head Coach MMA",
    image: "/images/coaches/papy.png",
    bio: "Fondateur du Marseille fight Club.",
    username: "foissardjm",
  },
  {
    name: "Hassou",
    role: "Coach Boxe Anglaise",
    image: "/images/coaches/hassou.png",
    bio: "Ex-combattant, transmet rigueur et technique.",
    username: "hassou_captaincrochet",
  },
  {
    name: "Souhil Taïri",
    role: "Coach Grappling",
    image: "/images/coaches/souhil.png",
    bio: "Combattant pro MMA PFL MENA, ceinture Marron Luta Livre.",
    username: "souhil.t",
  }
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-16 md:py-24 bg-mfc-gray relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wide text-white"
          >
            Une équipe <span className="text-mfc-red">d'Encadrement</span>
          </motion.h2>
          <p className="mt-4 text-xl text-gray-400 font-light">En groupe ou coaching individuel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-mfc-dark h-[400px] md:h-[500px] shadow-2xl cursor-pointer"
            >
              <div 
                onClick={() => openInstagramStory(coach.username)}
                className="absolute inset-0 z-20"
              />
              <Image 
                src={coach.image} 
                alt={coach.name} 
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              {/* Instagram Icon */}
              <div className="absolute top-6 right-6 z-10 text-white/50">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-mfc-red font-oswald uppercase tracking-widest text-sm mb-2">{coach.role}</p>
                <h3 className="text-3xl font-oswald font-bold text-white mb-3">{coach.name}</h3>
                <p className="text-gray-300 font-light opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:delay-100">
                  {coach.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
