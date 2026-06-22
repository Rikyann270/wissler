import type { MetadataRoute } from "next";
import { NEWS_ARTICLES } from "@/lib/newsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.wisslerlogistics.com";

  // Static routes map
  const staticRoutes = [
    "",
    "/about",
    "/services/road-transport",
    "/services/sea-air",
    "/services/customs",
    "/services/special-services",
    "/news",
    "/contact",
    "/quick-quote",
    "/partners",
    "/downloads",
    "/shipping-guidance",
  ].map((route) => {
    let priority = 0.8;
    let changeFrequency: "weekly" | "monthly" | "yearly" = "weekly";

    if (route === "") {
      priority = 1.0;
    } else if (
      route === "/contact" ||
      route === "/quick-quote" ||
      route === "/about"
    ) {
      priority = 0.9;
    } else if (route === "/downloads" || route === "/partners") {
      priority = 0.7;
      changeFrequency = "monthly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });

  // Dynamic news article routes
  const newsRoutes = NEWS_ARTICLES.map((article) => {
    let lastMod = new Date();
    try {
      if (article.date) {
        const parsedDate = new Date(article.date);
        if (!isNaN(parsedDate.getTime())) {
          lastMod = parsedDate;
        }
      }
    } catch (e) {
      // fallback to current date
    }

    return {
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...staticRoutes, ...newsRoutes];
}
