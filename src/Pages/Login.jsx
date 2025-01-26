import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Login.module.css"; // Modular CSS
import loginImage from "../assets/logo.jpg"; // Logo path
import Button from "../components/Button/Button"; // Custom Button Component

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
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
    try {
      const response = await fetch("http://localhost/Zeitgeist/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem("user", JSON.stringify(result.user));
        setMessage("");
        navigate("/profile");
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          <div className={styles.formContainer} data-aos="fade-left">
            <h1 className={styles.heading}>Login</h1>
            <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
              <div className={styles.control}>
                <input
                  className={styles.blockCubeInput}
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.control}>
                <input
                  className={styles.blockCubeInput}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {message && <p className={styles.error}>{message}</p>}
              <button className={styles.btn} type="submit" data-aos="zoom-in">
                Log In
              </button>
              <Button
                btnMessage="Go to Registration"
                heading="New Registration"
                onClick={() => navigate("/registration")}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
