import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { privacyPolicySections } from "@/lib/original-site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Axiom Marine",
  description: "Privacy policy information from the original Axiom Marine site.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <OriginalInfoPage
      eyebrow="Original legal page"
      title="Privacy Policy"
      lead="The original privacy page covers customer data, order and payment handling, forms, newsletter, cookies, third-party services, data sharing, retention, rights and security."
      source="https://marine.axiomprotocol.org/privacy-policy/"
      sections={privacyPolicySections}
      asideTitle="Privacy sections"
      asideItems={[
        "Data collected",
        "Legal basis",
        "Orders",
        "Newsletter",
        "Cookies",
        "Retention",
        "Rights",
        "Security",
        "Contact",
      ]}
    />
  );
}
