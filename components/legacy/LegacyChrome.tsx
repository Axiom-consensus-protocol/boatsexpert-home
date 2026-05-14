import { getLegacyChrome } from "@/lib/legacy-content";
import { HtmlFragment } from "./HtmlFragment";

export function LegacyHeader() {
  return <HtmlFragment label="chrome:header" html={getLegacyChrome("header")} />;
}

export function LegacyFooter() {
  return <HtmlFragment label="chrome:footer" html={getLegacyChrome("footer")} />;
}
