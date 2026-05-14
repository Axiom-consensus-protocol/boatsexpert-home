import { readFileSync } from "node:fs";
import path from "node:path";

export type LegacyPageSlug =
  | "home"
  | "boat"
  | "catalog"
  | "product"
  | "shop"
  | "cart"
  | "contact"
  | "services";

export type LegacyPageSection = {
  name: string;
  file: string;
  html: string;
};

export type LegacyPageContent = {
  slug: LegacyPageSlug;
  route: string;
  source: string;
  title: string;
  description: string;
  sections: LegacyPageSection[];
  styles: string;
  scripts: string;
  scriptCount: number;
};

type LegacyPageMeta = Omit<LegacyPageContent, "sections" | "styles" | "scripts"> & {
  sections: Array<Omit<LegacyPageSection, "html">>;
};

export const legacyPages: Array<{ slug: LegacyPageSlug; route: string }> = [
  { slug: "home", route: "/" },
  { slug: "boat", route: "/boat" },
  { slug: "catalog", route: "/catalog" },
  { slug: "product", route: "/product" },
  { slug: "shop", route: "/shop" },
  { slug: "cart", route: "/cart" },
  { slug: "contact", route: "/contact" },
  { slug: "services", route: "/services" },
];

const contentRoot = path.join(process.cwd(), "content/legacy");

function readText(relativePath: string) {
  return readFileSync(path.join(contentRoot, relativePath), "utf8");
}

function readJson<T>(relativePath: string): T {
  return JSON.parse(readText(relativePath)) as T;
}

export function getLegacyPage(slug: LegacyPageSlug): LegacyPageContent {
  const base = `pages/${slug}`;
  const meta = readJson<LegacyPageMeta>(`${base}/meta.json`);

  return {
    ...meta,
    sections: meta.sections.map((section) => ({
      ...section,
      html: readText(`${base}/sections/${section.file}`),
    })),
    styles: readText(`${base}/styles.css`),
    scripts: readText(`${base}/scripts.js`).trim(),
  };
}

export function getLegacyChrome(name: "header" | "footer") {
  return readText(`chrome/${name}.html`);
}

export function getLegacyI18nJson() {
  return readText("i18n.json");
}
