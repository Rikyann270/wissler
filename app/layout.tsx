import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wisslerlogistics.com"),
  title: {
    default: "Wissler Cargo | Logistics. The Right Way.",
    template: "%s | Wissler Cargo",
  },
  description: "Wissler Cargo - World Class Global Reach. Sea, Air, Road and Special Cargo Logistics across East Africa and globally.",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://www.wisslerlogistics.com/",
    siteName: "Wissler Cargo",
    images: [
      {
        url: "/home/71414.jpg",
        width: 1200,
        height: 630,
        alt: "Wissler Cargo Operations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wissler Cargo | Logistics. The Right Way.",
    description: "Wissler Cargo - World Class Global Reach. Sea, Air, Road and Special Cargo Logistics.",
    images: ["/home/71414.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.wisslerlogistics.com/#organization",
    "name": "Wissler Cargo",
    "url": "https://www.wisslerlogistics.com/",
    "logo": "https://www.wisslerlogistics.com/favicon.ico",
    "image": "https://www.wisslerlogistics.com/home/71414.jpg",
    "telephone": "+256 414 123456",
    "email": "operations@wisslerlogistics.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 12, Kampala Road",
      "addressLocality": "Kampala",
      "addressRegion": "Central Region",
      "postalCode": "00000",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 0.313611,
      "longitude": 32.581111
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/wissler-cargo",
      "https://www.facebook.com/wisslercargo"
    ]
  };

  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable, "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
