"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Clock, User } from "lucide-react";

interface Group {
  age: string;
  schedule: string[];
}

interface PlanOption {
  label: string;
  schedule: string[];
}

interface StrikingOption {
  name: string;
  price: string;
}

interface Plan {
  name: string;
  price?: string;
  subtitle?: string;
  tel: string;
  schedule?: string[];
  groups?: Group[];
  options?: PlanOption[];
  strikingOptions?: StrikingOption[];
}

interface Section {
  title: string;
  plans: Plan[];
}

const sections: Section[] = [
  {
    title: "Adultes",
    plans: [
      {
        name: "MMA LOISIR – 2 jours par semaine",
        price: "450 €",
        options: [
          {
            label: "Option 1",
            schedule: [
              "Lundi : 18h30 – 20h00",
              "Mercredi : 18h00 – 19h30"
            ]
          },
          {
            label: "Option 2",
            schedule: [
              "Mardi : 19h30 – 21h00",
              "Vendredi : 19h30 – 21h00"
            ]
          }
        ],
        tel: "06 43 40 76 45 / 06 31 01 62 80"
      },
      {
        name: "MMA LOISIR – 4 jours par semaine",
        price: "550 €",
        schedule: [
          "Lundi : 18h30 – 20h00",
          "Mardi : 19h30 – 21h00",
          "Mercredi : 18h00 – 19h30",
          "Vendredi : 19h30 – 21h00"
        ],
        tel: "06 43 40 76 45 / 06 31 01 62 80"
      },
      {
        name: "100% FILLES",
        price: "300 €",
        schedule: [
          "Mardi : 18h00 – 19h00",
          "Mercredi : 18h30 – 19h30",
          "Samedi : 10h30 – 12h00"
        ],
        tel: "06 67 71 68 57"
      },
      {
        name: "BOXE",
        price: "420 €",
        schedule: [
          "Lundi : 17h30 – 18h30",
          "Mardi : 16h30 - 17h30",
          "Mercredi : 19h30 – 21h00",
          "Vendredi : 18h – 19h30"
        ],
        tel: "07 83 67 54 75"
      },
      {
        name: "STRIKING",
        tel: "06 14 95 88 49",
        strikingOptions: [
          { name: "Striking MMA (2J/S)", price: "390 €" },
          { name: "Striking MMA (4J/S)", price: "490 €" },
          { name: "Lady Striking", price: "390 €" },
          { name: "Boxe Thaï", price: "290 €" },
          { name: "Pieds Poings", price: "290 €" },
          { name: "Striking Ados", price: "290 €" }
        ]
      },
      {
        name: "LUTA LIVRE",
        price: "300 €",
        schedule: [
          "Mardi : 19h00 – 20h00",
          "Mercredi : 12h30 – 13h30",
          "Samedi : 9h00 – 10h30"
        ],
        tel: "06 67 71 68 57"
      }
    ]
  },
  {
    title: "Ados",
    plans: [
      {
        name: "MMA ADOS",
        price: "330 €",
        groups: [
          {
            age: "12–17 ans",
            schedule: [
              "Mardi : 18h30 – 19h30",
              "Jeudi : 18h30 – 19h30"
            ]
          }
        ],
        tel: "06 43 40 76 45 / 06 31 01 62 80"
      },
      {
        name: "MMA ADOS COMPÉTITEURS",
        subtitle: "(sur sélection)",
        price: "350 €",
        schedule: [
          "Lundi : 19h30 – 20h30",
          "Mercredi : 17h00 – 18h00",
          "Vendredi : 20h00 – 21h00"
        ],
        tel: "06 43 40 76 45 / 06 31 01 62 80"
      },
      {
        name: "KICK ADOS",
        price: "290 €",
        tel: "06 14 95 88 49"
      }
    ]
  },
  {
    title: "Enfants",
    plans: [
      {
        name: "JUDO",
        price: "330 €",
        groups: [
          {
            age: "3–5 ans",
            schedule: ["Mercredi : 11h00 – 12h00"]
          },
          {
            age: "6–11 ans",
            schedule: [
              "Lundi : 17h30 – 18h30",
              "Mercredi : 10h00 – 11h00"
            ]
          }
        ],
        tel: "07 60 35 00 78"
      },
      {
        name: "MMA KIDS",
        price: "330 €",
        groups: [
          {
            age: "– 6 ans",
            schedule: ["Jeudi : 17h30 – 18h30"]
          },
          {
            age: "6–11 ans",
            schedule: [
              "Lundi : 18h30 – 19h30",
              "Jeudi : 18h30 – 19h30"
            ]
          }
        ],
        tel: "07 60 35 00 78"
      },
      {
        name: "BOXE KIDS",
        price: "300 €",
        groups: [
          {
            age: "5–8 ans",
            schedule: [
              "Mercredi : 14h00 – 15h00",
              "Samedi : 11h00 – 12h00"
            ]
          },
          {
            age: "9–12 ans",
            schedule: [
              "Mercredi : 15h00 – 16h00",
              "Samedi : 12h00 – 13h00"
            ]
          }
        ],
        tel: "07 83 67 54 75"
      }
    ]
  }
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Adultes");

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
            Nos <span className="text-mfc-red">Tarifs</span>
          </motion.h2>
          <p className="mt-4 text-xl text-gray-400 font-light">Des offres adaptées pour tous les âges et tous les niveaux.</p>
        </div>

        {/* Navigation des Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Adultes", "Ados", "Enfants"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-oswald uppercase tracking-wider text-sm transition-all duration-300 border-2 ${
                activeCategory === category
                  ? "bg-mfc-red border-mfc-red text-white shadow-[0_0_20px_rgba(255,18,18,0.3)]"
                  : "bg-transparent border-white/10 text-gray-400 hover:border-mfc-red/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections
              .filter((section) => section.title === activeCategory)
              .map((section, sidx) => (
                <div key={sidx} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.plans.map((plan: Plan, pidx: number) => (
                    <motion.div
                      key={pidx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: pidx * 0.1 }}
                      className="bg-mfc-gray p-8 rounded-xl border border-white/5 hover:border-mfc-red/50 transition-all duration-300 flex flex-col h-full shadow-2xl group"
                    >
                      <div className="mb-6">
                        <h4 className="text-2xl font-oswald uppercase font-bold text-white group-hover:text-mfc-red transition-colors duration-300">
                          {plan.name}
                        </h4>
                        {plan.subtitle && (
                          <p className="text-mfc-red text-sm font-oswald uppercase tracking-widest mt-1 italic">
                            {plan.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="grow space-y-6">
                        {/* Age Groups Context */}
                        {plan.groups && plan.groups.map((group, gidx) => (
                          <div key={gidx} className="space-y-2 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                            <div className="flex items-center text-white/90 font-bold font-oswald uppercase tracking-wide text-sm">
                              <User size={16} className="text-mfc-red mr-2" />
                              {group.age}
                            </div>
                            <ul className="space-y-1">
                              {group.schedule.map((time, tidx) => (
                                <li key={tidx} className="flex items-center text-gray-400 text-sm font-light">
                                  <Clock size={14} className="text-mfc-red/60 mr-2 shrink-0" />
                                  {time}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Standard Schedule Context */}
                        {plan.schedule && (
                          <div className="space-y-2">
                            <div className="flex items-center text-mfc-red text-[10px] font-oswald uppercase tracking-[0.2em] mb-2 opacity-80">
                              Horaires
                            </div>
                            <ul className="space-y-2">
                              {plan.schedule.map((time, tidx) => (
                                <li key={tidx} className="flex items-center text-gray-300 text-sm font-light">
                                  <Clock size={16} className="text-mfc-red mr-3 shrink-0" />
                                  {time}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Options (MMA 2J) */}
                        {plan.options && plan.options.map((opt, oidx) => (
                          <div key={oidx} className="space-y-2 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                            <div className="text-mfc-red text-xs font-bold uppercase tracking-widest mb-2">
                              {opt.label}
                            </div>
                            <ul className="space-y-1">
                              {opt.schedule.map((time, tidx) => (
                                <li key={tidx} className="flex items-center text-gray-300 text-sm font-light">
                                  <Clock size={14} className="text-mfc-red/60 mr-2 shrink-0" />
                                  {time}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                        {/* Striking Special Options */}
                        {plan.strikingOptions && (
                          <div className="space-y-3">
                            {plan.strikingOptions.map((opt, oidx) => (
                              <div key={oidx} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5 group-hover:border-mfc-red/20 transition-colors">
                                <span className="text-white text-sm font-light">{opt.name}</span>
                                <span className="text-mfc-red font-bold font-oswald whitespace-nowrap">{opt.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10">
                        {plan.price && (
                          <div className="flex items-baseline mb-4 justify-center">
                            <span className="text-4xl font-oswald font-bold text-white">{plan.price}</span>
                            <span className="text-gray-500 text-xs ml-2 uppercase tracking-widest">/ saison</span>
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-center text-gray-400 text-xs text-center flex-wrap gap-2">
                            <Phone size={14} className="text-mfc-red" />
                            <span className="font-light">{plan.tel}</span>
                          </div>
                          <a 
                            href={`tel:${plan.tel.split('/')[0].trim()}`} 
                            className="w-full block text-center py-3 bg-transparent border border-white/20 text-white text-xs font-oswald uppercase tracking-widest hover:bg-mfc-red hover:border-mfc-red transition-all duration-300 rounded-lg group-hover:border-mfc-red/50"
                          >
                            Appeler
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
