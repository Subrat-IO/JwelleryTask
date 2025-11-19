import React, { createContext, useState, useEffect, useContext } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useContext(AuthContext);
  const storageKey = user ? `cart_${user.email}` : "cart_guest";
  const [cart, setCart] = useState(() => loadFromStorage(storageKey, []));

  useEffect(() => saveToStorage(storageKey, cart), [cart, storageKey]);

  const addToCart = (product, attrs = {}, qty = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && JSON.stringify(item.attrs) === JSON.stringify(attrs)
      );
      if (existingIndex >= 0) {
        const copy = [...prev];
        copy[existingIndex].qty += qty;
        return copy;
      }
      return [...prev, { product, attrs, qty }];
    });
  };

  const updateQty = (index, qty) => {
    setCart((prev) => prev.map((it, i) => (i === index ? { ...it, qty } : it)));
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
