import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styles from "../CSS/TechnicalEvents.module.css";

const eventDetails = [ 
  {
    id: 1,
    title: "Meme Crafts",
    description:
      "Unleash your humor and creativity by crafting memes that resonate. Turn your ideas into viral-worthy masterpieces and win the crowd’s laughter.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00c70b3d8bb8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "K. Praneeth",
      coordinators1ph:"+91 9603009614", 
      coordinators2:"Y. K. Komala",
      coordinators2ph:" +91 7671894241",
  },
  {
    id: 2,
    title: "Reel Masters",
    description:
    "Showcase your storytelling skills by creating entertaining and impactful reels. Compete to see if you have what it takes to captivate audiences.",
    image:
      "https://images.unsplash.com/photo-1542056178-9c65c9b6f8ac?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "P. Manikanta",
      coordinators1ph:"+91 9390159239", 
      coordinators2:"N. Poorna Chandrika",
      coordinators2ph:" +91 7989015758",
  },
  {
    id: 3,
    title: "Picture Perfect",
    description:
    "Capture the essence of our campus through your lens, highlighting its beauty and uniqueness. Showcase your creativity by telling a story with every frame.",
    image:
      "https://images.unsplash.com/photo-1518302609613-36c1bdb7c603?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "Sk. Mansoor",
      coordinators1ph:"+91 9014230074", 
      coordinators2:"P. Sahithi",
      coordinators2ph:" +91 9440147799",
  },
  {
    id: 4,
    title: "Battle Arena",
    description:
    "Step into the world of intense battle royale action with games like PUBG and Free Fire. Compete in fast-paced matches to showcase your gaming skills and secure victory in the ultimate gaming showdown.",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "M. Karthik",
      coordinators1ph:"+91 9704776155", 
      coordinators2:"K. Revanth",
      coordinators2ph:" +91 9110363298",
  },
  {
    id: 5,
    title: "Snap Shot",
    description:
    "Strike your best pose and capture the perfect selfie moment. Let your creativity shine and share your unique style with the world.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "D. Vamsi",
      coordinators1ph:"+91 6302549989", 
      coordinators2:"D. Hasa",
      coordinators2ph:" +91 7671834633",
  },
 
];

function Contests() {
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
          Contests
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
                    <p className={styles.fee}>₹0</p>
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

export default Contests;