import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("home");

export default function HomePage() {
  return <LegacyPage slug="home" />;
}
