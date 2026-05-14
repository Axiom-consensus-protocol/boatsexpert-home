import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalBlogCategories,
  originalBlogPosts,
} from "@/lib/original-site-data";

type RomanianBlogPostPageProps = {
  params: Promise<{ year: string; month: string; day: string; slug: string }>;
};

function findPost(slug: string) {
  return originalBlogPosts.find((post) => post.href?.includes(`/${slug}/`));
}

export async function generateMetadata({ params }: RomanianBlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  const title = post?.title || legacySlugToTitle(slug);

  return {
    title: `${title} | BoatsExpert Blog`,
    description: "Original Romanian BoatsExpert blog post route preserved inside the new site.",
  };
}

export default async function RomanianBlogPostPage({ params }: RomanianBlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = findPost(slug);
  const title = post?.title || legacySlugToTitle(slug);

  return (
    <OriginalInfoPage
      eyebrow="Original Romanian blog post"
      title={title}
      lead={post?.text || "This Romanian BoatsExpert blog URL is preserved and connected back to the new blog archive."}
      source={`https://boatsexpert.com/ro/${year}/${month}/${day}/${slug}/`}
      cards={originalBlogPosts}
      sections={[
        {
          title: "Romanian archive context",
          text: ["The old sitemap contains Romanian post variants. This route keeps those URLs available while the new archive presents the restored post index."],
          items: originalBlogCategories,
        },
      ]}
      asideTitle="Blog categories"
      asideItems={originalBlogCategories}
    />
  );
}
