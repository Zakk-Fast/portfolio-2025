"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [boostZ, setBoostZ] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const navTimer = setTimeout(() => setShowNav(true), 3000);
    const boostTimer = setTimeout(() => {
      document.body.style.overflow = "";
      setBoostZ(true);
    }, 4000);

    return () => {
      clearTimeout(navTimer);
      clearTimeout(boostTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          className={`${styles.navigation} ${
            boostZ ? styles["navigation--boosted"] : ""
          }`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.navigation__inner}>
            <div className={styles["navigation__inner--left"]}>
              <Link href="#home">Zakk Fast</Link>
              <p>UX|UI Designer - Developer</p>
            </div>

            <div
              className={styles.hamburger}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span />
              <span />
              <span />
            </div>

            <div className={styles["navigation__inner--right"]}>
              <Link href="#about">about</Link>
              <Link href="#contact">contact</Link>
            </div>
          </div>

          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                about
              </Link>
              <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                contact
              </Link>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
