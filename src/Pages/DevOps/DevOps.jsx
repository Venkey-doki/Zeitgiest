import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/devops.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link,useNavigate } from "react-router-dom";
import Timeline from "../Timeline";
function DevOps() {

  const [DevOpsreg, setDevOpsreg] = useState(false);
  const navigate = useNavigate();
  const timelineData = [
    {
      day: "Day 1: Introduction to DevOps",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Welcome and Introduction",
          details:
            "Welcome speech, Importance of DevOps, Workshop objectives and agenda",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "What is DevOps?",
          details:
            "Introduction to DevOps, DevOps vs. Traditional IT, Benefits of DevOps",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "DevOps Principles and Culture",
          details:
            "Collaboration, Automation, Continuous Integration, Continuous Delivery, Continuous Feedback",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "The DevOps Lifecycle",
          details:
            "Plan, Code, Build, Test, Release, Deploy, Operate, Monitor",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Version Control with Git",
          details:
            "Introduction to Git, Branching and Merging, Collaboration with Pull Requests",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch Break",
          details: "",
        },
        {
          time: "1:30 PM - 2:15 PM",
          title: "Continuous Integration (CI)",
          details:
            "Introduction to CI, Setting up a CI Pipeline, Automated Testing",
        },
        {
          time: "2:15 PM - 3:00 PM",
          title: "CI Tools: Jenkins/GitLab CI/CircleCI",
          details:
            "Overview of Popular CI Tools, Jenkins Setup and Configuration, Building a Simple Pipeline",
        },
        {
          time: "3:00 PM - 3:45 PM",
          title: "Infrastructure as Code (IaC)",
          details:
            "What is IaC? Benefits of IaC, Tools like Terraform, Ansible, Chef, Puppet",
        },
        {
          time: "3:45 PM - 4:30 PM",
          title: "Containerization with Docker",
          details:
            "Introduction to Docker, Docker Images and Containers, Dockerfiles",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Mini Project",
          details:
            "Teams create and containerize a simple application and set up a basic CI pipeline",
        },
      ],
    },
    {
      day: "Day 2: Advanced DevOps Concepts and Implementation",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Recap of Day 1",
          details:
            "Summary of key topics, Discussion of challenges, Q&A",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Continuous Delivery (CD)",
          details:
            "Introduction to CD, Deployment Strategies, Automating Deployments",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Container Orchestration with Kubernetes",
          details:
            "Introduction to Kubernetes, Pods, Deployments, Services",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Monitoring and Logging",
          details:
            "Importance of Monitoring, Metrics, Alerts, Logging Tools (ELK Stack, Prometheus, Grafana)",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "DevSecOps",
          details:
            "Integrating Security into DevOps, Security Scanning Tools, Best Practices for Secure DevOps",
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
      alert("Please login to register for DevOps.");
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
            .includes("DevOps");
          setDevOpsreg(isRegistered);
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
              <h1 className={styles.heading}>Workshop: DevOps</h1>
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
              <ol className={styles.listStyled}>
              <li>Registration is mandatory for all participants.</li>
                <li>Participants must adhere to the workshop timings.</li>
                <li>Use of personal laptops is encouraged.</li>
              </ol>
              
              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Single Registration : ₹1100</li>
                <li>Team Registration (Team 4 Persons) : ₹4000 </li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
              <strong>Sk. Abdul Salam:</strong> +91 8309241980 <br />
              <strong>G. Uday Naga Pavan:</strong> +91 9000766719 <br />
              <strong>Y. Krupa Komala:</strong> +91 7671894241 <br />
              </p>

              <div className={styles.buttonContainer}>
                  <Link
                    to= {DevOpsreg ? "#" : "/Registration?event=DevOps"}
                    className={styles.button}
                    data-aos="zoom-in"
                  >
                    {DevOpsreg ? "Already Registered" : "Register Now"}
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Timeline timelineData={timelineData} />
    </div>
  );
}

export default DevOps;
