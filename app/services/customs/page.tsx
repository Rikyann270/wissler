"use client";

import { ServiceLayout, ServiceCard } from "@/components/layout/ServiceLayout";

const CUSTOMS_SERVICES: ServiceCard[] = [
  {
    id: "import-clearance",
    title: "Import Clearance",
    shortDesc: "Rapid processing of import declarations to prevent border delays.",
    longDesc: "Delays at the border cost money. Our dedicated customs brokers ensure your import declarations are processed swiftly and accurately. We handle all tariff classifications, duty calculations, and direct communication with border forces.",
    features: [
      "24/7 clearance processing",
      "Deferment account management",
      "Binding Tariff Information (BTI)",
      "Port Health & SPS coordination"
    ],
    image: "/home/132623.jpg",
    specs: [
      { label: "Processing Time", value: "Often Under 2 Hours" },
      { label: "Systems", value: "CHIEF / CDS Integration" }
    ]
  },
  {
    id: "export-docs",
    title: "Export Documentation",
    shortDesc: "Comprehensive handling of all export certificates and declarations.",
    longDesc: "Exporting goods globally requires a myriad of paperwork. We generate, verify, and submit all necessary documentation including Commercial Invoices, Certificates of Origin, EUR1s, and Export Accompanying Documents (EAD).",
    features: [
      "Chamber of Commerce legalization",
      "Letter of Credit compliance",
      "Automated AES submissions",
      "Consular documentation"
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070",
    specs: [
      { label: "Global Reach", value: "190+ Countries" },
      { label: "Accuracy", value: "99.9% First-Time Approval" }
    ]
  },
  {
    id: "consulting",
    title: "Trade & Tariff Consulting",
    shortDesc: "Strategic advice to minimize duty spend and ensure compliance.",
    longDesc: "International trade regulations are constantly shifting. Our consulting team performs deep dives into your supply chain to identify duty-saving opportunities, audit your current classifications, and establish Authorized Economic Operator (AEO) status.",
    features: [
      "Duty suspension applications",
      "Inward/Outward processing relief",
      "AEO certification guidance",
      "Post-clearance audits"
    ],
    image: "/home/102354.jpg",
    specs: [
      { label: "Service", value: "Retained or Project-Based" },
      { label: "Expertise", value: "Senior ex-Customs Officials" }
    ]
  },
  {
    id: "transit",
    title: "Transit & Bonded Warehousing",
    shortDesc: "Suspend duties while moving or storing goods across borders.",
    longDesc: "Improve your cash flow by delaying duty and tax payments until goods enter their final market. We manage T1/T2 transit documents and operate fully authorized bonded warehousing facilities across Europe.",
    features: [
      "T1/T2 document generation",
      "Comprehensive guarantee coverage",
      "Wet & dry bonded storage",
      "Customs warehousing procedures"
    ],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072",
    specs: [
      { label: "Bond Limit", value: "High-Value Capacity" },
      { label: "Storage", value: "Short & Long-Term" }
    ]
  }
];

export default function CustomsPage() {
  return (
    <ServiceLayout
      title="Customs & Compliance"
      subtitle="Frictionless cross-border trade. We navigate the complexities of international customs regulations so your supply chain doesn't have to."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
      services={CUSTOMS_SERVICES}
      bannerTitle="Discover technologies that set us apart and see how they work"
      bannerImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
      testimonial={{
        quote: "Since partnering with Wissler for our customs clearance, we've eliminated the costly port delays that used to plague our imports. Their team is proactive, incredibly knowledgeable, and always reachable.",
        author: "Emma Roberts",
        role: "Import Manager, Retail Logistics Co.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800"
      }}
    />
  );
}
