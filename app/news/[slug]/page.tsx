import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactBanner } from "@/components/sections/ContactBanner"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NEWS_ARTICLES } from "@/lib/newsData"
import { notFound } from "next/navigation"

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const article = NEWS_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar transparent={false} />

      <main className="flex-1 pt-24 bg-white">

        {/* Article Header */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl py-12">
          <Link href="/news" className="inline-flex items-center text-sm font-semibold text-mid hover:text-accent uppercase tracking-wider mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-light px-3 py-1 text-accent text-xs font-bold uppercase tracking-[2px] rounded-sm">{article.category}</span>
            <span className="text-mid text-sm">{article.date}</span>
          </div>

          <h1 className="text-[36px] md:text-[48px] font-bold text-primary leading-tight mb-8">
            {article.title}
          </h1>
        </div>

        {/* Article Hero Image */}
        <div className="w-full h-[400px] md:h-[600px] relative">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl py-16">
          <div className="prose prose-lg prose-blue max-w-none text-mid">
            {article.content.map((paragraph, index) => (
              <p key={index} className={`mb-6 ${index === 0 ? "lead text-2xl text-primary font-medium mb-8" : ""}`}>
                {paragraph}
              </p>
            ))}

            {article.highlights && (
              <>
                <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Key Takeaways</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  {article.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <ContactBanner />
      </main>

      <Footer />
    </>
  )
}

