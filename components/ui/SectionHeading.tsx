import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  icon?: boolean
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  icon = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-6 relative z-10", align === "center" ? "items-center text-center" : "items-start text-left", className)}>
      {icon && (
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
      )}
      <h2 className="text-[36px] md:text-[56px] leading-[1.1] font-bold tracking-tighter text-gradient">
        {title}
      </h2>
      {subtitle && (
        <p className="text-mid text-lg md:text-xl max-w-2xl font-light tracking-wide leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
