"use client";

import { useEffect, useState } from "react";
import styles from "./DiamondReveal.module.scss";

export default function DiamondReveal() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={`${styles.svg} ${animate ? styles.fadeout : ""}`}
    >
      <defs>
        <mask id="diamond-mask">
          <rect width="100%" height="100%" fill="white" />
          <rect
            x="25"
            y="25"
            width="50"
            height="50"
            fill="black"
            className={`${styles.square} ${animate ? styles.animate : ""}`}
          />
        </mask>
      </defs>

      <rect width="100%" height="100%" fill="black" mask="url(#diamond-mask)" />
    </svg>
  );
}
