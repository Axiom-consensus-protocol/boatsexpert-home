import { LegacyPage } from "@/components/legacy/LegacyPage";
import { legacyMetadata } from "@/lib/legacy-metadata";

export const metadata = legacyMetadata("contact");

export default function ContactPage() {
  return <LegacyPage slug="contact" />;
}
