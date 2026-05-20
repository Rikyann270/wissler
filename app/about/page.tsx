import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Ticker } from "@/components/sections/Ticker"
import { ContactBanner } from "@/components/sections/ContactBanner"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import CurvedLoop from '@/components/CurvedLoop';

export default function AboutPage() {
  return (
    <>
      <Navbar transparent={true} />

      <main className="flex-1 bg-primary text-white">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-24 pb-12">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
              alt="Team discussing logistics"
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Global Reach from the <span className="text-white/80">Heart of Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                Custom logistics tailored to your business, beyond expectation. More than an invisible hand moving your cargo, acting as the driving force you require, with a sense of shared purpose and commitment.
                Solutions. Flexibility. Uncompromising grade. We're here to help you navigate complexity and eliminate stress with clarity, efficiency and friendly attention to detail.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" passHref legacyBehavior>
                  <Button variant="primary">Contact Us</Button>
                </Link>
                <Link href="/login" passHref legacyBehavior>
                  <Button variant="outline">Log In</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Separator */}
        <div className="bg-[#080d19] border-y border-white/5 relative z-20">
          <CurvedLoop
            marqueeText="We ✦ move shipment ✦ across ✦ the ✦ world ✦ with ✦ care ✦ and ✦ dedication ✦"
            speed={1.5}
            curveAmount={120}
            direction="left"
            interactive
            className="fill-accent font-light tracking-[0.05em] opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>


        {/* Intro / Problem Section */}
        <section className="py-20 md:py-24 bg-primary text-white relative">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-white/80">It's all about people</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Your business is unique and your needs are individual. We treat everyone with respect, <span className="text-accent">we listen and we respond, swiftly.</span>
              </h3>
              <div className="text-white/70 leading-relaxed text-lg">
                <p>
                  As an extension of your own freight operations, we take a hands-on, solutions-focused approach to meet your individual requirements and provide assurances. We form and shape a deep corporate understanding into every core competency to focus care and attention in detail against the values making it successful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact in Numbers */}
        <section className="py-20 md:py-24 bg-white text-primary">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl md:text-7xl font-black text-primary mb-2">40<span className="text-accent">+</span></span>
                <span className="text-sm uppercase tracking-widest text-mid font-bold">Years of Heritage</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl md:text-7xl font-black text-primary mb-2">100<span className="text-accent">k</span></span>
                <span className="text-sm uppercase tracking-widest text-mid font-bold">Annual Shipments</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl md:text-7xl font-black text-primary mb-2">50<span className="text-accent">+</span></span>
                <span className="text-sm uppercase tracking-widest text-mid font-bold">Global Hubs</span>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-5xl md:text-7xl font-black text-primary mb-2">24<span className="text-accent">/</span>7</span>
                <span className="text-sm uppercase tracking-widest text-mid font-bold">Active Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities / Fields Section */}
        <section className="py-20 md:py-24 bg-light border-y border-gray-200">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="text-4xl md:text-6xl font-bold text-primary max-w-2xl">
                Specialized fields of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-[#b8952b]">logistics expertise</span>
              </h2>
              <p className="text-mid max-w-sm text-lg font-medium">
                Modern solutions engineered for complex global supply chains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  title: "Freight Forwarding", 
                  desc: "Seamless multi-modal transport orchestration across air, sea, and land.",
                  image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=600" 
                },
                { 
                  title: "Customs Clearance", 
                  desc: "Navigating complex international regulations and border compliance with ease.",
                  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600"
                },
                { 
                  title: "Warehousing", 
                  desc: "Strategic inventory management in highly secure, modern facilities globally.",
                  image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600"
                },
                { 
                  title: "Project Cargo", 
                  desc: "Handling oversized, heavy-lift, and highly critical specialist shipments.",
                  image: "https://images.unsplash.com/photo-1541887089-13fc5b52c163?q=80&w=600"
                }
              ].map((field, idx) => (
                <div key={idx} className="bg-white rounded-sm shadow-sm border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group overflow-hidden flex flex-col">
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={field.image} 
                      alt={field.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full mb-4 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <div className="w-3 h-3 bg-accent group-hover:bg-white rounded-sm rotate-45 transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">{field.title}</h4>
                    <p className="text-mid leading-relaxed text-sm">{field.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="py-20 md:py-24 bg-primary text-white border-t border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-6xl font-bold">Our People</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Person 1 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                    alt="Managing Director"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold mb-2">Paul Pedley</h4>
                <p className="text-accent text-sm tracking-wider uppercase">Managing Director</p>
              </div>

              {/* Person 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974"
                    alt="Finance Director"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold mb-2">Mohammed Ali Lunat</h4>
                <p className="text-accent text-sm tracking-wider uppercase">Finance Director</p>
              </div>

              {/* Person 3 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
                    alt="Operations Director"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h4 className="text-2xl font-bold mb-2">James Leea</h4>
                <p className="text-accent text-sm tracking-wider uppercase">Operations & Commercial Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 md:py-32 bg-light text-primary">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-primary">Our Values</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Value 1 */}
              <div className="bg-primary-light text-white p-10 md:p-14 rounded-sm flex flex-col justify-between min-h-[360px] group hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Straightforward &<br />Supportive</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    We listen, talk to you as humans, and always look to help. Whether it's a big challenge or a routine request, we prioritize items keeping things straightforward. Our people are the people behind it.
                  </p>
                </div>
                <div className="text-5xl font-black italic tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity mt-8">WISSLER</div>
              </div>

              {/* Value 2 */}
              <div className="bg-primary text-white p-10 md:p-14 rounded-sm flex flex-col justify-between min-h-[360px] group hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Reliable &<br />Reputable</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    We don't trust to luck, we manage and organize. An expectation set is a promise kept. We keep our delivery promises, treating every client with equal care.
                  </p>
                </div>
                <div className="text-5xl font-black italic tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity mt-8">WISSLER</div>
              </div>

              {/* Value 3 */}
              <div className="bg-primary-light text-white p-10 md:p-14 rounded-sm flex flex-col justify-between min-h-[360px] group hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Agile &<br />Adaptable</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    In a fast-moving world, flexibility is key. We pivot when necessary and adapt to your unique challenges, providing tailored solutions that fit perfectly.
                  </p>
                </div>
                <div className="text-5xl font-black italic tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity mt-8">WISSLER</div>
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
