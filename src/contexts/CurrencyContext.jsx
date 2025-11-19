import React, { createContext, useState, useEffect } from "react";

export const CurrencyContext = createContext();

// Accurate sample rates (1 USD → others)
const RATES = { USD: 1, INR: 83.10, EUR: 0.91 };

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  // Optional: Try auto-detect user country currency
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then(res => res.json())
      .then(data => {
        if (RATES[data.currency]) {
          setCurrency(data.currency);
        }
      })
      .catch(() => console.log("Country detect failed"));
  }, []);

  const SYMBOL = { USD: "$", INR: "₹", EUR: "€" };

  /**
   * convert price in USD → user's currency
   */
  const valueOf = (priceUSD) => {
    const rate = RATES[currency] || 1;
    const convertedPrice = priceUSD * rate;
    return {
      amount: Number(convertedPrice.toFixed(2)),
      currency,
      symbol: SYMBOL[currency]
    };
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, valueOf }}>
      {children}
    </CurrencyContext.Provider>
  );
}
