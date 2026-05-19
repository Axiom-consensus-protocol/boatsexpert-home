import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalBodyTypes,
  originalBrands,
} from "@/lib/original-site-data";

type BoatCatalogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BoatCatalogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return {
    title: `${title} | Axiom Marine Boat Catalog`,
    description: "Original Axiom Marine boat listing route preserved inside the new catalog.",
    alternates: { canonical: `/boat-catalog/${slug}` },
  };
}

export default async function BoatCatalogPage({ params }: BoatCatalogPageProps) {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original boat detail route"
      title={title}
      lead={`The original sitemap includes this boat detail URL as /boat-catalog/${slug}/. The new site keeps the route alive, connects it back to the rich catalog and preserves the old brand and hull taxonomy instead of losing the listing index.`}
      source={`https://marine.axiomprotocol.org/boat-catalog/${slug}/`}
      cards={[
        {
          title: "Catalog placement",
          kicker: "Listing archive",
          text: "The original listing remains connected to the 230-boat catalog, showroom stock and request workflow.",
          href: "/catalog",
        },
        {
          title: "Stock check",
          kicker: "Dealer workflow",
          text: "Availability, delivery, rigging and paperwork are handled through the demo dealer desk.",
          href: "/in-stock",
        },
        {
          title: "Workshop fit-out",
          kicker: "Service link",
          text: "Motors, electronics, batteries and mounts are planned as a fitted boat system, not loose parts.",
          href: "/services",
        },
      ]}
      sections={[
        {
          title: "Original listing structure",
          text: [
            "The legacy WordPress catalog contains hundreds of individual boat detail URLs. This page restores that URL layer while the new catalog carries the richer comparison, filters and inquiry flow.",
            "Brand and body-type indexes remain visible here so old search and customer links still lead into the correct buying path.",
          ],
          items: ["Details", "Request", "Stock", "Trade-in", "Rigging", "Delivery"],
        },
        {
          title: "Catalog indexes",
          text: ["Original body-type and make-brand routes are preserved as the navigation backbone around every boat detail page."],
          items: [...originalBodyTypes, ...originalBrands],
        },
      ]}
      asideTitle="Original catalog links"
      asideItems={[...originalBodyTypes, ...originalBrands]}
    />
  );
}
