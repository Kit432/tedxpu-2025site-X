/* Homepage */
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import Timeline from "@/components/home/Timeline";
//import Animation from "@/components/home/Animation";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#07080A" }}>
      <div className="space-y-2">
        <Marquee />
        
      </div>
        <HeroSection />
        <Marquee reverse />
      <section style={{}}>
        <Timeline/>
      </section>
    </main>
  );
}
