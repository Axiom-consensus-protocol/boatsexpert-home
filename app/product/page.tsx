import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("product");

export default function ProductPage() {
  return <LegacyPage slug="product" />;
}
