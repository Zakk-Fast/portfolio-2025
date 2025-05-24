"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__inner}>
        <div className={styles["navigation__inner--left"]}>
          <Link href="/">Zakk Fast</Link>
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
          <Link href="/">about</Link>
          <Link href="/">contact</Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            about
          </Link>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            contact
          </Link>
        </div>
      )}
    </div>
  );
}
