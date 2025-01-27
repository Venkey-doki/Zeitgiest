import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Contests.module.css"; // Import CSS module for Contests
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
const eventDetails =[
  {
    id: 1,
    heading: "Code Combat",
    description:
      "Prove your coding skills by battling it out in this ultimate programming contest. Solve challenging problems within time constraints and showcase your expertise.",
    image:
      "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
      coordinators1: "N. Sivaraju",
      coordinators1ph:"+91 7032358921", 
      coordinators2:"B. Kavya",
      coordinators2ph:" +91 8142735459",
  },
  {
    id: 2,
    heading: "Mind Maze",
    description:
      "Enter a world of riddles, puzzles, and brain teasers that test your intellect. This multifaceted event will challenge your problem-solving and critical-thinking abilities.",
    image:
      "https://images.unsplash.com/photo-1656624782564-c0d0d6c2f7e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTQ&ixlib=rb-1.2.1&q=80",
      coordinators1: "P. Dinesh Kumar",
      coordinators1ph:"+91 6281733814", 
      coordinators2:"A. Lohitha",
      coordinators2ph:" +91 7816076367",
  },
  {
    id: 3,
    heading: "Web Wizards",
    description:
      "Create stunning and functional websites that combine design and usability. Show off your web development skills in this creative coding competition.",
    image:
      "https://images.unsplash.com/photo-1656618364955-4450214b83f9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTI&ixlib=rb-1.2.1&q=80",
      coordinators1: "B. Bharadwaj",
      coordinators1ph:"+91 9502496903", 
      coordinators2:"M. Meghana",
      coordinators2ph:" +91 6304088712",
  }
];

const btnMessage = "Register Now";

function OnlineEvents() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);
;

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
              {card.heading}
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
                <li>Double Room: $350/month per person (Includes food and Wi-Fi).</li>
                <li>Dormitory: $200/month per person (Includes food and Wi-Fi).</li>
              </ul>
            </div>

            {/* Coordinators Section */}
            <div className="mt-4">
              <h4 className="text-light">Coordinators:</h4>
              <p className="text-white-50">
                <strong>{card.coordinators1}:</strong> {card.coordinators1ph} <br />
                <strong>{card.coordinators2}:</strong> {card.coordinators2ph}
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-4">
            <Link
              to={`/Registration?event=${encodeURIComponent(card.heading)}`}
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

export default OnlineEvents;
