import type { Metadata } from "next";
import { getLegacyPage, type LegacyPageSlug } from "./legacy-content";
import { defaultOgImage } from "./og";

export function legacyMetadata(slug: LegacyPageSlug): Metadata {
  const page = getLegacyPage(slug);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.route,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.route,
      siteName: "Axiom Marine",
      type: "website",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [defaultOgImage.url],
    },
  };
}
