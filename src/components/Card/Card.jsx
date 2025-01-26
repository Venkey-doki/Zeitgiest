import React from "react";
import styles from "./Card.module.css"; // Import the CSS module
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Card = ({ image, heading, description, buttonMessage }) => {

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${image})` }} // Use the image prop to set the background image
        ></div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        {/* Pass the handleRegister function to the Button component */}
        <Button btnMessage={buttonMessage} heading={heading} />
      </div>
    </div>
  );
};

export default Card;
