import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timer from "./Timer";
import styles from "../CSS/Home.module.css";
import logo from "../assets/logo-bg.png";
import { Link } from "react-router-dom";

// Reusable EventCard component
const EventCard = ({ title, description, buttons, aosAnimation }) => (
  <section className={styles.eventcard} data-aos={aosAnimation}>
    <div className={styles.eventcontent}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.buttonContainer}>
        {buttons.map(({ text, link }, index) => (
          <Link key={index} to={link}>
            <button className={styles.button}>{text}</button>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  const isLoggedIn = Boolean(localStorage.getItem("user"));

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out-quad",
    });
  }, []);

  const eventCardsData = [
    {
      title: "About the Fest",
      description:
        "Welcome to our Annual fest! Experience a blend of Music, Art, Culture, and Innovation. Join us for an unforgettable journey filled with competitions, workshops, and networking opportunities.",
      buttons: [{ text: "Know More", link: "/about" }],
      aosAnimation: "fade-right",
    },
    {
      title: "Workshops",
      description:
        "Immerse yourself in transformative learning experiences with workshops designed to explore the latest advancements in technology. Gain practical, hands-on knowledge and elevate your expertise to excel in cutting-edge domains.",
      buttons: [{ text: "Workshops", link: "/workshop" }],
      aosAnimation: "fade-left",
    },
    {
      title: "Events",
      description:
        "Discover exciting technical and online events that challenge your skills and creativity. Participate in various competitions and showcase your talents.",
      buttons: [
        { text: "Technical Events", link: "/technicalevents" },
        { text: "Online Events", link: "/onlineevents" },
      ],
      aosAnimation: "fade-right",
    },
    {
      title: "Contests",
      description:
        "Showcase your skills, creativity, and competitive spirit through a variety of exciting contests. Test your technical prowess, creative abilities, and innovative thinking in challenges that promise fun and learning.",
      buttons: [{ text: "Contests", link: "/contests" }],
      aosAnimation: "fade-left",
    },
  ];

  return (
    <div className={styles.homeContainer}>
      {/* Gradient Overlay */}
      <div className={styles.gradientOverlay} />

      {/* Particle Background */}
      <div className={styles.background} />

      {/* Header Section */}
      <header className={styles.header}>
        <img src={logo} alt="Fest Logo" className={styles.headerLogo} loading="lazy" />
        {isLoggedIn ? (
          <Link to="/profile">
            <button className={styles.loginButton}>Profile</button>
          </Link>
        ) : (
          <Link to="/login">
            <button className={styles.loginButton}>Login</button>
          </Link>
        )}
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent} data-aos="zoom-in">
            <div className={styles.institutionInfo}>
              <h3 className={styles.universityName}>
                Jawaharlal Nehru Technological University Kakinada
              </h3>
              <h4 className={styles.collegeName}>
                University College of Engineering Kakinada
              </h4>
              <p className={styles.departmentName}>
                Department of Computer Science and Engineering
              </p>
            </div>

            <div
              className={styles.eventTitle}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className={styles.mainTitle}>ZEITGEIST'25</h1>
              <div className={styles.titleUnderline} />
            </div>

            <div className={styles.quoteSection}>
              <blockquote
                className={styles.quotation}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                "Fusion of ideas, Harmony of minds..."
              </blockquote>
              <blockquote
                className={styles.quotation}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                "Unleashing Creativity, Innovation, and Passion!"
              </blockquote>
            </div>

            <div
              className={styles.timerSection}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Timer />
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <div className={styles.eventcardsContainer}>
          {eventCardsData.map((card, idx) => (
            <EventCard key={idx} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
}
