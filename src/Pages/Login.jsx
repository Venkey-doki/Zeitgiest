import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios"; // Import axios
import styles from "../CSS/Login.module.css"; // Modular CSS

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Redirect to profile if the user is already logged in
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.username.trim() === "" || formData.password.trim() === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "https://zeitgeistjntukcse.com/Zeitgeist/login.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check if the response was successful
      if (response.data.success) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setMessage("");
        window.r
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
      setLoading(false); // End loading
    }
  };

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.formBox}>
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
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              className={styles.input}
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {message && <p className={styles.error}>{message}</p>}
          <button
            className={`${styles.submitButton} ${loading ? styles.disabled : ""}`}
            type="submit"
            data-aos="zoom-in"
            disabled={loading}
          >
            {loading ? "Logging in..." : "LogIn"}
          </button>
          <p className={styles.footerText}>
            Not registered yet?{" "}
            <span
              className={styles.link}
              onClick={() => navigate("/registration")}
            >
              Register Now!
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
