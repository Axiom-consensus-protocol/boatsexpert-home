import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const publicAssetsRoot = path.join(appRoot, "public/assets");

const expectedLegacyPages = [
  "home",
  "boat",
  "catalog",
  "product",
  "shop",
  "cart",
  "contact",
  "services",
];

const errors = [];
const warnings = [];
const assetRefs = new Map();
const fictionalBrandBoundaryTerms = [
  "BoatsExpert",
  "Beneteau",
  "Finval",
  "NorthSilver",
  "Yamaha",
  "Mercury",
  "Honda",
  "Tohatsu",
  "Garmin",
  "Humminbird",
  "Minn Kota",
  "FurSeal",
  "LANDX",
  "Reval",
  "RESPO",
  "Osculati",
  "Rebelcell",
  "Seastar",
  "Fusion",
  "Marinac",
  "Green Cell",
  "OPTIMA",
  "Ultimatron",
  "BlueTop",
  "ECHOMAP",
  "Ultrex",
  "Quatix",
  "BoatBuckle",
  "T-H Marine",
  "KED Mounts",
  "Smart Vision",
  "RIGID INDUSTRIES",
  "Motor Guide",
];

function rootPath(relativePath) {
  return path.join(appRoot, relativePath);
}

function reportError(message) {
  errors.push(message);
}

function reportWarning(message) {
  warnings.push(message);
}

