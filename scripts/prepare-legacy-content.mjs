import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(appRoot, "..");

const sources = [
  { slug: "home", route: "/", source: "axiom-marine-demo/index.html" },
  { slug: "boat", route: "/boat", source: "axiom-marine-demo/Boat.html" },
  { slug: "catalog", route: "/catalog", source: "axiom-marine-demo/Catalog.html" },
  { slug: "product", route: "/product", source: "axiom-marine-demo/Product.html" },
  { slug: "shop", route: "/shop", source: "axiom-marine-demo/Shop.html" },
  { slug: "cart", route: "/cart", source: "staging-pages/cart.html" },
  { slug: "contact", route: "/contact", source: "staging-pages/contact.html" },
  { slug: "services", route: "/services", source: "staging-pages/services.html" },
];

const pageUrlMap = new Map([
  ["index.html", "/"],
  ["boat.html", "/boat"],
  ["catalog.html", "/catalog"],
  ["product.html", "/product"],
  ["shop.html", "/shop"],
  ["cart.html", "/cart"],
  ["contact.html", "/contact"],
  ["services.html", "/services"],
]);

const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function readWorkspaceFile(relativePath) {
  return readFileSync(path.join(workspaceRoot, relativePath), "utf8");
}

function extractTag(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return match ? match[1] : "";
}

function extractTitle(html) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "Axiom Marine";
  return decodeEntities(stripTags(title)).replace(/\s+/g, " ").trim();
}

