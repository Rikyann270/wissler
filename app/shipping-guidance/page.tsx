import ShippingGuidanceClient from "./ShippingGuidanceClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Guidance & Customs FAQs | Wissler Cargo",
  description: "Practical guide and regulatory advice for shipping cargo, container dimensions, HS codes, and URA customs clearance in Uganda.",
};

export default function ShippingGuidancePage() {
  return <ShippingGuidanceClient />;
}
