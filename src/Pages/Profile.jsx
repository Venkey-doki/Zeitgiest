import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../CSS/Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [registrations, setRegistrations] = useState([]);
  const [loadingRegistrations, setLoadingRegistrations] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo(0, 0);

    // Retrieve user from localStorage; if not found, redirect to login.
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        navigate("/login?redirect=profile");
      } else {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);

        // Fetch registrations using async/await for better readability.
        const fetchRegistrations = async () => {
          try {
            const response = await fetch(
              `https://zeitgeistjntukcse.com/Zeitgeist/getRegistrations.php?email=${encodeURIComponent(
                parsedUser.email
              )}`
            );
            const data = await response.json();
            if (data.status === "success") {
              setRegistrations(data.registrations);
            } else {
              setRegistrations([]);
              setFetchError("No registrations found.");
            }
          } catch (error) {
            console.error("Error fetching registrations:", error);
            setRegistrations([]);
            setFetchError("Failed to fetch registrations. Please try again later.");
          } finally {
            setLoadingRegistrations(false);
          }
        };

        fetchRegistrations();
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      navigate("/login?redirect=profile");
    }
  }, [navigate]);

  // If user data is not yet loaded, you can display a loading indicator.
  if (!user) {
    return <div className={styles.loading}>Loading user details...</div>;
  }

  return (
    <div className={styles.profileContainer}>
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
          {loadingRegistrations ? (
            <p>Loading registrations...</p>
          ) : registrations.length > 0 ? (
            <ul>
              {registrations.map((reg) => (
                <li key={reg.id}>
                  <strong>{reg.event}</strong> - ₹{reg.price}{" "}
                  <span>| Transaction ID: {reg.transaction_id}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>{fetchError || "No registrations found."}</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;
