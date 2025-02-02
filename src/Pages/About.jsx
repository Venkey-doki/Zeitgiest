import React, { useEffect } from "react";
import styles from "../CSS/About.module.css";
import Logo from "../assets/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      mirror: false
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.background}></div>

      <div className={styles.contentContainer}>
        {/* Hero Section */}
        <section className={styles.hero} data-aos="zoom-out">
          <h1 className={styles.title}>ZEITGEIST</h1>
          <p className={styles.subtitle}>Annual Technical & Cultural Fest</p>
          <div className={styles.logoContainer} data-aos="flip-up">
            <img src={Logo} alt="Fest Logo" className={styles.logo} />
          </div>
        </section>

        {/* About Content */}
        <div className={styles.gridContainer}>
          <section className={styles.card} data-aos="fade-right">
            <h2>Our Legacy</h2>
            <div className={styles.glowBar}></div>
            <p>
              Since 1985, Zeitgeist has been the flagship event of JNTU Kakinada, 
              evolving into one of India's largest college festivals. What began 
              as a small technical exhibition has transformed into a 3-day 
              extravaganza attracting 10,000+ participants annually.
            </p>
          </section>

          <section className={styles.card} data-aos="fade-left">
            <h2>2024 Edition</h2>
            <div className={styles.glowBar}></div>
            <p>
              This year we're pushing boundaries with AI-powered competitions, 
              immersive VR experiences, and sustainable tech challenges. 
              Featuring 50+ events across technical, cultural, and sports domains, 
              Zeitgeist 2024 promises to be our most innovative edition yet.
            </p>
          </section>

          {/* Leadership Section */}
          <section className={styles.fullWidthCard} data-aos="fade-up">
            <h2 style={{ color: "#87CEEB" }}>Leadership</h2>
            <div className={styles.leadershipGrid}>
              <div className={styles.leaderCard}>
                <h3>Convener</h3>
                <p>Dr. N. Ramakrishnaiah</p>
                <p>HOD, Computer Science</p>
              </div>
              <div className={styles.leaderCard}>
                <h3>Coordinators</h3>
                <p>Dr. S. Chandra Sekhar</p>
                <p>Dr. S. Surekha</p>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className={styles.timeline} data-aos="fade-up">
            <h2>Fest Timeline</h2>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>March 15-30</h3>
                <p>Workshop Series & Prelims</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>April 1-10</h3>
                <p>Online Competitions</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>April 15-17</h3>
                <p>Main Fest Events</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className={styles.ctaSection} data-aos="zoom-in">
          <h2>Ready to Be Part of History?</h2>
          <Link to="/Registration?event=NEW REGISTRATION">
            <button className={styles.ctaButton}>Register Now</button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;