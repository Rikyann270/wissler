import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroVideo } from "@/components/sections/HeroVideo"
import { Ticker } from "@/components/sections/Ticker"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { Shield, Target, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar transparent={true} />
      
      <main className="flex-1">
        <HeroVideo 
          headline="About Wissler Cargo"
          subheadline="Decades of experience. A relentless drive for excellence. We are the logistics partner you can trust."
          posterSrc="https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=2070"
        />

        {/* Company Story */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              <div className="flex flex-col">
                <h2 className="text-[32px] md:text-[42px] font-bold leading-tight mb-8 text-primary">
                  Our Story
                </h2>
                <div className="text-lg leading-relaxed space-y-6 text-mid">
                  <p>
                    Founded on the principles of reliability and transparency, Wissler Cargo has grown from a regional transporter to a global logistics powerhouse. We understand that in modern supply chains, certainty is the most valuable commodity.
                  </p>
                  <p>
                    Our operations span continents, utilizing a carefully vetted network of land, sea, and air partners. We don't just move freight; we provide strategic logistics solutions that give our clients a competitive edge in their respective markets.
                  </p>
                  <p>
                    Every shipment is overseen by our dedicated team of professionals who share a single goal: delivering your cargo exactly when and where it's needed, without compromise.
                  </p>
                </div>
              </div>

              <div className="relative w-full h-full min-h-[400px] md:min-h-[600px] overflow-hidden rounded-sm">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084" 
                  alt="Team collaboration" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 md:py-24 bg-light border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <h2 className="text-[32px] md:text-[42px] font-bold text-center text-primary mb-16">
              Our Core Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 shadow-sm text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 text-accent">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Unwavering Reliability</h3>
                <p className="text-mid">We do what we say we will do. Our schedules are fixed, our routes are tested, and our delivery promises are guaranteed.</p>
              </div>
              
              <div className="bg-white p-10 shadow-sm text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 text-accent">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Complete Transparency</h3>
                <p className="text-mid">Clear communication at every step. No hidden fees, no obscured tracking. Just honest, open dialogue about your cargo.</p>
              </div>
              
              <div className="bg-white p-10 shadow-sm text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6 text-accent">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">True Partnership</h3>
                <p className="text-mid">We act as an extension of your business. Your success is our success, and we build long-term relationships based on mutual trust.</p>
              </div>
            </div>
          </div>
        </section>

        <Ticker items={["Automotive", "Consumer Goods", "Chemicals", "Household", "Engineering", "Technology", "Food & Beverage", "Construction"]} />
        <ContactBanner />
      </main>
      
      <Footer />
    </>
  )
}
