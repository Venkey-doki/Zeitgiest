import React, { useEffect } from "react";
import styles from "../CSS/About.module.css"; // Importing the CSS module
import Logo from "../assets/logo.jpg";
import Card from "../components/Card/Card";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.header} data-aos="fade-up">
        <h1>About Our College Fest</h1>
        <p>
          Welcome to the most awaited event of the year! A festival full of fun,
          learning, and excitement!
        </p>
      </section>
      <section className={styles.content}>
        <div
          className={styles.imageContainer}
          data-aos="zoom-in"
        >
          <img src={Logo} alt="College Fest" />
        </div>
        <div
          className={styles.textContent}
          data-aos="fade-left"
        >
          <h2>Our Story</h2>
          <p>
            Our college fest is a celebration of creativity, teamwork, and
            student spirit. It's where the brightest minds come together to
            showcase their talent, engage in activities, and create lifelong
            memories. From cultural events to technical workshops, this fest is
            all about learning, connecting, and enjoying together.
          </p>
          <h2>Why Join Us?</h2>
          <ul>
            <li data-aos="fade-up">Engage in exciting cultural performances</li>
            <li data-aos="fade-up" data-aos-delay="100">
              Participate in fun and challenging competitions
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
              Learn new skills through workshops and talks
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              Meet like-minded individuals and make new friends
            </li>
            <li data-aos="fade-up" data-aos-delay="400">
              Get a chance to win exciting prizes and certificates
            </li>
          </ul>
          <h2>Convenor</h2>
          <ul>
            <li data-aos="fade-up">Dr.N Ramakrishnaiah ,Head of the Department, JNTU Kakinada
            </li>
          </ul>
          <h2>Faculty Coordinators</h2>
          <ul>
            <li data-aos="fade-up" data-aos-delay="100">
              Dr. S. Chandra Sekhar (Asst. Professor), JNTU Kakinada
            </li>
            <li data-aos="fade-up" data-aos-delay="200">
            Dr. S. Surekha (Asst. Professor), JNTU Kakinada
            </li>

          </ul>
        </div>
      </section>
      <section className={styles.footer} data-aos="fade-up">
        <h3>Join us for an unforgettable experience!</h3>
     <Link to={"/Registration?event=NEW REGISTRATION"}>   <button className={styles.joinBtn}>Register Now</button></Link>
      </section>
    </div>
  );
};

export default About;
