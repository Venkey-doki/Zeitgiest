import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/CloudComputing.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link,useNavigate } from "react-router-dom";
function CloudComputing() {
  useEffect(() => {
    window.scroll(0,0);
    AOS.init({ duration: 1000, once: true });
  }, []);

    const navigate = useNavigate();
    // State to check if the user is already registered for GenAI
    const [cloudreg, setcloudreg] = useState(false);
  
      // Fetch registration status and verify authentication
      useEffect(() => {
        // Initialize AOS (in case it needs re-initialization)
        AOS.init({ duration: 1000, once: true });
        // Retrieve user from localStorage; if not found, redirect to login
        const userData = localStorage.getItem("user");
        if (!userData) {
          navigate("/login?redirect=profile");
        } else {
          const parsedUser = JSON.parse(userData);
          // Fetch registrations from backend using the user's email
          fetch(
            `https://zeitgeistjntukcse.com/Zeitgeist/getRegistrations.php?email=${encodeURIComponent(
              parsedUser.email
            )}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.status === "success") {
                // Check if any of the registrations is for "GenAI"
                const isRegistered = data.registrations
                  .map((reg) => reg.event)
                  .includes("Cloud Computing");
                setcloudreg(isRegistered);
              } else {
                console.log("Error: Could not fetch registrations.");
              }
            })
            .catch((error) => {
              console.error("Error fetching registrations:", error);
            });
        }
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
              <h1 className={styles.heading}>TechFest: Cloud Computing</h1>
              <p className={styles.lead}> 
              Discover the power of Cloud Computing in our hands-on workshop! Learn the essentials of cloud services, deployment models, and popular platforms like AWS and Azure. Gain practical skills to build, deploy, and manage scalable applications, preparing you to harness the full potential of the cloud for innovation and efficiency.</p>
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
                <li>Single Registration : ₹1200</li>
                <li>Team Registration (Max 4 Persons) : ₹4400 </li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
              <strong>D. Gowtham:</strong> +91 9492901155 <br />
                <strong>A. Sriram:</strong> +91 9381715664<br />
                <strong>M. Anjali Niharika:</strong> +91 8328615567<br />
              </p>

              <div className={styles.buttonContainer}>
              {cloudreg ? (
                  // If already registered, show "Already Registered"
                  <Link
                    to="#"
                    className={styles.button}
                    data-aos="zoom-in"
                  >
                    Already Registered
                  </Link>
                ) : (
                  // Otherwise, show "Register Now"
                  <Link
                    to="/Registration?event=Cloud Computing"
                    className={styles.button}
                    data-aos="zoom-in"
                  >
                    Register Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudComputing;
