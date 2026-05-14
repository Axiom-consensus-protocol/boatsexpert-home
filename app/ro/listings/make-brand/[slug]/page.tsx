import { redirect } from "next/navigation";
import { normalizeRomanianLegacySlug } from "@/lib/original-site-data";

type RomanianMakeBrandPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RomanianMakeBrandPage({ params }: RomanianMakeBrandPageProps) {
  const { slug } = await params;
  redirect(`/listings/make-brand/${normalizeRomanianLegacySlug(slug)}`);
}
