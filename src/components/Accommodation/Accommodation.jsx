import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hostelImage from "../../assets/CSE.jpg";

function Accommodation() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
    id="Acommodation"
      className="container-fluid py-5"
      style={{
        backgroundColor: "black",
        background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
        color: "white",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Section (Image and Title) */}
          <div
            className="col-md-6 text-center"
            data-aos="fade-right"
            style={{ overflow: "hidden" }}
          >
            <img
              src={hostelImage}
              alt="Hostel"
              className="img-fluid"
              style={{
                borderRadius: "15px",
                maxWidth: "90%",
                height: "auto",
              }}
            />
            <h1 className="display-5 text-warning mt-4">
              Hostel Accommodation
            </h1>
            <p className="lead">
              Comfortable and affordable hostel facilities designed for your
              convenience and safety.
            </p>
          </div>

          {/* Right Section (Details) */}
          <div
            className="col-md-6"
            data-aos="fade-left"
            style={{
              backgroundColor: "#1e1e1e",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
            <h2 className="text-warning mb-4">Accommodation Details</h2>
            {/* Rules and Regulations */}
            <div>
              <h4 className="text-light">Rules & Guidelines:</h4>
              <ul className="list-unstyled text-white-50">
                <li>1. Quiet hours are from 10:00 PM to 6:00 AM.</li>
                <li>2. Keep your rooms clean and tidy.</li>
                <li>3. Smoking and alcohol are prohibited on premises.</li>
                <li>4. Visitors require prior approval to enter hostel rooms.</li>
                <li>5. Report any damages to hostel property immediately.</li>
              </ul>
            </div>

            {/* Pricing Section */}
            <div className="mt-4">
              <h4 className="text-light">Pricing Details:</h4>
              <ul className="list-unstyled text-white-50">
                <li>Single Room: $500/month (Includes food and Wi-Fi).</li>
                <li>Double Room: $350/month per person (Includes food and Wi-Fi).</li>
                <li>Dormitory: $200/month per person (Includes food and Wi-Fi).</li>
              </ul>
            </div>

            {/* Coordinators Section */}
            <div className="mt-4">
              <h4 className="text-light">Coordinators:</h4>
              <p className="text-white-50">
                <strong>S. Manjunadh:</strong> +91 8143224017 <br />
                <strong>K. Praneeth:</strong> +91 9603009614 <br />
                <strong>B. Navaneetha:</strong> +91 7989425914 <br />
                <strong>K. Prasanna:</strong> +91 9392453883
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-4">
              <a
                href="#"
                className="btn btn-outline-warning btn-lg"
                data-aos="zoom-in"
              >
                Contact for More Details...
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accommodation;
