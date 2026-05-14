import { redirect } from "next/navigation";
import { normalizeRomanianLegacySlug } from "@/lib/original-site-data";

type RomanianBodyTypePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function RomanianBodyTypePage({ params }: RomanianBodyTypePageProps) {
  const { slug } = await params;
  redirect(`/listings/body-type/${normalizeRomanianLegacySlug(slug)}`);
}
