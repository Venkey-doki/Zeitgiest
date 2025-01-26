import React from "react";
import Timer from "./Timer";
import backgroundVideo from "../assets/HomeBackground.mp4";
import "../CSS/Home.css"; // Add a separate CSS file for styling

export default function Home() {
  return (
    <div className="home-container">
      {/* Video Background */}
      <div className="video-container">
        <video
          className="video-bg"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay Content */}
        {/* <div className="content">
          <h1 className="title">Welcome to ZEITGEIST</h1>
          <p className="subtitle">Experience the best we have to offer!</p>
        </div> */}
      </div>

      {/* Timer Component */}
      <div className="timer-section">
        <Timer />
      </div>
    </div>
  );
}
