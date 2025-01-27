import React from "react";
import Timer from "./Timer";
import backgroundVideo from "../assets/HomeBackground.mp4";
import styles from "../CSS/Home.module.css"; // Import the CSS module

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Video Background */}
      <div className={styles.videoContainer}>
        <video
          className={styles.videoBg}
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay Content */}
        {/* <div className={styles.content}>
          <h1 className={styles.title}>Welcome to ZEITGEIST</h1>
          <p className={styles.subtitle}>Experience the best we have to offer!</p>
        </div> */}
      </div>

      {/* Timer Component */}
      <div className={styles.timerSection}>
        <Timer />
      </div>
    </div>
  );
}
