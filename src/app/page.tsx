import Hero from "@/components/hero/Hero";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground";

export default function Home() {
  return (
    <div>
      <AnimatedBackground />
      <Hero />
      <div className="temp">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia magni
          perspiciatis ea aperiam corporis beatae.
        </h1>
      </div>
    </div>
  );
}
