"use client";

import { motion } from "framer-motion";
import { Dumbbell, Shield, Zap } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Shield size={40} className="text-mfc-red" />,
      title: "Ancré à Marseille",
      description: "Un club à l'image de la ville : intense, chaleureux, authentique."
    },
    {
      icon: <Zap size={40} className="text-mfc-red" />,
      title: "MMA & combat",
      description: "Boxe, grappling, arts martiaux mixtes pour tous niveaux.."
    },
    {
      icon: <Dumbbell size={40} className="text-mfc-red" />,
      title: "Progression réelle",
      description: "Du premier cours débutant à la compétition, un suivi individualisé.."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-mfc-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wide text-white"
          >
            Sports de combat <span className="text-mfc-red">& MMA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-gray-400 font-light"
          >
            Au cœur de la cité phocéenne, le Marseille Fight Club est une salle de référence dédiée aux sports de combat et au MMA. Fondé par Jean-Michel Foissard, véritable passionné des arts martiaux, le club allie exigence sportive et bienveillance humaine. Chaque élève — débutant ou compétiteur — y trouve un cadre sérieux, des coachs expérimentés et une progression concrète. L'ambiance est familiale, mais le travail reste au cœur de tout : discipline, respect et dépassement de soi guident chaque séance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-mfc-gray/50 p-8 rounded-xl border border-white/5 hover:border-mfc-red/30 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="bg-black/50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-oswald uppercase font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-mfc-red/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
