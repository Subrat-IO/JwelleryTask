import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import styles from "./Header.module.css";
import {
  FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaGlobe,
  FaShoppingBag, FaRegHeart, FaUser, FaSearch, FaBars, FaTimes
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const userRef = useRef(null);
  const navigate = useNavigate();
  const { currency, setCurrency } = useContext(CurrencyContext);

  // Close user dropdown outside click
  useEffect(() => {
    function handleClick(e) {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserDropdown(false);
      }
    }
    if (userDropdown) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [userDropdown]);

  // Search submit
  const submitSearch = () => {
    if (!searchText.trim()) return;
    navigate(`/search?q=${searchText}`);
    setSearchOpen(false);
  };

  return (
    <header className={styles.headerWrapper}>
      
      {/* 🌟 TOP BAR */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>

        <div className={styles.topMid}>SIGNUP AND GET 10% OFF</div>

        <div className={styles.topRight}>
          <FaGlobe style={{ marginRight: 4 }} />
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} className={styles.currencySelect}>
            <option value="USD">$ USD</option>
            <option value="INR">₹ INR</option>
            <option value="EUR">€ EUR</option>
          </select>
        </div>
      </div>

      {/* 💎 MAIN BAR */}
      <div className={styles.brandBar}>
        <div className={styles.brandBarLeft}>
          <span className={styles.hamburger} onClick={() => setMenuOpen(m => !m)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>

          {!searchOpen && (
            <FaSearch className={styles.actionIcon} onClick={() => setSearchOpen(true)} />
          )}
        </div>

        {!searchOpen && (
          <div className={styles.brandBarCenter}>
            <Link to="/" className={styles.brand}>NIORA</Link>
          </div>
        )}

        {!searchOpen && (
          <div className={styles.brandBarRight}>
            <Link to="/wishlist"><FaRegHeart className={styles.actionIcon} /></Link>
            <Link to="/cart"><FaShoppingBag className={styles.actionIcon} /></Link>

            <div className={styles.userWrapper} ref={userRef}>
              <FaUser className={styles.actionIcon} onClick={() => setUserDropdown(u => !u)} />
              {userDropdown && (
                <div className={styles.userDropdown}>
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* MENU NAVIGATION */}
      <nav className={`${styles.navBar} ${menuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li><Link to="/new-arrival" onClick={() => setMenuOpen(false)}>NEW ARRIVAL</Link></li>
          <li><Link to="/custom-jewellery" onClick={() => setMenuOpen(false)}>CUSTOM JEWELLERY</Link></li>
          <li><Link to="/try-at-home" onClick={() => setMenuOpen(false)}>TRY AT HOME</Link></li>
          <li><Link to="/education-hub" onClick={() => setMenuOpen(false)}>EDUCATION HUB</Link></li>
          <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>ABOUT US</Link></li>
        </ul>
      </nav>

      {/* 🔍 SEARCH PANEL BELOW NAV */}
      <div className={`${styles.searchPanel} ${searchOpen ? styles.searchPanelOpen : ""}`}>
        <input
          type="text"
          placeholder="Search jewellery, rings, pendants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submitSearch()}
          autoFocus={searchOpen}
        />

        <FaTimes className={styles.closePanel} onClick={() => setSearchOpen(false)} />
      </div>
    </header>
  );
}
