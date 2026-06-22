import ContactClient from "./ContactClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Wissler Cargo Kampala",
  description: "Get in touch with Wissler Cargo's Kampala office. Talk to our logistics, clearance, and accounts teams for custom cargo support.",
};

export default function ContactPage() {
  return <ContactClient />;
}
