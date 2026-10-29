import type { MetadataRoute } from "next";
import { SITE_URL, routes } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
