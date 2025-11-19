import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import { Link } from "react-router-dom";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
  const { items, toggleWishlist } = useContext(WishlistContext);
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>❤️ Your Wishlist</h2>

      {items.length === 0 ? (
        <p className={styles.empty}>No items in wishlist</p>
      ) : (
        <div className={styles.grid}>
          {items.map((p) => (
            <div key={p.id} className={styles.card}>
              <Link to={`/product/${p.id}`}>
                <img src={p.image} alt={p.title} className={styles.image} />
              </Link>

              <button className={styles.wishBtn} onClick={() => toggleWishlist(p)}>
                ❌
              </button>

              <div className={styles.details}>
                <div className={styles.titleText}>{p.title}</div>
                <button className={styles.removeBtn} onClick={() => toggleWishlist(p)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
