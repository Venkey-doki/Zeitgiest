import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styles from "../CSS/TechnicalEvents.module.css";

const eventDetails = [ 
  {
    id: 1,
    title: "Innovation Research Centre JNTUK",
    description:
      "About Innovation Research Centre",
    image:
      "https://images.unsplash.com/photo-1537432376769-00c70b3d8bb8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
   url:"https://jntuk.edu.in", 
  },
  {
    id: 2,
    title: "SBI",
    description:
    "About SBI",
    image:
      "https://images.unsplash.com/photo-1542056178-9c65c9b6f8ac?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
    url:"https://sbi.com",
  },
  {
    id: 3,
    title: "X Company",
    description:
    "About X Company",
    image:
      "https://images.unsplash.com/photo-1518302609613-36c1bdb7c603?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
    url:"https://x.com",
  },
 
];

function Sponsers() {
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
          Sponsors
        </h1>
        
        <div className={styles.eventsGrid}>
          {eventDetails.map((event) => (
            <div className={styles.eventCard} key={event.id} data-aos="fade-up">
              <div className={styles.cardVisual} data-aos="zoom-in">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className={styles.eventImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <div className={styles.glowBar}></div>
                
                <p className={styles.eventDescription}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sponsers;