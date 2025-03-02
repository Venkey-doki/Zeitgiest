import React, { useRef, useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "../CSS/TechnicalEvents.module.css";
import tecnoquest from "../assets/techno-quest.jpg";
import typingtitans from "../assets/typing-titans.jpg";
import blindcoding from "../assets/blind-coding.jpg";
import beatthebug from "../assets/beat-the-bug.jpg";
import cryptichunt from "../assets/cryptic-hunt.jpg";
import openmic from "../assets/open-mic.jpg";
import presentyou from "../assets/present-you.jpg";

const eventsData = [
  {
    id: 1,
    title: "Technoquest: Ignite Your Tech-Savvy Spirit",
    name: "Technoquest",
    description:
      "Dive into an electrifying tech quiz! Decode hardware, crack software, and conquer rounds like “Code Crackers” and “Tech Trivia Blitz” to claim the ultimate tech wizard crown.",
    bigdescription:`
     Techno Quest is a dynamicandchallenging event designed to testyour knowledge and
 understanding of core computer science concepts. This team-based competition will push
 participants to think critically, analyze problems, and apply their knowledge on the core concepts
 makethere fundamentals strong. Teams of 2 or 3 memberswill compete intwo excitingrounds,
 testing their skills across multiple computer science domains.<br>
 Whetheryou're passionate about algorithms, fascinated by databases, or skilled in the
 intricacies of OS concepts, Techno Quest is your chance to prove your expertise and showcase your
 abilities in a fast-paced, competitive environment. The event is designed not only to test your
 theoretical knowledge but also to challenge your problem-solving and analytical thinking skills
    `,  
    image: tecnoquest,
    coordinators1: "D. Sai Sashank",
    coordinators1ph: "+91 9390693302",
    coordinators2: "Ch. Nitya Aishwarya",
    coordinators2ph: "+91 7780659729",
    entryFee: 200,
    mode: "Individual",
    prizeMoney: 1000,
    rules: [
        "Each team must consist of 2 or 3 members. No individual participation is allowed.",
        "Participants must register in advance to secure their spot in the competition.",
        "The event will be conducted in a fair, transparent, and ethical manner. Any form of cheating, external assistance, or misconduct will lead to immediate disqualification.",
        "The event is divided into two rounds, each focusing on different aspects of computer science.",
        "Round 1: This round will consist of Multiple Choice Questions (MCQs) based on various computer science topics. Participants will need to answer questions quickly and accurately to advance to the next stage.",
        "Round 2: This round will consist of a mix of MCQs and Fill-in-the-Blank questions. Participants will be tested on their ability to recall key concepts, solve problems, and fill in missing information related to algorithms, data structures, and other essential computer science topics.",
        "The team with the most correct answers and the highest overall score will be declared the winner.",
        "The winning team will be awarded prize money, while all participants will receive a certificate of participation."
      
    ],
  },
  {
    id: 2,
    title: "Typing Titans: The Ultimate Keyboard Showdown",
    name: "Typing Titans",
    description:
      "Race against the clock in this thrilling typing competition! Test your speed, accuracy, and endurance to rise above the rest. Every keystroke brings you closer to victory—are you ready?",
    bigdescription:"Typing Titans is a high-intensity competition where participants must type a given passage, code, or phrase with maximum accuracy and speed. Typing Titans is the ultimate test of speed, accuracy, and endurance in the world of competitive typing. Participants will battle against time and their own reflexes to complete a series of challenging typing tasks without errors.As the rounds progress, the difficulty increases with more complex passages and shorter time limits.",  
    image: typingtitans,
    coordinators1: "Sk. Sher Ali",
    coordinators1ph: "+91 9398133176",
    coordinators2: "A. Rishitha",
    coordinators2ph: "+91 9182628263",
    entryFee: 200,
    mode: "Individual",
    prizeMoney: 1000,
    rules: [
        "Each participant competes individually. No team participation is allowed.",
        "All participants must register for the event in advance. Late entries will not be entertained.",
        "The competition will be conducted in a fair and transparent manner. Any kind of cheating, external assistance, or misconduct will lead to immediate disqualification.",
        "The event consists of two rounds:",
        "Round 1 (Elimination Round): Participants must type a passage of moderate difficulty within a fixed time. Those who achieve the highest accuracy and speed will qualify for Round 2.",
        "Round 2 (Final Round): The difficulty increases with more complex text and a tighter time constraint. The participant with the highest accuracy and fastest typing speed wins.",
        "Winners will be selected based on both speed (words per minute) and accuracy (error percentage). The participant with the best overall performance will be awarded prize money.",
        "All participants will receive a certificate of participation."
      
    ],
  },
  {
    id: 3,
    title: "Blind Coding: Code Without Sight, Trust Your Logic",
    description:
      "Code without output or debugging! Rely on pure logic, memory, and skills to solve complex problems. Only the fearless programmers can conquer this unseen challenge. Are you one of them?",
    bigdescription:" Blind Coding is an event where participants are challenged to write computer programs based on agiven setof specifications, without being able to see their computer screen. The focus is on the creativity, problem-solving skills, and efficient coding techniques of the participants. Breaking down barriers with every line of code, proving that vision is just a perception. Blind Coding is a unique and individual programming competition where we have to write a program for the given problemswith the participant's monitor turned off. This activity mainly tests your concentration, accuracy, programming skills",
      image:
      blindcoding,
      coordinators1: "Ch. Sree Nihaar",
      coordinators1ph:"+91 8247558584", 
      coordinators2:"M. Jyothsna",
      coordinators2ph:" +91 8179203388",
    name: "Blind Coding",
    entryFee: 200,
    mode: "Individual",
    prizeMoney: 1000,
    rules: [
        "Each participant competes individually. No team participation is allowed.",
        "All participants must register for the event in advance. Late entries will not be entertained.",
        "The competition will be conducted in a fair and transparent manner. Any kind of cheating, external assistance, or misconduct will lead to immediate disqualification.",
        "A problem statement will be given on the spot to the participants. The candidates are required to complete the program within the given time. All students who complete their tasks will move on to Round 2. Level 1 consists of easy questions, while Level 2 has moderately difficult questions. Winners are announced based on solving caliber and time taken.",
        "The winner will be awarded prize money, and other participants will receive a participation certificate."
    ]
  },
  {
    id: 4,
    title: "Present You: Showcase Your Ideas, Redefine Innovation",
    description:
      "Pitch groundbreaking ideas with clarity and innovation! Impress judges through impactful presentations and redefine perspectives. It’s your stage to shine as a thought leader and leave your creative mark.",
    bigdescription:"",
      image:presentyou, 
      coordinators1: "N. Manmadha Kumar",
      coordinators1ph:"+91 6309698129", 
      coordinators2:"B. Tejaswini",
      coordinators2ph:" +91 7288026026",
    name: "Present You",
    entryFee: 200,
    mode: "Individual",
    prizeMoney: 1000,
    rules: [
        "Each participant competes individually. No team participation is allowed.",
        "All participants must register for the event in advance. Late entries will not be entertained.",
        "The competition will be conducted in a fair and transparent manner. Any kind of cheating, external assistance, or misconduct will lead to immediate disqualification.",
        "A problem statement will be given on the spot to the participants. The candidates are required to complete the program within the time limit. All students who complete their tasks will move on to round 2. Level 1 consists of easy questions, while Level 2 consists of moderate questions. Winners will be announced based on problem-solving caliber and time efficiency.",
        "The winner will be awarded prize money, and other participants will receive a certificate of participation."
    ]
  },
  {
    id: 5,
    title: "Open Mic: The PowerPoint Edition",
    description:
      "Blend storytelling and visuals in this presentation showdown! Inform, entertain, or inspire with engaging PowerPoint topics. Captivate the audience and showcase your creativity in this exciting event.",
    bigdescription:`
     Tech Talks event is an exciting platform for students and tech enthusiasts to share their
 thoughts, experiences, and insights on emerging technologies in an informal yet impactful setting.
 Unlike traditional presentations, this event allows participants to speak freely, express opinions,
 and engage withtheaudience in a more interactive and conversational manner.
 This event is perfect for those who are passionate about technology, innovation, and the future
 of digital transformation. Whether it's discussing the latest trends in AI, cybersecurity challenges,
 the ethical dilemmas of big data, or the future of space exploration, Open Mic: Tech Talks
 encourages participants to voice their perspectives, spark discussions, and inspire new ideas.
 Participants can share personal experiences, expert opinions, or even futuristic ideas on
 technology-related topics. The event is designed to be engaging, encouraging audience interaction,
 questions, and debates. It's not just about delivering information—it's about starting conversations
 that matter in the tech world.
    `,  
    image:openmic,
      coordinators1: "Y. Sai Charan",
      coordinators1ph:"+91 8309212307", 
      coordinators2:"B. Kavya",
      coordinators2ph:" +91 8142735459",
    name: "Open Mic",
    entryFee: 200,
    mode: "Individual",
    prizeMoney: 1000,
    rules: [
        "Each participant competes individually. No team participation is allowed.",
        "Topics can be chosen by the participants only.",
        "Each participant will have 7-10 minutes to present.",
        "There is no mandatory format; participants may choose to speak, present slides, or conduct live demonstrations.",
        "Ensure your presentation is engaging, thought-provoking, and original. Plagiarism is strictly prohibited.",
        "The decision of the judges is final.",
        "The winners will be awarded prize money, and all participants will receive a certificate of participation to honor their hard work and dedication."
      
    ]
  },
  {
    id: 6,
    title: "Beat the Bug: Debugging Showdown",
    description:
      "Hunt down errors and fix them fast in this debugging challenge. Test your precision, agility, and problem-solving skills as you race against time to emerge as the ultimate bug slayer!",
    bigdescription:`
     Coding is not just about writing programs; it’s also about finding and fixing errors efficiently.
 Beat the Bugis a thrilling team-based coding competition designed to test participants' debugging
 skills, logical thinking, and ability to work under pressure. Participants will work in teams of 2 or 3
 memberstoidentify and correct errors in a given set of buggy programs withina limited timeframe.
 This competition isn’t just about finding syntax errors—it’s about understanding logic flaws,
 optimizing code, and thinking like an expert troubleshooter. The challenge will push participants to
 quickly analyze faulty programs, identify the mistakes, and fix them before time runs out. The event
 encourages teamwork, concentration, and problem-solving skills, making it a must-attend for
 coding enthusiasts who love debugging
    `,  
    image:beatthebug,
    coordinators1: "D. Harsha Vardhan",
    coordinators1ph:"+91 9676088920", 
    coordinators2:"D. Sri Hasa",
    coordinators2ph:" +91 7671834633",
    name: "Beat the Bug",
    entryFee: 200,
    mode: "Individual",
    prizeMoney: 1000,
    rules : [
      "Each team must consist of 2 or 3 members. No individual participation is allowed.",
      "Participants must register in advance to secure their spot in the competition.",
      "The event will be conducted in a fair, transparent, and ethical manner. Any form of cheating, external assistance, or misconduct will lead to immediate disqualification.",
      "The event consists of two rounds, each increasing in difficulty.",
      "Round 1: Teams will be given simple buggy programs containing syntax and logical errors. Participants must debug the code and produce the correct output within the given time. Teams that successfully complete this round will advance to the next stage.",
      "Round 2: The complexity increases with more intricate logical errors, hidden bugs, and tricky issues to resolve. Teams must use their analytical and debugging skills to correct the errors and optimize the code.",
      "Teams will be judged based on accuracy, efficiency, and time taken to fix the errors. The team that successfully debugs the most programs in the shortest time will be declared the winner.",
      "The winning team will be awarded prize money, while all other participants will receive a certificate of participation."
    ]
    
  },
  {
    id: 7,
    title: "Cryptic Hunt: Decode, Discover, Dominate",
    description:
      "Crack cryptographic puzzles and unravel hidden clues! This mind-bending challenge tests your logic and problem-solving skills. The hunt is on—are you ready to unlock victory?",
    bigdescription:`
       Cryptic Hunt is an exciting, team-based event that blends puzzle-solving, cryptography, and logical
 reasoning to create an unforgettable experience. Teams of 2 or 3 members will dive into a series of
 cryptic clues and encrypted messages, working together to decode, solve, and uncover the mysteries
 hidden within.<br>
 This event takes participants on a mental treasure hunt where every puzzle solved brings them
 closer to the ultimate prize. As the challenges grow tougher, teams will need to think critically,
 collaborate effectively, and work under pressure to emerge victorious. Cryptic Hunt is a race against
 time to crack codes, uncover hidden patterns, and apply problem-solving skills to navigate through
 multiple layers of complex puzzles.<br>
 With eachround,the stakes get higher, and only the most resourceful and sharp-minded teams will
 succeed. If you have a passion for cracking ciphers, decoding clues, and uncovering hidden patterns,
 then Cryptic Hunt is your chance to put your skills to the ultimate test.
    `,  
    image:cryptichunt,
    coordinators1: "S. Shankar",
      coordinators1ph:"+91 8142809837", 
      coordinators2:"J. Sudha",
      coordinators2ph:" +91 6303757127",
      name: "Cryptic Hunt",
      entryFee: 200,
      mode: "Individual",
      prizeMoney: 1000,
      rules: [
          "Each team must consist of 2 or 3 members. No individual participation is allowed.",
          "Participants must register in advance to secure their spot in the competition.",
          "The event will be conducted in a fair, transparent, and ethical manner. Any form of cheating, external assistance, or misconduct will lead to immediate disqualification.",
          "The event is divided into two challenging rounds, each progressively more difficult than the last.",
          "Round 1: Teams will be given simple cryptic puzzles and encoded messages to crack. This round will test participants on their ability to recognize patterns, decode basic ciphers, and solve riddles quickly. Teams that successfully complete this round will move on to the next stage.",
          "Round 2: The puzzles in this round will be much more intricate and require advanced cryptographic skills, lateral thinking, and multi-step problem-solving. Expect challenges involving complex ciphers, hidden messages, and puzzles that require creative solutions and teamwork. Teams will have to dig deep into their problem-solving toolkit to navigate through this round.",
          "Teams will be judged based on their speed, accuracy, and problem-solving approach. The team that cracks all the clues first, or the one that progresses the furthest in the given time, will be crowned the winner.",
          "The winning team will be awarded prize money, and all participants will receive a certificate of participation to honor their hard work and dedication."
        ]
        
  },
];

const TechnicalEvents = ({ onSelectEvent }) => {
  return (
    <div className={styles.container}>
    <div className={styles.background}></div>

    <div className={styles.contentContainer}>
      <h1 className={styles.mainTitle} data-aos="fade-down">
        Technical Events
      </h1>

      <div className={styles.eventsGrid}>
        {eventsData.map((event) => (
          <div
            className={styles.eventCard}
            key={event.id}
            data-aos="zoom-in"
          >
            <div className={styles.cardVisual}>
              <img
                src={event.image}
                alt={event.title}
                className={styles.eventImage}
              />
            </div>

            <div className={styles.cardContent}>
              <h2 className={styles.eventTitle}>{event.title}</h2>
              <p className={styles.eventDescription}>{event.description}</p>
              <button className={styles.detailsButton} onClick={() =>{ onSelectEvent(event.name);}}>
                  Explore More....
                </button>
              <div className={styles.detailsSection}>
                {
                  event.title === "Beat the Bug: Debugging Showdown" || event.title === "Cryptic Hunt: Decode, Discover, Dominate" || event.title === "Technoquest: Ignite Your Tech-Savvy Spirit" ?(
                  <>
                  <div className={styles.coordinators}>
                  <h3>Coordinators</h3>
                  <p>
                    <span className={styles.name}>{event.coordinators1}</span>
                    <span className={styles.phone}>{event.coordinators1ph}</span>
                  </p>
                  <p>
                    <span className={styles.name}>{event.coordinators2}</span>
                    <span className={styles.phone}>{event.coordinators2ph}</span>
                  </p>
                  <h3>TEAM EVENT</h3>
                </div>
                  <div className={styles.pricing}>
                  <h3>Participation Fee</h3>
                  <p className={styles.fee}>₹300</p>
                </div>
                </>
                  ) :(
                  <>
                  <div className={styles.coordinators}>
                  <h3>Coordinators</h3>
                  <p>
                    <span className={styles.name}>{event.coordinators1}</span>
                    <span className={styles.phone}>{event.coordinators1ph}</span>
                  </p>
                  <p>
                    <span className={styles.name}>{event.coordinators2}</span>
                    <span className={styles.phone}>{event.coordinators2ph}</span>
                  </p>
                </div>
                  <div className={styles.pricing}>
                  <h3>Participation Fee</h3>
                  <p className={styles.fee}>₹200</p>
                </div>
                </>
                )
              }
              </div>

              <Link
                to={`/Registration?event=${event.title}`}
                className={styles.button}
              >
                Register Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

  const EventDetails = ({ selectedEvent }) => {
    const event = eventsData.find((e) => e.name === selectedEvent);
    const eventDetailsRef=useRef(null);
    useEffect(() => {
      if (eventDetailsRef.current) {
        eventDetailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, [selectedEvent]);
    if (!event) return <p>Select an event to see details.</p>;
  
    return (
      <div ref={eventDetailsRef} className={styles.eventbackground}>
        <div  >

      <div className="m-5" >
        
          <div
            key={event.id}
            data-aos="zoom-in"
          >
           
            <div >
              <h2 className={styles.eventTitle}>{event.title}</h2>
              {event.bigdescription.split("<br>").map((line, index) => (
              <p key={index} className={styles.eventDescription}>{line}</p>
              ))}

              <h6 className={styles.eventTitle}>Rules & Regulations</h6>
              <ol className="list-disc pl-5 text-white">
        {event.rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ol>
      <h6 className={styles.eventTitle}>Prize Money : {event.prizeMoney}</h6>

              <div >
                {
                  event.title === "Beat the Bug: Debugging Showdown" || event.title === "Cryptic Hunt: Decode, Discover, Dominate" || event.title === "Technoquest: Ignite Your Tech-Savvy Spirit" ?(
                  <>
                 
                 <div
  className={styles.pricing}
  style={{
    width: "280px",
    margin: "10px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <h3 style={{ margin: 0 }}>Participation Fee</h3>
  <p className={styles.fee} style={{ margin: 0 }}>₹300</p>
</div>

                </>
                  ) :(
                  <>
                 <div
  className={styles.pricing}
  style={{
    width: "280px",
    margin: "10px auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <h3 style={{ margin: 0 }}>Participation Fee</h3>
  <p className={styles.fee}   >₹300</p>

                </div>
                </>
                )
              }
              </div>

              <Link
  to={`/Registration?event=${event.title}`}
  className={styles.button}
  style={{ width: "150px", display: "block", margin: "5px auto", textAlign: "center" }}
>
  Register Now
</Link>
            </div>
          </div>
        
      </div>
    </div>
      </div>
    );
  };
  

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <TechnicalEvents onSelectEvent={setSelectedEvent} />
      {selectedEvent && <EventDetails selectedEvent={selectedEvent} />}
    </>
  );
}
