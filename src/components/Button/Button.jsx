import React from "react";
import styles from "./Button.module.css"; // Import the CSS Module
import { useNavigate } from "react-router-dom";

const Button = ({ btnMessage = "Click me!", heading }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleRegister = () => {
    navigate(`/Registration?event=${encodeURIComponent(heading)}`);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handleRegister}>
        {btnMessage}
      </button>
    </div>
  );
};

export default Button;
