import IntroScreen from "@/components/intro/IntroScreen";

export default function Home() {
  return (
    <main>
      <IntroScreen />

      <section
        id="portfolio"
        className="
          min-h-screen
          bg-white
          px-6
          py-24
        "
      >
        <h2 className="text-5xl font-bold">
          My Portfolio
        </h2>

        {/* Your actual portfolio content */}
      </section>
    </main>
  );
}