import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styles from "../CSS/Team.module.css";
import hod from "../assets/hodsir.jpg"
import fc1 from "../assets/chandusir.jpg"
import fc2 from "../assets/surekhamam.jpg"
import sco1 from "../assets/sco1.jpeg"
import sco2 from "../assets/sco2.jpg"
import sco3 from "../assets/sco3.jpg"
import sco4 from "../assets/sco4.jpg"
import sco5 from "../assets/sco5.jpg"
import sco6 from "../assets/sco6.jpg"



function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);
  const faculty = [
    { name: "Dr.Chandra Sekhar",  designation: "Assistant Professor",img:fc1, },
    { name: "Dr. S. Surekha",  designation: "Assistant Professor" ,img:fc2,},
    // Add more coordinators if needed
  ];
  const coordinators = [
    { name: "D. V. Bhargava Reddy", contact: "8317504292"  ,img:sco1,},
    { name: "B. Likhith Nayak", contact: "7569801239"  ,img:sco2,},
    { name: "T. Vivek", contact: "7799002247" ,img:sco3, },
    { name: "S. Manjunadh", contact: "8143224017"  ,img:sco4,},
    { name: "B. Navaneetha", contact: "7989425914"  ,img:sco5,},
    { name: "K. Satya Eswari", contact: "7013690151"  ,img:sco6,},
    // Add more coordinators if needed
  ];
  return (
    <div className={styles.container}>
      {/* Animated Background */}
      <div className={styles.background}></div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainTitle} data-aos="fade-down">
          Convenor
        </h1>
        
        <div className={styles.eventsflex}>
        
            <div className={styles.eventCard} data-aos="fade-up">
              <div className={styles.cardVisual} data-aos="zoom-in">
                <img 
                  src={hod} 
                  alt={"Dr. N. Ramakrishnaiah"} 
                  className={styles.eventImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h2 className={styles.eventTitle}>Dr. N. Ramakrishnaiah</h2>
                <div className={styles.glowBar}></div>
                
                <p className={styles.eventDescription}>Prof. & Head of the Department </p>
                

              </div>
            </div>
        
        </div>
      </div>


      <div className={styles.contentContainer}>
  <h1 className={styles.mainTitle} data-aos="fade-down">Faculty Coordinators</h1>
  <div className={styles.eventsflex}>
    {faculty.map((member, index) => (
      <div className={styles.eventCard} key={index} data-aos="fade-up">
        <div className={styles.cardVisual} data-aos="zoom-in">
          <img src={member.img} alt={member.name} className={styles.eventImage} />
          <div className={styles.imageOverlay}></div>
        </div>
        <div className={styles.cardContent}>
          <h2 className={styles.eventTitle}>{member.name}</h2>
          <div className={styles.glowBar}></div>
          <p className={styles.eventDescription}>{member.designation}</p>
        </div>
      </div>
    ))}
  </div>
</div>


      <div className={styles.contentContainer}>
        <h1 className={styles.mainTitle} data-aos="fade-down">
          Student Coordinators
        </h1>
        
        <div className={styles.eventsGrid}>
          {coordinators.map((event) => (
            <div className={styles.eventCard} key={event.id} data-aos="fade-up">
              <div className={styles.cardVisual} data-aos="zoom-in">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className={styles.eventImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.cardContent}>
                <h2 className={styles.eventTitle}>{event.name}</h2>
                <div className={styles.glowBar}></div>
                
                <p className={styles.eventDescription}>+91 {event.contact}</p>
                
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;