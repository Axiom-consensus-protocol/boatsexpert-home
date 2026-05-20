import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import {
  legacySlugToTitle,
  originalBlogCategories,
  originalBlogPosts,
} from "@/lib/original-site-data";

type BlogPostPageProps = {
  params: Promise<{ year: string; month: string; day: string; slug: string }>;
};

function findPost(slug: string) {
  return originalBlogPosts.find((post) => post.href?.includes(`/${slug}/`));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  const title = post?.title || legacySlugToTitle(slug);

  return {
    title: `${title} | Axiom Marine Blog`,
    description: "Original Axiom Marine blog post route preserved inside the new site.",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { year, month, day, slug } = await params;
  const post = findPost(slug);
  const title = post?.title || legacySlugToTitle(slug);
  const date = `${year}-${month}-${day}`;

  return (
    <OriginalInfoPage
      eyebrow="Original blog post"
      title={title}
      lead={post?.text || "This original Axiom Marine blog URL is preserved and connected back to the new blog archive, dealer news and catalog context."}
      source={`https://marine.axiomprotocol.org/${year}/${month}/${day}/${slug}/`}
      cards={originalBlogPosts}
      sections={[
        {
          title: "Blog archive context",
          text: [
            `Original publication date: ${post?.meta || date}.`,
            "The old site mixed English and Demo news, boat-show updates, Marine Nav promotions and RIB articles. The new blog page keeps that archive visible instead of dropping old content.",
          ],
          items: originalBlogCategories,
        },
      ]}
      asideTitle="Blog categories"
      asideItems={originalBlogCategories}
    />
  );
}
