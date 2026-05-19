/* Homepage */
import HeroSection from "@/components/home/HeroSection";
import Timeline from "@/components/home/Timeline";
import ConsoleSignature from "../components/layout/ConsoleSignature";

export default function Home() {
  return (
    <main className="min-h-screen text-white py-16 md:py-0">
      <section style={{}}>
        {/*
          Built by Λιν Χονγκ Τσε (Κιτ) — TEDxPanteion University X Website
          Github: https://github.com/Kit432
      */}
        <ConsoleSignature />
        <HeroSection />
      </section>
        <Timeline />
      
    </main>
  );
}
