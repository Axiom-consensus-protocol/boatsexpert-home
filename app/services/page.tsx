import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("services");

export default function ServicesPage() {
  return <LegacyPage slug="services" />;
}
