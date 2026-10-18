"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryItem[] = [
  {
    src: "/images/gallery/IMG_8831.jpeg",
    alt: "Séance d'entraînement et sparring aux sports de combat sur le tatami du Marseille Fight Club",
    caption: "Entraînement et sparring sur le tatami",
  },
  {
    src: "/images/gallery/IMG_8821.jpeg",
    alt: "Espace tatami et panneaux de travail contre la cage au Marseille Fight Club",
    caption: "Travail contre la cage",
  },
  {
    src: "/images/gallery/IMG_8823.jpeg",
    alt: "Espace de préparation physique avec haltères, barre hexagonale et équipement de conditionnement",
    caption: "Espace préparation physique et renforcement",
  },
  {
    src: "/images/gallery/IMG_8794.jpeg",
    alt: "Cours d'initiation et entraînement jeunesse devant la cage du club",
    caption: "Cours d'initiation et relève du club",
  },
  {
    src: "/images/gallery/IMG_8791.jpeg",
    alt: "Vue d'ensemble de la salle d'entraînement, dojo, sacs de frappe et cage",
    caption: "Vue d'ensemble des installations du club",
  },
  {
    src: "/images/gallery/IMG_8832.jpeg",
    alt: "Cours ado sur le tatami du Marseille Fight Club",
    caption: "Cours ado",
  },
];

export default function ClubGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  // Helper for smooth vs instant scrolling according to user preferences
  const getScrollBehavior = (): ScrollBehavior => {
    if (typeof window === "undefined") return "smooth";
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
  };

  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const slides = container.querySelectorAll<HTMLElement>("[data-gallery-slide]");
    const targetSlide = slides[index];
    if (!targetSlide) return;

    const behavior = getScrollBehavior();
    const targetLeft = targetSlide.offsetLeft - container.offsetLeft;

    container.scrollTo({
      left: targetLeft,
      behavior,
    });
    setCurrentIndex(index);
  }, []);

  // Update currentIndex on user scroll / swipe
  const handleScroll = useCallback(() => {
    if (isScrollingRef.current) return;
    isScrollingRef.current = true;

    requestAnimationFrame(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const slides = container.querySelectorAll<HTMLElement>("[data-gallery-slide]");
        if (slides.length > 0) {
          const containerLeft = container.getBoundingClientRect().left;

          // Check if scrolled to the very end
          const isAtEnd =
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth - 20;

          if (isAtEnd) {
            setCurrentIndex(slides.length - 1);
          } else {
            let closestIndex = 0;
            let minDistance = Infinity;

            slides.forEach((slide, idx) => {
              const distance = Math.abs(
                slide.getBoundingClientRect().left - containerLeft
              );
              if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
              }
            });

            setCurrentIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
          }
        }
      }
      isScrollingRef.current = false;
    });
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (currentIndex > 0) {
        scrollToIndex(currentIndex - 1);
      }
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      if (currentIndex < galleryImages.length - 1) {
        scrollToIndex(currentIndex + 1);
      }
    }
  };

  // Re-sync on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const slides = container.querySelectorAll<HTMLElement>("[data-gallery-slide]");
      const targetSlide = slides[currentIndex];
      if (targetSlide) {
        container.scrollTo({
          left: targetSlide.offsetLeft - container.offsetLeft,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="w-full my-12 md:my-16"
      aria-label="Galerie photographique Marseille Fight Club"
    >
      {/* En-tête éditorial */}
      <div className="mb-6 md:mb-8 text-center sm:text-left">
        <span className="text-xs uppercase tracking-widest text-mfc-red font-semibold font-mono">
          Marseille Fight Club
        </span>
        <h3 className="text-3xl md:text-4xl font-oswald font-bold uppercase tracking-wide text-white mt-1">
          La vie <span className="text-mfc-red">du club</span>
        </h3>
        <p className="mt-2 text-sm md:text-base text-gray-400 font-light max-w-xl">
          Des premiers entraînements aux combats, découvrez celles et ceux qui font vivre le club au quotidien.
        </p>
      </div>

      {/* Carrousel photographique */}
      <div className="relative">
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-label="Galerie photographique des entraînements et installations"
          aria-roledescription="carrousel"
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth outline-none focus-visible:ring-2 focus-visible:ring-mfc-red/60 focus-visible:ring-offset-4 focus-visible:ring-offset-mfc-dark rounded-2xl py-1 px-0.5"
        >
          {galleryImages.map((item, index) => {
            const isActive = currentIndex === index;
            return (
              <div
                key={item.src}
                data-gallery-slide
                role="group"
                aria-roledescription="diapositive"
                aria-label={`Photo ${index + 1} sur ${galleryImages.length}: ${item.caption}`}
                onClick={() => {
                  if (!isActive) scrollToIndex(index);
                }}
                className={`relative flex-shrink-0 snap-start transition-opacity duration-300 ${
                  isActive
                    ? "w-[88%] sm:w-[84%] md:w-[80%] opacity-100 cursor-default"
                    : "w-[88%] sm:w-[84%] md:w-[80%] opacity-55 hover:opacity-80 cursor-pointer"
                }`}
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-mfc-gray border border-white/10 shadow-xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 84vw, 1100px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover"
                  />
                </div>
              </div>
            );
          })}

          {/* Espaceur final pour permettre le cadrage complet de la dernière diapositive */}
          <div
            className="w-[12%] sm:w-[16%] md:w-[20%] flex-shrink-0 pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Navigation et informations */}
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 px-1">
        {/* Légende contextuelle */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <span className="font-mono text-xs text-mfc-red font-semibold bg-mfc-red/10 px-2 py-0.5 rounded border border-mfc-red/20 shrink-0">
            0{currentIndex + 1}
          </span>
          <p className="text-sm md:text-base text-gray-300 font-medium">
            {galleryImages[currentIndex].caption}
          </p>
        </div>

        {/* Contrôles de navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Indicateurs de position discrets */}
          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Navigation des diapositives"
          >
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Afficher la photo ${idx + 1}`}
                aria-selected={currentIndex === idx}
                role="tab"
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mfc-red ${
                  currentIndex === idx
                    ? "w-6 bg-mfc-red"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Compteur */}
          <span className="font-mono text-xs sm:text-sm tracking-wider text-gray-400 select-none">
            <span className="text-white font-semibold">0{currentIndex + 1}</span>
            <span className="text-gray-600 mx-1">/</span>
            <span>0{galleryImages.length}</span>
          </span>

          {/* Boutons Précédent / Suivant */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              aria-label="Image précédente"
              className="w-10 h-10 rounded-full border border-white/10 bg-mfc-gray/80 hover:bg-mfc-gray hover:border-white/30 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mfc-red disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex === galleryImages.length - 1}
              aria-label="Image suivante"
              className="w-10 h-10 rounded-full border border-white/10 bg-mfc-gray/80 hover:bg-mfc-gray hover:border-white/30 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mfc-red disabled:opacity-25 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
