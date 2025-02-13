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
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.homeContainer}>
       {/* Header Section */}
       <header className={styles.header}>
        <img src={logo} alt="Fest Logo" className={styles.headerLogo} />
        <Link to="/login">
          <button className={styles.loginButton}>Login</button>
        </Link>
      </header>
      {/* Animated Background */}
      <div className={styles.background}></div>

      <div className={styles.contentContainer}>
        {/* <img src={logo} alt="Fest Logo" className={styles.logo} data-aos="fade-down" /> */}
        
        {/* Typewriter Text */}
          <h2 className={styles.universityName}>Jawaharlal Nehru Technological University Kakinada</h2>
<br />
<h2 className={styles.collegeName}>University College of Engineering Kakinada</h2>
<br />
<h2 className={styles.departmentName}>Department of Computer Science and Engineering</h2>
<br></br>
          <h4 >Presents </h4>
        <div className={styles.typewriterContainer} data-aos="fade-up">
          <h1 className={styles.typewriterText}>ZEITGEIST'25</h1>
        </div>

        <blockquote className={styles.quotation} data-aos="fade-up">
          <p>"Fusion of ideas, Harmony of minds...!"</p>
        </blockquote>

        <blockquote className={styles.quotation} data-aos="fade-up">
          <p>"Unleashing Creativity, Innovation, and Passion!"</p>
        </blockquote>


        <div className={styles.timerSection} data-aos="fade-up">
          <Timer />
        </div>
      </div>
    <div className={styles.heroSectionsContainer}>
      {/* Hero Sections */}
      <section className={styles.heroSection} data-aos="fade-right">
        <div className={styles.heroContent} >
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
      <section className={styles.heroSection} data-aos="fade-left">
        <div className={styles.heroContent} >
          <h2>Workshops</h2>
          <p>
          Immerse yourself in transformative learning experiences with workshops designed to explore the latest advancements in technology. Gain practical, hands-on knowledge and elevate your expertise to excel in cutting-edge domains.
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/workshop"><button className={styles.button}>Workshops</button></Link>
          </div>
        </div>
      </section>

      <section className={styles.heroSection} data-aos="fade-right">
        <div className={styles.heroContent} >
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
      <section className={styles.heroSection} data-aos="fade-left">
        <div className={styles.heroContent} >
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
      {/* Add other hero sections with similar structure */}
    </div>
  );
}