function assertReady(condition, message) {
  if (!condition) reportError(message);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function readJson(relativePath) {
  try {
    return JSON.parse(readFileSync(rootPath(relativePath), "utf8"));
  } catch (error) {
    reportError(`${relativePath} is not readable JSON: ${error.message}`);
    return null;
  }
}

function trackedFiles() {
  try {
    return execFileSync("git", ["ls-files", "-z"], {
      cwd: appRoot,
      encoding: "utf8",
    })
      .split("\0")
      .filter(Boolean);
  } catch (error) {
    reportWarning(`Could not read tracked files through git: ${error.message}`);
    return [];
  }
}

function readTextIfSafe(relativePath) {
  const absolutePath = rootPath(relativePath);
  try {
    const stat = statSync(absolutePath);
    if (!stat.isFile() || stat.size > 1024 * 1024) return "";
    const buffer = readFileSync(absolutePath);
    if (buffer.includes(0)) return "";
    return buffer.toString("utf8");
  } catch {
    return "";
  }
}

function collectAssetReferences(relativePath, source) {
  const attributePattern = /\b(?:src|href|poster)=["']\/assets\/([^"'?#]+)(?:[?#][^"']*)?["']/gi;
  const cssPattern = /url\(\s*["']?\/assets\/([^)"'?#]+)(?:[?#][^)"']*)?["']?\s*\)/gi;

  for (const pattern of [attributePattern, cssPattern]) {
    for (const match of source.matchAll(pattern)) {
      const reference = decodeURIComponent(match[1]);
      if (!assetRefs.has(reference)) assetRefs.set(reference, new Set());
      assetRefs.get(reference).add(relativePath);
    }
  }
}

function verifyNoGeneratedOrPrivateFiles(files) {
  const forbidden = [
    { label: "dependency directory", test: (file) => file.startsWith("node_modules/") },
    { label: "Next build output", test: (file) => file.startsWith(".next/") },
    { label: "Vercel local state", test: (file) => file.startsWith(".vercel/") },
    { label: "environment file", test: (file) => /^\.env(?:\.|$)/.test(file) },
    { label: "private key", test: (file) => /\.pem$/i.test(file) },
    { label: "TypeScript build info", test: (file) => /\.tsbuildinfo$/i.test(file) },
  ];

  for (const file of files) {
    for (const rule of forbidden) {
      if (rule.test(file)) reportError(`Tracked ${rule.label}: ${file}`);
    }
  }
}

function verifySecretPatterns(files) {
  const rules = [
    { label: "private key", pattern: /-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----/ },
    { label: "AWS access key", pattern: /\bAKIA[0-9A-Z]{16}\b/ },
    { label: "GitHub token", pattern: /\bgh[pousr]_[A-Za-z0-9_]{30,}\b/ },
    { label: "Slack token", pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/ },
    { label: "OpenAI-style key", pattern: /\bsk-[A-Za-z0-9_-]{20,}\b/ },
  ];

  for (const file of files) {
    if (file === "scripts/verify-public-readiness.mjs") continue;
    if (file.startsWith("public/assets/")) continue;

    const source = readTextIfSafe(file);
    if (!source) continue;

    for (const rule of rules) {
      if (rule.pattern.test(source)) {
        reportError(`Possible ${rule.label} in ${file}`);
      }
    }

    if (/^(app|components|content|legacy|lib|public|scripts)\//.test(file)) {
      collectAssetReferences(file, source);
    }
  }
}

function verifyFictionalBrandBoundary(files) {
  const patterns = fictionalBrandBoundaryTerms.map((term) => ({
    term,
    pattern: new RegExp(`\\b${escapeRegExp(term)}\\b`, "i"),
  }));

  for (const file of files) {
    if (file === "scripts/verify-public-readiness.mjs") continue;
    if (file.startsWith("public/assets/")) continue;

    const source = readTextIfSafe(file);
    if (!source) continue;

    for (const { term, pattern } of patterns) {
      if (pattern.test(source)) {
        reportError(`Old or real brand reference "${term}" in ${file}`);
      }
    }
  }
}

function verifyLegacyContent() {
  const manifest = readJson("content/legacy/manifest.json");
  if (!manifest) return;

  const generatedFrom = Array.isArray(manifest.generatedFrom) ? manifest.generatedFrom : [];
  const slugs = generatedFrom.map((item) => item.slug);
  assertReady(
    expectedLegacyPages.every((slug) => slugs.includes(slug)),
    `Legacy manifest must include ${expectedLegacyPages.join(", ")}`,
  );

  for (const slug of expectedLegacyPages) {
    const base = `content/legacy/pages/${slug}`;
    const meta = readJson(`${base}/meta.json`);
    if (!meta) continue;

    assertReady(meta.slug === slug, `${base}/meta.json has slug ${meta.slug}`);
    assertReady(
      typeof meta.route === "string" && meta.route.startsWith("/"),
      `${base}/meta.json needs a route`,
    );
    assertReady(Boolean(meta.title), `${base}/meta.json needs a title`);
    assertReady(Boolean(meta.description), `${base}/meta.json needs a description`);
    assertReady(
      Array.isArray(meta.sections) && meta.sections.length > 0,
      `${base}/meta.json needs sections`,
    );
    assertReady(existsSync(rootPath(`${base}/styles.css`)), `${base}/styles.css is missing`);
    assertReady(existsSync(rootPath(`${base}/scripts.js`)), `${base}/scripts.js is missing`);

    for (const section of meta.sections || []) {
      assertReady(
        existsSync(rootPath(`${base}/sections/${section.file}`)),
        `${base}/sections/${section.file} is missing`,
      );
    }
  }

  for (const file of [
    "content/legacy/chrome/header.html",
    "content/legacy/chrome/footer.html",
    "content/legacy/i18n.json",
    "public/i18n.json",
  ]) {
    assertReady(existsSync(rootPath(file)), `${file} is missing`);
  }
}

function verifyAssetReferences() {
  for (const [reference, relativePaths] of assetRefs) {
    assertReady(
      existsSync(path.join(publicAssetsRoot, reference)),
      `${[...relativePaths].join(", ")} reference missing asset /assets/${reference}`,
    );
  }
}

const files = trackedFiles();
verifyNoGeneratedOrPrivateFiles(files);
verifySecretPatterns(files);
verifyFictionalBrandBoundary(files);
verifyLegacyContent();
verifyAssetReferences();

console.log("Public readiness check");
console.log(`- tracked files scanned: ${files.length}`);
console.log(`- legacy pages checked: ${expectedLegacyPages.length}`);
console.log(`- asset references checked: ${assetRefs.size}`);
console.log(`- brand-boundary terms checked: ${fictionalBrandBoundaryTerms.length}`);

for (const warning of warnings) {
  console.warn(`warning: ${warning}`);
}

if (errors.length) {
  console.error("\nPublic readiness failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("OK: repository is clean enough to review as a public code sample.");
