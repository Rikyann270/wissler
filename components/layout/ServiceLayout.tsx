"use client";

import React, { useState, useEffect } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactBanner } from "@/components/sections/ContactBanner";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Check, ArrowRight, Quote } from "lucide-react";
import { HeroTracker, ServiceType } from "@/components/sections/HeroTracker";

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  image?: string;
  specs?: { label: string; value: string }[];
}

export interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  services: ServiceCard[];
  bannerTitle: string;
  bannerImage: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  services,
  bannerTitle,
  bannerImage,
  testimonial
}) => {
  const [activeSection, setActiveSection] = useState(services[0]?.id);

  // Map page title to service type for customized tracking UI
  const getServiceType = (pageTitle: string): ServiceType => {
    const titleLower = pageTitle.toLowerCase();
    if (titleLower.includes("road") || titleLower.includes("transport")) return "road";
    if (titleLower.includes("sea") || titleLower.includes("air") || titleLower.includes("ocean")) return "sea-air";
    if (titleLower.includes("customs") || titleLower.includes("clearance")) return "customs";
    return "special";
  };

  const serviceType = getServiceType(title);

  // Simple scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = services.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 300; // Offset

      let currentActive = services[0]?.id;
      sectionElements.forEach(el => {
        if (el && el.offsetTop <= scrollPosition) {
          currentActive = el.id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120, // Offset for sticky header if any
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Navbar transparent={true} />
      
      <main className="flex-1 bg-light">
        {/* Dark Hero Section matching XCold Mockup */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-primary overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-primary z-10 opacity-60"></div>
             <img src={heroImage} alt={title} className="w-full h-full object-cover grayscale opacity-30" />
          </div>
          
          <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
                  {subtitle}
                </p>
                <Link href="/quick-quote">
                  <Button variant="primary" size="lg" className="px-10">
                    Get a quote
                  </Button>
                </Link>
              </div>
              
              {/* Premium Interactive Live Tracking Widget */}
              <div className="hidden lg:block relative min-h-[420px]">
                 <HeroTracker serviceType={serviceType} />
              </div>
            </div>
          </div>
        </section>

        {/* Split Content Section */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Sticky Sidebar */}
              <div className="lg:w-1/3 relative">
                <div className="sticky top-32 space-y-12">
                  <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-gray-200 z-0"></div>
                  
                  {services.map((service) => (
                    <div 
                      key={`nav-${service.id}`}
                      className="relative z-10 pl-10 cursor-pointer group"
                      onClick={() => scrollToSection(service.id)}
                    >
                      {/* Timeline Dot */}
                      <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-light flex items-center justify-center transition-colors ${activeSection === service.id ? 'bg-accent' : 'bg-gray-300 group-hover:bg-gray-400'}`}>
                         <div className={`w-2 h-2 rounded-full ${activeSection === service.id ? 'bg-white' : 'bg-transparent'}`}></div>
                      </div>

                      <h3 className={`text-2xl font-bold mb-3 transition-colors ${activeSection === service.id ? 'text-primary' : 'text-gray-400 group-hover:text-primary'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors ${activeSection === service.id ? 'text-mid text-gray-600' : 'text-gray-400 group-hover:text-gray-500'}`}>
                        {service.shortDesc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Cards */}
              <div className="lg:w-2/3 space-y-24">
                {services.map((service) => (
                  <div key={service.id} id={service.id} className="scroll-mt-32">
                    <div className="bg-white rounded-sm shadow-xl border border-gray-100 overflow-hidden group">
                      
                      {/* Card Header with Specs */}
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-10 border-b border-gray-100 gap-6">
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-4">
                          <span className="w-8 h-8 bg-accent/10 text-accent flex items-center justify-center rounded-sm">
                            <ArrowRight className="w-4 h-4 transform rotate-45" />
                          </span>
                          {service.title}
                        </h2>
                        
                        {/* Specs Badges */}
                        {service.specs && (
                          <div className="flex flex-wrap gap-4">
                            {service.specs.map((spec, i) => (
                              <div key={i} className="flex flex-col bg-[#F8FAFC] px-4 py-2 rounded-sm border border-gray-100">
                                <span className="text-[10px] font-bold text-mid uppercase tracking-widest mb-1">{spec.label}</span>
                                <span className="text-sm font-semibold text-primary">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Body */}
                      <div className="p-8 md:p-10">
                        <p className="text-mid leading-relaxed mb-8 text-lg">
                          {service.longDesc}
                        </p>
                        
                        {service.image && (
                          <div className="w-full h-64 md:h-80 mb-8 overflow-hidden rounded-sm">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="mt-1 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-accent" />
                              </div>
                              <span className="text-sm font-medium text-primary">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="relative py-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src={bannerImage} alt="Banner" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[800px] text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
              {bannerTitle}
            </h2>
            <Link href="/quick-quote">
              <Button variant="primary" size="lg" className="px-12">
                Discover More
              </Button>
            </Link>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  Read testimony from our clients
                </h2>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Us</Button>
                </Link>
              </div>
              
              <div className="bg-white p-10 md:p-12 shadow-xl border border-gray-100 rounded-sm relative">
                <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-100" />
                <p className="text-xl md:text-2xl text-primary font-medium leading-relaxed mb-10 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover border-2 border-accent" />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <span className="text-sm text-mid">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactBanner />
      </main>
      
      <Footer />
    </>
  );
};
