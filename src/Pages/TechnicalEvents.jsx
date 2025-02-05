import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styles from "../CSS/TechnicalEvents.module.css";
import tecnoquest from "../assets/techno-quest.jpg"
import typingtitans from "../assets/typing-titans.jpg"
import blindcoding from "../assets/blind-coding.jpg"
import beatthebug from "../assets/beat-the-bug.jpg"
import cryptichunt from "../assets/cryptic-hunt.jpg"
import openmic from "../assets/open-mic.jpg"
import presentyou from "../assets/present-you.jpg"


const eventDetails = [ 
  {
    id: 1,
    title: "Technoquest: Ignite Your Tech-Savvy Spirit",
    description:
      "Dive into an electrifying tech quiz! Decode hardware, crack software, and conquer rounds like “Code Crackers” and “Tech Trivia Blitz” to claim the ultimate tech wizard crown.",
    image:
      tecnoquest,
      coordinators1: "D. Sai Sashank",
      coordinators1ph:"+91 9390693302", 
      coordinators2:"Ch. Nitya Aishwarya",
      coordinators2ph:" +91 7780659729",
  },
  {
    id: 2,
    title: "Typing Titans: The Ultimate Keyboard Showdown",
    description:
      "Race against the clock in this thrilling typing competition! Test your speed, accuracy, and endurance to rise above the rest. Every keystroke brings you closer to victory—are you ready?",
    image:
      typingtitans,
      coordinators1: "Sk. Sher Ali",
      coordinators1ph:"+91 9398133176", 
      coordinators2:"A. Rishitha",
      coordinators2ph:" +91 9182628263",
  },
  {
    id: 3,
    title: "Blind Coding: Code Without Sight, Trust Your Logic",
    description:
      "Code without output or debugging! Rely on pure logic, memory, and skills to solve complex problems. Only the fearless programmers can conquer this unseen challenge. Are you one of them?",
    image:
      blindcoding,
      coordinators1: "Ch. Sree Nihaar",
      coordinators1ph:"+91 8247558584", 
      coordinators2:"M. Jyothsna",
      coordinators2ph:" +91 8179203388",
  },
  {
    id: 4,
    title: "Present You: Showcase Your Ideas, Redefine Innovation",
    description:
      "Pitch groundbreaking ideas with clarity and innovation! Impress judges through impactful presentations and redefine perspectives. It’s your stage to shine as a thought leader and leave your creative mark.",
    image:presentyou, 
      coordinators1: "N. Manmadha Kumar",
      coordinators1ph:"+91 6309698129", 
      coordinators2:"B. Tejaswini",
      coordinators2ph:" +91 7288026026",
  },
  {
    id: 5,
    title: "Open Mic: The PowerPoint Edition",
    description:
      "Blend storytelling and visuals in this presentation showdown! Inform, entertain, or inspire with engaging PowerPoint topics. Captivate the audience and showcase your creativity in this exciting event.",
    image:openmic,
      coordinators1: "Y. Sai Charan",
      coordinators1ph:"+91 8309212307", 
      coordinators2:"B. Kavya",
      coordinators2ph:" +91 8142735459",
  },
  {
    id: 6,
    title: "Beat the Bug: Debugging Showdown",
    description:
      "Hunt down errors and fix them fast in this debugging challenge. Test your precision, agility, and problem-solving skills as you race against time to emerge as the ultimate bug slayer!",
    image:
      beatthebug,
      coordinators1: "D. Harsha Vardhan",
      coordinators1ph:"+91 9676088920", 
      coordinators2:"D. Sri Hasa",
      coordinators2ph:" +91 7671834633",
  },
  {
    id: 7,
    title: "Cryptic Hunt: Decode, Discover, Dominate",
    description:
      "Crack cryptographic puzzles and unravel hidden clues! This mind-bending challenge tests your logic and problem-solving skills. The hunt is on—are you ready to unlock victory?",
    image:cryptichunt,
    coordinators1: "S. Shankar",
      coordinators1ph:"+91 8142809837", 
      coordinators2:"J. Sudha",
      coordinators2ph:" +91 6303757127",
  },
];

function TechnicalEvents() {
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
        <h1 className={styles.mainTitle} data-aos="fade-down">
          Technical Events
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
                    <p className={styles.fee}>₹200</p>
                  </div>
                </div>

                <Link 
                  to={`/Registration?event=${event.title}`} 
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

export default TechnicalEvents;