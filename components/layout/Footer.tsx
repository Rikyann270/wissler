import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] text-white relative overflow-hidden pt-20 pb-8 border-t border-white/5">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">

        {/* Top Section: Title & CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 md:mb-24 gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight">
            Ready to move your cargo?
          </h2>
          <div className="flex items-stretch shadow-2xl hover:-translate-y-1 transition-transform duration-300">
            <Link href="/quick-quote" className="flex group">
              <div className="bg-accent text-black font-bold uppercase tracking-[2px] text-xs px-8 py-5 flex items-center justify-center transition-colors duration-300">
                Quick Quote
              </div>
              <div className="bg-[#f68132] text-black px-5 flex items-center justify-center transition-colors duration-300">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* Massive Logo Section */}
        <div className="mb-16 md:mb-24 w-full flex justify-center items-center overflow-hidden">

          <span className="text-[100px] sm:text-[140px] md:text-[210px] lg:text-[210px] font-bold tracking-tighter leading-none w-full text-center flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 select-none">
            <span className=" bg-gradient-to-b from-[#f68132] to-black bg-clip-text text-transparent text-accent tracking-tighter leading-none text-[120px] sm:text-[160px] md:text-[220px] lg:text-[280px]">
            ///
            </span>

            <span className="lowercase bg-gradient-to-b from-[#f68132] to-black bg-clip-text text-transparent">
              wissler
            </span>
          </span>

        </div>

        {/* Four Columns Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <p className="text-white/60 text-sm leading-relaxed max-w-[220px]">
              World class global reach with unparalleled reliability, engineered for modern supply chains.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] text-white/50 uppercase tracking-[2px] font-bold mb-4">Contact Us</h4>
            <div className="text-white/80 text-sm space-y-4">
              <p className="text-white/60">
                123 Logistics Way<br />
                London, UK E1 4FZ
              </p>
              <p>
                <a href="mailto:hello@wisslercargo.com" className="hover:text-white transition-colors text-white/60">
                  hello@wisslercargo.com
                </a>
              </p>
            </div>
          </div>

          <div className="col-span-1 flex items-start">
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-center p-4 shadow-xl backdrop-blur-sm grayscale hover:grayscale-0 transition-all">
              <span className="text-[10px] text-white/50 uppercase tracking-[2px] font-bold">AEO<br />Certified</span>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] text-white/50 uppercase tracking-[2px] font-bold mb-4">Stay Up To Date</h4>
            <form className="flex border border-white/20 overflow-hidden h-10 focus-within:border-white/50 transition-colors">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent px-4 py-2 w-full text-sm text-white focus:outline-none placeholder:text-white/30"
                required
              />
              <button
                type="submit"
                className="bg-white text-black text-[10px] font-bold uppercase tracking-[2px] px-6 hover:bg-accent transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Separator 1 */}
        <div className="w-full h-[1px] bg-white/10 mb-8"></div>

        {/* Links Row */}
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 mb-8 text-[10px] font-bold uppercase tracking-[2px] text-white/60">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/services/road-transport" className="hover:text-white transition-colors">Road & Land</Link>
          <Link href="/services/sea-air" className="hover:text-white transition-colors">Sea & Air</Link>
          <Link href="/services/customs" className="hover:text-white transition-colors">Customs</Link>
          <Link href="/services/special-services" className="hover:text-white transition-colors">Special Services</Link>
          <Link href="/news" className="hover:text-white transition-colors">News</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>

        {/* Separator 2 */}
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>

        {/* Copyright Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40">
          <p>&copy; Wissler. All Rights Reserved {new Date().getFullYear()}</p>
          <p className="mt-2 sm:mt-0">Site by DEEPMIND</p>
        </div>

      </div>
    </footer>
  )
}
