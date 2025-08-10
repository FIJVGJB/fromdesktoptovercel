import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import ChampionsSection from "@/components/home/champions-section"
import GameplaySection from "@/components/home/gameplay-section"
import DownloadSection from "@/components/home/download-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ChampionsSection />
      <GameplaySection />
      <DownloadSection />
      <Footer />
    </div>
  )
}
