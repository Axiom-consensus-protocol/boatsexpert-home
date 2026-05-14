import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";
import { returnPolicySections } from "@/lib/original-site-data";

export const metadata: Metadata = {
  title: "Delivery, Returns and Refund Policy | BoatsExpert",
  description: "Delivery, return and refund rules from the original BoatsExpert site.",
  alternates: { canonical: "/return-policy" },
};

export default function ReturnPolicyPage() {
  return (
    <OriginalInfoPage
      eyebrow="Original legal page"
      title="Delivery, Returns and Refund Policy"
      lead="The original site separates standard delivery, large-product delivery, return eligibility, exclusions, return shipping, refunds and problem orders. The same information is restored here in a clearer structure."
      source="https://boatsexpert.com/return-policy/"
      sections={returnPolicySections}
      asideTitle="Policy sections"
      asideItems={["Delivery", "Delivery time", "Order processing", "Large products", "Returns", "Refunds", "Defective products"]}
    />
  );
}
