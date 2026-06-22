import { ServiceLayout, ServiceCard } from "@/components/layout/ServiceLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Cargo & Dangerous Goods Transport Uganda",
  description: "Specialized logistics for out-of-gauge project cargo, exhibition shipping, and dangerous goods (ADR) transport across East Africa.",
};

const SPECIAL_SERVICES: ServiceCard[] = [
  {
    id: "project-cargo",
    title: "Project Cargo & Heavy Lift",
    shortDesc: "Engineering-driven transport for out-of-gauge and massive infrastructure.",
    longDesc: "Project cargo requires precise engineering, meticulous planning, and specialized equipment. We manage the end-to-end transportation of oversized, heavy-lift items for the construction, energy, and aerospace sectors.",
    features: [
      "Route surveying & bridge analysis",
      "Hydraulic multi-axle trailers",
      "Crane operations & rigging",
      "Police escorts & permitting"
    ],
    image: "https://images.unsplash.com/photo-1541887089-13fc5b52c163?q=80&w=2070",
    specs: [
      { label: "Capacity", value: "Up to 500+ Tons" },
      { label: "Planning", value: "3D CAD Simulation" }
    ]
  },
  {
    id: "hazardous",
    title: "Hazardous Goods (ADR/DGR)",
    shortDesc: "Fully certified and compliant transport of dangerous goods.",
    longDesc: "Safety and compliance are non-negotiable when transporting hazardous materials. Our specialized teams are certified in ADR (road), IMDG (sea), and DGR (air) to safely handle and transport chemicals, batteries, and other restricted goods.",
    features: [
      "Certified DGSA specialists",
      "Specialized packaging solutions",
      "Strict regulatory compliance",
      "Emergency response protocols"
    ],
    image: "/home/Vervoer-schadelijke-stoffen-TFF-scaled.webp",
    specs: [
      { label: "Certification", value: "ADR, IMDG, IATA DGR" },
      { label: "Classes", value: "Class 1-9 (Subject to limits)" }
    ]
  },
  {
    id: "pharma",
    title: "Pharma & Healthcare",
    shortDesc: "GDP compliant cold-chain logistics for life sciences.",
    longDesc: "The pharmaceutical industry requires flawless execution. Our GDP-compliant network ensures strict temperature control, high security, and extreme hygiene standards for vaccines, biologics, and active pharmaceutical ingredients.",
    features: [
      "Active & passive thermal packaging",
      "Continuous data-logging",
      "Highly secure transit hubs",
      "GDP & ISO 9001 certified"
    ],
    image: "/home/warehouseblog.png",
    specs: [
      { label: "Temp Zones", value: "CRT, +2°C to +8°C, Deep Frozen" },
      { label: "Compliance", value: "Good Distribution Practice" }
    ]
  },
  {
    id: "events",
    title: "Events & Exhibitions",
    shortDesc: "Time-critical logistics for global trade shows and concerts.",
    longDesc: "The show must go on. We provide dedicated logistics for global touring events, trade fairs, and exhibitions. From ATA Carnet management to on-site forklift assistance, we handle the backstage logistics seamlessly.",
    features: [
      "ATA Carnet customs processing",
      "On-site handling & rigging",
      "Empty case storage",
      "JIT (Just In Time) delivery"
    ],
    image: "/home/UHD5-OB-VAN-026.webp",
    specs: [
      { label: "Service Level", value: "24/7 Dedicated Support" },
      { label: "Coverage", value: "Global Venues & Arenas" }
    ]
  }
];

export default function SpecialServicesPage() {
  return (
    <ServiceLayout
      title="Special Services"
      subtitle="Complex logistical challenges solved. From heavy lift project cargo to highly regulated pharmaceuticals, we handle the extraordinary."
      heroImage="https://images.unsplash.com/photo-1541887089-13fc5b52c163?q=80&w=2070"
      services={SPECIAL_SERVICES}
      bannerTitle="Discover technologies that set us apart and see how they work"
      bannerImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075"
      testimonial={{
        quote: "Moving a 120-ton gas turbine across three international borders required immense planning. Wissler's Project Cargo team handled the route surveys, police escorts, and crane operations flawlessly.",
        author: "Kagwa David",
        role: "Lead Engineer, Apex Energy",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800"
      }}
    />
  );
}
