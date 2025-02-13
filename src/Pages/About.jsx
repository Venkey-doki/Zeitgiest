import React, { useEffect } from "react";
import styles from "../CSS/About.module.css";
import Logo from "../assets/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ 
      duration: 1000,
      once: true,
      mirror: false
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
        <section className={styles.heroDualContainer}>
          <div className={styles.heroSection} data-aos="fade-right">
            <h2 className={styles.heroTitle}>Our Legacy</h2>
            <p className={styles.heroDescription}>
            Zeitgeist, a National-level Technical Carnival by the Computer Science and Engineering Department, JNTUK, has been held for 10 years. It highlights emerging technologies, offering opportunities to learn and excel through events and workshops. The fest fosters innovation and collaboration among participants. It also serves as a platform to showcase skills and explore future possibilities.
            Additionally, refreshing activities are included to break the monotony of daily life, making it a comprehensive and engaging experience.
            </p>
          </div>
          <div className={styles.heroSection} data-aos="fade-left">
            <h2 className={styles.heroTitle}>2025 Edition</h2>
            <p className={styles.heroDescription}>
            Zeitgeist 2025 is a National-Level Technical Carnival organized by the Department of Computer Science and Engineering, JNTUK, on March 15 & 16. It brings to light emerging technologies in today’s world and provides opportunities to learn, explore, and excel in various domains of Computer Science.
            <br />
            <br />

            This event bridges the gap between theoretical knowledge and practical applications through numerous workshops, events, and contests. On the other hand, it also features refreshing activities that break the monotony of daily life, making the fest a wholesome experience.
            <br />
            <br />

            Centered in the coastal town of Kakinada at UCEK, JNTU, Zeitgeist 2025 offers an arena for participants to gain hands-on exposure to cutting-edge technologies such as Generative AI, Cloud Computing, and Cybersecurity. A broad range of technical events is complemented by a vibrant cultural fest – Cultivo and fun-filled activities to create an engaging and delightful atmosphere.
            </p>
          </div>
        </section>

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