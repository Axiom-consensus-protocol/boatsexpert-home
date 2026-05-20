/* eslint-disable @next/next/no-css-tags -- legacy chrome/theme CSS is intentionally served as static files */
import type { Metadata, Viewport } from "next";
import {
  Fraunces,
  Instrument_Sans,
  Instrument_Serif,
  Inter,
  JetBrains_Mono,
  Newsreader,
} from "next/font/google";
import Script from "next/script";
import { ChromeGuard } from "@/components/legacy/ChromeGuard";
import { LegacyFooter, LegacyHeader } from "@/components/legacy/LegacyChrome";
import { ThemePolish } from "@/components/legacy/ThemePolish";
import { getLegacyI18nJson } from "@/lib/legacy-content";
import { defaultOgDescription, defaultOgImage, defaultOgTitle } from "@/lib/og";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-fraunces",
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-instrument-sans",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-instrument-serif",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-newsreader",
});

const fontVariables = [
  fraunces.variable,
  instrumentSans.variable,
  instrumentSerif.variable,
  inter.variable,
  jetbrainsMono.variable,
  newsreader.variable,
].join(" ");

const themeBootstrap = `
(function(){try{var p=new URLSearchParams(location.search).get("theme");var t=(p==="day"||p==="night")?p:localStorage.getItem("am_theme");if(t!=="day"&&t!=="night"){t="day";}document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t==="night"?"dark":"light";}catch(e){}})();
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
    icon: [{ url: "/assets/logo/logo-brass.svg", type: "image/svg+xml" }],
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
      className={fontVariables}
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
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
