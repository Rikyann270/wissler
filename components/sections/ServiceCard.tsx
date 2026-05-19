import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  href: string
  imageSrc: string
}

export function ServiceCard({ title, href, imageSrc }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-[450px] md:h-[550px] relative rounded-2xl overflow-hidden shadow-2xl">
      {/* Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      
      {/* Default Overlay */}
      <div className="absolute inset-0 bg-primary/40 transition-colors duration-500 group-hover:bg-primary/20"></div>
      
      {/* Dark Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors drop-shadow-md">
          {title}
        </h3>
        
        <div className="flex items-center text-white/80 font-semibold text-xs uppercase tracking-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <span className="group-hover:text-white transition-colors">Explore Service</span>
          <div className="w-8 h-[1px] bg-accent mx-3 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-200"></div>
          <ArrowRight className="w-4 h-4 text-accent -translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-300 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </Link>
  )
}
