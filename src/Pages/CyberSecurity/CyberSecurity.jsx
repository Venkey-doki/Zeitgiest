import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/CyberSecurity1.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link,useNavigate } from "react-router-dom";
function CyberSecurity() {
  const [Cyberreg, setCyberreg] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top and initialize AOS
    window.scroll(0, 0);
    AOS.init({ duration: 1000, once: true });

    // Retrieve user data; if not found, alert the user (or redirect if needed)
    const userData = localStorage.getItem("user");
    if (!userData) {
      alert("Please login to register for CyberSecurity.");
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
            .includes("CyberSecurity");
          setCyberreg(isRegistered);
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
            <div className={`col-md-6 text-center ${styles.imageContainer}`} data-aos="fade-right">
              <img
                src={p1}
                alt="Hostel"
                className={styles.hostelImage}
              />
              <h1 className={styles.heading}>TechFest: CyberSecurity</h1>
              <p className={styles.lead}> 
              Dive into the world of Cybersecurity with our interactive workshop! Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats. Gain hands-on experience with tools and techniques to safeguard data and networks, empowering you to stay ahead in today’s digital landscape.
              </p>
            </div>

            <div className={`col-md-6 ${styles.accommodationContainer}`} data-aos="fade-left">
              <h2 className={styles.subheading}>Workshop Details</h2>
              <h4 className={styles.textLight}>Cerification Policy:</h4>
              <ul className={styles.listStyled}>
              <li>Certificate of participation for all the workshop participants from IIT Bombay & Anvira Edustation.</li>
                <li>At the end of this workshop, a small competition will be organised among the participating students and winners will be awarded with a 'Certificate of Excellence'.
                </li>
                 <li>Certificate of Coordination for the coordinators of the campus workshops.</li>
              </ul>


              <h4 className={styles.textLight}>Rules & Regulations:</h4>
              <ol className={styles.listStyled}>
              <li>Registration is mandatory for all participants.</li>
                <li>Participants must adhere to the workshop timings.</li>
                <li>Use of personal laptops is encouraged.</li>
              </ol>
              
              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Single Registration : ₹1100</li>
                <li>Team Registration (Team 4 Persons) : ₹4000 </li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
              <strong>G. Siva Chaitanya:</strong> +91 7569092272 <br />
                <strong>P. Praneeth Joshi:</strong> +91 79816986419 <br />
                <strong>S. Mani Tejaswi:</strong> +91 8332048777<br />
              </p>

              <div className={styles.buttonContainer}>
                <Link
                  to= {Cyberreg ? "#" : "/Registration?event=CyberSecurity"}
                  className={styles.button}
                  data-aos="zoom-in"
                >
                  {Cyberreg ? "Already Registered" : "Register Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CyberSecurity;
