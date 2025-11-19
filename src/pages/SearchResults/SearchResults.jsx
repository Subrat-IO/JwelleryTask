import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchProducts } from "../../api/mockApi";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function SearchResults() {
  const q = new URLSearchParams(useLocation().search).get("q") || "";
  const [results, setResults] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await searchProducts(q);
      setResults(res);
    })();
  }, [q]);

  return (
    <div className="container" style={{padding:"24px 0"}}>
      <h2>Search results for “{q}”</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:16, marginTop:12}}>
          {results.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}
