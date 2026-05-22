"use client";

import { ServiceLayout, ServiceCard } from "@/components/layout/ServiceLayout";

const SEA_AIR_SERVICES: ServiceCard[] = [
  {
    id: "fcl",
    title: "Ocean Freight (FCL)",
    shortDesc: "Full Container Load shipments for high volume ocean transport.",
    longDesc: "Our Full Container Load (FCL) service provides dedicated 20ft, 40ft, and reefer containers for your goods. We leverage strategic partnerships with major shipping lines to secure priority space and competitive rates on all major global trade lanes.",
    features: [
      "Priority vessel space allocation",
      "Door-to-door or port-to-port",
      "Temperature-controlled reefers",
      "Real-time vessel tracking"
    ],
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070",
    specs: [
      { label: "Container Types", value: "20ft, 40ft, HC, OT" },
      { label: "Transit Time", value: "Schedule Dependent" }
    ]
  },
  {
    id: "lcl",
    title: "Ocean Freight (LCL)",
    shortDesc: "Less than Container Load consolidation for cost-efficiency.",
    longDesc: "When your cargo doesn't fill an entire container, our LCL consolidation service is the perfect solution. You only pay for the volume you use, while benefiting from regular, weekly departures to and from major global ports.",
    features: [
      "Pay only for space utilized",
      "Weekly scheduled sailings",
      "Secure CFS handling",
      "End-to-end milestone visibility"
    ],
    image: "/home/735.jpg",
    specs: [
      { label: "Pricing Model", value: "Per CBM / Weight" },
      { label: "Frequency", value: "Weekly Departures" }
    ]
  },
  {
    id: "air-freight",
    title: "Air Freight Forwarding",
    shortDesc: "Expedited global air transport for time-sensitive cargo.",
    longDesc: "Time is money. Our air freight forwarding solutions ensure your most urgent shipments reach their global destinations securely and rapidly. From next-flight-out services to deferred economic options, we balance speed with cost.",
    features: [
      "Express & Deferred options",
      "IATA certified handling",
      "Customs pre-clearance",
      "Door-to-airport & Door-to-door"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074",
    specs: [
      { label: "Speed", value: "1-5 Days Global" },
      { label: "Handling", value: "Standard & DG" }
    ]
  },
  {
    id: "air-charter",
    title: "Air Charter Solutions",
    shortDesc: "Exclusive aircraft chartering for specialized or massive loads.",
    longDesc: "For exceptional cargo that commercial airliners cannot accommodate, we offer full and part aircraft charter services. Whether it's heavy machinery, humanitarian aid, or out-of-gauge equipment, we source the perfect aircraft for your mission.",
    features: [
      "Access to global freighter network",
      "Antonov & Boeing specialists",
      "24/7 dedicated flight team",
      "Remote location capabilities"
    ],
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=2070",
    specs: [
      { label: "Aircraft Types", value: "B747F, AN-124, IL-76" },
      { label: "Availability", value: "On-Demand 24/7" }
    ]
  }
];

export default function SeaAirPage() {
  return (
    <ServiceLayout
      title="Sea & Air Freight"
      subtitle="Connecting continents through strategic ocean and air logistics, delivering your cargo globally with speed and precision."
      heroImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070"
      services={SEA_AIR_SERVICES}
      bannerTitle="Discover technologies that set us apart and see how they work"
      bannerImage="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072"
      testimonial={{
        quote: "Wissler's air charter team pulled off a miracle for us. We had a critical machinery failure in a remote mine, and they managed to source an aircraft and deliver the 15-ton replacement part within 48 hours.",
        author: "Henry Kagaba",
        role: "VP Operations, Global Mining Inc.",
        image: "/home/2148833055.jpg"
      }}
    />
  );
}
