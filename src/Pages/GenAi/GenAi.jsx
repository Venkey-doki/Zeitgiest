import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/1000255470-removebg-preview.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link } from "react-router-dom";
function GenAi() {
  useEffect(() => {
    window.scroll(0,0);
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
              <h1 className={styles.heading}>TechFest: GEN AI</h1>
              <p className={styles.lead}>  Join our GenAI Workshop to explore the exciting world of
              Generative AI! Learn how cutting-edge technologies like GPT and
              diffusion models create art, text, and more.</p>
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
                <li> Use of personal laptops is encouraged.</li>
              </ol>
              
              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Single Registration : ₹1200</li>
                <li>Team Registration (Max 4 Persons) : ₹4400 </li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
              <strong>B. Deva Sai Ganesh:</strong> +91 9761667788 <br />
                <strong>K. Sai:</strong> +91 6304667187 <br />
                <strong>P. Poojitha:</strong> +91 7032711368 <br />
              </p>

              <div className={styles.buttonContainer}>
              <Link
                to="/Registration?event=GenAI"
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

export default GenAi;
