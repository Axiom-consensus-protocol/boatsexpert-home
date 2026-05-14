import type { Metadata } from "next";
import { getLegacyPage, type LegacyPageSlug } from "./legacy-content";

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
      siteName: "BoatsExpert",
      type: "website",
    },
  };
}
