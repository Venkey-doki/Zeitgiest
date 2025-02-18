import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/CloudComputing.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link,useNavigate } from "react-router-dom";
function CloudComputing() {
  const [Cloudreg, setCloudreg] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top and initialize AOS
    window.scroll(0, 0);
    AOS.init({ duration: 1000, once: true });

    // Retrieve user data; if not found, alert the user (or redirect if needed)
    const userData = localStorage.getItem("user");
    if (!userData) {
      alert("Please login to register for Cloud Computing.");
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
            .includes("Cloud Computing");
          setCloudreg(isRegistered);
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
                <li>Single Registration : ₹1100</li>
                <li>Team Registration (Team 4 Persons) : ₹4000 </li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
              <strong>D. Gowtham:</strong> +91 9492901155 <br />
                <strong>A. Sriram:</strong> +91 9381715664<br />
                <strong>M. Anjali Niharika:</strong> +91 8328615567<br />
              </p>

              <div className={styles.buttonContainer}>
                <Link
                  to= {Cloudreg ? "#" : "/Registration?event=Cloud Computing"}
                  className={styles.button}
                  data-aos="zoom-in"
                >
                  {Cloudreg ? "Already Registered" : "Register Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloudComputing;
