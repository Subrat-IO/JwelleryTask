import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../api/mockApi";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import styles from "./ProductDetail.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { valueOf } = useContext(CurrencyContext);
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isWishlisted } = useContext(WishlistContext);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div className={styles.loading}>Loading...</div>;

  const price = valueOf(product.priceUSD);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <img className={styles.productImg} src={product.image} alt={product.title} />

        <button
          className={styles.wishIcon}
          onClick={() => toggleWishlist(product)}
        >
          {isWishlisted(product.id) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.price}>
          {price.currency} {price.amount}
        </div>

        <div className={styles.qtyRow}>
          <label>Quantity</label>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) => setQty(Math.max(1, +e.target.value))}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={() => addToCart(product, {}, qty)}
          >
            ADD TO CART
          </button>

          <button
            className={styles.wishBtn}
            onClick={() => toggleWishlist(product)}
          >
            {isWishlisted(product.id) ? "REMOVE WISHLIST" : "ADD WISHLIST"}
          </button>
        </div>
      </div>
    </div>
  );
}
