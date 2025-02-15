import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    // Retrieve user from localStorage; if not found, redirect to login.
    const userData = localStorage.getItem("user");
    
    if (!userData) {
      navigate("/login?redirect=profile");
    } else {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      // Use user's email to fetch their registrations from the backend
      fetch(
        `https://zeitgeistjntukcse.com/Zeitgeist/getRegistrations.php?email=${encodeURIComponent(
          parsedUser.email
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setRegistrations(data.registrations);
            
          } else {
            setRegistrations([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching registrations:", error);
          setRegistrations([]);
        });
    }
  }, [navigate]);

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className={styles.profileContainer} >
      <header className={styles.profileHeader}>
        <h1>Profile</h1>
      </header>
      <div className={styles.profileContent}>
      <section className={styles.profileDetails} data-aos="fade-up">
        <h2>User Details</h2>
        <ul>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Contact No:</strong> {user.contact_no}
          </li>
          <li>
            <strong>College Name:</strong> {user.college_name}
          </li>
          {/* Add more details as needed */}
        </ul>
      </section>
      <section className={styles.registrationList} data-aos="fade-up">
        <h2>Registered Events</h2>
        {registrations.length > 0 ? (
          <ul>
            {registrations.map((reg) => (
              <li key={reg.id}>
                <strong>{reg.event}</strong> - ₹{reg.price}{" "}
                <span>| Transaction ID: {reg.transaction_id}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No registrations found.</p>
        )}
      </section>
      </div>
    </div>
  );
};

export default Profile;
