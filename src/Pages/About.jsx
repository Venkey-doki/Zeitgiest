import React, { useEffect } from "react";
import styles from "../CSS/About.module.css";
import Logo from "../assets/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  const isLoggedIn = localStorage.getItem("user") !== null;
  const user = isLoggedIn ? JSON.parse(localStorage.getItem("user")) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
    AOS.refresh();
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
        <section className={styles.aboutContent}>
          <div className={styles.heroSection} data-aos="fade-left">
            <h2 className={styles.heroTitle}>2025 Edition</h2>
            <p className={styles.heroDescription}>
              Zeitgeist 2025 is a National-Level Technical Carnival organized by the Department of Computer Science and Engineering, UCEK, JNTUK, on March 15 & 16. It brings emerging technologies to light and provides opportunities to learn, explore, and excel in various domains of Computer Science.
              <br /><br />
              The event bridges the gap between theory and practice through workshops, events, and contests, while also offering refreshing activities to break the monotony of daily life.
              <br /><br />
              Located in the coastal town of Kakinada at UCEK, JNTU, Zeitgeist 2025 offers hands-on exposure to cutting-edge technologies such as Generative AI, Cloud Computing, and Cybersecurity—complemented by a vibrant cultural fest.
            </p>
          </div>

          <div className={styles.heroSection} data-aos="fade-right">
            <h2 className={styles.heroTitle}>Our Legacy</h2>
            <p className={styles.heroDescription}>
              For over 10 years, Zeitgeist has been a national-level carnival by the Department of Computer Science and Engineering, UCEK, JNTUK. The fest has consistently highlighted emerging technologies and provided platforms for innovation and collaboration.
              <br /><br />
              In addition to technical excellence, Zeitgeist offers an engaging mix of cultural events and fun-filled activities, making it a comprehensive and memorable experience.
            </p>
          </div>
        </section>

        {/* Fee Details Section */}
        <section className={styles.feeDetails} data-aos="fade-up">
          <h2 className={styles.feeTitle}>Fest Payment Details</h2>
          <p className={styles.feeDescription}>
            1. The Basic Registration Fee is mandatory to participate in workshops and events.
            <br />
            2. No Basic Registration Fee is required for contests.
            <br />
            3. Students who pay the Basic Registration Fee will receive an ID card required for fest entry. This card allows access to stalls, cultural events, and more.
            <br />
            4. A reserved slot will be provided in all events and workshops for fee-paying students, who can then register for specific events.
            <br />
            5. There is no entry fee for online events for those who have paid the Basic Registration Fee.
            <br />
            6. Basic Registration is mandatory for all students, including team events and team-based workshops.
            <br />
            7. For team registrations or events, please contact D. V. Bhargava Reddy at 8317504292.
          </p>
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.ctaSection} data-aos="zoom-in">
          {isLoggedIn ? (
            <>
              <h2>Welcome back, {user.name}</h2>
              <Link to="/profile">
                <button className={styles.ctaButton}>Profile</button>
              </Link>
            </>
          ) : (
            <>
              <h2>Ready to Be Part of History?</h2>
              <Link to="/Registration?event=NEW REGISTRATION">
                <button className={styles.ctaButton}>Register Now</button>
              </Link>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;
