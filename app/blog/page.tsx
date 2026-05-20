import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { originalBlogPosts } from "@/lib/original-site-data";

export const metadata: Metadata = {
  title: "Blog | Axiom Marine",
  description: "Original Axiom Marine blog archive: RIB news, Marine Nav promotions, boat shows and Demo posts.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <OriginalInfoPage
      eyebrow="Original blog archive"
      title="Axiom Marine Blog"
      lead="The original site includes a blog archive with RIB articles, boat-show news, Marine Nav and Inflatable Marine promotions, plus Demo versions. This page restores that information as a proper route in the new site."
      source="https://marine.axiomprotocol.org/blog/"
      cards={originalBlogPosts}
      asideTitle="Posts"
      asideItems={["Main News", "RIBs", "Tuning Reviews", "Demo archive"]}
    />
  );
}
