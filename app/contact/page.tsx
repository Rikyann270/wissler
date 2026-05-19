import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <Navbar transparent={false} />
      
      <main className="flex-1 pt-24 pb-20 md:pb-24 bg-light">
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
          
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Our dedicated team is ready to assist you with all your logistics and transport requirements."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-md shadow-xl overflow-hidden">
            
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Full Name *</label>
                    <input type="text" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Company Name</label>
                    <input type="text" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Email Address *</label>
                    <input type="email" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Phone Number *</label>
                    <input type="tel" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary uppercase tracking-wider">Subject *</label>
                  <select className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required>
                    <option value="">Select a subject...</option>
                    <option value="general">General Enquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="support">Operations Support</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary uppercase tracking-wider">Message *</label>
                  <textarea rows={5} className="w-full p-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors resize-none" required></textarea>
                </div>

                <Button type="button" variant="primary" size="lg" className="w-full md:w-auto mt-4">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-primary text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-accent">Contact Details</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Phone</h4>
                      <a href="tel:+440123456789" className="text-white/80 hover:text-white transition-colors">+44 (0) 123 456 789</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Email Departments</h4>
                      <ul className="space-y-2 text-white/80">
                        <li><span className="text-accent/80 inline-block w-24 text-sm font-medium">General</span> <a href="mailto:info@wisslercargo.com" className="hover:text-white transition-colors">info@wisslercargo.com</a></li>
                        <li><span className="text-accent/80 inline-block w-24 text-sm font-medium">Operations</span> <a href="mailto:ops@wisslercargo.com" className="hover:text-white transition-colors">ops@wisslercargo.com</a></li>
                        <li><span className="text-accent/80 inline-block w-24 text-sm font-medium">Accounts</span> <a href="mailto:accounts@wisslercargo.com" className="hover:text-white transition-colors">accounts@wisslercargo.com</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-sm shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Head Office</h4>
                      <p className="text-white/80 leading-relaxed">
                        Wissler Cargo Ltd.<br />
                        Logistics Park<br />
                        Global Trade Way<br />
                        London, L1 9WC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
