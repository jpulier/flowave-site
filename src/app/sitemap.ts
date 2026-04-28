import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://flowave.co",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Add subpage URLs here as we create them
  ];
}
