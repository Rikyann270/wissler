import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroVideo } from "@/components/sections/HeroVideoHome"
import { Ticker } from "@/components/sections/Ticker"
import { ServiceCard } from "@/components/sections/ServiceCard"
import { ServiceCarousel } from "@/components/sections/ServiceCarousel"
import { AboutBanner } from "@/components/sections/AboutBanner"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import Hyperspeed from "@/components/Hyperspeed";


import Link from "next/link"
import SplitText from "@/components/SplitText";


const INDUSTRY_TICKER = [
  "Automotive", "Consumer Goods", "Chemicals", "Household",
  "Engineering", "Technology", "Food & Beverage", "Construction",
  "Pharmaceuticals", "FMCG"
]

export default function Home() {
  return (
    <>
      <Navbar transparent={true} />

      <main className="flex-1 bg-primary text-body overflow-hidden">
        {/* Section 1: Hero */}
        <HeroVideo
          headline={<>Logistics. <br />The Right Way.</>}
          buttons={[
            { label: "Our Services", href: "/services/road-transport", variant: "primary" },
            { label: "Get a Quote", href: "/about", variant: "outline" }
          ]}
        />

        {/* Section 2: Brand Statement */}
        <section className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-black">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Hyperspeed
              effectOptions={({
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 4,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [400 * 0.03, 400 * 0.2],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 0x080808,
                  islandColor: 0x0a0a0a,
                  background: 0x000000,
                  shoulderLines: 0xFFFFFF,
                  brokenLines: 0xFFFFFF,
                  leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                  rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                  sticks: 0x03B3C3,
                }
              } as any)}
            />
          </div>

          {/* Foreground Text */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
            <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
              <SplitText
                text="Speed, Reliability, and Excellence"
                className="text-[48px] md:text-[80px] lg:text-[110px] font-bold text-white tracking-tighter leading-[0.95] drop-shadow-2xl"
                delay={50}
                duration={1.25}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
          </div>
        </section>

        {/* Section 3: About Wissler Banner */}
        <AboutBanner
          label="the"
          tagline="Wissler Cargo"
          description="Wissler Cargo delivers uncompromising logistics solutions across the globe. From critical air freight to complex road networks, we partner with industry leaders who demand reliability, transparency, and excellence at every step of the supply chain."
          href="/about"
          linkLabel="Learn More"
          imageSrc="/home/136216.jpg"
          imageAlt="Wissler Cargo Operations"
        />

        {/* Section 4: Discover More Carousel */}
        <ServiceCarousel
          title="Discover More"
          items={[
            {
              title: "Road & Land Transport",
              href: "/services/road-transport",
              imageSrc: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070"
            },
            {
              title: "Worldwide Sea & Air",
              href: "/services/sea-air",
              imageSrc: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
            },
            {
              title: "Customs & Documentation",
              href: "/services/customs",
              imageSrc: "/home/77668.jpg"
            },
            {
              title: "Special Services",
              href: "/services/special-services",
              imageSrc: "/home/17845.jpg"
            },
          ]}
        />

        {/* Section 4: Industry Ticker */}
        <Ticker items={INDUSTRY_TICKER} />

        {/* Section 5: News & Insights */}
        <section className="py-32 bg-primary relative">
          {/* Subtle Glow */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <SectionHeading
                title="News & Insights"
                align="left"
              />
              <Link href="/news" className="hidden md:inline-flex items-center text-white/70 font-bold hover:text-accent uppercase tracking-[2px] text-xs transition-colors">
                View All News <span className="ml-2 bg-white/10 p-2 rounded-full">&rarr;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mock News Cards - Agency style */}
              <Link href="/news/expansion-east-africa" className="group flex flex-col h-full rounded-2xl overflow-hidden glass-panel-dark border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img src="/home/91104.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/40">
                  <span className="text-accent text-xs font-bold uppercase tracking-[3px] mb-4">Company Update</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-accent transition-colors leading-snug">Expansion of Fleet Operations in East Africa</h3>
                  <p className="text-white/60 mb-8 flex-grow text-lg font-light">Wissler Cargo announces a significant investment in new fleet vehicles to support growing demand across the East African corridor...</p>
                  <span className="text-white font-bold text-xs uppercase tracking-[2px] group-hover:text-accent transition-colors flex items-center gap-2">
                    Read Article <div className="w-6 h-[1px] bg-current"></div>
                  </span>
                </div>
              </Link>

              <Link href="/news/customs-compliance-2026" className="group flex flex-col h-full rounded-2xl overflow-hidden glass-panel-dark border border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                  <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" alt="News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-grow bg-gradient-to-b from-transparent to-black/40">
                  <span className="text-accent text-xs font-bold uppercase tracking-[3px] mb-4">Industry Insight</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-accent transition-colors leading-snug">Navigating the New 2026 Customs Regulations</h3>
                  <p className="text-white/60 mb-8 flex-grow text-lg font-light">A comprehensive guide on the upcoming regulatory changes affecting cross-border trade and how our team ensures full compliance...</p>
                  <span className="text-white font-bold text-xs uppercase tracking-[2px] group-hover:text-accent transition-colors flex items-center gap-2">
                    Read Article <div className="w-6 h-[1px] bg-current"></div>
                  </span>
                </div>
              </Link>
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link href="/news">
                <Button variant="outline" className="w-full" size="lg">View All News</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
