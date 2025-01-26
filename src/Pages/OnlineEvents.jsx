import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Contests.module.css"; // Import CSS module for Contests
import Card from "../components/Card/Card";

const eventDetails = [
  {
    id: 1,
    title: "Technoquest: Ignite Your Tech-Savvy Spirit",
    description:
      "Dive into an electrifying tech quiz! Decode hardware, crack software, and conquer rounds like “Code Crackers” and “Tech Trivia Blitz” to claim the ultimate tech wizard crown.",
    image:
      "https://images.unsplash.com/photo-1537432376769-00c70b3d8bb8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 2,
    title: "Typing Titans: The Ultimate Keyboard Showdown",
    description:
      "Race against the clock in this thrilling typing competition! Test your speed, accuracy, and endurance to rise above the rest. Every keystroke brings you closer to victory—are you ready?",
    image:
      "https://images.unsplash.com/photo-1542056178-9c65c9b6f8ac?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 3,
    title: "Blind Coding: Code Without Sight, Trust Your Logic",
    description:
      "Code without output or debugging! Rely on pure logic, memory, and skills to solve complex problems. Only the fearless programmers can conquer this unseen challenge. Are you one of them?",
    image:
      "https://images.unsplash.com/photo-1518302609613-36c1bdb7c603?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 4,
    title: "Present You: Showcase Your Ideas, Redefine Innovation",
    description:
      "Pitch groundbreaking ideas with clarity and innovation! Impress judges through impactful presentations and redefine perspectives. It’s your stage to shine as a thought leader and leave your creative mark.",
    image:
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 5,
    title: "Open Mic: The PowerPoint Edition",
    description:
      "Blend storytelling and visuals in this presentation showdown! Inform, entertain, or inspire with engaging PowerPoint topics. Captivate the audience and showcase your creativity in this exciting event.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 6,
    title: "Beat the Bug: Debugging Showdown",
    description:
      "Hunt down errors and fix them fast in this debugging challenge. Test your precision, agility, and problem-solving skills as you race against time to emerge as the ultimate bug slayer!",
    image:
      "https://images.unsplash.com/photo-1564078516393-cf4db08b95fa?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
  {
    id: 7,
    title: "Cryptic Hunt: Decode, Discover, Dominate",
    description:
      "Crack cryptographic puzzles and unravel hidden clues! This mind-bending challenge tests your logic and problem-solving skills. The hunt is on—are you ready to unlock victory?",
    image:
      "https://images.unsplash.com/photo-1516382791019-295ee8141e9c?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfGFsbHwxfHx8fHx8fHwxNjc3ODc2NTU4&ixlib=rb-1.2.1&q=80",
  },
];

const btnMessage = "Register Now";

function OnlineEvents() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS animations
  }, []);
;

  return (
    <div className={styles.contestsContainer}>
      {eventDetails.map((card) => (
        <div
          className={styles.cardItem}
          data-aos="fade-up" // Add AOS animation
          key={card.id}
        >
          <Card
            image={card.image}
            heading={card.title}
            description={card.description}
            buttonMessage={btnMessage}
          />
        </div>
      ))}
    </div>
  );
}

export default OnlineEvents;
