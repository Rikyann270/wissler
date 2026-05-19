import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface EditorialBlockProps {
  imageSrc: string
  imagePosition?: "left" | "right"
  heading: React.ReactNode
  body: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  darkMode?: boolean
}

export function EditorialBlock({
  imageSrc,
  imagePosition = "left",
  heading,
  body,
  ctaLabel,
  ctaHref,
  darkMode = true, // Defaulting to true for agency aesthetic
}: EditorialBlockProps) {
  const bgClass = darkMode ? "bg-primary text-white" : "bg-light text-primary"

  return (
    <section className={cn("py-32 relative overflow-hidden", bgClass)}>
      {/* Subtle Background Elements */}
      {darkMode && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-light/30 rounded-full blur-[120px] pointer-events-none"></div>
        </>
      )}

      <div className="container mx-auto px-4 md:px-8 max-w-[1280px] relative z-10">
        <div className="flex flex-col md:flex-row items-center relative">
          
          {/* Image Content */}
          <div className={cn(
            "w-full md:w-3/5 h-[500px] md:h-[700px] relative rounded-2xl overflow-hidden shadow-2xl",
            imagePosition === "left" ? "order-1 md:mr-auto" : "order-1 md:order-2 md:ml-auto"
          )}>
            <img 
              src={imageSrc} 
              alt="Editorial" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
          </div>

          {/* Text Content - Floating Glass Panel */}
          <div className={cn(
            "w-full md:w-1/2 p-8 md:p-12 lg:p-16 rounded-2xl z-20 mt-[-100px] md:mt-0",
            imagePosition === "left" ? "order-2 md:-ml-24 lg:-ml-32" : "order-2 md:order-1 md:-mr-24 lg:-mr-32",
            darkMode ? "glass-panel-dark" : "glass-panel bg-white/90"
          )}>
            <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.1] mb-8 tracking-tighter text-gradient">
              {heading}
            </h2>
            <div className={cn("text-lg leading-relaxed mb-10 space-y-6 font-light", darkMode ? "text-white/70" : "text-primary/70")}>
              {body}
            </div>
            {ctaLabel && ctaHref && (
              <div>
                <Link href={ctaHref}>
                  <Button variant={darkMode ? "primary" : "primary"}>
                    {ctaLabel}
                  </Button>
                </Link>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
