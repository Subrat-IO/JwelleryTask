import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search for rings, necklaces, shapes..." />
      <button type="submit">Search</button>
    </form>
  );
}
