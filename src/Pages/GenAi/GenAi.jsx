import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../../assets/1000255470-removebg-preview.png";
import styles from "../../CSS/Accomodation.module.css"; // Using CSS module for styling
import Timeline from "../Timeline";

function GenAi() {
  const [GenAIreg, setGenAIreg] = useState(false);
  const navigate = useNavigate();
  const timelineData = [
    {
      day: "Day 1: Foundations and Core Concepts of Generative AI",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Welcome and Introduction",
          details: "Welcome speech, Importance of Generative AI in engineering, Workshop objectives and agenda",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "What is Generative AI?",
          details: "Basics of AI, ML, and Generative AI, real-world applications, examples like GPT and DALL·E",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Neural Networks Demystified",
          details: "Theory: Perceptrons, layers, activation functions; Practical: Build and train a simple neural network using Python",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Deep Dive into Variational Autoencoders (VAEs)",
          details: "Introduction to VAEs (encoder, decoder, latent space); Hands-on: Build a VAE to reconstruct images",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Generative Adversarial Networks (GANs)",
          details: "How GANs work: Generator vs. Discriminator; Live demo: Training a basic GAN to generate handwritten digits",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch Break",
          details: "",
        },
        {
          time: "1:30 PM - 2:15 PM",
          title: "Data Preprocessing for Generative Models",
          details: "Cleaning and augmenting datasets; Practical: Prepare datasets for image and text generation",
        },
        {
          time: "2:15 PM - 3:00 PM",
          title: "Hands-On: Creating Art with Generative AI",
          details: "Use StyleGAN or DALL·E-like tools to generate creative artworks; Applications in engineering designs",
        },
        {
          time: "3:00 PM - 3:45 PM",
          title: "Generative AI in CAD Design",
          details: "Overview: AI in creating 3D models and simulations; Hands-on: Optimize simple engineering designs",
        },
        {
          time: "3:45 PM - 4:30 PM",
          title: "Exploring AI Tools: TensorFlow, PyTorch, and Google Colab",
          details: "Set up Python environments; Introduction to tools and frameworks; Hands-on: Running sample AI models",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Mini Project: Train Your First Generative Model",
          details: "Teams create and train a simple generative model with instructor guidance",
        },
      ],
    },
    {
      day: "Day 2: Advanced Techniques and Real-World Applications",
      sessions: [
        {
          time: "9:00 AM - 9:15 AM",
          title: "Recap of Day 1",
          details: "Summary of key topics, discussion of challenges and Q&A",
        },
        {
          time: "9:15 AM - 10:00 AM",
          title: "Introduction to Transformers and Attention Mechanisms",
          details: "How transformers work; Theory: Self-attention and multi-head attention; Applications in engineering NLP",
        },
        {
          time: "10:00 AM - 10:45 AM",
          title: "Hands-On: Build a Mini Transformer Model",
          details: "Practical: Use PyTorch to create a basic transformer for text summarization",
        },
        {
          time: "10:45 AM - 11:30 AM",
          title: "Text-to-Image Models and Stable Diffusion",
          details: "Theory: How Stable Diffusion generates images; Hands-on: Generate images from engineering-related prompts",
        },
        {
          time: "11:30 AM - 12:30 PM",
          title: "Robotics and Generative AI",
          details: "AI for robot design optimization; Case studies and a hands-on robotic simulation",
        },
        {
          time: "12:30 PM - 1:30 PM",
          title: "Lunch Break",
          details: "",
        },
        {
          time: "1:30 PM - 2:15 PM",
          title: "Generative AI for Engineering Simulations",
          details: "Using AI for stress analysis, thermal simulation, and fluid dynamics; Hands-on model optimization",
        },
        {
          time: "2:15 PM - 3:00 PM",
          title: "Reinforcement Learning in Generative AI",
          details: "Basics of reinforcement learning; Hands-on: Train a simple RL model for generative tasks",
        },
        {
          time: "3:00 PM - 3:45 PM",
          title: "Hands-On: Fine-Tuning a Pre-Trained Model",
          details: "Fine-tune GPT or similar models for domain-specific tasks; Build an AI assistant for engineering FAQs",
        },
        {
          time: "3:45 PM - 4:30 PM",
          title: "Ethical Considerations in Generative AI",
          details: "Discuss bias, misuse, and legal aspects; Open forum on engineering challenges in AI ethics",
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Final Project Showcase",
          details: "Teams present their projects; Peer and instructor feedback, certificates and closing remarks",
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
      alert("Please login to register for GenAI.");
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
            .includes("GenAI");
          setGenAIreg(isRegistered);
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
            {/* Left column: Image and Workshop Intro */}
            <div className={`col-md-6 text-center ${styles.imageContainer}`} data-aos="fade-right">
              <img src={p1} alt="Hostel" className={styles.hostelImage} width={300} height={300}/>
              <h1 className={styles.heading}>Workshop: GEN AI</h1>
              <p className={styles.lead}>
                Join our GenAI Workshop to explore the exciting world of Generative AI! Learn how cutting-edge technologies like GPT and diffusion models create art, text, and more.
              </p>
            </div>

            {/* Right column: Workshop Details */}
            <div className={`col-md-6 ${styles.accommodationContainer}`} data-aos="fade-left">
              <h2 className={styles.subheading}>Workshop Details</h2>
              <h4 className={styles.textLight}>Certification Policy:</h4>
              <ul className={styles.listStyled}>
                <li>
                  Certificate of participation for all workshop participants from IIT Bombay &amp; Anvira Edustation.
                </li>
                <li>
                  A competition will be organized among participants with a 'Certificate of Excellence' awarded to winners.
                </li>
                <li>Certificate of Coordination for the campus workshop coordinators.</li>
              </ul>

              <h4 className={styles.textLight}>Rules &amp; Regulations:</h4>
              <ol className={styles.listStyled}>
                <li>Registration is mandatory for all participants.</li>
                <li>Participants must adhere to the workshop timings.</li>
                <li>Use of personal laptops is encouraged.</li>
              </ol>

              <h4 className={styles.textLight}>Pricing Details:</h4>
              <ul className={styles.listStyled}>
                <li>Single Registration : ₹1200</li>
                <li>Team Registration (Team 4 Persons) : ₹4400</li>
              </ul>

              <h4 className={styles.textLight}>Coordinators:</h4>
              <p className={styles.contactDetails}>
                <strong>B. Deva Sai Ganesh:</strong> +91 9761667788 <br />
                <strong>K. Sai:</strong> +91 6304667187 <br />
                <strong>P. Poojitha:</strong> +91 7032711368 <br />
              </p>

              <div className={styles.buttonContainer}>
                <Link
                  to= {GenAIreg ? "#" : "/Registration?event=GenAI"}
                  className={styles.button}
                  data-aos="zoom-in"
                >
                  {GenAIreg ? "Already Registered" : "Register Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Timeline  timelineData={timelineData} />
      </div>
    </div>
  );
}

export default GenAi;
