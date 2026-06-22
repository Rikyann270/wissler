import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SectionHeading } from "@/components/ui/SectionHeading"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logistics Documents & Downloads | Wissler Cargo",
  description: "Download essential customs forms, shipping documents, terms and conditions, and regional trade guidelines for Wissler Cargo.",
};

export default function DownloadsPage() {
  return (
    <>
      <Navbar transparent={false} />
      <main className="flex-1 pt-24 pb-20 md:pb-24 bg-light min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Useful Downloads" subtitle="Forms, documentation, and brochures." />
        </div>
      </main>
      <Footer />
    </>
  )
}
