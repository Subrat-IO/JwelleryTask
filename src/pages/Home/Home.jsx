import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { fetchProducts } from "../../api/mockApi";
import ProductCard from "../../components/ProductCard/ProductCard";
import ShopByCategory from "../../components/Categories/categories";
import heroImg from "../../assets/jewellery-1723637.jpg"; // FIXED 👍
import ShapeSlider from "../ShapeSlider/ShapreSlider";
import CustomHero from "../OwnPage/Customize";
import DiamondsSection from "../../components/swiper/Swiper";
import RecentBlogs from "../../components/Blogs/blogs";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);
  useEffect(() => {
    function handleScroll() {
      const hero = document.querySelector(`.${styles.heroBg}`);
      hero.style.transform = `translateY(${
        window.scrollY * 0.12
      }px) scale(1.05)`;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <img className={styles.heroBg} src={heroImg} alt="hero" />
        <div className={styles.overlay}></div>

        <div className={styles.heroContent}>
          <h1>GIFT THE GLOW</h1>
          <p>Fresh designs that sparkle as bright as you do.</p>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>SHOP NOW</button>
            <button className={styles.outlineBtn}>CUSTOMIZE</button>
          </div>
        </div>
      </section>


      {/* SHOP BY CATEGORY */}
      <ShopByCategory />
    <div style={{ display: "flex", justifyContent: "center" }}>
  <ShapeSlider />
</div>

<CustomHero></CustomHero>
<DiamondsSection></DiamondsSection>
      {/* FEATURED PRODUCTS */}
      <section
        className="container"
        style={{ padding: "24px 0", textAlign: "center" }}
      >
        <h2>Featured Products</h2>

        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <button className={styles.exploreBtn}>Explore More</button>
      </section>
<RecentBlogs></RecentBlogs>

    </div>
    
  );
}
