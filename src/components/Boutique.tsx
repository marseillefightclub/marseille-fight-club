"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  sizes: string[];
  images: string[];
  description: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ensemble Metal Boxe - Noir & Kaki",
    category: "Équipement Complet",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/shop/img4.jpg", "/images/shop/img1.jpg"],
    description: "Ensemble complet Metal Boxe comprenant un T-Shirt premium noir et le Brickbond Fight Short (Polyester - Élasthanne) kaki avec détails orange. Tissu technique respirant et coupe ajustée pour une liberté de mouvement maximale au sol comme debout.",
    badge: "Nouveau"
  },
  {
    id: 2,
    name: "Ensemble Metal Boxe - Beige Desert Storm",
    category: "Équipement Complet",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/shop/img3.jpg", "/images/shop/img2.jpg"],
    description: "Ensemble complet Metal Boxe de la gamme Desert Storm, au style épuré et moderne. Comprend un T-Shirt (Coton - Élasthanne) et un short ultra-résistant pour affronter vos entraînements les plus intenses tout en gardant une esthétique premium.",
    badge: "Nouveau"
  }
];

export default function Boutique() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0); // Reset image index when opening
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-mfc-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="text-[150px] md:text-[250px] lg:text-[300px] font-oswald font-black text-white whitespace-nowrap select-none">
            MFC SHOP
          </span>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-wide text-white mb-6"
          >
            La <span className="text-mfc-red">Boutique</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Nos équipements sont disponibles à l'achat directement à l'accueil.
          </motion.p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24 bg-mfc-gray relative min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/5] bg-mfc-dark rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-mfc-red/30 transition-colors duration-500">
                  {/* Fallback pattern if image is missing */}
                  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                  
                  <Image 
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-mfc-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-mfc-red text-white text-xs font-oswald uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg">
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Quick Action */}
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-white text-mfc-dark font-oswald uppercase tracking-widest text-sm py-3 px-8 rounded shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
                      Voir les détails
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center md:text-left space-y-2">
                  <p className="text-gray-400 font-oswald uppercase tracking-widest text-xs">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-oswald font-bold text-white group-hover:text-mfc-red transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-center md:justify-start pt-1">
                    <span className="text-gray-400 text-sm font-light uppercase tracking-wider">
                      Tailles : {product.sizes[0]} - {product.sizes[product.sizes.length - 1]}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedProduct(null)}
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-mfc-gray border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-mfc-red text-white rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <X size={20} />
              </button>

              {/* Left: Image Carousel */}
              <div className="w-full md:w-1/2 bg-mfc-dark relative aspect-square md:aspect-auto group/carousel">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={selectedProduct.images[currentImageIndex]}
                      alt={`${selectedProduct.name} - Vue ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {selectedProduct.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-mfc-red text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-mfc-red text-white rounded-full flex items-center justify-center opacity-100 md:opacity-0 group-hover/carousel:opacity-100 transition-all duration-300"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProduct.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-mfc-red w-6' : 'bg-white/30 hover:bg-white/60'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
                <p className="text-mfc-red font-oswald uppercase tracking-widest text-sm mb-3">
                  {selectedProduct.category}
                </p>
                <h2 className="text-3xl md:text-5xl font-oswald font-bold text-white mb-8">
                  {selectedProduct.name}
                </h2>

                <div className="prose prose-invert prose-sm max-w-none mb-10 text-gray-400 font-light leading-relaxed">
                  <p>{selectedProduct.description}</p>
                </div>

                <div className="mb-10">
                  <h4 className="text-white font-oswald uppercase tracking-widest text-sm mb-4">Tailles disponibles</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProduct.sizes.map(size => (
                      <span 
                        key={size} 
                        className="w-12 h-12 flex items-center justify-center border border-white/20 text-gray-300 rounded cursor-default"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA block */}
                <div className="mt-auto pt-4">
                  <div className="w-full py-4 px-6 bg-mfc-red text-white text-center font-oswald uppercase tracking-widest text-lg font-bold rounded cursor-default select-none shadow-[0_0_20px_rgba(218,41,28,0.2)]">
                    Acheter au club
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
