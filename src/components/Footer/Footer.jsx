import React, { useState, useContext } from "react";
import styles from "./Footer.module.css";
import { ToastContext } from "../Toast/ToastContainer";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const toast = useContext(ToastContext);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.add("Please enter a valid email", "error");
      return;
    }
    await new Promise((r) => setTimeout(r, 500));
    setEmail("");
    toast.add("Subscribed! Thank you.", "success");
  };

  return (
    <footer className={styles.footer}>
      {/* ============ JOIN BANNER ============ */}
      <div className={styles.joinBanner}>
        <h3>BECOME A MEMBER AND GET EXCLUSIVE DEALS</h3>
        <p>Subscribe to our newsletter to stay in the loop.</p>

        <form onSubmit={subscribe} className={styles.subscribeForm}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email here."
          />
          <button type="submit">➤</button>
        </form>
      </div>

      {/* ============ MAIN FOOTER ============ */}
      <div className={styles.footerMain}>
        <div className={styles.footerLogo}>
          <h2>NIORA</h2>
          <p>Grown with love, worn with pride</p>

          <div className={styles.socialIcons}>
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* FOOTER LINKS */}
        <div className={styles.footerGrid}>
          <div>
            <h4>COMPANY</h4>
            <ul>
              <li>About us</li>
              <li>Why we are different</li>
              <li>Lab grown diamonds</li>
              <li>Why us</li>
              <li>Our purpose</li>
              <li>Story Glimpse</li>
            </ul>
          </div>

          <div>
            <h4>SUPPORT</h4>
            <ul>
              <li>Chat Now</li>
              <li>Free Resizing</li>
              <li>Track your Order</li>
              <li>Education</li>
              <li>Review</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div>
            <h4>SERVICES</h4>
            <ul>
              <li>Free Shipping</li>
              <li>Return Policy</li>
              <li>Lifetime Warranty</li>
              <li>Order Status</li>
              <li>Cancellation</li>
              <li>Certifications</li>
              <li>Buyback</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============ BOTTOM STRIP ============ */}
      <div className={styles.footerBottom}>
        <div className={styles.payments}>
          <img src="/src/assets/Screenshot from 2025-11-19 16-30-48.png" alt="" />
        </div>

        <p>© {new Date().getFullYear()} — Copyright All Right Reserved.</p>

        <span className={styles.privacy}>Privacy Policy</span>
      </div>
    </footer>
  );
}
