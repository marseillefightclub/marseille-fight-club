"use client";

import { motion } from "framer-motion";
import { Dumbbell, Shield, Zap, MapPin } from "lucide-react";

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
           Au cœur de la cité phocéenne, le Marseille Fight Club est une salle de référence dédiée aux sports de combat et au MMA. Fondé par Jean-Michel Foissard, véritable passionné d'arts martiaux, le club allie exigence sportive et bienveillance humaine.
Le club propose un programme complet avec le MMA, la boxe anglaise, le kickboxing et le grappling — incluant la luta livre et des passages de grade. Chaque élève — débutant ou compétiteur — y trouve un cadre sérieux, des coachs expérimentés et une progression concrète. L'ambiance est familiale, mais le travail reste au cœur de tout : discipline, respect et dépassement de soi guident chaque séance.
Précurseur dans le monde du MMA, le Marseille Fight Club est fier d'accueillir la plus grande section 100% filles de MMA en France. Un espace pensé pour et par les femmes, où ambition et combativité n'ont aucune limite.
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

        {/* Localisation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 sm:mt-24 w-full max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-oswald font-bold uppercase tracking-wide text-white">
              Nous <span className="text-mfc-red">Trouver</span>
            </h3>
            <div className="mt-4 flex items-center justify-center gap-3 text-gray-400 font-light">
              <div className="bg-mfc-red/10 p-2 rounded-full border border-mfc-red/20">
                <MapPin size={20} className="text-mfc-red" />
              </div>
              <p className="text-lg">La Minoterie, 268 Avenue de la Capelette, 13010 Marseille</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-8 w-full">
            {/* Google Maps Location */}
            <div className="w-full h-[400px] md:h-[450px] bg-mfc-gray/50 rounded-2xl border border-white/10 overflow-hidden relative group shadow-2xl">
              <iframe 
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Marseille%20Fight%20Club,%20268%20Avenue%20de%20la%20Capelette,%2013010%20Marseille,%20France&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              ></iframe>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-mfc-red rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-mfc-red rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none"></div>
            </div>

            {/* Google Street View */}
            <div className="w-full h-[400px] md:h-[450px] bg-mfc-gray/50 rounded-2xl border border-white/10 overflow-hidden relative group shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1778780240466!6m8!1m7!1sRF116UsZIv9Gn8hds2HqCg!2m2!1d43.27917226191679!2d5.413251237275746!3f165.0660490758729!4f11.14092756801189!5f0.7820865974627469" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
              ></iframe>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-mfc-red rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-mfc-red rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none"></div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-mfc-red/5 blur-[120px] rounded-full pointer-events-none z-0" />
    </section>
  );
}
