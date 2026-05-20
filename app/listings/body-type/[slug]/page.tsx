import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { legacySlugToTitle, originalBodyTypes, originalBrands } from "@/lib/original-site-data";

type BodyTypePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BodyTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = legacySlugToTitle(slug);

  return {
    title: `${label} | Axiom Marine Catalog`,
    description: "Original body-type catalog route mapped into the new Axiom Marine catalog.",
    alternates: { canonical: `/listings/body-type/${slug}` },
  };
}

export default async function BodyTypePage({ params }: BodyTypePageProps) {
  const { slug } = await params;
  const label = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original body-type route"
      title={label}
      lead="The original catalog used body-type landing pages for aluminium, fishing, RIB, cruising, fiberglass boats and trailers. This route keeps that information available and connects it to the new catalog."
      source={`https://marine.axiomprotocol.org/listings/body-type/${slug}/`}
      sections={[
        {
          title: "Body-type index",
          text: [
            "All original body-type entry points are preserved as catalog concepts in the new site.",
          ],
          items: originalBodyTypes,
        },
        {
          title: "Related brands",
          text: [
            "The original brand taxonomy remains visible so customers can move by hull type or manufacturer line.",
          ],
          items: originalBrands,
        },
      ]}
      asideTitle="Body types"
      asideItems={originalBodyTypes}
    />
  );
}
