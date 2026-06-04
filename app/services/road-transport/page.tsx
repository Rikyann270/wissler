"use client";

import { ServiceLayout, ServiceCard } from "@/components/layout/ServiceLayout";

const ROAD_SERVICES: ServiceCard[] = [
  {
    id: "refrigerated",
    title: "Refrigerated Transportation",
    shortDesc: "Temperature-controlled logistics ensuring cold chain integrity.",
    longDesc: "Our state-of-the-art refrigerated fleet is specifically designed for temperature-sensitive cargo. With live remote monitoring and dual-evaporator trailers, we guarantee strict temperature compliance from origin to destination.",
    features: [
      "Continuous temperature tracking",
      "Multi-temp trailer compartments",
      "Real-time GPS visibility",
      "GDP compliant operations"
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
    specs: [
      { label: "Temp Range", value: "-25°C to +25°C" },
      { label: "Capacity", value: "Up to 33 Pallets" }
    ]
  },
  {
    id: "ftl",
    title: "FTL Services",
    shortDesc: "Full Truckload solutions for high-volume, direct shipments.",
    longDesc: "When volume dictates, our FTL service provides dedicated, uninterrupted transport. Ideal for large shipments requiring maximum security, speed, and point-to-point delivery without cross-docking.",
    features: [
      "Dedicated truck & driver",
      "Direct point-to-point routing",
      "Reduced handling & risk",
      "Expedited transit times"
    ],
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075",
    specs: [
      { label: "Max Weight", value: "24,000 kg" },
      { label: "Trailer Type", value: "Curtainsider / Box" }
    ]
  },
  {
    id: "ltl",
    title: "LTL Services",
    shortDesc: "Cost-effective Less Than Truckload consolidation network.",
    longDesc: "Optimize your transport spend with our extensive LTL network. We consolidate partial loads strategically across our European hubs, delivering the perfect balance of cost-efficiency and reliable scheduling.",
    features: [
      "Scheduled weekly departures",
      "Cost-shared transportation",
      "Extensive hub-and-spoke network",
      "Full track and trace"
    ],
    image: "/home/77668.jpg",
    specs: [
      { label: "Min Load", value: "1 Pallet" },
      { label: "Transit Time", value: "2-5 Days" }
    ]
  },
  {
    id: "express",
    title: "Express Vans",
    shortDesc: "Rapid, dedicated van service for time-critical deliveries.",
    longDesc: "When tomorrow is too late, our express van fleet is ready to dispatch within hours. Ideal for urgent spare parts, critical components, or high-value goods requiring immediate, non-stop delivery.",
    features: [
      "2-hour dispatch capability",
      "Non-stop direct delivery",
      "Double manned driver teams",
      "Door-to-door courier service"
    ],
    image: "/home/wissler_van.png",
    specs: [
      { label: "Payload", value: "Up to 1,200 kg" },
      { label: "Vehicle", value: "Sprinter / Luton Box" }
    ]
  }
];

export default function RoadTransportPage() {
  return (
    <ServiceLayout
      title="Road Transport Solutions"
      subtitle="Safe, efficient, and scheduled road freight services connecting your business to the entire European continent."
      heroImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
      services={ROAD_SERVICES}
      bannerTitle="Discover technologies that set us apart and see how they work"
      bannerImage="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075"
      testimonial={{
        quote: "Working with Wissler Cargo has significantly optimized our European supply chain operations. Their proactive communication and reliable FTL schedules have reduced our transit times by over 15%.",
        author: "Kajimu Helens",
        role: "Supply Chain Director",
        image: "/home/102075.jpg"
      }}
    />
  );
}
