import React, { createContext, useState, useEffect } from "react";
import { loadFromStorage, saveToStorage, removeFromStorage } from "../utils/storage";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => loadFromStorage("user", null));
  const [token, setToken] = useState(() => loadFromStorage("token", null));

  useEffect(() => saveToStorage("user", user), [user]);
  useEffect(() => {
    if (token) saveToStorage("token", token);
    else removeFromStorage("token");
  }, [token]);

  const login = async ({ email, password }) => {
    // simulate backend validation
    await new Promise((r) => setTimeout(r, 400));
    if (!email) return { ok: false, error: "Email required" };
    // Accept any password for mock
    const fakeToken = "fake-jwt-token";
    const u = { email, name: email.split("@")[0] };
    setUser(u);
    setToken(fakeToken);
    return { ok: true, user: u };
  };

  const signup = async ({ firstName, lastName, email, phone }) => {
    await new Promise((r) => setTimeout(r, 500));
    const u = { email, firstName, lastName, phone };
    setUser(u);
    setToken("fake-jwt-token");
    return { ok: true, user: u };
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeFromStorage("cart_guest");
    removeFromStorage("wishlist_guest");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
