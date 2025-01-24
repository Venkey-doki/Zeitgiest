import React from 'react';
import styles from './Team.module.css'; // Import the CSS Module

const coordinators = [
  { name: "D. Bhargav", contact: "8317504000" },
  { name: "S. Manjunadh", contact: "8143224017" },
  { name: "K. Prasanna", contact: "9392454000" },
  { name: "T. Vivek", contact: "7799002000" },
  { name: "B. Likhith", contact: "7569801239" },
  { name: "B.Navaneetha", contact: "7989425914" },
  // Add more coordinators if needed
];

function Team() {
  return (
    <div id='Team' className={styles.teamContainer}>
      <div className={styles.bg}>
        <h1>ZEITGIEST'25</h1>
      </div>
      <div className={styles.nftGrid}>
        {coordinators.map((coordinator, index) => (
          <div key={index} className={styles.nft}>
            <div className={styles.main}>
              <img 
                className={styles.tokenImage} 
                src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWd efHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="NFT" 
              />
              <h2>{coordinator.name}</h2>
              <p className={styles.description}>Fest Coordinator</p>
              <p className={styles.description}>Name: {coordinator.name}</p>
              <p className={styles.description}>Contact: {coordinator.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;