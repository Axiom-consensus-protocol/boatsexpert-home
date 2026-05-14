import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { originalServicePages } from "@/lib/original-site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(originalServicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = originalServicePages[slug];
  if (!page) return {};

  return {
    title: `${page.title} | BoatsExpert`,
    description: page.lead,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = originalServicePages[slug];
  if (!page) notFound();

  return (
    <OriginalInfoPage
      eyebrow={page.eyebrow}
      title={page.title}
      lead={page.lead}
      source={page.source}
      cards={page.cards}
      sections={page.sections}
      asideTitle="Service scope"
      asideItems={page.sections.flatMap((section) => section.items || [])}
    />
  );
}
