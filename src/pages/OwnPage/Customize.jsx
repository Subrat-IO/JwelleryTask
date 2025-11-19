import React from "react";
import styles from "./style.module.css";

export default function CustomHero() {
  return (
    <section className={styles.customHero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>MAKE YOUR OWN</h2>
          <p>
            DESIGN A PIECE THAT'S TRULY YOURS, PERSONALIZED,
            ENGRAVED, AND CRAFTED TO REFLECT YOUR UNIQUE STYLE.
          </p>
          <button className={styles.ctaBtn}>CUSTOMIZE</button>
        </div>
      </div>
    </section>
  );
}
