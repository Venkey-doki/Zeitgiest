import React from "react";
import styles from "./Card.module.css"; // Import the CSS module
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Card = ({ image, heading, description, coordinators, buttonMessage }) => {

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${image})` }} // Use the image prop to set the background image
        ></div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
        <h2 className={styles.heading}>Coordinators</h2>
        <p className={styles.coordinators}>{coordinators[0]}</p>
        <p className={styles.coordinators}>{coordinators[1]}</p>
        {/* Pass the handleRegister function to the Button component */}
        {buttonMessage ? 
        (<Button btnMessage={buttonMessage} heading={heading} />): null
      }
      </div>
    </div>
  );
};

export default Card;
