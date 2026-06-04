"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Package, Truck, Ship, ShieldCheck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function QuickQuotePage() {
  const services = [
    { name: 'Road Transport', icon: <Truck className="w-6 h-6 mb-2" /> },
    { name: 'Sea & Air Freight', icon: <Ship className="w-6 h-6 mb-2" /> },
    { name: 'Customs Clearance', icon: <ShieldCheck className="w-6 h-6 mb-2" /> },
    { name: 'Special Cargo', icon: <Package className="w-6 h-6 mb-2" /> }
  ];

  const [formData, setFormData] = useState({
    service: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    collection: "",
    delivery: "",
    cargo: "",
    weight: "",
    volume: "",
    date: "",
    notes: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;
    const fieldId = id || name;
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleServiceChange = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceName
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.service) {
      setStatus("error");
      setErrorMessage("Please select a service type.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/quick-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({
          service: "",
          name: "",
          company: "",
          email: "",
          phone: "",
          collection: "",
          delivery: "",
          cargo: "",
          weight: "",
          volume: "",
          date: "",
          notes: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Failed to submit quote request. Please try again.");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error: Could not connect to the server.");
    }
  };

  return (
    <>
      <Navbar transparent={true} />

      <main className="flex-1 bg-light pb-24">
        {/* Dark Hero Section */}
        <section className="relative pt-32 pb-40 md:pt-48 md:pb-48 bg-primary overflow-hidden text-white">
          <div className="absolute inset-0 z-0 opacity-100">
            <img src="/home/249203195_10966354.jpg" alt="Quick Quote Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1000px] text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Request a <span className="text-white/80">Quote</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              Provide your shipment details below, and our pricing team will deliver a competitive, comprehensive quote within 2 hours.
            </p>
          </div>
        </section>

        {/* Quote Form Container */}
        <section className="container mx-auto px-4 md:px-8 max-w-[1000px] relative z-20 -mt-24 md:-mt-32">
          <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm border-t-4 border-accent">
            {status === "success" ? (
              <div className="text-center py-16 space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-full text-green-500 mb-4 animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-primary">Quote Request Submitted!</h2>
                <p className="text-mid max-w-md mx-auto leading-relaxed">
                  Thank you for requesting a quote. We have sent the confirmation to your email. Our pricing specialists are reviewing your details and will get back to you within 2 hours.
                </p>
                <div className="pt-6">
                  <Button type="button" variant="primary" size="lg" onClick={() => setStatus("idle")}>
                    Request Another Quote
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {status === "error" && (
                  <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-md flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-red-800 text-sm">Submission Error</h4>
                      <p className="text-red-700 text-xs mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Service Selection */}
                <div>
                  <h3 className="text-xs font-bold text-mid uppercase tracking-widest mb-6">1. Select Service Type *</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {services.map((service, i) => (
                      <div key={service.name} className="relative group">
                        <button
                          type="button"
                          onClick={() => handleServiceChange(service.name)}
                          className={`w-full flex flex-col items-center justify-center p-6 border-2 rounded-sm cursor-pointer transition-all text-center h-full ${
                            formData.service === service.name
                              ? "border-accent bg-primary text-white"
                              : "border-gray-100 hover:border-accent/40 hover:bg-accent/5 text-primary"
                          }`}
                        >
                          {service.icon}
                          <span className="text-[11px] font-bold uppercase tracking-wider">{service.name}</span>
                        </button>
                        {formData.service === service.name && (
                          <div className="absolute top-3 right-3">
                            <div className="w-3 h-3 bg-accent rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Contact Information */}
                <div>
                  <h3 className="text-xs font-bold text-mid uppercase tracking-widest mb-8">2. Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Full Name *"
                        required
                      />
                      <label htmlFor="name" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Full Name *</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Company Name"
                      />
                      <label htmlFor="company" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Company Name</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Email Address *"
                        required
                      />
                      <label htmlFor="email" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Email Address *</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Phone Number *"
                        required
                      />
                      <label htmlFor="phone" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Phone Number *</label>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* Shipment Details */}
                <div>
                  <h3 className="text-xs font-bold text-mid uppercase tracking-widest mb-8">3. Logistics Data</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                    <div className="relative group">
                      <input
                        type="text"
                        id="collection"
                        value={formData.collection}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Collection City / Postal Code *"
                        required
                      />
                      <label htmlFor="collection" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Collection Location *</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        id="delivery"
                        value={formData.delivery}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Delivery City / Postal Code *"
                        required
                      />
                      <label htmlFor="delivery" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Delivery Location *</label>
                    </div>
                  </div>

                  <div className="relative group mb-8">
                    <input
                      type="text"
                      id="cargo"
                      value={formData.cargo}
                      onChange={handleChange}
                      className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                      placeholder="What are you shipping? *"
                      required
                    />
                    <label htmlFor="cargo" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Cargo Description *</label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 mb-8">
                    <div className="relative group">
                      <input
                        type="number"
                        id="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Weight (kg)"
                      />
                      <label htmlFor="weight" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Total Weight (kg)</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="number"
                        step="0.1"
                        id="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                        placeholder="Volume (CBM)"
                      />
                      <label htmlFor="volume" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Volume (CBM)</label>
                    </div>
                    <div className="relative group">
                      <input
                        type="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="peer w-full h-10 bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors pt-2 placeholder-transparent"
                      />
                      <label htmlFor="date" className="absolute left-0 -top-3 text-[10px] font-bold text-mid uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-focus:-top-3 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-accent transition-all cursor-text">Preferred Date</label>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="notes" className="block text-[10px] font-bold text-mid uppercase tracking-widest mb-1">Additional Notes</label>
                    <textarea
                      id="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-100 text-primary focus:border-accent focus:outline-none transition-colors resize-none py-2"
                      placeholder="Special requirements, temperature control, hazardous goods..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Area */}
                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-sm text-mid font-medium hidden md:block">
                    <span className="text-accent mr-2">✦</span> All data is securely transmitted and kept strictly confidential.
                  </p>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "loading"}
                    className="w-full md:w-auto px-16 group"
                  >
                    <span className="flex items-center gap-2">
                      {status === "loading" ? (
                        <>
                          Sending...
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </>
                      )}
                    </span>
                  </Button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
