import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("shop");

export default function ShopPage() {
  return <LegacyPage slug="shop" />;
}
