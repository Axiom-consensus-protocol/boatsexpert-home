import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";

export const metadata: Metadata = {
  title: "My Account | BoatsExpert",
  description: "Original account entry point mapped into the new BoatsExpert site.",
  alternates: { canonical: "/my-account" },
};

export default function MyAccountPage() {
  return (
    <OriginalInfoPage
      eyebrow="Original WooCommerce page"
      title="My Account"
      lead="The original site included a customer account area. This route preserves the entry point and explains where order history, customer details and dealer communication belong in the new structure."
      source="https://boatsexpert.com/my-account/"
      cards={[
        { title: "Order history", text: "A future account flow can show shop orders, quote requests and service desk history." },
        { title: "Customer details", text: "Contact information, delivery city and preferred language stay connected to the sales desk." },
        { title: "Dealer support", text: "Boat orders often require human confirmation, so the account page remains linked to contact routes." },
      ]}
    />
  );
}
