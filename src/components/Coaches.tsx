"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const coaches = [
  {
    name: "Julien 'The Gorilla' M.",
    role: "Head Coach MMA & Grappling",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1000&auto=format&fit=crop",
    bio: "Ex-combattant pro, ceinture noire de JJB. Un technicien hors pair.",
  },
  {
    name: "Sarah 'Lightning' D.",
    role: "Coach Striking & Muay Thaï",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1000&auto=format&fit=crop",
    bio: "Championne d'Europe de Kickboxing. Spécialiste du pied-poing.",
  },
  {
    name: "Marcus T.",
    role: "Préparateur Physique",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop",
    bio: "Expert en explosivité et cardio. Prépare les athlètes de haut niveau.",
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
            L'Élite de <span className="text-mfc-red">l'Encadrement</span>
          </motion.h2>
          <p className="mt-4 text-xl text-gray-400 font-light">Des experts pour vous guider vers le sommet.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-mfc-dark h-[400px] md:h-[500px] shadow-2xl"
            >
              <Image 
                src={coach.image} 
                alt={coach.name} 
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
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
