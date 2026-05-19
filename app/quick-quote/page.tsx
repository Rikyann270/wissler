import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"

export default function QuickQuotePage() {
  return (
    <>
      <Navbar transparent={false} />
      
      <main className="flex-1 pt-24 pb-20 md:pb-24 bg-light min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          <SectionHeading 
            title="Request a Quick Quote" 
            subtitle="Fill out the form below with your shipment details and our operations team will get back to you with a competitive rate."
            className="mb-12"
          />

          <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-accent">
            <form className="space-y-8">
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-3 mb-6 uppercase tracking-wider">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Full Name *</label>
                    <input type="text" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Company Name</label>
                    <input type="text" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Email Address *</label>
                    <input type="email" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Phone Number *</label>
                    <input type="tel" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div>
                <h3 className="text-lg font-bold text-primary border-b border-gray-100 pb-3 mb-6 uppercase tracking-wider">Shipment Details</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Service Type *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {['Road Transport', 'Sea/Air Freight', 'Customs Clearance', 'Special Services'].map(service => (
                        <label key={service} className="flex items-center gap-3 p-3 bg-light border border-transparent hover:border-accent cursor-pointer transition-colors">
                          <input type="radio" name="service" value={service} className="w-4 h-4 text-accent focus:ring-accent accent-accent" required />
                          <span className="text-sm font-medium">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary uppercase tracking-wider">Collection Location *</label>
                      <input type="text" placeholder="City, Country / Postcode" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary uppercase tracking-wider">Delivery Location *</label>
                      <input type="text" placeholder="City, Country / Postcode" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Cargo Description *</label>
                    <input type="text" placeholder="What are you shipping?" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary uppercase tracking-wider">Weight (kg)</label>
                      <input type="number" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary uppercase tracking-wider">Volume (CBM)</label>
                      <input type="number" step="0.1" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-primary uppercase tracking-wider">Preferred Date</label>
                      <input type="date" className="w-full h-12 px-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary uppercase tracking-wider">Additional Notes</label>
                    <textarea rows={4} placeholder="Any special requirements, temperature control, hazardous goods?" className="w-full p-4 bg-light border-b-2 border-transparent focus:border-accent focus:outline-none transition-colors resize-none"></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <p className="text-sm text-mid hidden md:block">We aim to respond to all quote requests within 2 hours.</p>
                <Button type="button" variant="primary" size="lg" className="w-full md:w-auto">
                  Submit Quote Request
                </Button>
              </div>

            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
