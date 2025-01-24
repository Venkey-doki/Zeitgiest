import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contests.css";

const cardData = [
  {
    id: 1,
    heading: "Code Combat",
    description: "Prove your coding skills by battling it out in this ultimate programming contest. Solve challenging problems within time constraints and showcase your expertise.",
    image:
      "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 2,
    heading: "Mind Maze",
    description: "Enter a world of riddles, puzzles, and brain teasers that test your intellect. This multifaceted event will challenge your problem-solving and critical-thinking abilities.",
    image:
      "https://images.unsplash.com/photo-1656624782564-c0d0d6c2f7e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTQ&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 3,
    heading: "Web Wizards",
    description: "Create stunning and functional websites that combine design and usability. Show off your web development skills in this creative coding competition.",
    image:
      "https://images.unsplash.com/photo-1656618364955-4450214b83f9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTI&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 4,
    heading: "Meme Crafts",
    description: "Unleash your humor and creativity by crafting memes that resonate. Turn your ideas into viral-worthy masterpieces and win the crowd’s laughter.",
    image:
      "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 5,
    heading: "Reel Masters",
    description: "Showcase your storytelling skills by creating entertaining and impactful reels. Compete to see if you have what it takes to captivate audiences.",
    image:
      "https://images.unsplash.com/photo-1656624782564-c0d0d6c2f7e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTQ&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 6,
    heading: "Picture Perfect",
    description: "Capture the essence of our campus through your lens, highlighting its beauty and uniqueness. Showcase your creativity by telling a story with every frame.",
    image:
      "https://images.unsplash.com/photo-1656618364955-4450214b83f9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTI&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 7,
    heading: "Battle Arena",
    description: "Step into the world of intense battle royale action with games like PUBG and Free Fire. Compete in fast-paced matches to showcase your gaming skills and secure victory in the ultimate gaming showdown.",
    image:
      "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 8,
    heading: "Snap Shot",
    description: "Strike your best pose and capture the perfect selfie moment. Let your creativity shine and share your unique style with the world. ",
    image:
      "https://images.unsplash.com/photo-1656624782564-c0d0d6c2f7e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTQ&ixlib=rb-1.2.1&q=80",
  },
];

function Contests() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with animation duration and settings
  }, []);

  return (
      <div id="Contests" className="grid-container">
        {cardData.map((card, index) => (
          <div
            className="card"
            key={card.id}
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // Alternate animations for variety
          >
            <img src={card.image} alt={card.heading} />
            <div className="card-content">
              <h2>{card.heading}</h2>
              <p>{card.description}</p>
              <a href="#" className="button">
                Find out more
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Contests;
