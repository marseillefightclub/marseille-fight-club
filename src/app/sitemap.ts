import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marseillefightclub.com";

  const routes = [
    "",
    "/club",
    "/coachs",
    "/tarifs",
    "/actualite",
    "/actualite/ylies-djiroun-pfl-mena-11",
    "/actualite/eva-dourthe-ksw-116",
    "/actualite/souhil-tairi-pfl-mena",
    "/actualite/wilson-varela-vs-davy-gallon-hexagone-mma-44",
    "/actualite/ylies-djiroun-pride-of-arabia-dubai",
    "/actualite/aymard-guih-vs-marian-ziolkowski-ksw-118",
    "/actualite/nika-kobakhidze-hexagone-mma-44",
    "/actualite/lorenzo-navarro-cage-warriors-title",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/actualite" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/actualite" ? 0.9 : route.startsWith("/actualite/") ? 0.7 : 0.8,
  }));
}
