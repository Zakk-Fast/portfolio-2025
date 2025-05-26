import Hero from "@/components/hero/Hero";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground";
import Aboutme from "@/components/aboutMe/AboutMe";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Hero />
      {/* <div className="temp">

      </div> */}
      <Aboutme />
      <Contact />
    </div>
  );
}
