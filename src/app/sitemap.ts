import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://marseillefightclub.com";

  const routes = [
    "",
    "/club",
    "/coachs",
    "/tarifs",
    "/blog",
    "/blog/eva-dourthe-ksw-116",
    "/blog/souhil-tairi-pfl-mena",
    "/blog/wilson-varela-vs-davy-gallon-hexagone-mma-44",
    "/blog/ylies-djiroun-pride-of-arabia-dubai",
    "/blog/aymard-guih-vs-marian-ziolkowski-ksw-118",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/blog" ? 0.9 : route.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
