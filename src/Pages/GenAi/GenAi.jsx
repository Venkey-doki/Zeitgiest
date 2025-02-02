import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/1000255470-removebg-preview.png";
import { Link } from "react-router-dom";

function GenAi() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
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
              src={p1}
              alt="Workshop"
              className="img-fluid"
              style={{
                borderRadius: "15px",
                maxWidth: "90%",
                height: "auto",
              }}
            />
            <h1 className="display-5 text-warning mt-4">TechFest: GEN AI</h1>
            <p className="lead">
              Join our GenAI Workshop to explore the exciting world of
              Generative AI! Learn how cutting-edge technologies like GPT and
              diffusion models create art, text, and more.
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
            <h2 className="text-warning mb-4">Workshop Details</h2>
            {/* Rules and Regulations */}
            <div>
              <h4 className="text-light">Cerification Policy:</h4>
              <ul className="list-unstyled text-white-50">
                <li>Certificate of participation for all the workshop participants from IIT Bombay & Anvira Edustation.</li>
                <li>At the end of this workshop, a small competition will be organised among the participating students and winners will be awarded with a 'Certificate of Excellence'.
                </li>
                 <li>Certificate of Coordination for the coordinators of the campus workshops.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-light">Rules & Regulations:</h4>
              <ul className="list-unstyled text-white-50">
                <li>1. Registration is mandatory for all participants.</li>
                <li>2. Participants must adhere to the workshop timings.</li>
                <li>3. Use of personal laptops is encouraged.</li>
              </ul>
            </div>

            {/* Coordinators */}
            <div className="mt-4">
              <h4 className="text-light">Coordinators:</h4>
              <p className="text-white-50">
                <strong>B. Deva:</strong> +91 9761667788 <br />
                <strong>K. Sai:</strong> +91 6304667187 <br />
                <strong>P. Poojitha:</strong> +91 7032711368 <br />
              </p>
            </div>

            {/* Fee Details */}
            <div className="mt-4">
              <h4 className="text-light">Fee Details:</h4>
              <p className="text-white-50">Registration Fee: ₹1200</p>
              <p className="text-white-50">Team Registration Fee: ₹4400</p>
            </div>
            {/* Call to Action */}
            <div c  lassName="text-center mt-4">
              <Link
                to="/Registration?event=GenAI"
                className="btn btn-outline-warning btn-lg"
                data-aos="zoom-in"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenAi;
