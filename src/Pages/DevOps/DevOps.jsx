import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/devops.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link } from "react-router-dom";
function DevOps() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
              <h1 className={styles.heading}>TechFest: DevOps</h1>
              <p className={styles.lead}>  Join our GenAI Workshop to explore the exciting world of
              Unlock the potential of DevOps in our dynamic workshop! Learn how to streamline development and operations through tools like Docker, Kubernetes, and CI/CD pipelines. Gain hands-on experience in automation, collaboration, and deployment strategies to accelerate workflows and enhance project efficiency.</p>
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
              <ul className={styles.listStyled}>
              <li>1. Registration is mandatory for all participants.</li>
                <li>2. Participants must adhere to the workshop timings.</li>
                <li>3. Use of personal laptops is encouraged.</li>
              </ul>
              
              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Single Registration : ₹1100</li>
                <li>Team Registration (Max 4 Persons) : ₹4000 </li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
              <strong>Sk. Abdul Salam:</strong> +91 8309241980 <br />
              <strong>G. Uday Naga Pavan:</strong> +91 9000766719 <br />
              <strong>Y. Krupa Komala:</strong> +91 7671864241 <br />
              </p>

              <div className={styles.buttonContainer}>
              <Link
                to="/Registration?event=DevOps"
                className={styles.button}
                data-aos="zoom-in"
              >
                Register Now
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevOps;
