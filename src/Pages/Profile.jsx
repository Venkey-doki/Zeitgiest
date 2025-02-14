import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../CSS/Profile.module.css';
import userimage from "../assets/user.webp";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [registrations, setRegistrations] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    const loggedInRegistration = localStorage.getItem('registrations');

    if (!loggedInUser) {
      navigate('/login');
    } else {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
      
      // Parse and handle multiple registration records safely
      const registrationsData = loggedInRegistration ? JSON.parse(loggedInRegistration) : [];
      setRegistrations(registrationsData.length > 0 ? registrationsData[0] : null);
      
      setRefresh(true);
    }
  }, [navigate]);

  if (!user || !refresh) {
    return null;  // Ensure UI updates before rendering
  }

  return (
    <div className={`container py-5 ${styles.profileContainer}`}>
      <div className="row">
        {/* Left Column - Profile Card */}
        <div className="col-md-4 mb-4">
          <div className={`${styles.cardStyle} ${styles.cardShadow}`}>
            <div className="card-body text-center">
              <div className={styles.profilePicture}>
                <img
                  src={userimage}
                  alt="Profile"
                  className={`img-fluid rounded-circle ${styles.profileImage}`}
                />
              </div>
              <h3 className="mb-0">{user.name}</h3>
              <p className="text-muted">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Details */}
        <div className="col-md-8">
          <div className={`${styles.cardStyle} ${styles.cardShadow}`}>
            <div className="card-body">
              <h4 className={styles.sectionTitle}>
                <i className="fas fa-user-circle me-2"></i>Personal Information
              </h4>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      value={user.name}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={user.email}
                      readOnly
                      disabled
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={user.contact_no ? user.contact_no : "N/A"}
                      readOnly
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>College/Organization</label>
                    <input
                      type="text"
                      name="college"
                      className="form-control"
                      value={user ? user.college_name : "N/A"}
                      readOnly
                    />
                  </div>
                </div>
              </form>
              <hr className="my-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}