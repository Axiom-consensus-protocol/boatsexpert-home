import { redirect } from "next/navigation";
import { normalizeRomanianLegacySlug } from "@/lib/original-site-data";

type RomanianServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RomanianServicePage({ params }: RomanianServicePageProps) {
  const { slug } = await params;
  redirect(`/services/${normalizeRomanianLegacySlug(slug)}`);
}
