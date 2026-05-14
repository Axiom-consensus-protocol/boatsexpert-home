import { redirect } from "next/navigation";

type RomanianBoatCatalogPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RomanianBoatCatalogPage({ params }: RomanianBoatCatalogPageProps) {
  const { slug } = await params;
  redirect(`/boat-catalog/${slug}`);
}
