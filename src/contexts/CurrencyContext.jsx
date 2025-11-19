import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

// Simple example rates
const RATES = { USD: 1, INR: 82, EUR: 0.92 };

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("USD");

  const valueOf = (priceUSD) => {
    const rate = RATES[currency] || 1;
    const converted = priceUSD * rate;
    return { amount: Number(converted.toFixed(2)), currency };
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, valueOf }}>
      {children}
    </CurrencyContext.Provider>
  );
}
