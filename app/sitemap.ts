import type { MetadataRoute } from "next";

const BASE_URL = "https://marine.axiomprotocol.org";

const staticRoutes = [
  "/",
  "/blog",
  "/boat",
  "/catalog",
  "/cart",
  "/checkout",
  "/contact",
  "/in-stock",
  "/inventory",
  "/listings",
  "/my-account",
  "/privacy-policy",
  "/product",
  "/return-policy",
  "/services",
  "/shop",
];

const serviceSlugs = [
  "registration-driving",
  "tuning-service",
  "expert-tuning-of-angler-boats",
  "outboard-engine-installation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${BASE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
