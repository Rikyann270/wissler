import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"
    
    return (
      <Comp
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-bold uppercase tracking-[2px] transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 group overflow-hidden",
          {
            "bg-accent text-primary hover:text-primary-light shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1": variant === "primary",
            "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 backdrop-blur-sm": variant === "outline",
            "hover:bg-white/5 text-white/70 hover:text-white": variant === "ghost",
            "h-12 px-8": size === "default",
            "h-10 px-6": size === "sm",
            "h-14 px-10 text-sm": size === "lg",
            "h-12 w-12": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{props.children}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
