import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("cart");

export default function CartPage() {
  return <LegacyPage slug="cart" />;
}
