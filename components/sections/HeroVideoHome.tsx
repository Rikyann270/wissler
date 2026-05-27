"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ChevronDown, BarChart2 } from "lucide-react"
import RotatingText from '@/components/RotatingText'

interface HeroVideoProps {
  videoSrc?: string
  posterSrc?: string
  headline: React.ReactNode
  subheadline?: string
  buttons?: {
    label: string
    href: string
    variant: "primary" | "outline"
  }[]
  showScrollIndicator?: boolean
}

export function HeroVideo({
  videoSrc = "home/Logistics_hero_vidoe.mp4", // TODO: REPLACE WITH CLIENT ASSET
  posterSrc = "home/post_processing.jpg",
  headline,
  subheadline,
  buttons,
  showScrollIndicator = true,
}: HeroVideoProps) {

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-primary">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterSrc}
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-primary/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,17,32,0.6)_100%)] z-10" />

      {/* Content */}
      <div className="container text-center relative z-20 mx-auto px-4 md:px-8 max-w-[1280px] flex flex-col items-center text-center mt-16">


        {subheadline && (
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light tracking-wide mb-12 drop-shadow-md">
            {subheadline}
          </p>
        )}

        {!subheadline && (
          <div className="mb-12 text-white flex items-center justify-center">
            <span className="text-4xl font-bold tracking-tight uppercase opacity-90 drop-shadow-lg">
              Wissler<span className="text-accent">Cargo</span>
            </span>
          </div>
        )}

        <h1 className=" text-[48px] md:text-[80px] lg:text-[110px] font-bold text-white tracking-tighter leading-[0.95] mb-8 drop-shadow-2xl" >

          <RotatingText
            texts={['Overcharging carriers?', 'Lost Cargo!', 'Unreliable delivery?', 'Complex logistics?']}
            mainClassName="px-2 sm:px-2 md:px-3 text0-center  text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom="first"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.04}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
            splitBy="words"
            auto
            loop
          />
        </h1 >


        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            {buttons.map((btn, idx) => (
              <Link key={idx} href={btn.href}>
                <Button variant={btn.variant} size="lg" className="w-full sm:w-auto">
                  {btn.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Floating Glass Stat Card */}
      <div className="absolute bottom-24 right-12 z-20 hidden lg:flex items-center gap-4 glass-panel p-4 rounded-2xl animate-[float_6s_ease-in-out_infinite]">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
          <BarChart2 className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl font-bold text-white">99.8%</div>
          <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">On-Time Delivery</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2 group"
          aria-label="Scroll down"
        >
          <span className="text-[10px] uppercase tracking-[3px] font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">Scroll</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mt-1"></div>
          </div>
        </button>
      )}
    </section>
  )
}
