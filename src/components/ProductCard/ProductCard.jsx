import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../contexts/WishlistContext";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export default function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  const { valueOf } = useContext(CurrencyContext);

  const price = valueOf(product.priceUSD);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.title} />
        </Link>
        <button
          className={styles.wishBtn}
          aria-label="Add to wishlist"
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted(product.id) ? "♥" : "♡"}
        </button>
      </div>
      <div className={styles.meta}>
        <div className={styles.price}>
          {price.currency} {price.amount}
        </div>
        <div className={styles.category}>{product.category}</div>
      </div>
    </div>
  );
}
