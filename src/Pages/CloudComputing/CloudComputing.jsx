import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/CloudComputing.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link,useNavigate } from "react-router-dom";
import Timeline from "../Timeline";
function CloudComputing() {
  const [Cloudreg, setCloudreg] = useState(false);
  const navigate = useNavigate();
  const timelineData = [
    {
      day: "Day 1: Bird's Eye View of the Cloud",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Welcome and Introduction",
          details:
            "Welcome speech, Importance of Cloud Computing, Workshop objectives and agenda",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Introduction to Cloud Computing",
          details:
            "Cloud Computing Basics, Cloud Service Models (IaaS, PaaS, SaaS), Cloud Deployment Models (Public, Private, Hybrid, Community)",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Cloud Infrastructure",
          details: "Understanding Data Centers, Virtualization, Networking in the Cloud",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Cloud Security Fundamentals",
          details:
            "Security Concerns in the Cloud, Basic Security Measures, Compliance and Regulations",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Introduction to AWS/Azure/GCP",
          details:
            "Overview of Cloud Providers, Setting up an Account, Navigating the Console",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch Break",
          details: "",
        },
        {
          time: "1:30 PM - 2:15 PM",
          title: "Compute Services",
          details:
            "Introduction to Virtual Machines, Launching a VM Instance, Connecting to a VM",
        },
        {
          time: "2:15 PM - 3:00 PM",
          title: "Storage Services",
          details:
            "Object Storage, Block Storage, File Storage",
        },
        {
          time: "3:00 PM - 3:45 PM",
          title: "Networking in the Cloud",
          details:
            "Virtual Private Cloud (VPC), Security Groups, Network ACLs",
        },
        {
          time: "3:45 PM - 4:30 PM",
          title: "Cloud Monitoring",
          details:
            "CloudWatch/Azure Monitor/Cloud Monitoring, Logging and Alerting",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Mini Project",
          details:
            "Teams deploy a simple web application on a VM with guidance from instructors",
        },
      ],
    },
    {
      day: "Day 2: Deep Dive into the Cloud",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Recap of Day 1",
          details:
            "Summary of key topics, Discussion of challenges, Q&A",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Containers and Orchestration",
          details:
            "Introduction to Docker, Containerizing Applications, Introduction to Kubernetes",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Hands-On: Deploying a Containerized Application",
          details:
            "Deploying to Kubernetes",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Serverless Computing",
          details:
            "Introduction to Serverless Functions, Writing a Simple Serverless Function",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Cloud Databases",
          details:
            "Introduction to Managed Databases, Relational vs. NoSQL Databases",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch Break",
          details: "",
        },
        {
          time: "1:30 PM - 4:30 PM",
          title: "Practice & Revision",
          details: "",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Final Project Showcase",
          details:
            "Teams present their projects, Peer and instructor feedback, Certificates and closing remarks",
        },
      ],
    },
  ]
  

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
              <h1 className={styles.heading}>Workshop: Cloud Computing</h1>
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
                <li>Single Registration : ₹1200</li>
                <li>Team Registration (Team 4 Persons) : ₹4400 </li>
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
      <Timeline  timelineData={timelineData} />
    </div>
  );
}

export default CloudComputing;
