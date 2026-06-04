export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  content: string[];
  highlights?: string[];
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "expansion-east-africa",
    title: "Wissler Cargo Enhances Cross-Border Transit Times in East Africa",
    excerpt: "We have optimized key transit routes and established new support hubs across Kenya, Uganda, and Rwanda to provide smoother customs handling and reduced transit times.",
    category: "Company Update",
    image: "/home/91104.jpg",
    date: "May 28, 2026",
    content: [
      "Wissler Cargo is proud to announce a strategic initiative aimed at streamlining cross-border transport across East Africa. Over the past six months, we have analyzed regional bottlenecks and deployed target investments to critical transit corridors linking Mombasa and Dar es Salaam to landlocked hubs in Uganda and Rwanda.",
      "As part of this expansion, we have established dedicated clearing offices at major border crossings, including Malaba and Gatuna. These offices are staffed by senior customs experts who work directly with local customs authorities to resolve clearance holds proactively.",
      "Additionally, we have upgraded our local fleet with advanced tracking sensors integrated with regional Single Customs Territory systems. This ensures real-time location visibility and faster customs processing, allowing our clients to plan their operations with high predictability.",
      "Through these enhancements, we aim to reduce transit times by up to 25%, establishing Wissler Cargo as the premier choice for reliable, efficient overland freight forwarding in East Africa."
    ],
    highlights: [
      "Establishment of dedicated border clearing offices",
      "Direct integration with regional Single Customs Territory systems",
      "Upgraded fleet tracking and real-time transit alerts",
      "Up to 25% reduction in cross-border transit times"
    ]
  },
  {
    slug: "customs-compliance-2026",
    title: "Preparing Your Supply Chain for 2026 Regional Customs Updates",
    excerpt: "A guide on upcoming electronic cargo tracking systems (ECTS) and documentation updates across East Africa, and how to prepare your business.",
    category: "Industry Insight",
    image: "/home/4030.jpg",
    date: "June 02, 2026",
    content: [
      "The East African logistics landscape is undergoing significant digital transformation. Starting late 2026, customs authorities are introducing mandatory integrations with electronic cargo tracking systems (ECTS) for all transit goods, along with stricter digital documentation checks.",
      "These updates aim to combat transit diversion and accelerate border clearance. However, companies that do not align their operations with the new specifications risk experiencing severe compliance delays and unexpected demurrage charges.",
      "To ensure uninterrupted supply chain operations, we recommend businesses to audit their current documentation processes immediately. Transitioning from paper-based invoices to qualified e-invoices and ensuring HS codes are double-checked for compliance will prevent most automated flags.",
      "At Wissler Cargo, our compliance team has already integrated our operations with the new ECTS portals. We are actively helping our clients audit their supply chain processes to transition smoothly into the new regulatory environment."
    ],
    highlights: [
      "Stricter digital documentation checks and e-invoice mandates",
      "Mandatory integration with regional electronic cargo tracking systems (ECTS)",
      "Actionable guidelines for auditing cargo descriptions and HS codes",
      "Dedicated consulting services from Wissler compliance experts"
    ]
  }
];
