import {React,useEffect} from 'react';
import styles from '../CSS/Team.module.css'; // Import the CSS Module
import hod from "../assets/hodsir.jpg"
import fc1 from "../assets/chandusir.jpg"
import fc2 from "../assets/surekhamam.jpg"
import sco1 from "../assets/sco4.jpg"
import sco2 from "../assets/sco4.jpg"
import sco3 from "../assets/sco3.jpg"
import sco4 from "../assets/sco4.jpg"
import sco5 from "../assets/sco5.jpg"
import sco6 from "../assets/sco6.jpg"
import AOS from 'aos';
import "aos/dist/aos.css"; // Import AOS styles
const faculty = [
  { name: "Dr.N Ramakrishnaiah", qualification: "Ph.D.", designation: "Professor" ,img:hod, },
  { name: "Dr.Chandra Sekhar", qualification: "M.Sc", designation: "Assistant Professor",img:fc1, },
  { name: "Dr. S. Surekha", qualification: "Ph.D", designation: "Associate Professor" ,img:fc2,},
  // Add more coordinators if needed
];

const coordinators = [
  { name: "D.V.Bhargav Reddy", contact: "8317504292"  ,img:sco1,},
  { name: "T.Vivek", contact: "7799002247" ,img:sco2, },
  { name: "B.Likith Nayak", contact: "7569801239"  ,img:sco3,},
  { name: "S. Manjunadh", contact: "8143224017"  ,img:sco4,},
  { name: "B. Navaneetha", contact: "7989425914"  ,img:sco5,},
  { name: "K. Satya Eswari", contact: "701690151"  ,img:sco6,},
  // Add more coordinators if needed
];

function Team() {
    useEffect(() => {
      AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, [location.pathname]);
      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div id="Team" className={styles.teamContainer}>
      <div className={styles.bg}>
        <h1>ZEITGEIST'25</h1>
      </div>

      {/* Faculty Coordinators Section */}
      <h2 className={styles.sectionHeading}>Faculty Coordinators</h2>
      <div className={styles.nftGrid}>
        {faculty.map((coordinator, index) => (
          <div key={index} className={styles.nft}>
            <div className={styles.main}>
              <img className={styles.tokenImage} src={coordinator.img} alt="Faculty Coordinator" />
              <h2 className={styles.name}>{coordinator.name}</h2>
              <p className={styles.description}>Qualification: {coordinator.qualification}</p>
              <p className={styles.description}>Designation: {coordinator.designation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Student Coordinators Section */}
      <h2 className={styles.sectionHeading}>Student Coordinators</h2>
      <div className={styles.nftGrid}>
        {coordinators.map((coordinator, index) => (
          <div key={index} className={styles.nft}>
            <div className={styles.main}>
              <img className={styles.tokenImage} src={coordinator.img} alt="Student Coordinator" />
              <h2 className={styles.name}>{coordinator.name}</h2>
            
              <p className={styles.description} tel={coordinator.contact}>Contact: {coordinator.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
