import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS/Registration.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import different QR codes
import QrCode200 from "../assets/qr-200.jpg";
import QrCode300 from "../assets/qr-300.jpg";
import QrCode1100 from "../assets/qr-1100.jpg";
import QrCode1200 from "../assets/qr-1200.jpg";

function Registration() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_No: "",
    roll_Number: "",
    college_Name: "",
    college_Place: "",
    referred_By: "",
    transaction_Id: "",
    payment_Receipt: null,
    event: "NEW REGISTRATION",
    price: "200",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // New state for file preview
  const [preview, setPreview] = useState(null);

  const eventQrMap = {
    "Technoquest: Ignite Your Tech-Savvy Spirit": QrCode300,
    "Typing Titans: The Ultimate Keyboard Showdown": QrCode200,
    "Blind Coding: Code Without Sight, Trust Your Logic": QrCode200,
    "Present You: Showcase Your Ideas, Redefine Innovation": QrCode200,
    "Open Mic: The PowerPoint Edition": QrCode200,
    "Beat the Bug: Debugging Showdown": QrCode300,
    "Cryptic Hunt: Decode, Discover, Dominate": QrCode300,
    "Mind Maze": null,
    "Code Combat": null,
    "Web Wizards": null,
    "GenAI": QrCode1200,
    "DevOps": QrCode1200,
    "CyberSecurity": QrCode1100,
    "Cloud Computing": QrCode1100,
  };

  const eventPriceMap = { 
    "Technoquest: Ignite Your Tech-Savvy Spirit": "300",
    "Typing Titans: The Ultimate Keyboard Showdown": "200",
    "Blind Coding: Code Without Sight, Trust Your Logic": "200",
    "Present You: Showcase Your Ideas, Redefine Innovation": "200",
    "Open Mic: The PowerPoint Edition": "200",
    "Beat the Bug: Debugging Showdown": "300",
    "Cryptic Hunt: Decode, Discover, Dominate": "300",
    "Mind Maze": "0",
    "Code Combat": "0",
    "Web Wizards": "0",
    "GenAI": "1200",
    "DevOps": "1200",
    "CyberSecurity": "1100",
    "Cloud Computing": "1100",
  };

  useEffect(() => { 
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 980);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      setIsLoggedIn(!!user);
      if (!user) {
        navigate("/login?redirect=registration");
      }
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, [navigate]);

  // Get event from URL parameters
  const urlParams = new URLSearchParams(location.search);
  const eventFromUrl = urlParams.get("event");
  const price = eventPriceMap[eventFromUrl] || "200";

  // Get user data from localStorage
  const userData = localStorage.getItem("user");
  let userDetails = {};
  const parsedData = JSON.parse(userData);
  if (userData) {
    try {
      if (parsedData) {
        userDetails = Object.values(parsedData);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }
    
  // Update form data with both event and user details
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      name: userDetails[1] || "",
      email: userDetails[2] || "",
      contact_No: userDetails[3] || "",
      roll_Number: userDetails[4] || "",
      college_Name: userDetails[5] || "",
      college_Place: userDetails[6] || "",
      event: eventFromUrl || "NEW REGISTRATION",
      price: price,
    }));
  }, []); // Empty dependency array ensures it runs only once

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.contactNo || !/^[0-9]{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Contact number must be 10 digits.";
    }
    if (!formData.rollNumber) newErrors.rollNumber = "Roll number is required.";
    if (!formData.collegeName) newErrors.collegeName = "College name is required.";
    if (!formData.transactionId) newErrors.transactionId = "Transaction ID is required.";
    if (formData.price !== "0" && !formData.paymentReceipt) {
      newErrors.paymentReceipt = "Payment receipt is required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Updated file change handler to include preview option
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB");
      return;
    }
    setFormData(prevData => ({
      ...prevData,
      paymentReceipt: file,
    }));
    // Accept both images and PDFs
    if (file && (file.type.startsWith("image/") || file.type === "application/pdf")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "paymentReceipt" && formData[key]) {
        formDataToSend.append(key, formData[key], formData[key].name);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await fetch("https://zeitgeistjntukcse.com/Zeitgeist/register.php", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.status === "success") {
        alert(`Registration successful! Your User ID: ${result.userId}`);
        navigate(`/`);
      } else {
        alert("Registration failed: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      contact_No: "",
      roll_Number: "",
      college_Name: "",
      college_Place: "",
      referred_By: "",
      transaction_Id: "",
      payment_Receipt: null,
      event: "NEW REGISTRATION",
      price: "200",
    });
    setErrors({});
    setPreview(null);
  };

  return (
    <div className="registration-container background">
      {!isLoggedIn ? (
        <div className="auth-warning">
          <h2>Authentication Required</h2>
          <p>Please login to access registration</p>
          <Link to="/login" className="auth-button">
            Go to Login
          </Link>
        </div>
      ) : (
        <div className="registration-card">
          <div className="registration-header">
            <h2>Event Registration</h2>
            <div className="price-badge">₹{formData.price}</div>
          </div>
          

          <div className="registration-grid">
          {formData.price !== "0" && (
              <div className="payment-info">
                <div className="qr-container">
                  <h3>Scan to Pay</h3>
                  <img
                    src={eventQrMap[formData.event]}
                    alt="Payment QR Code"
                    className="qr-code"
                  />
                  <div className="payment-instructions">
                    <p>1. Scan QR code to make payment</p>
                    <p>2. Take screenshot of successful payment</p>
                    <p>3. Upload receipt with transaction ID</p>
                  </div>
                </div>
              </div>
            )}
            <form className="registration-form" onSubmit={handleSubmit}>
              {Object.keys(formData).map(
                (key) =>
                  key !== "paymentReceipt" && key !== "event" && key !== "price" ? (
                    <div className="form-group" key={key}>
                      <input
                        className={` ${errors[key] ? "error" : ""}`}
                        placeholder={key.toUpperCase().replace(/_/g, " ")}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                      {errors[key] && <p className="error-text text-danger">{errors[key]}</p>}
                    </div>
                  ) : null
              )}
              {formData.event && (
                <div className="form-group" key="event">
                  <input
                    placeholder="EVENT"
                    name="event"
                    value={formData.event}
                    readOnly
                  />
                </div>
              )}
              {formData.price && (
                <div className="form-group" key="price">
                  <input
                    placeholder="PRICE"
                    name="price"
                    value={formData.price}
                    readOnly
                  />
                </div>
              )}

              {formData.price !== "0" && (
                <div className="form-section">
                  <h3>Payment Receipt</h3>
                  <div className="file-upload">
                    <label>
                      Upload Receipt
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                        required
                      />
                    </label>
                  </div>
                  {/* Preview for image files */}
                  {preview && (
                      <div className="file-preview">
                        <h4>Preview:</h4>
                        <a href={preview} target="_blank" rel="noopener noreferrer">
                          {formData.paymentReceipt.type.startsWith("image/") ? (
                            <img
                              src={preview}
                              alt="Payment Receipt Preview"
                              className="preview-image"
                            />
                          ) : (
                            <div className="preview-pdf-button">
                              <p>Click here to preview PDF</p>
                            </div>
                          )}
                        </a>
                      </div>
                    )}

                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={handleCancel}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Complete Registration"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;
