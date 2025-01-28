import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Contests.module.css"; // Import CSS module for Contests
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

const eventDetails = [
  {
    id: 1,
    title: "Technoquest: Ignite Your Tech-Savvy Spirit",
    description:
      "Dive into an electrifying tech quiz! Decode hardware, crack software, and conquer rounds like “Code Crackers” and “Tech Trivia Blitz” to claim the ultimate tech wizard crown.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00c70b3d8bb8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "D.Sashank",
      coordinators1ph:"+91 9390693302", 
      coordinators2:"Ch. Aishwarya",
      coordinators2ph:" +91 7780659729",
  },
  {
    id: 2,
    title: "Typing Titans: The Ultimate Keyboard Showdown",
    description:
      "Race against the clock in this thrilling typing competition! Test your speed, accuracy, and endurance to rise above the rest. Every keystroke brings you closer to victory—are you ready?",
    image:
      "https://images.unsplash.com/photo-1542056178-9c65c9b6f8ac?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "Sk. Sher Ali",
      coordinators1ph:"+91 9398133176", 
      coordinators2:"A. Rishitha",
      coordinators2ph:" +91 9182628263",
  },
  {
    id: 3,
    title: "Blind Coding: Code Without Sight, Trust Your Logic",
    description:
      "Code without output or debugging! Rely on pure logic, memory, and skills to solve complex problems. Only the fearless programmers can conquer this unseen challenge. Are you one of them?",
    image:
      "https://images.unsplash.com/photo-1518302609613-36c1bdb7c603?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "Ch. Sree Nihaar",
      coordinators1ph:"+91 8247558584", 
      coordinators2:"M. Jyothsna",
      coordinators2ph:" +91 8179203388",
  },
  {
    id: 4,
    title: "Present You: Showcase Your Ideas, Redefine Innovation",
    description:
      "Pitch groundbreaking ideas with clarity and innovation! Impress judges through impactful presentations and redefine perspectives. It’s your stage to shine as a thought leader and leave your creative mark.",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "N. Manmadha Kumar",
      coordinators1ph:"+91 6309698129", 
      coordinators2:"B. Tejaswini",
      coordinators2ph:" +91 7288026026",
  },
  {
    id: 5,
    title: "Open Mic: The PowerPoint Edition",
    description:
      "Blend storytelling and visuals in this presentation showdown! Inform, entertain, or inspire with engaging PowerPoint topics. Captivate the audience and showcase your creativity in this exciting event.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "Y. Sai Charan",
      coordinators1ph:"+91 8309212307", 
      coordinators2:"B. Kavya",
      coordinators2ph:" +91 8142735459",
  },
  {
    id: 6,
    title: "Beat the Bug: Debugging Showdown",
    description:
      "Hunt down errors and fix them fast in this debugging challenge. Test your precision, agility, and problem-solving skills as you race against time to emerge as the ultimate bug slayer!",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf4db08b95fa?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "D. Harsha",
      coordinators1ph:"+91 9676088920", 
      coordinators2:"D. Hasa",
      coordinators2ph:" +91 7671834633",
  },
  {
    id: 7,
    title: "Cryptic Hunt: Decode, Discover, Dominate",
    description:
      "Crack cryptographic puzzles and unravel hidden clues! This mind-bending challenge tests your logic and problem-solving skills. The hunt is on—are you ready to unlock victory?",
    image:
      "https://images.unsplash.com/photo-1516382791019-295ee8141e9c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
      coordinators1: "S. Shankar",
      coordinators1ph:"+91 8142809837", 
      coordinators2:"J. Sudha",
      coordinators2ph:" +91 6303757127",
  },
];

const btnMessage = "Register Now";

function TechnicalEvents() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
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
        {eventDetails.map((card) => (
        <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Section (Image and Title) */}
          <div
            className="col-md-6 text-center"
            data-aos="fade-right"
            style={{ overflow: "hidden" }}
          >
            <img
              src={card.image}
              alt="Hostel"
              className="img-fluid"
              style={{
                borderRadius: "15px",
                maxWidth: "60%",
                height: "auto",
              }}
            />
            <h1 className="display-5 text-warning mt-4">
              {card.title}
            </h1>
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
            <h2 className="text-warning mb-4">Details</h2>
            {/* Rules and Regulations */}
            <div>
              <h4 className="text-light">{card.description}</h4>

            </div>

            {/* Pricing Section */}
            <div className="mt-4">
              <h4 className="text-light">Pricing Details:</h4>
              <ul className="list-unstyled text-white-50">
                <li>Event Fee: ₹200</li>
                </ul>
            </div>

            {/* Coordinators Section */}
            <div className="mt-4">
              <h4 className="text-light">Coordinators:</h4>
              <p className="text-white-50">
                <strong>{card.coordinators1} :</strong> {card.coordinators1ph} <br />
                <strong>{card.coordinators2} :</strong> {card.coordinators2ph}
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-4">
              <Link
                to={`/Registration?event=${card.title}`}
                className="btn btn-outline-warning btn-lg"
                data-aos="zoom-in"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
        ))}

      </div>
  );
}

export default TechnicalEvents;