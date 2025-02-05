import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiComponent = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: document.documentElement.scrollHeight, // Full document height
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight, 
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={1000}
      gravity={0.2}
      colors={["#ff6b6b", "#feca57", "#1dd1a1", "#5f27cd", "#54a0ff"]}
      recycle={false}
    />
  );
};

export default ConfettiComponent;
