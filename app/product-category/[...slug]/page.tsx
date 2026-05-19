import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { legacySlugToTitle, originalProductCategoryGroups } from "@/lib/original-site-data";

type ProductCategoryPageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: ProductCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = slug.map((part) => legacySlugToTitle(part)).join(" / ");

  return {
    title: `${label} | Axiom Marine Shop Category`,
    description: "Original Axiom Marine shop category route mapped into the new site.",
    alternates: { canonical: `/product-category/${slug.join("/")}` },
  };
}

export default async function ProductCategoryPage({ params }: ProductCategoryPageProps) {
  const { slug } = await params;
  const joined = slug.join("/");

  if (slug[0] === "boats-in-stock") redirect("/in-stock");

  const label = slug.map((part) => legacySlugToTitle(part)).join(" / ");

  return (
    <OriginalInfoPage
      eyebrow="Original WooCommerce category"
      title={label}
      lead="This original product-category URL is preserved in the Next.js site and connected back to the richer shop structure. The full category tree from the old WooCommerce sidebar is also available below."
      source={`https://marine.axiomprotocol.org/product-category/${joined}/`}
      sections={originalProductCategoryGroups.map((group) => ({
        title: group.title,
        text: ["Original shop department and subcategory information restored from the Axiom Marine category sitemap and shop sidebar."],
        items: group.items,
      }))}
      asideTitle="Shop categories"
      asideItems={originalProductCategoryGroups.flatMap((group) => group.items)}
    />
  );
}
