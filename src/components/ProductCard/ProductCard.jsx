import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../contexts/WishlistContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export default function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  const { valueOf } = useContext(CurrencyContext);

  const price = valueOf(product.priceUSD);
  const wished = isWishlisted(product.id);

  return (
    <div className={styles.card}>
      {/* Glow layer */}
      <div className={styles.glowLayer} />

      {/* 1. Image Section */}
      <Link to={`/product/${product.id}`} className={styles.imageWrap}>
        <img src={product.image} alt={product.title} />
        {/* Shine sweep */}
        <span className={styles.shine} />
      </Link>

      {/* 2. Wishlist Button (Top Right) */}
      <button
        className={`${styles.wishBtn} ${wished ? styles.wished : ""}`}
        aria-label="Add to wishlist"
        onClick={(e) => {
          e.preventDefault(); // Prevent navigating to product page when clicking heart
          toggleWishlist(product);
        }}
      >
        <span className={styles.wishIcon}>
          {wished ? "♥" : "♡"}
        </span>
      </button>

      {/* 3. Meta Info (Bottom Left) */}
      <div className={styles.meta}>
        <div className={styles.price}>
          {price.symbol}
          {price.amount}
        </div>
        <div className={styles.category}>
          {product.title || product.category}
        </div>
      </div>
    </div>
  );
}
