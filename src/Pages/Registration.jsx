import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS/Registration.css";
import QrCode from "../assets/QrCode.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Registration() {
     const [isDesktop, setIsDesktop] = useState(window.innerWidth > 980);
      
        useEffect(() => { 
          const handleResize = () => {
            setIsDesktop(window.innerWidth > 980);
          };
      
          window.addEventListener("resize", handleResize);
      
          return () => window.removeEventListener("resize", handleResize);
        }, []);
        
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    rollNumber: "",
    collegeName: "",
    collegePlace: "",
    referredBy: "",
    transactionId: "",
    paymentReceipt: null,
    event: "NEW REGISTRATION",
    price: "200",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const eventPriceMap = {
    "Technoquest: Ignite Your Tech-Savvy Spirit": "200",
    "Typing Titans: The Ultimate Keyboard Showdown": "200",
    "Blind Coding: Code Without Sight, Trust Your Logic": "200",
    "Present You: Showcase Your Ideas, Redefine Innovation": "200",
    "Open Mic: The PowerPoint Edition": "200",
    "Beat the Bug: Debugging Showdown": "200",
    "Cryptic Hunt: Decode, Discover, Dominate": "200",
    "Mind Maze": "0",
    "Code Combat": "0",
    "Web Wizards": "0",
    "GenAI": "1200",
    "DevOps": "1200",
    "CyberSecurity": "1100",
    "Cloud Computing": "1100",
  };

  useEffect(() => {
    // Check login status
    const isLoggedIn = localStorage.getItem("user");
    if (!isLoggedIn) {
      navigate("/registration?event=NEW REGISTRATION");
      
      return;
    }  }, [location.search, navigate]);
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a 1000ms animation duration
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, [location.pathname]);
      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
    // Get event from URL parameters
    const urlParams = new URLSearchParams(location.search);
    const eventFromUrl = urlParams.get("event");
    const price = eventPriceMap[eventFromUrl] || "200";

    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    let userDetails = {};
    // console.log(userData);
    
    
    const parsedData = JSON.parse(userData);
    // console.log(typeof(parsedData));
    
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
        contactNo: userDetails[3] || "",
        rollNumber: userDetails[4] || "",
        collegeName: userDetails[5] || "",
        collegePlace: userDetails[6] || "",
        event: eventFromUrl || "NEW REGISTRATION",
        price: price,
      }));
    }, []); // Empty dependency array ensures it runs only once
    
 // Dependencies updated to include only necessary items

  // Rest of your component remains the same
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
  };

  return (
    <>
    
    {isDesktop ? 
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>SCAN QR</span>
                <span>TO PAY</span>
              </div>
              <img src={QrCode} alt="logo" className="logo" />
              <p style={{ color: "white", marginTop: "20px" }}>
                After scanning the QR Code, please provide the transaction ID
                and upload the payment receipt.
              </p>
            </div>
            <div className="screen-body-item">
              <form className="app-form" onSubmit={handleSubmit}>
                {Object.keys(formData).map(
                  (key) =>
                    key !== "paymentReceipt" && key !== "event" && key !== "price" ? (
                      <div className="app-form-group" key={key}>
                        <input
                          className={`app-form-control ${errors[key] ? "error" : ""}`}
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
                  <div className="app-form-group" key="event">
                    <input
                      className="app-form-control"
                      placeholder="EVENT"
                      name="event"
                      value={formData.event}
                      readOnly
                    />
                  </div>
                )}
                {formData.price && (
                  <div className="app-form-group" key="price">
                    <input
                      className="app-form-control"
                      placeholder="PRICE"
                      name="price"
                      value={formData.price}
                      readOnly
                    />
                  </div>
                )}
                {formData.price !== "0" && (
                  <div className="app-form-group">
                    <input
                      type="file"
                      className="app-form-control"
                      name="paymentReceipt"
                      onChange={handleFileChange}
                    />
                    {errors.paymentReceipt && (
                      <p className="error-text text-danger">{errors.paymentReceipt}</p>
                    )}
                  </div>
                )}
                <div className="app-form-group buttons">
                  <button
                    type="reset"
                    className="app-form-button"
                    onClick={handleCancel}
                    disabled={isSubmitting}
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="app-form-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
    <div className="background">
    <div className="container">
      <div className="screen">
        <div className="screen-body">
          <div className="screen-body-item">
            <form className="app-form" onSubmit={handleSubmit}>
              {Object.keys(formData).map(
                (key) =>
                  key !== "paymentReceipt" && key !== "event" && key !== "price" ? (
                    <div className="app-form-group" key={key}>
                      <input
                        className={`app-form-control ${errors[key] ? "error" : ""}`}
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
                <div className="app-form-group" key="event">
                  <input
                    className="app-form-control"
                    placeholder="EVENT"
                    name="event"
                    value={formData.event}
                    readOnly
                  />
                </div>
              )}
                <div className="screen-body-item left">
            <div className="app-title flex">
              <span>SCAN QR TO PAY</span>
            
            </div>
            <img src={QrCode} alt="logo" className="logo" style={{margin:"0 auto",width: "200px" }} />

            <p style={{ color: "white", marginTop: "20px" }}>
              After scanning the QR Code, please provide the transaction ID
              and upload the payment receipt.
            </p>
          </div>
              {formData.price && (
                <div className="app-form-group" key="price">
                  <input
                    className="app-form-control"
                    placeholder="PRICE"
                    name="price"
                    value={formData.price}
                    readOnly
                  />
                </div>
              )}
              {formData.price !== "0" && (
                <div className="app-form-group">
                  <input
                    type="file"
                    className="app-form-control"
                    name="paymentReceipt"
                    onChange={handleFileChange}
                  />
                  {errors.paymentReceipt && (
                    <p className="error-text">{errors.paymentReceipt}</p>
                  )}
                </div>
              )}
              <div className="app-form-group buttons">
                <button
                  type="button"
                  className="app-form-button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="app-form-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    }
    </>
  );
}

export default Registration;