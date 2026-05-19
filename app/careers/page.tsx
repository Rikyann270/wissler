import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeading } from "@/components/ui/SectionHeading"

export default function CareersPage() {
  return (
    <>
      <Navbar transparent={false} />
      <main className="flex-1 pt-24 pb-20 md:pb-24 bg-light min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Work With Us" subtitle="Join the team at Wissler Cargo. Open positions will be posted here." />
        </div>
      </main>
      <Footer />
    </>
  )
}
