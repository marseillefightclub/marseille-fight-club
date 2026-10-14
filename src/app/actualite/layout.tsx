import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Actualités & Résultats MMA | Marseille Fight Club",
  description: "Retrouvez toute l'actualité des combattants du Marseille Fight Club : victoires et analyses au KSW, PFL MENA, Hexagone MMA et Cage Warriors.",
  keywords: [
    "Actualités Marseille Fight Club",
    "MMA Marseille",
    "Résultats KSW",
    "PFL MENA",
    "Hexagone MMA",
    "Cage Warriors",
    "Wilson Varela",
    "Ylies Djiroun",
    "Nika Kobakhidze",
  ],
  alternates: {
    canonical: "https://marseillefightclub.com/actualite",
  },
  openGraph: {
    title: "Actualités & Résultats MMA | Marseille Fight Club",
    description: "Retrouvez toute l'actualité des combattants du Marseille Fight Club : victoires et analyses au KSW, PFL MENA, Hexagone MMA et Cage Warriors.",
    url: "https://marseillefightclub.com/actualite",
    siteName: "Marseille Fight Club",
    type: "website",
    images: [
      {
        url: "https://marseillefightclub.com/images/press/WilsonVarela.jpeg",
        width: 1200,
        height: 675,
        alt: "Actualités Marseille Fight Club",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Actualités & Résultats MMA | Marseille Fight Club",
    description: "Retrouvez toute l'actualité et résultats des combattants du Marseille Fight Club.",
    images: ["https://marseillefightclub.com/images/press/WilsonVarela.jpeg"],
  },
};

export default function ActualiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
