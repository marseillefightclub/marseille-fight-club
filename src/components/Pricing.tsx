"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "60€",
    period: "/mois",
    features: [
      "Accès aux cours 3x/semaine",
      "Vestiaires premium",
      "Accès espace musculation libre",
      "Réduction sur la boutique"
    ],
    recommended: false
  },
  {
    name: "Performance",
    price: "90€",
    period: "/mois",
    features: [
      "Accès illimité à tous les cours",
      "Suivi personnalisé mensuel",
      "Vestiaires premium",
      "Accès espace musculation libre",
      "2 séminaires gratuits/an"
    ],
    recommended: true
  },
  {
    name: "Compétiteur",
    price: "120€",
    period: "/mois",
    features: [
      "Programme spécifique compétition",
      "Sparring pro le weekend",
      "Suivi nutritionnel",
      "Accès illimité 24/7",
      "Équipement MFC offert"
    ],
    recommended: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-mfc-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wide text-white"
          >
            Nos <span className="text-mfc-red">Formules</span>
          </motion.h2>
          <p className="mt-4 text-xl text-gray-400 font-light">Des offres adaptées à vos ambitions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-8 rounded-xl border ${plan.recommended ? 'bg-mfc-red/5 border-mfc-red relative' : 'bg-mfc-gray border-white/5'} hover:border-mfc-red/50 transition-colors duration-300`}
             >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-mfc-red text-white text-xs font-oswald uppercase px-4 py-1 rounded-bl-xl rounded-tr-xl">
                  Recommandé
                </div>
              )}
              
              <h3 className="text-2xl font-oswald uppercase font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-oswald font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>
              
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 font-light">
                    <Check size={20} className="text-mfc-red mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 text-sm font-oswald uppercase tracking-widest transition-all duration-300 ${plan.recommended ? 'bg-mfc-red text-white hover:bg-red-700 shadow-lg shadow-red-900/30' : 'bg-transparent border border-white/20 text-white hover:bg-white hover:text-mfc-dark'}`}>
                Sélectionner
              </button>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
