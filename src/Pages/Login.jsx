import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import styles from "../CSS/Login.module.css";
import "../CSS/Registration.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import QrCode200 from "../assets/qr-200-crop.jpg";
const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  // Check if user is already logged in and initialize AOS
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });

    try {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        navigate("/profile");
      }
    } catch (error) {
      console.error("Error checking logged in user:", error);
    }
  }, [navigate]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username.trim() || !formData.password.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://zeitgeistjntukcse.com/Zeitgeist/login.php",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("refresh", "true");
        setMessage("");
        navigate("/profile");
      } else {
        setMessage(response.data.message || "Invalid username or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        setMessage(error.response.data.message || "Server error. Please try again later.");
      } else if (error.request) {
        setMessage("Unable to connect to the server. Please try again later.");
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox} data-aos="fade-up">
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
              autoFocus
            />
          </div>
          <div className={styles.inputGroup} style={{ position: "relative" }}>
            <input
              className={styles.input}
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ paddingRight: "2rem" }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                padding: "0 0.5rem",
                color: showPassword ? "#000" : "#ccc",
                transition: "color 0.3s ease-in-out",
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {message && <p className={styles.error}>{message}</p>}
          <button
            className={`${styles.submitButton} ${loading ? styles.disabled : ""}`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "LogIn"}
          </button>
          <p className={styles.footerText}>
            Not registered yet?{" "}
            <span
              className={styles.link}
              onClick={() => navigate("/registration?from=login")}
            >
              Register Now!
            </span>
          </p>
          <p className={styles.footerText}>
            Done Pre Registration?{" "}
            <span
              className={styles.link}
              onClick={toggleModal}
            >
              Make Payment Now!
            </span>
          </p>
        </form>
      </div>
      {showModal && (
  <div className="modal-overlay" onClick={toggleModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>Scan to Pay</h3>
      <img src={QrCode200} alt="Payment QR Code" className="qr-code" />
      <div className="payment-instructions">
        <p>1. Scan QR code to make payment</p>
        <p>2. Take a screenshot of successful payment</p>
        <p>
          3. Send payment screenshot to{" "}
          <a href="https://wa.me/918317504292" target="_blank" rel="noopener noreferrer">
            8317504292
          </a>{" "}
          via WhatsApp
        </p>
        <p>
          4. Make a call to{" "}
          <a href="tel:+918317504292">
            8317504292
          </a>{" "}
          after successful payment
        </p>
      </div>
      <button className="close-button" onClick={toggleModal}>Close</button>
    </div>
  </div>
)}

    </div>
  );
};

export default Login;
