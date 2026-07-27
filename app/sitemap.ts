import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { staff } from "@/lib/data/staff";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.baseUrl, changeFrequency: "weekly", priority: 1 },
  ];

  const staffRoutes: MetadataRoute.Sitemap = staff.map((person) => ({
    url: `${SITE.baseUrl}/tim/${person.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...staffRoutes];
}
