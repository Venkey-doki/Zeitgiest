import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Timeline.module.css";


const Timeline = ({timelineData}) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <div className={styles.timelineWrapper}>
      {timelineData.map((day, index) => (
        <div key={index} className={styles.timelineDay}>
          <h2 className={styles.dayHeading}>
            {day.day}
          </h2>
          <div className={styles.timelineItems}>
            {day.sessions.map((session, idx) => (
              <div
                key={idx}
                className={styles.timelineItem}
                data-aos="fade-up"
                data-aos-delay={`${idx * 70}`}
              >
                <div className={styles.itemContent}>
                  <span className={styles.time}>{session.time}</span>
                  <h3 className={styles.sessionTitle}>{session.title}</h3>
                  <p className={styles.details}>{session.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;