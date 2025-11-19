import React, { useRef } from "react";
import styles from "./ShapeSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ShapeSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const shapes = [
    { name: "ROUND", img: "/assets/Screenshot from 2025-11-19 16-22-44.png" },
    { name: "HEART", img: "/assets/Screenshot from 2025-11-19 16-22-50.png" },
    { name: "RADIANT", img: "/assets/radiant.png" },
    { name: "PRINCESS", img: "/assets/princess.png" },
    { name: "PEAR", img: "/assets/pear.png" },
    { name: "OVAL", img: "/assets/oval.png" },
  ];

  return (
    <>
    <section className={styles.section}>
      <h2 className={styles.title}>SHOP BY SHAPE</h2>
      <p className={styles.subtitle}>Every Diamond Tells a Story So Find Yours</p>

      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={scrollLeft}><FaChevronLeft /></button>

        <div className={styles.slider} ref={sliderRef}>
          {shapes.map((s, i) => (
            <div key={i} className={styles.card}>
              <img src={s.img} alt={s.name} />
              <span>{s.name}</span>
            </div>
          ))}
        </div>

        <button className={styles.arrow} onClick={scrollRight}><FaChevronRight /></button>
      </div>
    </section>
    
    </>
  );
}
