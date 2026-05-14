import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { legacySlugToTitle, originalBodyTypes, originalBrands } from "@/lib/original-site-data";

type MakeBrandPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: MakeBrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = legacySlugToTitle(slug);

  return {
    title: `${label} | BoatsExpert Brand Catalog`,
    description: "Original make-brand catalog route mapped into the new BoatsExpert catalog.",
    alternates: { canonical: `/listings/make-brand/${slug}` },
  };
}

export default async function MakeBrandPage({ params }: MakeBrandPageProps) {
  const { slug } = await params;
  const label = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original make-brand route"
      title={label}
      lead="The original catalog exposed manufacturer and model-line routes for Beneteau, Finval, GALA, NorthSilver, LANDX, Reval Grade, RESPO and related ranges. This route preserves that sitemap structure."
      source={`https://boatsexpert.com/listings/make-brand/${slug}/`}
      sections={[
        {
          title: "Brand index",
          text: ["All original make-brand entry points are carried into the new catalog layer."],
          items: originalBrands,
        },
        {
          title: "Body-type connection",
          text: ["Brand browsing stays connected to body-type browsing, matching the original catalog structure."],
          items: originalBodyTypes,
        },
      ]}
      asideTitle="Brands"
      asideItems={originalBrands}
    />
  );
}
