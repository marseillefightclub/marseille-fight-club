import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marseillefightclub.com";

  const routes = [
    "",
    "/club",
    "/coachs",
    "/tarifs",
    "/press",
    "/press/eva-dourthe-ksw-116",
    "/press/souhil-tairi-pfl-mena",
    "/press/wilson-varela-vs-davy-gallon-hexagone-mma-44",
    "/press/ylies-djiroun-pride-of-arabia-dubai",
    "/press/aymard-guih-vs-marian-ziolkowski-ksw-118",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/press" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/press" ? 0.9 : route.startsWith("/press/") ? 0.7 : 0.8,
  }));
}
