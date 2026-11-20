import Navbar from "@/components/Navbar";
import BioSection from "@/components/BioSection";
import VideosSection from "@/components/VideosSection";
import PdfDownloadsSection from "@/components/PdfDownloadsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-obsidian text-alabaster">
      <Navbar />
      <BioSection />
      <VideosSection />
      <PdfDownloadsSection />
      <ContactSection />
    </main>
  );
}