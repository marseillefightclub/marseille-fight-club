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
  title: "Marseille Fight Club | MMA, Grappling & Boxe à la Capelette",
  description: "Découvrez le Marseille Fight Club, centre de haut niveau à Marseille 10ème (La Capelette). MMA, Boxe Anglaise, Grappling & Lutte. Coaching pro par Jean Michel Foissard, Hassou et Souhil Taïri.",
  keywords: ["MMA Marseille", "Marseille Fight Club", "Boxe Anglaise Marseille", "Grappling Marseille", "Lutta Livre Marseille", "Jean Michel Foissard", "Souhil Tairi", "Hassou Coach", "Sports de combat 13010"],
  authors: [{ name: "Marseille Fight Club" }],
  openGraph: {
    title: "Marseille Fight Club | MMA, Grappling & Boxe",
    description: "Le club de MMA de référence à Marseille. Rejoignez nos coachs experts pour dépasser vos limites au 268 Avenue de la Capelette.",
    url: "https://marseillefightclub.com",
    siteName: "Marseille Fight Club",
    images: [
      {
        url: "/LogoGorill.jpg",
        width: 800,
        height: 800,
        alt: "Marseille Fight Club Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marseille Fight Club | MMA & Boxe Marseille",
    description: "Entraînement de haut niveau en MMA, Boxe et Grappling à Marseille.",
    images: ["/LogoGorill.jpg"],
  },
  icons: {
    icon: "/LogoGorill.jpg",
  },
  verification: {
    google: "67z8ufL0MJCs-2ow4QuljioLA-xfu26592OPrPJ5q3U",
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
    <html lang="fr" className={`${inter.variable} ${oswald.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsClub",
              "name": "Marseille Fight Club",
              "image": "https://marseillefightclub.com/LogoGorill.jpg",
              "description": "Club premium de MMA, Boxe, et Grappling situé à Marseille 10ème.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "268 Avenue de la Capelette",
                "addressLocality": "Marseille",
                "postalCode": "13010",
                "addressCountry": "FR"
              },
              "telephone": "+33 6 43 40 76 45",
              "url": "https://marseillefightclub.com",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 10:00-22:00"
            })
          }}
        />
      </head>
      <body className="bg-mfc-dark text-mfc-light font-sans antialiased selection:bg-mfc-red selection:text-white flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
