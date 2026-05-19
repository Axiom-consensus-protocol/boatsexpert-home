import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalBlogCategories,
  originalBlogPosts,
} from "@/lib/original-site-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return {
    title: `${title} | Axiom Marine Blog Category`,
    description: "Original Axiom Marine blog category route mapped into the new archive.",
    alternates: { canonical: `/category/${slug}` },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original blog category"
      title={title}
      lead="The original WordPress archive used category pages for news, RIB articles and tuning reviews. This route keeps that archive layer available and connected to the restored blog index."
      source={`https://marine.axiomprotocol.org/category/${slug}/`}
      cards={originalBlogPosts}
      sections={[
        {
          title: "Archive coverage",
          text: ["All original blog categories from the sitemap are represented in the new archive so old links stay useful."],
          items: originalBlogCategories,
        },
      ]}
      asideTitle="Blog categories"
      asideItems={originalBlogCategories}
    />
  );
}
