import QuickQuoteClient from "./QuickQuoteClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Quick Logistics & Cargo Quote | Wissler Cargo",
  description: "Receive a fast, tailored freight forwarding or customs clearing quote for your East African supply chain shipments.",
};

export default function QuickQuotePage() {
  return <QuickQuoteClient />;
}
