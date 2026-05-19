import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeading } from "@/components/ui/SectionHeading"
import Link from "next/link"

const NEWS_ARTICLES = [
  {
    slug: "expansion-east-africa",
    title: "Expansion of Fleet Operations in East Africa",
    excerpt: "Wissler Cargo announces a significant investment in new fleet vehicles to support growing demand across the East African corridor.",
    category: "Company Update",
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a56?q=80&w=2070",
    date: "May 15, 2026"
  },
  {
    slug: "customs-compliance-2026",
    title: "Navigating the New 2026 Customs Regulations",
    excerpt: "A comprehensive guide on the upcoming regulatory changes affecting cross-border trade and how our team ensures full compliance.",
    category: "Industry Insight",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    date: "May 02, 2026"
  },
  {
    slug: "sustainability-initiatives",
    title: "Our Roadmap to Carbon-Neutral Logistics",
    excerpt: "Detailing our latest initiatives and partnerships aimed at reducing the environmental impact of global supply chains.",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070",
    date: "April 18, 2026"
  }
]

export default function NewsIndexPage() {
  return (
    <>
      <Navbar transparent={false} />
      
      <main className="flex-1 pt-24 pb-20 md:pb-24 bg-light min-h-screen">
        <div className="container mx-auto px-4 md:px-8 max-w-[1280px]">
          <SectionHeading 
            title="News & Insights" 
            subtitle="The latest updates from Wissler Cargo and insights from across the global logistics industry."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article) => (
              <Link key={article.slug} href={`/news/${article.slug}`} className="group flex flex-col h-full bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-accent text-xs font-bold uppercase tracking-[2px]">{article.category}</span>
                    <span className="text-mid text-xs">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="text-mid mb-6 flex-grow">{article.excerpt}</p>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider group-hover:text-accent transition-colors">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
