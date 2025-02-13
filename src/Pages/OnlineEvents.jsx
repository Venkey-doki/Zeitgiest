import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styles from "../CSS/OnlineEvents.module.css";
import mindmaze from "../assets/mind-maze.jpg"
import codecombat from "../assets/code-combat.jpg"
import webwizardes from "../assets/web-wizards.jpg"

const eventDetails = [
  {
    id: 1,
    heading: "Code Combat",
    description:
      "Prove your coding skills by battling it out in this ultimate programming contest. Solve challenging problems within time constraints and showcase your expertise.",
    image:
      codecombat,
    coordinators1: "N. Sivaraju",
    coordinators1ph: "+91 7032358921",
    coordinators2: "B. Kavya",
    coordinators2ph: "+91 8142735459",
  },
  {
    id: 2,
    heading: "Mind Maze",
    description:
      "Enter a world of riddles, puzzles, and brain teasers that test your intellect. This multifaceted event will challenge your problem-solving and critical-thinking abilities.",
    image:
      mindmaze,
    coordinators1: "P. Dinesh Kumar",
    coordinators1ph: "+91 6281733814",
    coordinators2: "A. Lohitha",
    coordinators2ph: "+91 7816076367",
  },
  {
    id: 3,
    heading: "Web Wizards",
    description:
      "Create stunning and functional websites that combine design and usability. Show off your web development skills in this creative coding competition.",
    image:
     webwizardes,
    coordinators1: "B. Bharadwaj",
    coordinators1ph: "+91 9502496903",
    coordinators2: "M. Lakshmi Meghana",
    coordinators2ph: "+91 6304088712",
  }
];

export default function OnlineEvents() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.background}></div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainTitle} data-aos="fade-down">
          Online Events
        </h1>
        
        <div className={styles.eventsGrid}>
          {eventDetails.map((event) => (
            <div className={styles.eventCard} key={event.id} data-aos="fade-up">
              <div className={styles.cardVisual} data-aos="zoom-in">
                <img 
                  src={event.image} 
                  alt={event.heading} 
                  className={styles.eventImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h2 className={styles.eventTitle}>{event.heading}</h2>
                <div className={styles.glowBar}></div>
                
                <p className={styles.eventDescription}>{event.description}</p>
                
                <div className={styles.detailsSection}>
                  <div className={styles.coordinators}>
                    <h3>Coordinators</h3>
                    <div className={styles.coordinatorList}>
                      <p>
                        <span className={styles.name}>{event.coordinators1}</span>
                        <span className={styles.phone}>{event.coordinators1ph}</span>
                      </p>
                      <p>
                        <span className={styles.name}>{event.coordinators2}</span>
                        <span className={styles.phone}>{event.coordinators2ph}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.pricing}>
                    <h3>Participation Fee</h3>
                    <p className={styles.fee}>Waiver</p>
                  </div>
                </div>

                <Link 
                  to={`/Registration?event=${event.heading}`} 
                  className={styles.registerButton}
                >
                  Register Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}