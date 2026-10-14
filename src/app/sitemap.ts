import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marseillefightclub.com";

  const articleImages: Record<string, string> = {
    "/actualite": "/images/press/WilsonVarela.jpeg",
    "/actualite/wilson-varela-victoire-marian-ziolkowski-ksw-122": "/images/press/WilsonVarela.jpeg",
    "/actualite/ylies-djiroun-victoire-assem-ghanem-pfl-mena-11": "/images/press/ylies-pfl-mena-11-winner.jpg",
    "/actualite/eva-dourthe-ksw-116": "/images/press/eva-dourthe-victory-real.jpg",
    "/actualite/souhil-tairi-pfl-mena": "/images/press/souhilStriking.png",
    "/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44": "/images/press/varela-fight.jpg",
    "/actualite/aymard-guih-vs-marian-ziolkowski-ksw-118": "/images/press/aymard-guih-ksw118.png",
    "/actualite/nika-kobakhidze-hexagone-mma-44": "/images/press/nika-kobakhidze-belt.png",
    "/actualite/lorenzo-navarro-cage-warriors-title": "/images/press/navarro_cage_warriors_title2.png",
  };

  const routes = [
    "",
    "/club",
    "/coachs",
    "/tarifs",
    "/actualite",
    "/actualite/wilson-varela-victoire-marian-ziolkowski-ksw-122",
    "/actualite/ylies-djiroun-victoire-assem-ghanem-pfl-mena-11",
    "/actualite/eva-dourthe-ksw-116",
    "/actualite/souhil-tairi-pfl-mena",
    "/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44",
    "/actualite/aymard-guih-vs-marian-ziolkowski-ksw-118",
    "/actualite/nika-kobakhidze-hexagone-mma-44",
    "/actualite/lorenzo-navarro-cage-warriors-title",
  ];

  return routes.map((route) => {
    const imageUrl = articleImages[route] ? `${baseUrl}${articleImages[route]}` : (route === "" ? `${baseUrl}/LogoRayan.jpeg` : undefined);

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" || route === "/actualite" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/actualite" ? 0.9 : route.startsWith("/actualite/") ? 0.8 : 0.7,
      images: imageUrl ? [imageUrl] : undefined,
    };
  });
}
