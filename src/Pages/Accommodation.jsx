import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hostelImage from "../assets/hostel.webp";
import styles from "../CSS/Accomodation.module.css"; // Import CSS module

function Accommodation() {
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
                src={hostelImage}
                alt="Hostel"
                className={styles.hostelImage}
              />
              <h1 className={styles.heading}>Hostel Accommodation</h1>
              <p className={styles.lead}>Comfortable and affordable hostel facilities designed for your convenience and safety.</p>
            </div>

            <div className={`col-md-6 ${styles.accommodationContainer}`} data-aos="fade-left">
              <h2 className={styles.subheading}>Accommodation Details</h2>
              <h4 className={styles.textLight}>Rules & Guidelines:</h4>
              <ol className={styles.listStyled}>
                <li>Quiet hours are from 10:00 PM to 6:00 AM.</li>
                <li>Keep your belongings safe and secure.</li>
                <li>Smoking and alcohol are prohibited on premises.</li>
                <li>Visitors require prior approval to enter hostel rooms.</li>
                <li>Report any damages to hostel property immediately.</li>
              </ol>

              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Accommodation : ₹300 (2 Days)</li>
                <li>Food: ₹500 (2 Days)</li>
                <li>Food And Accommodation: ₹700 (2 Days)</li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
                <strong>S. Manjunadh:</strong> +91 8143224017 <br />
                <strong>K. Praneeth Reddy:</strong> +91 9603009614 <br />
                <strong>B. Navaneetha:</strong> +91 7989425914 <br />
                <strong>K. Durga Prasanna:</strong> +91 9392453883
              </p>

              <div className={styles.buttonContainer}>
                <a href="tel:8143224017" className={styles.button} data-aos="zoom-in">
                  Book Your Slot Now.....!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
