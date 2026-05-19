"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Anchor, Truck, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { AnimatePresence, motion } from "framer-motion"

export function Navbar({ transparent = true }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState<"services" | null>(null)
  const pathname = usePathname()

  const isTransparent = transparent && !scrolled && (pathname === "/" || pathname === "/about" || pathname.startsWith("/services/"))

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
          <div className={cn(
            "flex items-center justify-between h-16 md:h-20 px-6 transition-all duration-500 rounded-full",
            isTransparent ? "bg-transparent border-transparent" : "glass-panel-dark"
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50 group">
              <img src="assets/LOGO WISSLER-1.svg" alt="Logo" className="w-16 h-16" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
              <NavLink href="/" isTransparent={isTransparent}>Home</NavLink>
              <NavLink href="/about" isTransparent={isTransparent}>About Us</NavLink>

              {/* Services Dropdown */}
              <div
                className="relative flex items-center h-full"
                onMouseEnter={() => setMegaMenuOpen("services")}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <button className={cn(
                  "flex items-center gap-1 font-semibold text-xs tracking-[2px] uppercase transition-colors",
                  isTransparent ? "text-white hover:text-accent" : "text-white/80 hover:text-white"
                )}>
                  Services <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Menu Panel */}
                <AnimatePresence>
                  {megaMenuOpen === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] glass-panel-dark rounded-2xl overflow-hidden"
                    >
                      <div className="grid grid-cols-3 h-full">
                        <div className="col-span-1 bg-white/5 p-8 border-r border-white/10 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                          <h3 className="font-bold text-white mb-6 text-lg">Contact Us</h3>
                          <ul className="space-y-4 text-sm text-white/70">
                            <li><a href="tel:+440123456789" className="hover:text-accent transition-colors">+44 (0) 123 456 789</a></li>
                            <li><a href="mailto:info@wisslercargo.com" className="hover:text-accent transition-colors">info@wisslercargo.com</a></li>
                            <li><a href="mailto:ops@wisslercargo.com" className="hover:text-accent transition-colors">ops@wisslercargo.com</a></li>
                          </ul>
                          <div className="mt-12">
                            <Link href="/careers" className="inline-flex items-center text-accent font-semibold hover:text-white text-xs uppercase tracking-[2px] transition-colors">
                              Careers &rarr;
                            </Link>
                          </div>
                        </div>
                        <div className="col-span-2 p-8 grid grid-cols-2 gap-x-8 gap-y-6 bg-black/40">
                          <MegaMenuItem href="/services/road-transport" icon={<Truck />} title="Road & Land" desc="Reliable Europe-wide transport" />
                          <MegaMenuItem href="/services/sea-air" icon={<Anchor />} title="Sea & Air" desc="Global freight solutions" />
                          <MegaMenuItem href="/services/customs" icon={<ShieldCheck />} title="Customs & Docs" desc="Seamless clearance" />
                          <MegaMenuItem href="/services/special-services" icon={<Zap />} title="Special Services" desc="Out of gauge & ADR" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/news" isTransparent={isTransparent}>News</NavLink>
              <NavLink href="/contact" isTransparent={isTransparent}>Contact</NavLink>
            </nav>

            {/* CTAs & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <Link href="#" className={cn("text-xs font-bold uppercase tracking-[2px] transition-colors", isTransparent ? "text-white hover:text-accent" : "text-white/70 hover:text-white")}>
                  Log In
                </Link>
                <Link href="/quick-quote" tabIndex={-1}>
                  <Button variant="primary" size="sm">Quick Quote</Button>
                </Link>
              </div>

              <button
                className="lg:hidden text-white hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary/95 text-white pt-28 px-6 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-8 text-2xl font-bold tracking-tight">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">About Us</Link>

              <div className="border-t border-white/10 pt-8 mt-2">
                <span className="text-xs text-accent uppercase tracking-[3px] block mb-6 font-semibold">Services</span>
                <div className="flex flex-col gap-6 text-xl pl-4">
                  <Link href="/services/road-transport" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/70 transition-colors">Road & Land Transport</Link>
                  <Link href="/services/sea-air" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/70 transition-colors">Sea & Air Freight</Link>
                  <Link href="/services/customs" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/70 transition-colors">Customs & Documentation</Link>
                  <Link href="/services/special-services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white/70 transition-colors">Special Services</Link>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8 mt-2 flex flex-col gap-8">
                <Link href="/news" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">News</Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Contact</Link>
              </div>

              <div className="mt-8 mb-12 flex flex-col gap-4">
                <Link href="/quick-quote" onClick={() => setMobileMenuOpen(false)} tabIndex={-1}>
                  <Button variant="primary" className="w-full h-14">Quick Quote</Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children, isTransparent }: { href: string, children: React.ReactNode, isTransparent: boolean }) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "font-semibold text-xs uppercase tracking-[2px] transition-colors relative h-full flex items-center group",
        isTransparent ? "text-white" : "text-white/80 hover:text-white",
        active && "text-accent"
      )}
    >
      {children}
      <span className={cn(
        "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-2",
        active && "opacity-100 translate-y-2"
      )}></span>
    </Link>
  )
}

function MegaMenuItem({ href, icon, title, desc }: { href: string, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <Link href={href} className="flex gap-4 group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      <div className="text-white/50 group-hover:text-accent transition-colors mt-1 relative z-10">
        {icon}
      </div>
      <div className="relative z-10">
        <h4 className="font-bold text-white group-hover:text-accent transition-colors mb-1">{title}</h4>
        <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">{desc}</p>
      </div>
    </Link>
  )
}
