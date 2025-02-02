import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import p1 from "../assets/1000255470-removebg-preview.png";
import p2 from "../assets/devops.png";
import p3 from "../assets/CloudComputing.png";
import p4 from "../assets/cyberSecurity1.png";
import { Link } from "react-router-dom";

function Workshop() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      id="Workshop"
      style={{
        backgroundColor: "black",
        background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
      }}
    >
      <section
        className="w-100"
        style={{
          backgroundColor: "black",
          background: "linear-gradient(to right, #000000 0%, #2c2b2b 100%)",
        }}
      >
        {[
          {
            id: 1,
            image: p1,
            title: "GEN AI",
            description:
              "Join our GenAI Workshop to explore the exciting world of Generative AI! Learn how cutting-edge technologies like GPT and diffusion models create art, text, and more. Through hands-on sessions, you'll build projects and gain practical skills in AI tools and applications. Perfect for enthusiasts and professionals eager to innovate with AI.",
            link: "/workshop/GenAI",
          },
          {
            id: 2,
            image: p3,
            title: "Cloud Computing",
            description:
              "Discover the power of Cloud Computing in our hands-on workshop! Learn the essentials of cloud services, deployment models, and popular platforms like AWS and Azure. Gain practical skills to build, deploy, and manage scalable applications, preparing you to harness the full potential of the cloud for innovation and efficiency.",
            link: "/workshop/CloudComputing",
          },
          {
            id: 3,
            image: p4,
            title: "Cybersecurity",
            description:
              "Dive into the world of Cybersecurity with our interactive workshop! Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats. Gain hands-on experience with tools and techniques to safeguard data and networks, empowering you to stay ahead in today’s digital landscape.",
            link: "/workshop/CyberSecurity",
          },
          {
            id: 4,
            image: p2,
            title: "DevOps",
            description:
              "Unlock the potential of DevOps in our dynamic workshop! Learn how to streamline development and operations through tools like Docker, Kubernetes, and CI/CD pipelines. Gain hands-on experience in automation, collaboration, and deployment strategies to accelerate workflows and enhance project efficiency.",
            link: "/workshop/DevOps",
          },
        ].map((workshop) => (
          <div className="text-white py-5" key={workshop.id}>
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
                {/* Image Section */}
                <div
                  className="col d-flex justify-content-center mb-4 mb-md-0 order-1 order-md-2"
                  data-aos="fade-down"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={workshop.image}
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
                  className="col text-center text-md-start px-3"
                  data-aos="fade-up"
                >
                  <h1 className="display-5 text-warning">{workshop.title}</h1>
                  <p className="lead mb-4">{workshop.description}</p>
                  <Link
                    to={workshop.link}
                    className="btn btn-outline-warning"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Workshop;
