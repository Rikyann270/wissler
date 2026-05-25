import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContactBannerProps {
  phone?: string
  email?: string
  darkMode?: boolean
}

export function ContactBanner({
  phone = "+256 207 807559",
  email = "info@wisslercargo.com",
  darkMode = true
}: ContactBannerProps) {

  return (
    <section className={cn("py-20 md:py-24 border-y border-white/5", darkMode ? "bg-primary text-white" : "bg-light text-primary")}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to move your cargo?
            </h2>
            <p className={cn("text-lg mb-8", darkMode ? "text-white/80" : "text-mid")}>
              Contact our team of logistics specialists today to discuss your requirements and receive a competitive quote.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 font-semibold hover:text-accent transition-colors">
                <span className={cn("w-12 h-12 rounded-full flex items-center justify-center", darkMode ? "bg-white/10" : "bg-white shadow-sm")}>
                  <Phone className="w-5 h-5 text-accent" />
                </span>
                {phone}
              </a>

              <a href={`mailto:${email}`} className="flex items-center gap-3 font-semibold hover:text-accent transition-colors">
                <span className={cn("w-12 h-12 rounded-full flex items-center justify-center", darkMode ? "bg-white/10" : "bg-white shadow-sm")}>
                  <Mail className="w-5 h-5 text-accent" />
                </span>
                {email}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 min-w-[200px]">
            <Link href="/contact" className="w-full">
              <Button variant="primary" size="lg" className="w-full">
                Get In Touch
              </Button>
            </Link>
            <Link href="/quick-quote" className="w-full">
              <Button variant={darkMode ? "outline" : "outline"} size="lg" className="w-full">
                Quick Quote
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
