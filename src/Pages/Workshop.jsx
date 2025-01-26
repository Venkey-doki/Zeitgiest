import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import p1 from "../assets/1000255470-removebg-preview.png";
import p2 from "../assets/devops.png"
import p3 from "../assets/CloudComputing.png"
import p4 from "../assets/cyberSecurity1.png"
import { Link } from "react-router-dom";
function Workshop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
    id="Workshop"
      style={{
        backgroundColor: "black",
        background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
      }}
    >
      {/* Section */}
      <section
        className="w-100"
        style={{
          backgroundColor: "black",
          background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
        }}
      >
        <div className="text-white py-5">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              {/* Image Section */}
              <div
                className="col-md-5 order-1 order-md-2 d-flex justify-content-center"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={p1}
                  alt="Workshop Visual"
                  className="img-fluid"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Text Section */}
              <div
                className="col-md-6 order-2 order-md-1 text-center text-md-start mx-5 "
                data-aos="fade-up"
              >
                <h1 className="display-4 text-warning">GEN AI</h1>
                <h2 className="h4 mb-3"></h2>
                <p className="lead">
                  Join our GenAI Workshop to explore the exciting world of
                  Generative AI! Learn how cutting-edge technologies like GPT
                  and diffusion models create art, text, and more. Through
                  hands-on sessions, you'll build projects and gain practical
                  skills in AI tools and applications. Perfect for enthusiasts
                  and professionals eager to innovate with AI.
                </p>
                <Link to="/workshop/GenAI" className="btn btn-outline-warning">
                  Explore Now
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-white py-5">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              {/* Image Section */}
              <div
                className="col-md-5 order-1 order-md-2 d-flex justify-content-center"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={p3}
                  alt="Workshop Visual"
                  className="img-fluid"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Text Section */}
              <div
                className="col-md-6 order-2 order-md-1 text-center text-md-start mx-5 "
                data-aos="fade-up"
              >
                <h1 className="display-4 text-warning">Cloud computing</h1>
                <h2 className="h4 mb-3"></h2>
                <p className="lead">
                Discover the power of Cloud Computing in our hands-on workshop! Learn the essentials of cloud services, deployment models, and popular platforms like AWS and Azure. Gain practical skills to build, deploy, and manage scalable applications, preparing you to harness the full potential of the cloud for innovation and efficiency..
                </p>
                <Link to="./CloudComputing" className="btn btn-outline-warning">
                  Explore Now
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-white py-5">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              {/* Image Section */}
              <div
                className="col-md-5 order-1 order-md-2 d-flex justify-content-center"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={p4}
                  alt="Workshop Visual"
                  className="img-fluid"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Text Section */}
              <div
                className="col-md-6 order-2 order-md-1 text-center text-md-start mx-5 "
                data-aos="fade-up"
              >
                <h1 className="display-4 text-warning">Cybersecurity</h1>
                <h2 className="h4 mb-3"></h2>
                <p className="lead">
                Dive into the world of Cybersecurity with our interactive workshop! Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats. Gain hands-on experience with tools and techniques to safeguard data and networks, empowering you to stay ahead in today’s digital landscape.
                </p>
                <Link to="/workshop/CyberSecurity" className="btn btn-outline-warning">
                  Explore Now
                </Link>
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-white py-5">
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              {/* Image Section */}
              <div
                className="col-md-5 order-1 order-md-2 d-flex justify-content-center"
                data-aos="fade-down"
                style={{ overflow: "hidden" }}
              >
                <img
                  src={p2}
                  alt="Workshop Visual"
                  className="img-fluid"
                  style={{
                    maxWidth: "90%",
                    height: "auto",
                  }}
                />
              </div>

              {/* Text Section */}
              <div
                className="col-md-6 order-2 order-md-1 text-center text-md-start mx-5 "
                data-aos="fade-up"
              >
                <h1 className="display-4 text-warning">Devops</h1>
                <h2 className="h4 mb-3"></h2>
                <p className="lead">
                Unlock the potential of DevOps in our dynamic workshop! Learn how to streamline development and operations through tools like Docker, Kubernetes, and CI/CD pipelines. Gain hands-on experience in automation, collaboration, and deployment strategies to accelerate workflows and enhance project efficiency.
                </p>
                <Link to="/workshop/DevOps" className="btn btn-outline-warning">
                  Explore Now
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workshop;
