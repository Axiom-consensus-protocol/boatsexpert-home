import type { Metadata } from "next";
import { OriginalInfoPage } from "@/components/original/OriginalInfoPage";

export const metadata: Metadata = {
  title: "Checkout | Axiom Marine",
  description: "Original checkout entry point mapped into the new Axiom Marine site.",
  alternates: { canonical: "/checkout" },
};

export default function CheckoutPage() {
  return (
    <OriginalInfoPage
      eyebrow="Original WooCommerce page"
      title="Checkout"
      lead="The original site had a WooCommerce checkout route. In the new static-first site this page keeps the checkout entry point visible and directs complex boat orders toward the sales desk."
      source="https://marine.axiomprotocol.org/checkout/"
      cards={[
        { title: "Cart review", text: "Check products, quantities, prices and fit-out notes before submitting the order." },
        { title: "Dealer confirmation", text: "Large products such as boats, motors and trailers need stock and delivery confirmation." },
        { title: "Secure handover", text: "The final payment and handover path is coordinated with Axiom Marine sales." },
      ]}
    />
  );
}
