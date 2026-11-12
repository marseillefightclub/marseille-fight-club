"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function ClubVideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);
  const isIntersectingRef = useRef(false);

  // Helper to send postMessage commands directly to the YouTube iframe
  const sendCommand = (func: string, args: any = "") => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*"
      );
    }
  };

  useEffect(() => {
    // 1. Intersection Observer to detect scroll in/out
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIntersectingRef.current = true;
            // Autoplay muted when scrolled into view
            if (playerRef.current && typeof playerRef.current.playVideo === "function") {
              try {
                playerRef.current.mute();
                playerRef.current.playVideo();
              } catch {
                sendCommand("mute");
                sendCommand("playVideo");
              }
            } else {
              sendCommand("mute");
              sendCommand("playVideo");
            }
          } else {
            isIntersectingRef.current = false;
            // Pause when scrolled out of view
            if (playerRef.current && typeof playerRef.current.pauseVideo === "function") {
              try {
                playerRef.current.pauseVideo();
              } catch {
                sendCommand("pauseVideo");
              }
            } else {
              sendCommand("pauseVideo");
            }
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    // 2. Initialize YouTube IFrame API for maximum reliability
    const initYT = () => {
      if (typeof window !== "undefined" && window.YT && window.YT.Player && iframeRef.current) {
        try {
          playerRef.current = new window.YT.Player("mfc-youtube-player", {
            events: {
              onReady: (event: any) => {
                event.target.mute();
                setIsMuted(true);
                if (isIntersectingRef.current) {
                  event.target.playVideo();
                }
              },
            },
          });
        } catch {
          // Fallback to postMessage
        }
      }
    };

    if (typeof window !== "undefined") {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

        const existingCallback = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
          if (existingCallback) existingCallback();
          initYT();
        };
      } else {
        initYT();
      }
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
      observer.disconnect();
    };
  }, []);

  const toggleSound = () => {
    if (playerRef.current && typeof playerRef.current.isMuted === "function") {
      try {
        if (playerRef.current.isMuted()) {
          playerRef.current.unMute();
          playerRef.current.setVolume(100);
          setIsMuted(false);
        } else {
          playerRef.current.mute();
          setIsMuted(true);
        }
        return;
      } catch {
        // Fallback below
      }
    }

    if (isMuted) {
      sendCommand("unMute");
      sendCommand("setVolume", [100]);
      setIsMuted(false);
    } else {
      sendCommand("mute");
      setIsMuted(true);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mt-16 sm:mt-20 w-full max-w-5xl mx-auto"
    >
      <div className="w-full aspect-video bg-mfc-gray/50 rounded-2xl border border-white/10 overflow-hidden relative group shadow-2xl">
        <iframe
          ref={iframeRef}
          id="mfc-youtube-player"
          src="https://www.youtube-nocookie.com/embed/zg1S4jG0bsI?enablejsapi=1&mute=1&playsinline=1&rel=0&controls=1"
          title="Marseille Fight Club - Vidéo de présentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        />

        {/* Bouton interactif pour basculer le son */}
        <button
          onClick={toggleSound}
          type="button"
          aria-label={isMuted ? "Activer le son de la vidéo" : "Couper le son de la vidéo"}
          className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/80 hover:bg-mfc-red text-white text-xs font-oswald uppercase tracking-wider transition-all duration-300 backdrop-blur-md border border-white/15 shadow-xl hover:scale-105 cursor-pointer"
        >
          {isMuted ? (
            <>
              <VolumeX size={16} className="text-mfc-red group-hover:text-white" />
              <span>Activer le son</span>
            </>
          ) : (
            <>
              <Volume2 size={16} className="text-emerald-400" />
              <span>Son activé</span>
            </>
          )}
        </button>

        {/* Accents design aux angles */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-mfc-red rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-mfc-red rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

