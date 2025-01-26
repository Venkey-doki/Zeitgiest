import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ConfettiComponent from '../Confetti/Confetti';
// import logo from '../../assets/logo.jpg';

export default function Timer() {
  const [targetDate] = useState(new Date('2025-02-21T23:59:59').getTime());
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);  // To track if the user has visited the page

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    const celebrationTimeout = setTimeout(() => {
      setHasVisited(true);
    }, 3000); 

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
      day: day.toString().padStart(2, '0'),
      hour: hour.toString().padStart(2, '0'),
      min: min.toString().padStart(2, '0'),
      sec: sec.toString().padStart(2, '0')
    };
  };

  const timeRemaining = formatTime(Math.max(targetDate - currentTime, 0));

  const celebrationAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  return (
    <div 
      className="d-flex align-items-end vh-100 vw-100 justify-content-center text-white"
      // style={{ backgroundColor: 'black' }}
    >
      {!isCelebrating && (
        <div className="text-center bg-dark bg-opacity-10 p-4 mb-5 rounded shadow-lg w-75 w-md-50">
          {/* <div className="text-3xl font-bold mb-2 p-1 text-white rounded" >
           <h1>
             Zeitgeist'25          
            </h1>
            Time to Celebrate..!
          </div> */}
          <div className="row justify-content-center">
            {Object.entries(timeRemaining).map(([unit, value]) => (
              <div key={unit} className="col-6 col-md-3 col-lg-2 mb-4">
                <div className="text-white p-4 rounded d-flex flex-column align-items-center justify-content-center">
                  <span className="text-uppercase text-sm mb-2">{unit}</span>
                  <span className="display-4 font-weight-bold">{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    {isCelebrating && (
      <div>
        <ConfettiComponent />
        <div className="text-center  bg-opacity-10 p-2 rounded  w-55 w-md-50">
          <img src={logo} alt="Logo"
        className="img-fluid my-4" 
        style={{ width: '50%', height: '50%' }}/>
        </div>
      </div>
    )}

    </div>
  );
}
