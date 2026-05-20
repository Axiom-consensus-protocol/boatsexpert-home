import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalProductCategoryGroups,
  originalProductTags,
} from "@/lib/original-site-data";

type ProductTagPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductTagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return {
    title: `${title} | Axiom Marine Product Tag`,
    description: "Original Axiom Marine product-tag route mapped into the new shop.",
    alternates: { canonical: `/product-tag/${slug}` },
  };
}

export default async function ProductTagPage({ params }: ProductTagPageProps) {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original product tag"
      title={title}
      lead="The original WooCommerce shop exposed tag pages for Marine Nav electronics, sonars, Quatix watches and trolling-motor topics. This route keeps that search layer visible and connected to the new shop."
      source={`https://marine.axiomprotocol.org/product-tag/${slug}/`}
      sections={originalProductCategoryGroups.map((group) => ({
        title: group.title,
        text: ["Shop departments and tags are cross-linked here to preserve the original WooCommerce discovery paths."],
        items: group.items,
      }))}
      asideTitle="Product tags"
      asideItems={originalProductTags}
    />
  );
}
