import IntroScreen from "@/components/intro/IntroScreen";
import AboutSection from "@/components/about/AboutSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* =========================
          HERO / INTRO
      ========================== */}
      <IntroScreen />

      {/* =========================
          ABOUT SECTION
          IntroButton scrolls here
      ========================== */}
      <section
        id="portfolio"
        className="min-h-screen bg-[#f8f6f2]"
      >
        <AboutSection />
      </section>
    </main>
  );
}