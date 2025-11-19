import React, { createContext, useState, useEffect, useContext } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { user } = useContext(AuthContext);
  const storageKey = user ? `wishlist_${user.email}` : "wishlist_guest";
  const [items, setItems] = useState(() => loadFromStorage(storageKey, []));

  useEffect(() => saveToStorage(storageKey, items), [items, storageKey]);

  const toggleWishlist = (product) => {
    setItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  };

  const isWishlisted = (id) => items.some((p) => p.id === id);

  return (
    <WishlistContext.Provider value={{ items, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
}
