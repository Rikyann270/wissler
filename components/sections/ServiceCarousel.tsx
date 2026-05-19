"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ServiceItem {
  title: string
  href: string
  imageSrc: string
}

interface ServiceCarouselProps {
  title?: string
  items: ServiceItem[]
}

export function ServiceCarousel({ title = "Discover More", items }: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const CARD_WIDTH = 400
  const SCROLL_AMOUNT = CARD_WIDTH + 16

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" })
    setTimeout(updateScrollState, 400)
  }

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" })
    setTimeout(updateScrollState, 400)
  }

  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />

      {/* Header row */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] mb-8 md:mb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[48px] md:text-[72px] lg:text-[96px] font-bold text-white tracking-tighter leading-none">
            {title}
          </h2>

          {/* Nav buttons — top right */}
          <div className="flex items-center gap-3 pb-2 flex-shrink-0">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${canScrollLeft
                  ? "border-accent text-accent hover:bg-accent hover:text-black"
                  : "border-white/20 text-white/20 cursor-not-allowed"
                }`}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Next"
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300
                ${canScrollRight
                  ? "border-accent text-accent hover:bg-accent hover:text-black"
                  : "border-white/20 text-white/20 cursor-not-allowed"
                }`}
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable cards strip — bleeds to right edge */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-4 overflow-x-auto scroll-smooth pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] pr-4 md:pr-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group rounded-sm relative flex-shrink-0 w-[320px] md:w-[400px] h-[400px] md:h-[500px] overflow-hidden rounded-none block"
          >
            {/* Image */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Base dark overlay */}
            <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-500" />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Gold accent line — slides in on hover */}
            <div className="absolute bottom-0 left-0 h-[3px] bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out" />

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <h3 className="text-white font-bold text-xl md:text-2xl leading-tight tracking-tight mb-3">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                <span>Explore</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* hide scrollbar in webkit */}
      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
