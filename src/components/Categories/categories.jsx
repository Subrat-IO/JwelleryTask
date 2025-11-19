import React from "react";
import styles from "./style.module.css";

const categories = [
  {
    label: "EARRINGS",
    img: "https://www.efifdiamonds.com/cdn/shop/files/IMG_1001_1_600x600_crop_center.png?v=1721892055",
    link: "/category/earrings",
  },
  {
    label: "EARRINGS",
    img: "/assets/-bbdr1ix4.jpg",
    link: "/category/earrings",
  },
  {
    label: "BRACELET",
    img: "https://tyaani.com/cdn/shop/files/OB00006MODEL.jpg?v=1745585539&width=1100",
    link: "/category/bracelet",
  },
  {
    label: "RINGS",
    img: "https://kinclimg9.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BICM0449R15-POSTER-V1-70515.jpg",
    link: "/category/rings",
  },
  {
    label: "WEDDING",
    img: "https://i.pinimg.com/736x/da/f6/4f/daf64f33fa3804218c6f563b5d8ce816.jpg",
    link: "/category/wedding",
  },
];

export default function ShopByCategory() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>SHOP BY CATEGORY</h1>
      <div className={styles.subtitle}>
        Discover Jewelry Designed for Every Mood and Moment
      </div>
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <a href={categories[0].link} className={styles.tile}>
            <img src={categories[0].img} alt="Earrings" />
            <span className={styles.label}>{categories[0].label}</span>
          </a>
          <a href={categories[3].link} className={styles.tile}>
            <img src={categories[3].img} alt="Rings" />
            <span className={styles.label}>{categories[3].label}</span>
          </a>
        </div>
        <div className={styles.centerCol}>
          <a href={categories[1].link} className={styles.tileTall}>
            <img  src={categories[1].img} alt="Earrings" />
            <span className={styles.label}>{categories[1].label}</span>
          </a>
        </div>
        <div className={styles.rightCol}>
          <a href={categories[2].link} className={styles.tile}>
            <img src={categories[2].img} alt="Bracelet" />
            <span className={styles.label}>{categories[2].label}</span>
          </a>
          <a href={categories[4].link} className={styles.tile}>
            <img src={categories[4].img} alt="Wedding" />
            <span className={styles.label}>{categories[4].label}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
