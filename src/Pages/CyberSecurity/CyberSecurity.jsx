import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/CyberSecurity1.png";
import styles from "../../CSS/Accomodation.module.css"; // Import CSS module
import { Link,useNavigate } from "react-router-dom";
import Timeline from "../Timeline";
function CyberSecurity() {
  const [Cyberreg, setCyberreg] = useState(false);
  const navigate = useNavigate();
  const timelineData = [
    {
      day: "Day 1: Introduction to Ethical Hacking",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Welcome and Introduction",
          details:
            "Welcome speech, Importance of Cybersecurity, Workshop objectives and agenda",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Need for Cyber Security",
          details:
            "Computer Security Basics, Hacker and Cracker, Attacker and Victim",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Lab Setup Theory",
          details: "Types of security, File security Techniques",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Fundamentals of Networking",
          details:
            "Most Common Attacks, ASCII Code, Networking Basics and Security",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Introduction to Kali Linux",
          details:
            "IANA, Allotment of IP Address, Ping and Ping Sweep, Foot-Printing Techniques, Detecting Victim's OS",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch Break",
          details: "",
        },
        {
          time: "1:30 PM - 2:15 PM",
          title: "Basics of Internet, Networking, and Hacking",
          details:
            "Windows Hacking, Exploiting Windows vulnerabilities using live devices and USB",
        },
        {
          time: "2:15 PM - 3:00 PM",
          title: "Steganography",
          details:
            "What is Steganography? Hiding data behind Images, PDFs, Audio, and Video files",
        },
        {
          time: "3:00 PM - 3:45 PM",
          title: "SQL Cheat Sheets (Demo)",
          details:
            "Using source changes to bypass client-side validation (Demo), Live demonstration of the attack (Demo), Using SQL injection tools (Demo)",
        },
        {
          time: "3:45 PM - 4:30 PM",
          title: "Protecting Your System",
          details:
            "How to set up your system? Introduction to Backtrack Linux",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Mini Project",
          details:
            "Teams create and train a simple attack and protection with guidance from instructors",
        },
      ],
    },
    {
      day: "Day 2: Advanced Techniques and Real-World Applications",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Recap of Day 1",
          details:
            "Summary of key topics, Discussion of challenges, Q&A",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Types of Attacks",
          details:
            "What is a Man-in-the-Middle attack? Preparation and demonstration",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Hands-On: Phishing",
          details:
            "What is phishing? How to prepare and detect phishing attacks",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Email Forging",
          details:
            "What is Email Forging? How to generate a fake email? How to detect a fake email?",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Cyber Laws",
          details:
            "Introduction to cyber laws, IT Acts, Rules, and Regulations",
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
  ];

  useEffect(() => {
    // Scroll to top and initialize AOS
    window.scroll(0, 0);
    AOS.init({ duration: 1000, once: true });

    // Retrieve user data; if not found, alert the user (or redirect if needed)
    const userData = localStorage.getItem("user");
    if (!userData) {
      alert("Please login to register for CyberSecurity.");
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
            .includes("CyberSecurity");
          setCyberreg(isRegistered);
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
              <h1 className={styles.heading}>Workshop: CyberSecurity</h1>
              <p className={styles.lead}> 
              Dive into the world of Cybersecurity with our interactive workshop! Learn to identify vulnerabilities, implement security measures, and protect systems from cyber threats. Gain hands-on experience with tools and techniques to safeguard data and networks, empowering you to stay ahead in today’s digital landscape.
              </p>
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
              <strong>G. Siva Chaitanya:</strong> +91 7569092272 <br />
                <strong>P. Praneeth Joshi:</strong> +91 79816986419 <br />
                <strong>S. Mani Tejaswi:</strong> +91 8332048777<br />
              </p>

              <div className={styles.buttonContainer}>
                <Link
                  to= {Cyberreg ? "#" : "/Registration?event=CyberSecurity"}
                  className={styles.button}
                  data-aos="zoom-in"
                >
                  {Cyberreg ? "Already Registered" : "Register Now"}
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

export default CyberSecurity;
