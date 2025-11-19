import { useState, useContext } from "react";
import styles from "/src/pages/Login/Login.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContext } from "../../components/Toast/ToastContainer";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });
  const auth = useContext(AuthContext);
  const toast = useContext(ToastContext);
  const navigate = useNavigate();

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      toast.add("Passwords do not match", "error");
      return;
    }
    const res = await auth.signup({ ...form });
    if (res.ok) {
      toast.add("Account created", "success");
      navigate("/");
    } else {
      toast.add(res.error || "Signup failed", "error");
    }
  };

  return (
    <div className={styles.gridOuter}>
      <div className={styles.gridImage}>
        <img
          src="https://i.pinimg.com/736x/d4/73/d7/d473d7e9caacc23874f80feb098402af.jpg"
          alt="Signup visual"
        />
      </div>
      <div className={styles.gridForm}>
        <h2 className={styles.heading}>Sign Up</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.formRow}>
            <div className={styles.splitInput}>
              <label>First name</label>
              <input name="firstName" type="text" required value={form.firstName} onChange={handleChange} />
            </div>
            <div className={styles.splitInput}>
              <label>Last name</label>
              <input name="lastName" type="text" required value={form.lastName} onChange={handleChange} />
            </div>
          </div>
          <label>Email</label>
          <input name="email" type="email" required value={form.email} onChange={handleChange} />

          <label>Phone number</label>
          <input name="phone" type="text" required value={form.phone} onChange={handleChange} placeholder="+91 Enter number" />

          <label>Password</label>
          <input name="password" type={showPassword ? "text" : "password"} required value={form.password} onChange={handleChange} />

          <label>Confirm Password</label>
          <input name="confirm" type={showPassword ? "text" : "password"} required value={form.confirm} onChange={handleChange} />

          <div className={styles.formRow}>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" checked={showPassword} onChange={()=>setShowPassword(s=>!s)} />
              Show password
            </label>
          </div>

          <button className={styles.button} type="submit">CREATE ACCOUNT</button>
        </form>
        <div className={styles.switchText}>
          Already have an account? <Link to="/login" className={styles.primaryLink}>Click here</Link>
        </div>
      </div>
    </div>
  );
}
