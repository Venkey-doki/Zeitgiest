import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: document.documentElement.scrollHeight, // Adjusting for the entire document height
  });

  // Update window dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight, // Adjust on resize
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle confetti visibility for demo purposes
  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 6000); // Show confetti for 6 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-aos="" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}>
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height} // Ensure confetti takes the full page height
          numberOfPieces={1000}
          gravity={0.2}
          colors={["#ff6b6b", "#feca57", "#1dd1a1", "#5f27cd", "#54a0ff"]}
        />
      )}
    </div>
  );
};

export default ConfettiComponent;
