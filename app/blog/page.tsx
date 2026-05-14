import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { originalBlogPosts } from "@/lib/original-site-data";

export const metadata: Metadata = {
  title: "Blog | BoatsExpert",
  description: "Original BoatsExpert blog archive: RIB news, Garmin promotions, boat shows and Romanian posts.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <OriginalInfoPage
      eyebrow="Original blog archive"
      title="BoatsExpert Blog"
      lead="The original site includes a blog archive with RIB articles, boat-show news, Garmin and FurSeal promotions, plus Romanian versions. This page restores that information as a proper route in the new site."
      source="https://boatsexpert.com/blog/"
      cards={originalBlogPosts}
      asideTitle="Posts"
      asideItems={["Main News", "RIBs", "Tuning Reviews", "Romanian archive"]}
    />
  );
}
