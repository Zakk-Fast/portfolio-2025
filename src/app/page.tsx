import Hero from "@/components/hero/Hero";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground";
import Aboutme from "@/components/aboutMe/AboutMe";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Hero />
      {/* <div className="temp">

      </div> */}
      <Aboutme />
    </div>
  );
}
