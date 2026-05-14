import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalBlogCategories,
  originalBlogPosts,
} from "@/lib/original-site-data";

type RomanianCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RomanianCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return {
    title: `${title} | BoatsExpert Blog Category`,
    description: "Original Romanian BoatsExpert blog category route mapped into the new archive.",
  };
}

export default async function RomanianCategoryPage({ params }: RomanianCategoryPageProps) {
  const { slug } = await params;
  const title = legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original Romanian blog category"
      title={title}
      lead="The original Romanian category URL is preserved and connected to the restored BoatsExpert blog archive."
      source={`https://boatsexpert.com/ro/category/${slug}/`}
      cards={originalBlogPosts}
      sections={[
        {
          title: "Archive coverage",
          text: ["Romanian category entry points stay available while the new site presents one cleaned-up archive."],
          items: originalBlogCategories,
        },
      ]}
      asideTitle="Blog categories"
      asideItems={originalBlogCategories}
    />
  );
}
