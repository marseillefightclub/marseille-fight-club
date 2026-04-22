import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marseille Fight Club | MMA, Grappling & Boxe",
  description: "Rejoignez le Marseille Fight Club, le club premium de MMA à Marseille. Entraînement haute performance, discipline et ambiance hardcore. Boxe, Grappling, Lutte.",
  keywords: ["MMA", "Marseille", "Fight Club", "Boxe", "Grappling", "Lutte", "Sport de combat", "Arts martiaux"],
  authors: [{ name: "Marseille Fight Club" }],
  openGraph: {
    title: "Marseille Fight Club | Centre de Haut Niveau MMA",
    description: "Le club de MMA de référence à Marseille. Rejoignez nos coachs experts pour dépasser vos limites.",
    url: "https://marseillefightclub.com",
    siteName: "Marseille Fight Club",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marseille Fight Club | Centre de Haut Niveau MMA",
    description: "Le club de MMA de référence à Marseille. Rejoignez nos coachs experts.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${oswald.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Marseille Fight Club",
              "image": "https://marseillefightclub.com/logo.png",
              "description": "Club premium de MMA, Boxe, et Grappling situé à Marseille.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Marseille",
                "addressCountry": "FR"
              },
              "telephone": "+33 6 00 00 00 00",
              "url": "https://marseillefightclub.com"
            })
          }}
        />
      </head>
      <body className="bg-mfc-dark text-mfc-light font-sans antialiased selection:bg-mfc-red selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
