import React from "react";
import styles from "../CSS/Contests.module.css"; // Import the CSS module
import Card from "../components/Card/Card"; // Import the Card component

const Contests = () => {
  const contests = [
    {
      id: 4,
      heading: "Meme Crafts",
      description:
        "Unleash your humor and creativity by crafting memes that resonate. Turn your ideas into viral-worthy masterpieces and win the crowd’s laughter.",
      coordinators : [" k . Praneeth: 9603009614 ", "y. k. Komala: 7671894241"],
        image:
        "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
    },
    {
      id: 5,
      heading: "Reel Masters",
      description:
        "Showcase your storytelling skills by creating entertaining and impactful reels. Compete to see if you have what it takes to captivate audiences.",
      coordinators : ["p. manikanta: 9390159239" , "n. poorna chandrika: 7989015758"] ,
        image:
        "https://images.unsplash.com/photo-1656624782564-c0d0d6c2f7e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTQ&ixlib=rb-1.2.1&q=80",
    },
    {
      id: 6,
      heading: "Picture Perfect",
      description:
        "Capture the essence of our campus through your lens, highlighting its beauty and uniqueness. Showcase your creativity by telling a story with every frame.",
      coordinators : ["sk. mansoor: 9014230074" ," p. Sahithi: 9440147799"],
        image:
        "https://images.unsplash.com/photo-1656618364955-4450214b83f9?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTI&ixlib=rb-1.2.1&q=80",
    },
    {
      id: 7,
      heading: "Battle Arena",
      description:
        "Step into the world of intense battle royale action with games like PUBG and Free Fire. Compete in fast-paced matches to showcase your gaming skills and secure victory in the ultimate gaming showdown.",
      coordinators : ["m. Karthik: 9704776155" , "k.Revanth: 9110363298"],
        image:
        "https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80",
    },
    {
      id: 8,
      heading: "Snap Shot",
      description:
        "Strike your best pose and capture the perfect selfie moment. Let your creativity shine and share your unique style with the world.",
      coordinators : ["D. vamsi: 6302549989" , " D. Hasa: 7671834633"],
        image:
        "https://images.unsplash.com/photo-1656624782564-c0d0d6c2f7e5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTQ&ixlib=rb-1.2.1&q=80",
    },
  ];

  return (
    <div className={styles.contestsContainer}>
      {contests.map((contest, index) => (
        <div className={styles.cardItem} key={index}>
          <Card
            image={contest.image}
            heading={contest.heading}
            description={contest.description}
            coordinators = {contest.coordinators}
            buttonMessage={contest.buttonMessage}
          />
        </div>
      ))}
    </div>
  );
};

export default Contests;
