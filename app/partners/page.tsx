import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeading } from "@/components/ui/SectionHeading"

export default function PartnersPage() {
  return (
    <>
      <Navbar transparent={false} />
      <main className="flex-1 pt-24 pb-20 md:pb-24 bg-light min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Partner Opportunities" subtitle="We're always looking for reliable partners across the globe." />
        </div>
      </main>
      <Footer />
    </>
  )
}
