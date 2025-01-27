import React, { useEffect } from "react";
import styles from "../CSS/About.module.css"; // Importing the CSS module
import Logo from "../assets/logo.jpg";
import Card from "../components/Card/Card";

const About = () => {
  useEffect(() => {
    // Any additional logic or side effects can go here
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>About Our College Fest</h1>
        <p>Welcome to the most awaited event of the year! A festival full of fun, learning, and excitement!</p>
      </section>
      <section className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={Logo} alt="College Fest" />
        </div>
        <div className={styles.textContent}>
          <h2>Our Story</h2>
          <p>
            Our college fest is a celebration of creativity, teamwork, and student spirit. It's where the brightest
            minds come together to showcase their talent, engage in activities, and create lifelong memories. From
            cultural events to technical workshops, this fest is all about learning, connecting, and enjoying together.
          </p>
          <h2>Why Join Us?</h2>
          <ul>
            <li>Engage in exciting cultural performances</li>
            <li>Participate in fun and challenging competitions</li>
            <li>Learn new skills through workshops and talks</li>
            <li>Meet like-minded individuals and make new friends</li>
            <li>Get a chance to win exciting prizes and certificates</li>
          </ul>
        </div>
      </section>
      <section className={styles.footer}>
        <h3>Join us for an unforgettable experience!</h3>
        <button className={styles.joinBtn}>Register Now</button>
      </section>
    </div>
  );
};

export default About;
