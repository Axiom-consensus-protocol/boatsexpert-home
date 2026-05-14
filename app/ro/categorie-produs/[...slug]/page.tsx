import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalProductCategoryGroups,
} from "@/lib/original-site-data";

type RomanianProductCategoryPageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: RomanianProductCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = legacySlugToTitle(slug.at(-1) || "categorie-produs");

  return {
    title: `${title} | BoatsExpert Shop Category`,
    description: "Original Romanian WooCommerce category route mapped into the new shop.",
  };
}

export default async function RomanianProductCategoryPage({ params }: RomanianProductCategoryPageProps) {
  const { slug } = await params;
  const joined = slug.join("/");
  const title = legacySlugToTitle(slug.at(-1) || "categorie-produs");

  return (
    <OriginalInfoPage
      eyebrow="Original Romanian WooCommerce category"
      title={title}
      lead="The original Romanian shop category URL is preserved and connected to the same restored category directory used by the new marine equipment shop."
      source={`https://boatsexpert.com/ro/categorie-produs/${joined}/`}
      sections={originalProductCategoryGroups.map((group) => ({
        title: group.title,
        text: ["Original Romanian and English product-category paths are kept together so old shop entry points still lead into the complete equipment structure."],
        items: group.items,
      }))}
      asideTitle="Shop categories"
      asideItems={originalProductCategoryGroups.flatMap((group) => group.items)}
    />
  );
}
