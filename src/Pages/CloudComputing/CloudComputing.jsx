import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/CloudComputing.png";
import { Link } from "react-router-dom";

function CloudComputing() {
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
        background: "linear-gradient(to right,#000 0%, #2c2b2b 100%)",
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
            <h1 className="display-5  mt-4" style={{color:'#00FFF1'}}>Cloud Computing</h1>
            <p className="lead">
            Discover the power of Cloud Computing in our hands-on workshop! Learn the essentials of cloud services, deployment models, and popular platforms like AWS and Azure. Gain practical skills to build, deploy, and manage scalable applications, preparing you to harness the full potential of the cloud for innovation and efficiency..
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
            <h2 className=" mb-4" style={{color:'#00FFF1'}}>Workshop Details</h2>
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
                <strong>D. Gowtham:</strong> +91 9492901155 <br />
                <strong>A. Sriram:</strong> +91 9381715664<br />
                <strong>M. Anjali Niharika:</strong> +91 8328615567
              </p>
            </div>

            {/* Fee Details */}
            <div className="mt-4">
              <h4 className="text-light">Fee Details:</h4>
              <p className="text-white-50">Registration Fee: ₹1100</p>
              <p className="text-white-50">Team Registration Fee: ₹4000</p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-4">
                <Link
                    to="/Registration?event=Cloud Computing"
                    className="btn  btn-lg"
                    data-aos="zoom-in"
                    style={{
                    color: "#00FFF1",
                    borderColor: "#00FFF1",
                    transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#00FFF1";
                    e.target.style.color = "black";
                    }}
                    onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#00FFF1";
                    }}
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

export default CloudComputing;
