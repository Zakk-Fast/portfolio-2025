"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import style from "./Hero.module.scss";
import AnimatedBackground from "@/components/animatedBackground/AnimatedBackground";

export default function Hero() {
  const [textVisible, setTextVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);

  useEffect(() => {
    const initialTextTimer = setTimeout(() => setTextVisible(true), 50);
    const descTimer = setTimeout(() => setDescVisible(true), 3000);

    return () => {
      clearTimeout(initialTextTimer);
      clearTimeout(descTimer);
    };
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
          {descVisible && (
            <motion.h2
              className={style.hero__description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              I&apos;m a full-stack developer and tinkerer based in the US. For
              the past few years, I&apos;ve worked on real-world products with
              fast-moving teams, building intuitive interfaces and thoughtful
              user experiences. I love pixel art, Dungeons & Dragons, and
              exploring how things work.. mostly by breaking them first.
            </motion.h2>
          )}
        </div>
      </div>

      <div className={style.hero__phantom}></div>
    </div>
  );
}
