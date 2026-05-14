import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalProductCategoryGroups,
  originalProductTags,
} from "@/lib/original-site-data";

type RomanianProductTagPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RomanianProductTagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return {
    title: `${title} | BoatsExpert Product Tag`,
    description: "Original Romanian product-tag route mapped into the new shop.",
  };
}

export default async function RomanianProductTagPage({ params }: RomanianProductTagPageProps) {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original Romanian product tag"
      title={title}
      lead="The Romanian WooCommerce tag URL is preserved and connected to the new marine equipment shop."
      source={`https://boatsexpert.com/ro/eticheta-produs/${slug}/`}
      sections={originalProductCategoryGroups.map((group) => ({
        title: group.title,
        text: ["Original shop departments and tags remain visible as entry points into the new shop."],
        items: group.items,
      }))}
      asideTitle="Product tags"
      asideItems={originalProductTags}
    />
  );
}
