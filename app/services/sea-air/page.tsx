import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroVideo } from "@/components/sections/HeroVideo"
import { Ticker } from "@/components/sections/Ticker"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { EditorialBlock } from "@/components/sections/EditorialBlock"

export default function SeaAirPage() {
  return (
    <>
      <Navbar transparent={true} />
      
      <main className="flex-1">
        <HeroVideo 
          headline={<>Global Reach. <br className="hidden md:block" />Sea & Air Freight Solutions.</>}
          posterSrc="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Quick Quote", href: "/quick-quote", variant: "outline" }
          ]}
        />

        {/* Service Blocks */}
        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070"
          imagePosition="right"
          heading="Global Network. Local Expertise."
          body={
            <>
              <p>When time is critical or distances are vast, our Sea and Air freight solutions deliver. We leverage strong partnerships with major carriers to provide competitive rates and reliable transit times across the globe.</p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-primary font-semibold">
                <li>Full Container Load (FCL)</li>
                <li>Less than Container Load (LCL)</li>
                <li>Commercial Air Freight</li>
                <li>Express Air Charters</li>
              </ul>
            </>
          }
          ctaLabel="Get In Touch"
          ctaHref="/contact"
        />

        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=2070"
          imagePosition="left"
          heading="Real-Time Tracking & Documentation"
          darkMode={true}
          body={
            <p>International freight requires meticulous attention to detail. We handle the complexities of cross-border documentation, letters of credit, and customs compliance, whilst providing you with real-time visibility of your shipment's progress.</p>
          }
        />

        <Ticker items={["Automotive", "Consumer Goods", "Chemicals", "Household", "Engineering", "Technology", "Food & Beverage", "Construction"]} />
        <ContactBanner />
      </main>
      
      <Footer />
    </>
  )
}
