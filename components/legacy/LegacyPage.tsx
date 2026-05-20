import { getLegacyPage, type LegacyPageSlug } from "@/lib/legacy-content";
import { HtmlFragment } from "./HtmlFragment";
import { LegacyPageScripts } from "./LegacyPageScripts";

type LegacyPageProps = {
  slug: LegacyPageSlug;
};

export function LegacyPage({ slug }: LegacyPageProps) {
  const page = getLegacyPage(slug);

  return (
    <>
      <style data-legacy-page-style={page.slug} dangerouslySetInnerHTML={{ __html: page.styles }} />
      {page.sections.map((section) => (
        <HtmlFragment
          key={section.name}
          label={`${page.slug}:${section.name}`}
          html={section.html}
        />
      ))}
      <LegacyPageScripts code={page.scripts} page={page.slug} />
    </>
  );
}
