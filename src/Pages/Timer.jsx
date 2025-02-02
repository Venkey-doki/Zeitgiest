import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Confetti from 'react-confetti';
import styles from "../CSS/Timer.module.css";
import logo from "../assets/logo.jpg"
export default function Timer() {
  const targetDate = new Date('2025-03-15T23:59:59').getTime();
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

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

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const day = Math.floor(totalSeconds / (3600 * 24));
    const hour = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const min = Math.floor((totalSeconds % 3600) / 60);
    const sec = totalSeconds % 60;
    return {
      day: day.toString().padStart(2, '0'),
      hour: hour.toString().padStart(2, '0'),
      min: min.toString().padStart(2, '0'),
      sec: sec.toString().padStart(2, '0')
    };
  };

  const timeRemaining = formatTime(Math.max(targetDate - currentTime, 0));

  return (
    <div className="d-flex align-items-center vh-75 vw-100 justify-content-center text-white text-uppercase">
      {!isCelebrating ? (
        <div className={`${styles.timerContainer} text-center p-4 rounded w-75`}>
          <h1 className={styles.header}>Countdown to Event</h1>
          <div className="row justify-content-center">
            {Object.entries(timeRemaining).map(([unit, value]) => (
              <div key={unit} className="col-6 col-md-3 col-lg-2 mb-4">
                <div className={styles.timerBox}>
                  <span className={styles.label}>{unit}</span><br/>
                  <span className={styles.value}>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Confetti width={windowSize.width} height={windowSize.height} />
          <h1 className={styles.celebrateText}>🎉 Time to Celebrate! 🎉</h1>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      )}
    </div>
  );
}
