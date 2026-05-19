import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroVideo } from "@/components/sections/HeroVideo"
import { Ticker } from "@/components/sections/Ticker"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { EditorialBlock } from "@/components/sections/EditorialBlock"

export default function CustomsPage() {
  return (
    <>
      <Navbar transparent={true} />
      
      <main className="flex-1">
        <HeroVideo 
          headline={<>Customs Cleared. <br className="hidden md:block" />Paperwork Handled.</>}
          posterSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Quick Quote", href: "/quick-quote", variant: "outline" }
          ]}
        />

        {/* Service Blocks */}
        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070"
          imagePosition="right"
          heading="Expert Customs Team"
          body={
            <>
              <p>Delays at borders can cost time and money. Our dedicated in-house customs clearance team ensures that all your import and export declarations are processed swiftly and accurately.</p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-primary font-semibold">
                <li>Import/Export Declarations</li>
                <li>Tariff Classification</li>
                <li>Duty Management</li>
                <li>Compliance Advisory</li>
              </ul>
            </>
          }
          ctaLabel="Get In Touch"
          ctaHref="/contact"
        />

        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070"
          imagePosition="left"
          heading="Regulatory Updates & Compliance"
          darkMode={true}
          body={
            <p>International trade laws are constantly evolving. Wissler Cargo keeps you ahead of the curve, providing proactive regulatory updates and ensuring your supply chain remains fully compliant with all international trade agreements.</p>
          }
        />

        <Ticker items={["Automotive", "Consumer Goods", "Chemicals", "Household", "Engineering", "Technology", "Food & Beverage", "Construction"]} />
        <ContactBanner />
      </main>
      
      <Footer />
    </>
  )
}
