"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isManuallyPausedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSaveData, setIsSaveData] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // 1. Detection of accessibility preferences and Save-Data on mount
  useEffect(() => {
    setIsMounted(true);

    // prefers-reduced-motion check & dynamic listener
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const motionHandler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", motionHandler);

    // navigator.connection?.saveData check
    const nav =
      typeof navigator !== "undefined"
        ? (navigator as Navigator & { connection?: { saveData?: boolean } })
        : undefined;
    if (nav?.connection?.saveData) {
      setIsSaveData(true);
    }

    return () => {
      mediaQuery.removeEventListener("change", motionHandler);
    };
  }, []);

  // 2. IntersectionObserver to pause when leaving viewport and resume when re-entering
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !isMounted || isReducedMotion || isSaveData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          // Re-entering viewport: resume playback only if user didn't manually pause
          if (!isManuallyPausedRef.current && video.paused) {
            video.play().catch(() => {
              // Gracefully ignore autoplay restrictions if blocked
            });
          }
        } else {
          // Leaving viewport: pause video to save CPU/GPU and battery
          if (!video.paused) {
            video.pause();
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [isMounted, isReducedMotion, isSaveData]);

  // 3. User toggle with explicit manual control priority
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      isManuallyPausedRef.current = false;
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      isManuallyPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  };

  const showVideo = isMounted && !isReducedMotion && !isSaveData;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-mfc-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-mfc-dark/90 z-10 pointer-events-none" />

        {!showVideo ? (
          <img
            src="/images/hero/hero-poster.webp"
            alt="Salle Marseille Fight Club"
            className="absolute inset-0 w-full h-full object-cover opacity-65"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/hero/hero-poster.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-65"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src="/images/hero/hero-bg.webm" type="video/webm" />
            <source src="/images/hero/hero-bg.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* Accessible play/pause toggle */}
      {showVideo && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? "Mettre en pause la vidéo d'arrière-plan"
              : "Lire la vidéo d'arrière-plan"
          }
          className="absolute bottom-5 right-5 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-mfc-red"
        >
          {isPlaying ? (
            <Pause size={18} aria-hidden="true" />
          ) : (
            <Play size={18} aria-hidden="true" />
          )}
        </button>
      )}

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto pt-20 md:pt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl sm:text-7xl lg:text-9xl font-oswald font-bold uppercase tracking-tighter text-white drop-shadow-2xl leading-[1.1]"
        >
          Marseille <br className="sm:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Fight Club</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-3 text-xl md:text-2xl text-gray-200 font-light max-w-2xl tracking-wide drop-shadow-md"
        >
          Discipline. Performance. Respect. Le centre de MMA N°1 de la cité phocéenne.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a href="tarifs" className="w-full sm:w-auto text-center px-6 py-5 sm:px-8 sm:py-4 bg-mfc-red text-white font-oswald text-xl uppercase tracking-widest rounded-xl hover:bg-red-700 transition-colors duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/50">
            Rejoignez Nous
          </a>
          <a href="/boutique" className="w-full sm:w-auto text-center px-6 py-5 sm:px-8 sm:py-4 bg-transparent border border-white/30 text-white font-oswald text-xl uppercase tracking-widest rounded-xl hover:bg-white/10 transition-colors duration-300">
            Boutique Officielle
          </a>
        </motion.div>

        {/* Instagram Link section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 flex justify-center w-full"
        >
          <a 
            href="https://www.instagram.com/marseillefightclub/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-yellow-500 group-hover:via-red-500 group-hover:to-fuchsia-600 group-hover:border-transparent transition-all duration-500 transform group-hover:scale-110 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:text-white text-white/60 w-7 h-7"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <span className="font-oswald tracking-widest uppercase text-xs">Suivez-nous</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
