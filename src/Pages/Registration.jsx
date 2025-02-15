import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "../CSS/Registration.css";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_No: "",
    roll_Number: "",
    college_Name: "",
    college_Place: "",
    referred_By: "",
    transaction_Id: "",
    event: "NEW REGISTRATION",
    price: "200",
  });
  
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
    "NEW REGISTRATION": QrCode200,
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
    "NEW REGISTRATION": "200",
  };

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);

  // Get URL parameters for event and the 'from' flag (if coming from login)
  const urlParams = new URLSearchParams(location.search);
  const eventFromUrl = urlParams.get("event");
  const price = eventPriceMap[eventFromUrl] || "200";
  const fromLogin = urlParams.get("from") === "login";

  // Adjust layout on window resize
  useEffect(() => { 
    const handleResize = () => {
      // You may add additional layout adjustments here
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if the user is logged in.
  // If not logged in and not coming from login (i.e. new registration flow), redirect to login.
  useEffect(() => {
    const checkAuth = () => {
      const user = localStorage.getItem("user");
      if (!user && !fromLogin) {
        navigate("/login?redirect=registration");
      }
      setIsLoggedIn(!!user);
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, [navigate, fromLogin]);

  // Retrieve user data from localStorage (if available)
  let userDetails = {};
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedData = JSON.parse(userData);
      if (parsedData) {
        userDetails = Object.values(parsedData);
      }
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
  }
    
  // Update form data with event and user details
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      name: userDetails[0] || "",
      email: userDetails[1] || "",
      contact_No: userDetails[2] || "",
      roll_Number: userDetails[4] || "",
      college_Name: userDetails[3] || "",
      college_Place: userDetails[5] || "",
      event: eventFromUrl || "NEW REGISTRATION",
      price: price,
    }));
  }, []);

  // Validate form with keys matching our formData state
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.contact_No || !/^[0-9]{10}$/.test(formData.contact_No)) {
      newErrors.contact_No = "Contact number must be 10 digits.";
    }
    if (!formData.roll_Number) newErrors.roll_Number = "Roll number is required.";
    if (!formData.college_Name) newErrors.college_Name = "College name is required.";
    if (!formData.transaction_Id) newErrors.transaction_Id = "Transaction ID is required.";
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

  // Handle file input changes and create a preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 2048 * 2048) {
      alert("File size should be less than 4MB");
      return;
    }
    setFormData(prevData => ({
      ...prevData,
      paymentReceipt: file,
    }));
    if (file && (file.type.startsWith("image/") || file.type === "application/pdf")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "paymentReceipt" && value) {
          formDataToSend.append(key, value, value.name);
        } else if (value !== null && value !== undefined) {
          formDataToSend.append(key, value);
        }
      });

      const response = await fetch("https://zeitgeistjntukcse.com/Zeitgeist/register.php", {
        method: "POST",
        body: formDataToSend,
      });

      const textResponse = await response.text();
      let result;
      try {
        result = JSON.parse(textResponse);
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      if (result.status === "success") {
        alert( `${result.message}`);
        navigate("/");
      } else {
        throw new Error(result.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert(`Error: ${error.message}`);
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
      event: "NEW REGISTRATION",
      price: "200",
    });
    setErrors({});
    setPreview(null);
  };

  return (
    <div className="registration-container background">
      {(!isLoggedIn && !fromLogin) ? (
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
                    <p>3. For confirmation or any queries contact: 8317504292</p>
                  </div>
                </div>
              </div>
            )}
            <form className="registration-form" onSubmit={handleSubmit}>
              {Object.keys(formData).map(
                (key) =>
                  key !== "paymentReceipt" &&
                  key !== "event" &&
                  key !== "price" ? (
                    <div className="form-group" key={key}>
                      <input
                        className={`${errors[key] ? "error" : ""}`}
                        placeholder={key.toUpperCase().replace(/_/g, " ")}
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                      />
                      {errors[key] && (
                        <p className="error-text text-danger">{errors[key]}</p>
                      )}
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
                        name="payment_Receipt"
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                        required
                      />
                    </label>
                  </div>
                  {preview && (
                    <div className="file-preview">
                      <h4>Preview:</h4>
                      <a href={preview} target="_blank" rel="noopener noreferrer">
                        {formData.paymentReceipt &&
                        formData.paymentReceipt.type.startsWith("image/") ? (
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