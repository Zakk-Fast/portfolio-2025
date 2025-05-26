"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.scss";
import { Mail, Github, Linkedin } from "lucide-react";
import AnimatedBackground from "../animatedBackground/AnimatedBackground";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
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

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <AnimatedBackground />

      <motion.div
        className={styles.contact__container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants}>Let's Connect</motion.h2>
        <motion.p variants={itemVariants}>
          Got a project in mind or just want to chat? I&apos;d love to hear from
          you.
        </motion.p>

        <motion.div className={styles.contact__links} variants={itemVariants}>
          <motion.a
            href="https://github.com/Zakk-Fast"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, rotate: -2 }}
          >
            <Github size={32} />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/zachary-fast/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, rotate: -2 }}
          >
            <Linkedin size={32} />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:dev@zakkfast.io"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6, rotate: -2 }}
          >
            <Mail size={32} />
            <span>Email</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
