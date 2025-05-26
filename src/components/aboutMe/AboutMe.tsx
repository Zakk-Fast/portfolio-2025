"use client";

import { motion } from "framer-motion";
import ModelRender from "../modelRender/ModelRender";
import style from "./AboutMe.module.scss";

const containerVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Aboutme() {
  return (
    <div className={style.aboutme} id="about">
      <ModelRender />

      <motion.div
        className={style.aboutme__container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>
          Hello. I&apos;m <span>Zakk.</span>
        </motion.h1>

        <motion.p variants={itemVariants}>
          <span>I design and build full-stack web applications </span> with
          clean UI, scalable architecture, and thoughtful code. I specialize in
          turning rough ideas into polished digital products—bridging the gap
          between design and development. I work with startups and teams to
          build fast, accessible, and reliable web experiences. I care deeply
          about code quality, user experience, and the details that make good
          products great. Outside of work, I run D&D campaigns, tinker with
          pixel art, and explore how things work—always learning, always
          building.
        </motion.p>
      </motion.div>
    </div>
  );
}
