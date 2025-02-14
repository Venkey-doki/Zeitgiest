import React, { useState, useEffect } from 'react';
import styles from "../CSS/Timer.module.css";
import ConfettiComponent from '../components/Confetti/Confetti';
import logo from "../assets/logo.jpg";

export default function Timer() {
  const targetDate = new Date('2025-03-14T23:59:59').getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isCelebrating, setIsCelebrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    if (currentTime >= targetDate) {
      setIsCelebrating(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [currentTime, targetDate]);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const day = Math.floor(totalSeconds / (3600 * 24));
    const hour = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const min = Math.floor((totalSeconds % 3600) / 60);
    const sec = totalSeconds % 60;
    return {
      days: day.toString().padStart(2, '0'),
      hours: hour.toString().padStart(2, '0'),
      minutes: min.toString().padStart(2, '0'),
      seconds: sec.toString().padStart(2, '0')
    };
  };

  const timeRemaining = formatTime(Math.max(targetDate - currentTime, 0));

  return (
    <div className={styles.timerSection}>
      {!isCelebrating ? (
        <div className={styles.timerContainer}>
          <h2 className={styles.timerHeading}>COUNTDOWN TO ZEITGEIST'25</h2>
          <div className={styles.timerGrid}>
            {Object.entries(timeRemaining).map(([unit, value]) => (
              <div key={unit} className={styles.timerItem}>
                <div className={styles.timerNumber}>{value}</div>
                <div className={styles.timerLabel}>{unit}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.celebrationContainer}>
          <ConfettiComponent />
          <h1 className={styles.celebrateText}>🎉 TIME TO CELEBRATE! 🎉</h1>
          <img src={logo} alt="Logo" className={styles.celebrateLogo} />
        </div>
      )}
    </div>
  );
}