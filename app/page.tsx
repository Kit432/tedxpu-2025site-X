/* Homepage */
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/home/Marquee";
import Timeline from "@/components/home/Timeline";
//import Animation from "@/components/home/Animation";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", }}>
      <section style={{}}>
        <Marquee />
        <HeroSection />
        <Marquee reverse />
      </section>
        <Timeline/>
      
    </main>
  );
}
