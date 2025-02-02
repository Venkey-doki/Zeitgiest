import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../CSS/Profile.module.css';
import userimage from "../assets/user.webp";
export default function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    college: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      navigate('/login');
    } else {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
      setFormData({
        fullname: userData.fullname,
        email: userData.email,
        phone: userData.phone || '',
        college: userData.college || ''
      });
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  if (!user) return null;

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
                {editMode && (
                  <button className="btn btn-sm btn-secondary mt-2">
                    <i className="fas fa-camera me-2"></i>Change Photo
                  </button>
                )}
              </div>
              <h3 className="mb-0">{user.fullname}</h3>
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
              
              <form >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      value={formData.fullname}
                  
                      required
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
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
                      value={formData.phone}
                      readOnly
                    />
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>College/Organization</label>
                    <input
                      type="text"
                      name="college"
                      className="form-control"
                      value={formData.college}
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