import { useState, useContext } from "react";
import styles from "./Login.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContext } from "../../components/Toast/ToastContainer";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(AuthContext);
  const toast = useContext(ToastContext);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await auth.login({ email, password });
    if (res.ok) {
      toast.add("Logged in successfully", "success");
      navigate("/");
    } else {
      toast.add(res.error || "Login failed", "error");
    }
  };

  return (
    <div className={styles.gridOuter}>
      <div className={styles.gridImage}>
        <img 
          src="https://d25g9z9s77rn4i.cloudfront.net/uploads/product/956/1680015606_e670763a55aab08fb0d6.jpg"
          alt="Login visual"
        />
      </div>
      <div className={styles.gridForm}>
        <h2 className={styles.heading}>Log In</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <label>Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            autoFocus
            required
          />

          <label>Password</label>
          <input
            className={styles.input}
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />

          <div className={styles.formRow}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={showPassword} onChange={()=>setShowPassword(s=>!s)} />
              Show password
            </label>
            <Link to="/forgot-password" className={styles.secondaryLink}>Forgot password?</Link>
          </div>

          <button className={styles.button} type="submit">LOG IN</button>
        </form>
        <div className={styles.switchText}>
          Don’t have an account? <Link to="/signup" className={styles.primaryLink}>Register Here</Link>
        </div>
      </div>
    </div>
  );
}
