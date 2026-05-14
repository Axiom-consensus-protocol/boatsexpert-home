import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("catalog");

export default function CatalogPage() {
  return <LegacyPage slug="catalog" />;
}
