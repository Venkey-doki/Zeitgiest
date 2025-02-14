import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timer from "./Timer";
import styles from "../CSS/Home.module.css";
import logo from "../assets/logo-bg.png";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out-quad'
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Gradient Overlay */}
      <div className={styles.gradientOverlay}></div>

      {/* Particle Background */}
      <div className={styles.background}></div>

      {/* Header Section */}
      <header className={styles.header}>
        <img src={logo} alt="Fest Logo" className={styles.headerLogo} />
        <Link to="/login">
          <button className={styles.loginButton}>Login</button>
        </Link>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent} data-aos="zoom-in">
            <div className={styles.institutionInfo}>
              <h3 className={styles.universityName}>Jawaharlal Nehru Technological University Kakinada</h3>
              <h4 className={styles.collegeName}>University College of Engineering Kakinada</h4>
              <p className={styles.departmentName}>Department of Computer Science and Engineering</p>
            </div>
            
            <div className={styles.eventTitle} data-aos="fade-up" data-aos-delay="200">
              <h1 className={styles.mainTitle}>ZEITGEIST'25</h1>
              <div className={styles.titleUnderline}></div>
            </div>

            <div className={styles.quoteSection}>
              <blockquote className={styles.quotation} data-aos="fade-up" data-aos-delay="300">
                "Fusion of ideas, Harmony of minds..."
              </blockquote>
              <blockquote className={styles.quotation} data-aos="fade-up" data-aos-delay="400">
                "Unleashing Creativity, Innovation, and Passion!"
              </blockquote>
            </div>

            <div className={styles.timerSection} data-aos="fade-up" data-aos-delay="500">
              <Timer />
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <div className={styles.eventcardsContainer}>
      {/* Hero Sections */}
      <section className={styles.eventcard} data-aos="fade-right">
        <div className={styles.eventcontent} >
          <h2>About the Fest</h2>
          <p>
            Welcome to our Annual fest! Experience a blend of Music, Art, Culture, and Innovation.
            Join us for an unforgettable journey filled with competitions, workshops, and networking
            opportunities.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/about"><button className={styles.button}>Know More</button></Link>
          </div>
        </div>
      </section>
      <section className={styles.eventcard} data-aos="fade-left">
        <div className={styles.eventcontent} >
          <h2>Workshops</h2>
          <p>
          Immerse yourself in transformative learning experiences with workshops designed to explore the latest advancements in technology. Gain practical, hands-on knowledge and elevate your expertise to excel in cutting-edge domains.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/workshop"><button className={styles.button}>Workshops</button></Link>
          </div>
        </div>
      </section>

      <section className={styles.eventcard} data-aos="fade-right">
        <div className={styles.eventcontent} >
          <h2>Events</h2>
          <p>
            Discover exciting technical and online events that challenge your skills and creativity.
            Participate in various competitions and showcase your talents.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/technicalevents"><button className={styles.button}>Technical Events</button></Link>
            <Link to="/onlineevents"><button className={styles.button}>Online Events</button></Link>
          </div>
        </div>
      </section>
      <section className={styles.eventcard} data-aos="fade-left">
        <div className={styles.eventcontent} >
          <h2>Contests</h2>
          <p>
          Showcase your skills, creativity, and competitive spirit through a variety of exciting contests. Test your technical prowess, creative abilities, and innovative thinking in challenges that promise fun and learning.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/contests"><button className={styles.button}>Contests</button></Link>
          </div>
        </div>
      </section>

    </div>
       
      </main>
    </div>
  );
}