function extractDescription(html) {
  const metas = [...html.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
  for (const meta of metas) {
    if (!/\bname=(["'])description\1/i.test(meta)) continue;
    const content = meta.match(/\bcontent=(["'])([\s\S]*?)\1/i)?.[2];
    if (content) return decodeEntities(content).replace(/\s+/g, " ").trim();
  }
  return "Axiom Marine — official dealer of boats and marine equipment for SMB.";
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, "");
}

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function removeTemplate(html, id) {
  return html.replace(
    new RegExp(`\\s*<template\\b[^>]*id=(["'])${id}\\1[^>]*>[\\s\\S]*?<\\/template>`, "gi"),
    "",
  );
}

function removeGlobalScripts(html) {
  return html
    .replace(
      /\s*<script\b[^>]*\bsrc=(["'])(?:\.\/)?(?:partials|i18n|theme|chrome)\.js\1[^>]*>\s*<\/script>/gi,
      "",
    )
    .replace(/\s*<script\b[^>]*\bid=(["'])i18n-data\1[^>]*>[\s\S]*?<\/script>/gi, "");
}

function collectInlineScripts(html) {
  const scripts = [];
  const cleaned = html.replace(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi, (full, attrs, code) => {
    const attrText = attrs || "";
    if (/\bsrc\s*=/.test(attrText)) return "";
    if (/\btype=(["'])application\/json\1/i.test(attrText)) return "";
    if (/\bid=(["'])i18n-data\1/i.test(attrText)) return "";
    const trimmed = code.trim();
    if (trimmed) scripts.push(trimmed);
    return "";
  });
  return { html: cleaned, scripts };
}

function rewriteLegacyUrl(rawUrl) {
  if (!rawUrl) return rawUrl;
  if (/^(?:https?:|mailto:|tel:|data:|javascript:|#|\?)/i.test(rawUrl)) return rawUrl;
  if (rawUrl.startsWith("/")) return rawUrl;

  const asset = rawUrl.replace(/^\.\//, "");
  if (asset.startsWith("assets/")) return `/${asset}`;

  const match = rawUrl.match(/^([^?#]*)([?#][\s\S]*)?$/);
  const pathname = (match?.[1] || "").replace(/^\.\//, "");
  const suffix = match?.[2] || "";
  const mapped = pageUrlMap.get(pathname.toLowerCase());
  if (mapped) return `${mapped}${suffix}`;

  return rawUrl;
}

function rewriteLegacyUrls(html) {
  return html
    .replace(/\b(href|src|action)=("|\')([^"\']*)\2/gi, (full, attr, quote, url) => {
      return `${attr}=${quote}${rewriteLegacyUrl(url)}${quote}`;
    })
    .replace(/\b(srcset)=("|\')([^"\']*)\2/gi, (full, attr, quote, srcset) => {
      const rewritten = srcset
        .split(",")
        .map((part) => {
          const [url, ...descriptor] = part.trim().split(/\s+/);
          return [rewriteLegacyUrl(url), ...descriptor].join(" ");
        })
        .join(", ");
      return `${attr}=${quote}${rewritten}${quote}`;
    })
    .replace(/url\((["']?)(\.\/)?assets\//gi, "url($1/assets/");
}

function removeChromeFromBody(body) {
  return removeGlobalScripts(
    removeTemplate(removeTemplate(body, "partial-header"), "partial-footer"),
  )
    .replace(/\s*<div\b[^>]*data-partial=(["'])header\1[^>]*>\s*<\/div>/gi, "")
    .replace(/\s*<div\b[^>]*data-partial=(["'])footer\1[^>]*>\s*<\/div>/gi, "")
    .replace(/\s*<input\b[^>]*id=(["'])mobile-toggle\1[^>]*>\s*/gi, "")
    .replace(
      /\s*<nav\b[^>]*class=(["'])[^"']*\bmobile-drawer\b[^"']*\1[^>]*>[\s\S]*?<\/nav>\s*/gi,
      "",
    )
    .replace(/\s*<!--([\s\S]*?)-->\s*/gi, (full, comment) => {
      return /\b(?:HEADER|FOOTER|TOP BAR|MOBILE DRAWER)\b|i18n inline dict/i.test(comment)
        ? "\n"
        : full;
    });
}

function findMatchingTag(html, tagName, startFrom) {
  if (voidTags.has(tagName)) return startFrom;

  const pattern = new RegExp(`<\\/?${tagName}\\b[^>]*>`, "gi");
  pattern.lastIndex = startFrom;
  let depth = 1;
  let match;

  while ((match = pattern.exec(html))) {
    const token = match[0];
    if (/^<\//.test(token)) {
      depth -= 1;
      if (depth === 0) return pattern.lastIndex;
    } else if (!/\/>$/.test(token)) {
      depth += 1;
    }
  }

  return html.length;
}

function splitTopLevel(html) {
  const chunks = [];
  let i = 0;
  let pendingComment = "";

  while (i < html.length) {
    while (i < html.length && /\s/.test(html[i])) i += 1;
    if (i >= html.length) break;

    if (html.startsWith("<!--", i)) {
      const commentEnd = html.indexOf("-->", i);
      if (commentEnd === -1) break;
      pendingComment += `${html.slice(i, commentEnd + 3)}\n`;
      i = commentEnd + 3;
      continue;
    }

    const nextTag = html.indexOf("<", i);
    if (nextTag === -1) {
      const text = html.slice(i).trim();
      if (text) chunks.push({ label: "text", html: `${pendingComment}${text}` });
      break;
    }

    if (nextTag > i) {
      const text = html.slice(i, nextTag).trim();
      if (text) chunks.push({ label: "text", html: `${pendingComment}${text}` });
      pendingComment = "";
      i = nextTag;
      continue;
    }

    const startTag = html.slice(i).match(/^<([a-zA-Z][\w:-]*)(?:\s[^>]*)?>/);
    if (!startTag) {
      i += 1;
      continue;
    }

    const tagName = startTag[1].toLowerCase();
    const tagEnd = i + startTag[0].length;
    const end =
      startTag[0].endsWith("/>") || voidTags.has(tagName)
        ? tagEnd
        : findMatchingTag(html, tagName, tagEnd);
    const chunkHtml = `${pendingComment}${html.slice(i, end)}`.trim();
    chunks.push({ label: labelForChunk(chunkHtml, tagName), html: chunkHtml });
    pendingComment = "";
    i = end;
  }

  return chunks.filter((chunk) => chunk.html.trim());
}

function labelForChunk(html, fallback) {
  const comment = html.match(/^<!--\s*([\s\S]*?)\s*-->/)?.[1];
  const source =
    comment || html.match(/^<[\w:-]+\b[^>]*(?:id|class)=(["'])(.*?)\1/i)?.[2] || fallback;
  return slugify(source);
}

function slugify(value) {
  const slug = stripTags(value)
    .toLowerCase()
    .replace(/&[a-z0-9#]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 56);
  return slug || "section";
}

function uniqueSectionName(index, label, seen) {
  const padded = String(index + 1).padStart(2, "0");
  const base = `${padded}-${label}`;
  const count = seen.get(base) || 0;
  seen.set(base, count + 1);
  return count ? `${base}-${count + 1}` : base;
}

function writePage(sourceConfig) {
  const sourcePath = path.join(workspaceRoot, sourceConfig.source);
  const html = readFileSync(sourcePath, "utf8");
  const head = extractTag(html, "head");
  let body = extractTag(html, "body");

  const pageDir = path.join(appRoot, "content/legacy/pages", sourceConfig.slug);
  const sectionsDir = path.join(pageDir, "sections");
  rmSync(pageDir, { recursive: true, force: true });
  ensureDir(sectionsDir);

  const styles = rewriteLegacyUrls(
    [...head.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1].trim()).join("\n\n"),
  );

  body = removeChromeFromBody(body);
  const extracted = collectInlineScripts(body);
  body = rewriteLegacyUrls(extracted.html).trim();

  const sections = splitTopLevel(body);
  const seen = new Map();
  const sectionManifest = sections.map((section, index) => {
    const name = uniqueSectionName(index, section.label, seen);
    writeFileSync(path.join(sectionsDir, `${name}.html`), `${section.html.trim()}\n`);
    return { name, file: `${name}.html` };
  });

  writeFileSync(path.join(pageDir, "styles.css"), `${styles}\n`);
  writeFileSync(path.join(pageDir, "scripts.js"), `${extracted.scripts.join("\n\n;\n\n")}\n`);
  writeFileSync(
    path.join(pageDir, "meta.json"),
    `${JSON.stringify(
      {
        slug: sourceConfig.slug,
        route: sourceConfig.route,
        source: sourceConfig.source,
        title: extractTitle(html),
        description: extractDescription(html),
        sections: sectionManifest,
        scriptCount: extracted.scripts.length,
      },
      null,
      2,
    )}\n`,
  );
}

function writeChrome() {
  const chromeDir = path.join(appRoot, "content/legacy/chrome");
  rmSync(chromeDir, { recursive: true, force: true });
  ensureDir(chromeDir);

  const header = rewriteLegacyUrls(readWorkspaceFile("staging-pages/partials/header.html"));
  const footer = rewriteLegacyUrls(readWorkspaceFile("staging-pages/partials/footer.html"));
  writeFileSync(path.join(chromeDir, "header.html"), `${header.trim()}\n`);
  writeFileSync(path.join(chromeDir, "footer.html"), `${footer.trim()}\n`);
}

function syncLegacySources() {
  const legacyDir = path.join(appRoot, "legacy");
  rmSync(legacyDir, { recursive: true, force: true });
  ensureDir(legacyDir);
  for (const source of sources) {
    copyFileSync(
      path.join(workspaceRoot, source.source),
      path.join(legacyDir, `${source.slug === "home" ? "index" : source.slug}.html`),
    );
  }
  copyFileSync(
    path.join(workspaceRoot, "staging-pages/i18n.json"),
    path.join(legacyDir, "i18n.json"),
  );
  copyFileSync(
    path.join(workspaceRoot, "staging-pages/i18n.json"),
    path.join(appRoot, "content/legacy/i18n.json"),
  );
  copyFileSync(
    path.join(workspaceRoot, "staging-pages/i18n.json"),
    path.join(appRoot, "public/i18n.json"),
  );
}

function writeManifest() {
  const manifest = {
    generatedFrom: sources.map(({ slug, route, source }) => ({ slug, route, source })),
  };
  writeFileSync(
    path.join(appRoot, "content/legacy/manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
}

writeChrome();
syncLegacySources();
for (const source of sources) writePage(source);
writeManifest();

console.log(`Prepared ${sources.length} legacy pages into content/legacy/pages`);
