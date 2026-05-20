import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactBanner } from "@/components/sections/ContactBanner"
import Link from "next/link"

const NEWS_ARTICLES = [
  {
    slug: "expansion-east-africa",
    title: "Expansion of Fleet Operations in East Africa",
    excerpt: "Wissler Cargo announces a significant investment in new fleet vehicles to support growing demand across the East African corridor, ensuring unparalleled delivery times.",
    category: "Company Update",
    image: "/home/1849.jpg",
    date: "May 15, 2026"
  },
  {
    slug: "customs-compliance-2026",
    title: "Navigating the New 2026 Customs Regulations",
    excerpt: "A comprehensive guide on the upcoming regulatory changes affecting cross-border trade and how our team ensures full compliance for seamless operations.",
    category: "Industry Insight",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    date: "May 02, 2026"
  },
  {
    slug: "sustainability-initiatives",
    title: "Our Roadmap to Carbon-Neutral Logistics",
    excerpt: "Detailing our latest initiatives and partnerships aimed at reducing the environmental impact of global supply chains without compromising efficiency.",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    date: "April 18, 2026"
  },
  {
    slug: "tech-integration",
    title: "Next-Gen Tracking: AI in Supply Chains",
    excerpt: "How our new AI-driven tracking infrastructure provides real-time, predictive analytics to foresee delays before they happen.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2072",
    date: "April 05, 2026"
  }
]

export default function NewsIndexPage() {
  const featured = NEWS_ARTICLES[0];
  const remaining = NEWS_ARTICLES.slice(1);

  return (
    <>
      {/* We use transparent navbar for the dark hero */}
      <Navbar transparent={true} />

      <main className="flex-1 bg-light">
        {/* Dark Hero Section */}
        <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-primary overflow-hidden text-white">
          <div className="absolute inset-0 z-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074" alt="News Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-[1280px]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent">Press & Media</h2>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                News & <span className="text-white/80">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                The latest updates from Wissler Cargo and expert perspectives shaping the future of global logistics and supply chain management.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 md:py-32 -mt-10 relative z-20">
          <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">

            {/* Featured Article */}
            <Link href={`/news/${featured.slug}`} className="group block mb-24 bg-white hover:shadow-2xl transition-shadow duration-500 rounded-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 relative overflow-hidden aspect-[16/9] lg:aspect-auto min-h-[400px]">
                  <img src={featured.image} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="lg:w-2/5 p-10 md:p-16 flex flex-col justify-center bg-primary text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                  <span className="text-accent text-xs font-bold uppercase tracking-[3px] mb-6">{featured.category}</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{featured.title}</h2>
                  <p className="text-white/70 mb-12 text-lg leading-relaxed">{featured.excerpt}</p>

                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-white/10">
                    <span className="text-sm font-medium tracking-wider text-white/50">{featured.date}</span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-primary transition-all duration-300">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="10 5 19 5 19 14"></polyline></svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Latest Updates Grid */}
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Latest Updates</h3>
              <div className="h-[1px] bg-gray-200 flex-grow ml-8 hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remaining.map((article) => (
                <Link key={article.slug} href={`/news/${article.slug}`} className="group flex flex-col h-full bg-white border border-gray-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
                  <div className="aspect-[16/10] w-full overflow-hidden relative">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow relative">
                    <span className="text-mid text-xs font-semibold tracking-wider mb-4">{article.date}</span>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2">{article.title}</h3>
                    <p className="text-mid mb-8 flex-grow leading-relaxed text-sm line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors mt-auto">
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        <ContactBanner />
      </main>

      <Footer />
    </>
  )
}
