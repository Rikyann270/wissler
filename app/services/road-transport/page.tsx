import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroVideo } from "@/components/sections/HeroVideo"
import { Ticker } from "@/components/sections/Ticker"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { EditorialBlock } from "@/components/sections/EditorialBlock"

export default function RoadTransportPage() {
  return (
    <>
      <Navbar transparent={true} />
      
      <main className="flex-1">
        <HeroVideo 
          headline={<>Road Freight. <br className="hidden md:block" />Reliable. Scheduled. <br className="hidden md:block" />Europe-Wide.</>}
          posterSrc="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
          buttons={[
            { label: "Contact Us", href: "/contact", variant: "primary" },
            { label: "Quick Quote", href: "/quick-quote", variant: "outline" }
          ]}
        />

        {/* Key Regions Grid */}
        <section className="py-20 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <h2 className="text-[32px] md:text-[42px] font-bold mb-16 text-center">
              Key Regions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Uganda', 'Kenya', 'Tanzania', 'Rwanda'].map((country) => (
                <div key={country} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-accent mb-6 uppercase tracking-wider">{country}</h3>
                  <ul className="space-y-3 text-white/80 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span> Scheduled departures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span> Groupage & full loads
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span> Express options
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span> Remote locations
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Blocks */}
        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075"
          imagePosition="right"
          heading="Reliable Transport Solutions"
          body={
            <>
              <p>Our road transport network is the backbone of our logistics operations. We offer comprehensive coverage with scheduled departures, ensuring your supply chain remains predictable and robust.</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Groupage, part and full loads</li>
                <li>Express vans and dedicated trucks</li>
                <li>Tail-lift deliveries</li>
                <li>Dangerous goods (ADR) transport</li>
              </ul>
            </>
          }
          ctaLabel="Get In Touch"
          ctaHref="/contact"
        />

        <EditorialBlock 
          imageSrc="https://images.unsplash.com/photo-1616431940985-79a17387cc83?q=80&w=2070"
          imagePosition="left"
          heading="Service Without Compromise"
          darkMode={true}
          body={
            <p>Every load matters. From a single pallet to a full trailer, we apply the same rigorous standards of care, tracking, and communication. Our experienced drivers and modern fleet ensure your cargo is always in safe hands.</p>
          }
        />

        <Ticker items={["Automotive", "Consumer Goods", "Chemicals", "Household", "Engineering", "Technology", "Food & Beverage", "Construction"]} />
        <ContactBanner />
      </main>
      
      <Footer />
    </>
  )
}
