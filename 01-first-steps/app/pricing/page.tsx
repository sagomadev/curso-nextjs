import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "This is the pricing page",
  keywords: ["pricing", "page"],
};

export default function PricingPage() {
  return (
    <>
      <h1>Pricing</h1>
      <p>This is the pricing page</p>
    </>
  );
}
