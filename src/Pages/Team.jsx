import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Team.module.css";
import hod from "../assets/hodsir.jpg";
import fc1 from "../assets/chandusir.jpg";
import fc2 from "../assets/surekhamam.jpg";
import sco1 from "../assets/sco1.jpeg";
import sco2 from "../assets/sco2.jpg";
import sco3 from "../assets/sco3.jpg";
import sco4 from "../assets/sco4.jpg";
import sco5 from "../assets/sco5.jpg";
import sco6 from "../assets/sco6.jpg";

function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  const faculty = [
    { name: "Dr.Chandra Sekhar", designation: "Assistant Professor", img: fc1 },
    { name: "Dr. S. Surekha", designation: "Assistant Professor", img: fc2 },
  ];

  const coordinators = [
    { name: "D. V. Bhargava Reddy", contact: "8317504292", img: sco1 },
    { name: "B. Likhith Nayak", contact: "7569801239", img: sco2 },
    { name: "T. Vivek", contact: "7799002247", img: sco3 },
    { name: "S. Manjunadh", contact: "8143224017", img: sco4 },
    { name: "B. Navaneetha", contact: "7989425914", img: sco5 },
    { name: "K. Satya Eswari", contact: "7013690151", img: sco6 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>

      <div className={styles.teamContainer}>
        {/* Convenor Section */}
        <section className={styles.sectionWrapper} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Convenor</h2>
          <div className={styles.convenorProfile}>
            <div className={styles.convenorImageWrapper}>
              <img src={hod} alt="Dr. N. Ramakrishnaiah" className={styles.convenorImage} />
              <div className={styles.imageGlow}></div>
            </div>
            <div className={styles.convenorInfo}>
              <h3 className={styles.convenorName}>Dr. N. Ramakrishnaiah</h3>
              <p className={styles.convenorRole}>Professor & Head of the Department</p>
            </div>
          </div>
        </section>

        {/* Faculty Coordinators */}
        <section className={styles.sectionWrapper} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Faculty Coordinators</h2>
          <div className={styles.facultyGrid}>
            {faculty.map((member, index) => (
              <div key={index} className={styles.facultyMember}>
                <div className={styles.memberImageContainer}>
                  <img src={member.img} alt={member.name} className={styles.memberImage} />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.memberDetails}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberDesignation}>{member.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Coordinators */}
        <section className={styles.sectionWrapper} data-aos="fade-up">
          <h2 className={styles.sectionTitle}>Student Coordinators</h2>
          <div className={styles.coordinatorsGrid}>
            {coordinators.map((member, index) => (
              <div key={index} className={styles.coordinatorCard}>
                <div className={styles.coordinatorImageWrapper}>
                  <img src={member.img} alt={member.name} className={styles.coordinatorImage} />
                  <div className={styles.imageGlow}></div>
                </div>
                <div className={styles.coordinatorInfo}>
                  <h3 className={styles.coordinatorName}>{member.name}</h3>
                  <a className={styles.coordinatorContact} href={`tel:+91${member.contact}`}>+91 {member.contact} </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Team;