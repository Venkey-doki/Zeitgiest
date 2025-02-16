import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/1000255470-removebg-preview.png";
import styles from "../../CSS/Accomodation.module.css"; // Using CSS module for styling

function GenAi() {
  const [GenAIreg, setGenAIreg] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top and initialize AOS
    window.scroll(0, 0);
    AOS.init({ duration: 1000, once: true });

    // Retrieve user data; if not found, alert the user (or redirect if needed)
    const userData = localStorage.getItem("user");
    if (!userData) {
      alert("Please login to register for GenAI.");
      // Uncomment the next line to redirect to login if needed:
      // navigate("/login");
      return;
    }

    // Parse user data and fetch registration status
    const parsedUser = JSON.parse(userData);
    fetch(
      `https://zeitgeistjntukcse.com/Zeitgeist/getRegistrations.php?email=${encodeURIComponent(
        parsedUser.email
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          // Check if any registration is for "GenAI"
          const isRegistered = data.registrations
            .map((reg) => reg.event)
            .includes("GenAI");
          setGenAIreg(isRegistered);
        } else {
          console.error("Error: Could not fetch registrations.");
        }
      })
      .catch((error) => console.error("Error fetching registrations:", error));
  }, [navigate]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background}></div>
      <div id="Accommodation" className={`container-fluid py-5 ${styles.container}`}>
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left column: Image and Workshop Intro */}
            <div className={`col-md-6 text-center ${styles.imageContainer}`} data-aos="fade-right">
              <img src={p1} alt="Hostel" className={styles.hostelImage} />
              <h1 className={styles.heading}>TechFest: GEN AI</h1>
              <p className={styles.lead}>
                Join our GenAI Workshop to explore the exciting world of Generative AI! Learn how cutting-edge technologies like GPT and diffusion models create art, text, and more.
              </p>
            </div>

            {/* Right column: Workshop Details */}
            <div className={`col-md-6 ${styles.accommodationContainer}`} data-aos="fade-left">
              <h2 className={styles.subheading}>Workshop Details</h2>
              <h4 className={styles.textLight}>Certification Policy:</h4>
              <ul className={styles.listStyled}>
                <li>
                  Certificate of participation for all workshop participants from IIT Bombay &amp; Anvira Edustation.
                </li>
                <li>
                  A competition will be organized among participants with a 'Certificate of Excellence' awarded to winners.
                </li>
                <li>Certificate of Coordination for the campus workshop coordinators.</li>
              </ul>

              <h4 className={styles.textLight}>Rules &amp; Regulations:</h4>
              <ol className={styles.listStyled}>
                <li>Registration is mandatory for all participants.</li>
                <li>Participants must adhere to the workshop timings.</li>
                <li>Use of personal laptops is encouraged.</li>
              </ol>

              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Single Registration : ₹1200</li>
                <li>Team Registration (Team 4 Persons) : ₹4400</li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
                <strong>B. Deva Sai Ganesh:</strong> +91 9761667788 <br />
                <strong>K. Sai:</strong> +91 6304667187 <br />
                <strong>P. Poojitha:</strong> +91 7032711368 <br />
              </p>

              <div className={styles.buttonContainer}>
                <Link
                  to= {GenAIreg ? "#" : "/Registration?event=GenAI"}
                  className={styles.button}
                  data-aos="zoom-in"
                >
                  {GenAIreg ? "Already Registered" : "Register Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenAi;
