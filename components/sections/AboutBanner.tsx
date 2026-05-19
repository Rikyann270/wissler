import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface AboutBannerProps {
  label?: string
  tagline?: string
  description: string
  href?: string
  linkLabel?: string
  imageSrc: string
  imageAlt?: string
}

export function AboutBanner({
  label = "the",
  tagline = "Wissler Cargo",
  description,
  href = "/about",
  linkLabel = "Learn More",
  imageSrc,
  imageAlt = "About Wissler Cargo",
}: AboutBannerProps) {
  return (
    <section className="w-full bg-primary border-y border-white/5 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_auto] lg:grid-cols-[320px_1fr_500px] min-h-[340px]">

        {/* Left column — label */}
        <div className="flex flex-col justify-between p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 relative">
          {/* Thin top accent line */}
          <div className="w-8 h-[2px] bg-accent mb-8" />

          <div>
            <p className="text-white/50 text-sm font-light italic mb-1">{label}</p>
            <h2 className="text-[56px] md:text-[72px] font-black text-white tracking-tighter leading-[0.85] uppercase">
              {tagline.split(" ").map((word, i) => (
                <span key={i} className={`block ${i === 1 ? "text-accent" : ""}`}>{word}</span>
              ))}
            </h2>
          </div>
        </div>

        {/* Middle column — description + CTA */}
        <div className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-14 border-b md:border-b-0 md:border-r border-white/10">
          <p className="text-xl md:text-2xl lg:text-[28px] text-white/90 font-light leading-[1.45] mb-10 max-w-[600px]">
            {description}
          </p>

          <Link
            href={href}
            className="group inline-flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[2px] text-white/70 hover:border-accent hover:text-accent w-fit transition-all duration-300"
          >
            {linkLabel}
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Right column — image */}
        <div className="hidden lg:block relative overflow-hidden min-h-[340px]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* dark overlay to blend with the dark theme */}
          <div className="absolute inset-0 bg-primary/30" />
          {/* Left gradient to blend into middle panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  )
}
