import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { ChromeGuard } from "@/components/legacy/ChromeGuard";
import { LegacyFooter, LegacyHeader } from "@/components/legacy/LegacyChrome";
import { ThemePolish } from "@/components/legacy/ThemePolish";
import { getLegacyI18nJson } from "@/lib/legacy-content";
import { defaultOgDescription, defaultOgImage, defaultOgTitle } from "@/lib/og";
import "./globals.css";

const themeBootstrap = `
(function(){try{var p=new URLSearchParams(location.search).get("theme");var t=(p==="day"||p==="night")?p:localStorage.getItem("bx_theme");if(t!=="day"&&t!=="night"){t="day";}document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t==="night"?"dark":"light";}catch(e){}})();
`;

export const metadata: Metadata = {
  metadataBase: new URL("https://marine.axiomprotocol.org"),
  title: {
    default: "Axiom Marine",
    template: "%s",
  },
  description: defaultOgDescription,
  openGraph: {
    title: defaultOgTitle,
    description: defaultOgDescription,
    url: "/",
    siteName: "Axiom Marine",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultOgTitle,
    description: defaultOgDescription,
    images: [defaultOgImage.url],
  },
  icons: {
    icon: [
      { url: "/assets/logo/logo-brass.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A2540",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const i18nJson = getLegacyI18nJson();

  return (
    <html
      lang="en"
      data-theme="day"
      data-i18n-attr="lang:_lang,title:site.title"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500;6..72,600;6..72,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/theme.css" />
        <link rel="stylesheet" href="/chrome.css" />
        <script
          id="i18n-data"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: i18nJson }}
        />
      </head>
      <body>
        <LegacyHeader />
        {children}
        <LegacyFooter />
        <ChromeGuard />
        <ThemePolish />
        <Script src="/i18n.js" strategy="afterInteractive" />
        <Script src="/legacy-runtime.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
