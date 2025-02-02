import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Workshop.module.css";
import p1 from "../assets/1000255470-removebg-preview.png";
import p2 from "../assets/devops.png";
import p3 from "../assets/CloudComputing.png";
import p4 from "../assets/cyberSecurity1.png";
import { Link } from "react-router-dom";

function Workshop() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const workshops = [
    {
      id: 1,
      image: p1,
      title: "GEN AI",
      description: "Join our GenAI Workshop to explore the exciting world of Generative AI! Learn how cutting-edge technologies like GPT and diffusion models create art, text, and more.",
      link: "/workshop/GenAI",
    },
    {
      id: 2,
      image: p3,
      title: "Cloud Computing",
      description: "Discover the power of Cloud Computing in our hands-on workshop! Learn the essentials of cloud services, deployment models, and popular platforms like AWS and Azure. Gain practical skills to build, deploy, and manage scalable applications, preparing you to harness the full potential of the cloud for innovation and efficiency..",
      link: "/workshop/CloudComputing",
    },
    {
      id: 3,
      image: p4,
      title: "Cybersecurity",
      description: "Dive into the world of Cybersecurity with our interactive workshop! Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats. Gain hands-on experience with tools and techniques to safeguard data and networks, empowering you to stay ahead in today’s digital landscape.",
      link: "/workshop/CyberSecurity",
    },
    {
      id: 4,
      image: p2,
      title: "DevOps",
      description: "Unlock the potential of DevOps in our dynamic workshop! Learn how to streamline development and operations through tools like Docker, Kubernetes, and CI/CD pipelines. Gain hands-on experience in automation, collaboration, and deployment strategies to accelerate workflows and enhance project efficiency.",
      link: "/workshop/DevOps",
    },
  ];

  return (
    <div className={styles.workshopContainer}>
      {/* Animated Background */}
      <div className={styles.background}></div>

      <div className={styles.contentContainer}>
        <h1 className={styles.mainTitle} data-aos="fade-down">
          TECH WORKSHOPS
        </h1>
        
        {workshops.map((workshop, index) => (
          <section 
            key={workshop.id}
            className={`${styles.workshopSection} ${index % 2 === 0 ? styles.leftAlign : styles.rightAlign}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className={styles.workshopContent}>
              <div className={styles.imageContainer}>
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className={styles.workshopImage}
                  data-aos="zoom-in"
                />
                <div className={styles.imageGlow}></div>
              </div>

              <div className={styles.textContent}>
                <h2 className={styles.workshopTitle}>{workshop.title}</h2>
                <p className={styles.workshopDescription}>{workshop.description}</p>
                <Link
                  to={workshop.link}
                  className={styles.exploreButton}
                >
                  Explore Now
                  <div className={styles.buttonHoverGlow}></div>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Workshop;