import React, { useRef } from "react";
import styles from "./ShapeSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ShapeSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const shapes = [
    { name: "ROUND", img: "/assets/round.png" },
    { name: "HEART", img: "/assets/heart.png" },
    { name: "RADIANT", img: "/assets/radiant.png" },
    { name: "PRINCESS", img: "/assets/princess.png" },
    { name: "PEAR", img: "/assets/pear.png" },
    { name: "OVAL", img: "/assets/oval.png" },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>SHOP BY SHAPE</h2>
      <p className={styles.subtitle}>Every Diamond Tells a Story So Find Yours</p>

      <div className={styles.sliderWrapper}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className={styles.slider} ref={sliderRef}>
          {shapes.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.imgBox}>
                <img src={s.img} alt={s.name} />
              </div>
              <span>{s.name}</span>
            </div>
          ))}
        </div>

        <button className={`${styles.arrow} ${styles.right}`} onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
