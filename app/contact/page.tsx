import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* We use transparent navbar for the dark hero */}
      <Navbar transparent={true} />

      <main className="flex-1 bg-light">
        {/* Dark Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-primary overflow-hidden text-white">
          <div className="absolute inset-0 z-0 opacity-100">
            <img src="/home/59885.jpg" alt="Contact Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Reach Out</h2>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Get In <span className="text-white/80">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Whether you're looking for a strategic logistics partner, a complex supply chain solution, or simply have a question, our global team is ready to respond swiftly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Block */}
        <section className="py-20 md:py-32 -mt-10 relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 shadow-2xl rounded-sm overflow-hidden border border-gray-100">

              {/* Contact Information (Dark Side) */}
              <div className="lg:col-span-5 bg-primary text-white p-10 md:p-16 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact Details</h3>
                  <p className="text-white/60 mb-12 text-sm leading-relaxed max-w-xs">
                    Select the most relevant department for your inquiry to ensure the fastest response time from our specialists.
                  </p>

                  <div className="space-y-10">
                    <div className="flex flex-col gap-3 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-accent transition-colors">
                          <Phone className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="font-semibold text-lg uppercase tracking-widest text-white/90">Global Phone</h4>
                      </div>
                      <a href="tel:+440123456789" className="text-white/60 hover:text-accent transition-colors ml-14 text-lg">+256 207 807559</a>
                    </div>

                    <div className="flex flex-col gap-3 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-accent transition-colors">
                          <Mail className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="font-semibold text-lg uppercase tracking-widest text-white/90">Email Desks</h4>
                      </div>
                      <div className="ml-14 space-y-3">
                        <div className="flex flex-col">
                          <span className="text-accent/80 text-[10px] font-bold uppercase tracking-widest mb-1">General Inquiries</span>
                          <a href="mailto:info@wisslercargo.com" className="text-white/60 hover:text-white transition-colors">info@wisslercargo.com</a>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-accent/80 text-[10px] font-bold uppercase tracking-widest mb-1">Operations</span>
                          <a href="mailto:ops@wisslercargo.com" className="text-white/60 hover:text-white transition-colors">ops@wisslercargo.com</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full group-hover:bg-accent transition-colors">
                          <MapPin className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="font-semibold text-lg uppercase tracking-widest text-white/90">Head Office</h4>
                      </div>
                      <p className="text-white/60 leading-relaxed ml-14">
                        Wissler Cargo Ltd.<br />
                        Global Trade Way<br />
                        London, L1 9WC
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative map abstract at the bottom */}
                <div className="mt-auto pt-16 relative z-10 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Globe className="w-48 h-48 absolute -bottom-16 -right-16 text-white" strokeWidth={0.5} />
                </div>
              </div>

              {/* Contact Form (Light Side) */}
              <div className="lg:col-span-7 bg-white p-10 md:p-16 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-primary mb-2">Send us a message</h3>
                <p className="text-mid mb-12 text-sm">Fill out the form below and a representative will be in touch shortly.</p>

                <form className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="text" id="name" className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent" placeholder="Full Name *" required />
                      <label htmlFor="name" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Full Name *</label>
                    </div>
                    <div className="relative group">
                      <input type="text" id="company" className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent" placeholder="Company Name" />
                      <label htmlFor="company" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Company Name</label>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative group">
                      <input type="email" id="email" className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent" placeholder="Email Address *" required />
                      <label htmlFor="email" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Email Address *</label>
                    </div>
                    <div className="relative group">
                      <input type="tel" id="phone" className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent" placeholder="Phone Number *" required />
                      <label htmlFor="phone" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Phone Number *</label>
                    </div>
                  </div>

                  <div className="relative group pt-2">
                    <label htmlFor="subject" className="block text-[10px] font-bold text-mid uppercase tracking-widest mb-1">Subject *</label>
                    <div className="relative">
                      <select id="subject" className="w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer rounded-none" required defaultValue="">
                        <option value="" disabled>Select an inquiry type...</option>
                        <option value="general">General Enquiry</option>
                        <option value="quote">Request a Quote</option>
                        <option value="support">Operations Support</option>
                        <option value="guidance">Shipping Guidance</option>
                      </select>
                      <div className="absolute right-0 top-3 pointer-events-none text-mid">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                      </div>
                    </div>
                  </div>

                  <div className="relative group pt-2">
                    <label htmlFor="message" className="block text-[10px] font-bold text-mid uppercase tracking-widest mb-1">Message *</label>
                    <textarea id="message" rows={3} className="w-full bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors resize-none py-2" placeholder="Tell us how we can help..." required></textarea>
                  </div>

                  <div className="pt-6 flex justify-end">
                    <Button type="button" variant="primary" size="lg" className="w-full md:w-auto px-12 group">
                      <span className="flex items-center gap-2">
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </span>
                    </Button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
