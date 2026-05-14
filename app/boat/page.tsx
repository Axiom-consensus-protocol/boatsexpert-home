import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("boat");

export default function BoatPage() {
  return <LegacyPage slug="boat" />;
}
