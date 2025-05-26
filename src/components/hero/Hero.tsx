"use client";

import { useEffect, useState } from "react";
import style from "./Hero.module.scss";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground";

export default function Hero() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setTextVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="home">
      <AnimatedBackground />
      <div className={style.hero__fixedText}>
        <p className={style.hero__subtitle}>Creative</p>
        <h1
          className={`${style.hero__title} ${style.revealText} ${
            textVisible ? style.revealTextVisible : ""
          }`}
        >
          <span className={style.hero__titleLine}>
            <span className={style.hero__titleText}>Developer.</span>
          </span>
          <br />
          <span className={style.hero__titleLine}>
            <span className={style.hero__titleSpan}>Designer.</span>
          </span>
        </h1>
      </div>

      <div className={style.hero__container}>
        <div className={style["hero__container-left-block"]}>
          <h2 className={style.hero__description}>
            I&apos;m a full-stack developer and tinkerer based in the US. For
            the past few years, I&apos;ve worked on real-world products with
            fast-moving teams, building intuitive interfaces and thoughtful user
            experiences. I love pixel art, Dungeons & Dragons, and exploring how
            things work.. mostly by breaking them first.
          </h2>
        </div>
      </div>
      <div className={style.hero__phantom}></div>
    </div>
  );
}
