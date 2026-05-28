import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ContactBanner } from "@/components/sections/ContactBanner"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

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
            <span className="bg-light px-3 py-1 text-accent text-xs font-bold uppercase tracking-[2px] rounded-sm">Company Update</span>
            <span className="text-mid text-sm">May 15, 2026</span>
          </div>

          <h1 className="text-[36px] md:text-[48px] font-bold text-primary leading-tight mb-8">
            {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
        </div>

        {/* Article Hero Image */}
        <div className="w-full h-[400px] md:h-[600px] relative">
          <img src="/home/5001367_52476.jpg" alt="News article hero" className="w-full h-full object-cover" />
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl py-16">
          <div className="prose prose-lg prose-blue max-w-none text-mid">
            <p className="lead text-2xl text-primary font-medium mb-8">
              Wissler announces a significant investment in new fleet vehicles to support growing demand across the East African corridor.
            </p>
            <p className="mb-6">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. */}
            </p>
            <h3 className="text-2xl font-bold text-primary mt-12 mb-6">Strategic Expansion</h3>
            <p className="mb-6">
              {/* Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. */}
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Increase in capacity by 40%</li>
              <li>New route integrations</li>
              <li>Enhanced tracking technology</li>
            </ul>
            <p>
              {/* In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. */}
            </p>
          </div>
        </div>

        <ContactBanner />
      </main>

      <Footer />
    </>
  )
}
