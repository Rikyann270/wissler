import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroVideo } from "@/components/sections/HeroVideo"
import { Ticker } from "@/components/sections/Ticker"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { EditorialBlock } from "@/components/sections/EditorialBlock"

export default function SpecialServicesPage() {
  return (
    <>
      <Navbar transparent={true} />
      
      <main className="flex-1">
        <HeroVideo 
          headline={<>Beyond Standard. <br className="hidden md:block" />Special Cargo Solutions.</>}
          posterSrc="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=2070"
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Quick Quote", href: "/quick-quote", variant: "outline" }
          ]}
        />

        {/* Service Blocks */}
        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1502425405021-d7247488f2bb?q=80&w=2070"
          imagePosition="right"
          heading="Specialist Handling"
          body={
            <>
              <p>Not all cargo fits in a standard container or trailer. When your logistics requirements fall outside the norm, our Special Services division takes over, providing bespoke project management and specialist equipment.</p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-primary font-semibold">
                <li>Dangerous Goods (ADR)</li>
                <li>Out-of-Gauge / Project Cargo</li>
                <li>Exhibition & Event Logistics</li>
                <li>Out-of-Hours Delivery</li>
              </ul>
            </>
          }
          ctaLabel="Get In Touch"
          ctaHref="/contact"
        />

        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1616431940985-79a17387cc83?q=80&w=2070"
          imagePosition="left"
          heading="Secure & Flexible Transport"
          darkMode={true}
          body={
            <p>From high-value goods requiring enhanced security to time-critical deliveries that cannot fail, we tailor every aspect of the transport to meet your exact specifications, offering flexibility that standard networks cannot provide.</p>
          }
        />

        <Ticker items={["Automotive", "Consumer Goods", "Chemicals", "Household", "Engineering", "Technology", "Food & Beverage", "Construction"]} />
        <ContactBanner />
      </main>
      
      <Footer />
    </>
  )
}
