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
import QrCode4000 from "../assets/qr-4000.jpg";
import QrCode4400 from "../assets/qr-4400.jpg";

// QR code mapping remains unchanged
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
  "Cloud Computing": QrCode1200,
  "BASIC REGISTRATION": QrCode200,
};

// Configuration for event registration options
const eventOptions = {
  "GenAI": { individual: 1200, team: 4400, teamSize: 4 },
  "DevOps": { individual: 1100, team: 4000, teamSize: 4 },
  "CyberSecurity": { individual: 1100, team: 4000, teamSize: 4 },
  "Cloud Computing": { individual: 1200, team: 4400, teamSize: 4 },
  "Technoquest: Ignite Your Tech-Savvy Spirit": { teamOnly: true, price: 300, teamSize: 3 },
  "Beat the Bug: Debugging Showdown": { teamOnly: true, price: 300, teamSize: 3 },
  "Cryptic Hunt: Decode, Discover, Dominate": { teamOnly: true, price: 300, teamSize: 3 },
  "Typing Titans: The Ultimate Keyboard Showdown": { individual: 200, team: false, teamSize: 1 },
  "Blind Coding: Code Without Sight, Trust Your Logic": { individual: 200, team: false, teamSize: 1 },
  "Present You: Showcase Your Ideas, Redefine Innovation": { individual: 200, team: false, teamSize: 1 },
  "Open Mic: The PowerPoint Edition": { individual: 200, team: false, teamSize: 1 },
  "Mind Maze": { individual: 0, team: false, teamSize: 1 },
  "Code Combat": { individual: 0, team: false, teamSize: 1 },
  "Web Wizards": { individual: 0, team: false, teamSize: 1 },
  "BASIC REGISTRATION": { individual: 200, team: false, teamSize: 1 },
};

function Registration() {
  const navigate = useNavigate();
  const location = useLocation();

  // Basic form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_No: "",
    roll_Number: "",
    college_Name: "",
    college_Place: "",
    referred_By: "",
    transaction_Id: "",
    event: "BASIC REGISTRATION",
    price: "200",
    paymentReceipt: null,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);

  // New state for registration type and team member details
  const [registrationType, setRegistrationType] = useState("individual");
  const [teamMembers, setTeamMembers] = useState([]);

  // Get URL parameters for event and login source
  const urlParams = new URLSearchParams(location.search);
  const eventFromUrl = urlParams.get("event") || "BASIC REGISTRATION";
  const fromLogin = urlParams.get("from") === "login";

  // Initialize AOS and scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Check authentication and update isLoggedIn state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  // Retrieve user data from localStorage and update form fields
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        setFormData((prevData) => ({
          ...prevData,
          name: parsedData.name || "",
          email: parsedData.email || "",
          contact_No: parsedData.contact_no || "",
          roll_Number: parsedData.roll_number || "",
          college_Name: parsedData.college_name || "",
          college_Place: parsedData.college_place || "",
          event: eventFromUrl,
        }));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        event: eventFromUrl,
      }));
    }
  }, [eventFromUrl]);

  // Update price and team configuration based on the event options and registration type
  useEffect(() => {
    const options = eventOptions[eventFromUrl];
    if (options) {
      if (options.teamOnly) {
        setRegistrationType("team");
        setFormData((prev) => ({ ...prev, price: options.price.toString() }));
        setTeamMembers(Array(options.teamSize - 1).fill({ name: "", email: "", contact: "" }));
      } else if (options.individual !== undefined && options.team !== undefined && options.team !== false) {
        // Both individual and team registrations are available.
        const price = registrationType === "individual" ? options.individual : options.team;
        setFormData((prev) => ({ ...prev, price: price.toString() }));
        if (registrationType === "team" && teamMembers.length === 0) {
          setTeamMembers(Array(options.teamSize - 1).fill({ name: "", email: "", contact: "" }));
        }
      } else if (options.individual !== undefined && options.team === false) {
        // Only individual registration is allowed.
        setRegistrationType("individual");
        setFormData((prev) => ({ ...prev, price: options.individual.toString() }));
      }
    }
  }, [eventFromUrl, registrationType, teamMembers.length]);

  // Validate the form fields
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

    // Require transaction_Id and paymentReceipt only if:
    // - the user is NOT coming from login AND
    // - the event price is not "0"
    if (!fromLogin && formData.price !== "0") {
      if (!formData.transaction_Id)
        newErrors.transaction_Id = "Transaction ID is required.";
      if (!formData.paymentReceipt)
        newErrors.paymentReceipt = "Payment receipt is required.";
    }

    // For team registrations, validate each team member's details
    if (registrationType === "team") {
      teamMembers.forEach((member, index) => {
        if (!member.name) {
          newErrors[`teamMemberName_${index}`] = "Team member ${index + 2} name is required.";
        }
        if (!member.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
          newErrors[`teamMemberEmail_${index}`] = "Team member ${index + 2} valid email is required.";
        }
      });
    }
    return newErrors;
  };

    // Helper function to choose the correct QR code
  const getQrCode = () => {
    const options = eventOptions[formData.event];
    // If team registration is selected and the team price is 4000, use the 4000 QR code.
    if (registrationType === "team" && options && options.team === 4000) {
      return QrCode4000;
    }
    // If team registration is selected and the team price is 4400, use the 4400 QR code.
    if (registrationType === "team" && options && options.team === 4400) {
      return QrCode4400;
    }
    // Otherwise, use the default QR code for the event.
    return eventQrMap[formData.event];
  };


  // Handle change for standard input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input and preview creation
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 4 * 1024 * 1024) {
      alert("File size should be less than 4MB");
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      paymentReceipt: file,
    }));
    if (file && (file.type.startsWith("image/") || file.type === "application/pdf")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  // Handle team member input changes
  const [eligibleCandidates, setEligibleCandidates] = useState([]);
  useEffect(() => {
    fetch("https://zeitgeistjntukcse.com/Zeitgeist/Admin/basicfeeverification.php") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setEligibleCandidates(data.schema);
        } else {
          console.error("Error fetching candidates:", data.message);
        }
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  console.log(eligibleCandidates);
  
  const handleTeamMemberChange = (index, field, value) => {
   
    const updatedMembers = [...teamMembers];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setTeamMembers(updatedMembers);
  };
  const validateEmailEligibility = (index) => {
    const email = teamMembers[index]?.email;
    if (email) {
      const isEligible = eligibleCandidates.some(candidate => candidate.email === email);
      if (!isEligible) {
        alert("This email is not eligible for registration. either the user is not registered for basic registration or if registered wait till the login credentials are activated.");
        // Reset the email field if not eligible
        const updatedMembers = [...teamMembers];
        updatedMembers[index].email = "";
        setTeamMembers(updatedMembers);
      }
    }
  };
  
  // Submit handler using FormData
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
      // Append registration type and team members (if applicable)
      formDataToSend.append("registrationType", registrationType);
      if (registrationType === "team") {
        formDataToSend.append("teamMembers", JSON.stringify(teamMembers));
      }
      const response = await fetch("https://Zeitgeistjntukcse.com/Zeitgeist/register.php", {
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
        alert(result.message);
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

  // Reset the form fields
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
      event: "BASIC REGISTRATION",
      price: "200",
      paymentReceipt: null,
    });
    setErrors({});
    setPreview(null);
    setTeamMembers([]);
    setRegistrationType("individual");
  };

  // Helper to generate input placeholders
  const getPlaceholder = (key) => {
    const trimmedKey = key.trim();
    return trimmedKey === "transaction_Id"
      ? "UTR NUMBER OR UPI TRANSACTION ID (GPAY)"
      : trimmedKey.toUpperCase().replace(/_/g, " ");
  };

  // Get input field keys (exclude non-text inputs)
  const inputKeys = Object.keys(formData).filter(
    (key) => key !== "paymentReceipt" && key !== "event" && key !== "price"
  );

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
            <h2>{formData.event} Registration</h2>
            <div className="price-badge">₹{formData.price}</div>
          </div>
          <div className="registration-grid">
            {formData.price !== "0" && (
              <div className="payment-info">
                <div className="qr-container">
                  <h3>Scan to Pay</h3>
                  <img
                    src={getQrCode()}
                    alt="Payment QR Code"
                    className="qr-code"
                  />
                  <div className="payment-instructions">
                    <p>1. Scan QR code to make payment</p>
                    <p>2. Take screenshot of successful payment</p>
                    <p>3. Upload receipt with transaction ID</p>
                    <p>4. For confirmation or any queries contact: 8317504292</p>
                  </div>
                </div>
              </div>
            )}
            <form className="registration-form" onSubmit={handleSubmit}>
              {inputKeys.map((key) => (
                <div className="form-group" key={key}>
                  <input
                    className={errors[key] ? "error" : ""}
                    placeholder={getPlaceholder(key)}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                  />
                  {errors[key] && (
                    <p className="error-text text-danger">{errors[key]}</p>
                  )}
                </div>
              ))}

              {/* Registration type selector for events that support both options */}
              {eventOptions[formData.event] &&
                !eventOptions[formData.event].teamOnly &&
                eventOptions[formData.event].team && (
                  <div className="form-group registration-type">
                    <label>
                      <input
                        type="radio"
                        name="registrationType"
                        value="individual"
                        checked={registrationType === "individual"}
                        onChange={() => setRegistrationType("individual")}
                      />
                      Individual
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="registrationType"
                        value="team"
                        checked={registrationType === "team"}
                        onChange={() => setRegistrationType("team")}
                      />
                      Team
                    </label>
                  </div>
                )}

              {/* Render additional team member fields if team registration is selected */}
              {registrationType === "team" &&
                teamMembers.map((member, index) => (
                  <div className="form-group" key={index}>
                    <input
                      placeholder={`Team Member ${index + 2} Name`}
                      value={member.name}
                      onChange={(e) =>
                        handleTeamMemberChange(index, "name", e.target.value)
                        
                      }
                      onBlur={() => validateEmailEligibility(index)}  
                    />
                    {errors[`teamMemberName_${index}`] && (
                      <p className="error-text text-danger">
                        {errors[`teamMemberName_${index}`]}
                      </p>
                    )}
                    <input
                      placeholder={`Team Member ${index + 2} Email`}
                      value={member.email}
                      onChange={(e) =>
                        handleTeamMemberChange(index, "email", e.target.value)
                      }
                      onBlur={() => validateEmailEligibility(index)}  
                    />
                    {errors[`teamMemberEmail_${index}`] && (
                      <p className="error-text text-danger">
                        {errors[`teamMemberEmail_${index}`]}
                      </p>
                    )}
                  </div>
                ))}

              {/* Display read-only event and price fields */}
              <div className="form-group" key="event">
                <input placeholder="EVENT" name="event" value={formData.event} readOnly />
              </div>
              <div className="form-group" key="price">
                <input placeholder="PRICE" name="price" value={formData.price} readOnly />
              </div>

              {formData.price !== "0" && (
                <div className="form-section">
                  <h3>Payment Receipt</h3>
                  <div className="file-upload">
                    <label>
                      Upload Receipt
                      <input
                        type="file"
                        name="paymentReceipt"
                        onChange={handleFileChange}
                        accept="image/*,.pdf"
                      />
                    </label>
                  </div>
                  {errors.paymentReceipt && (
                    <p className="error-text text-danger">{errors.paymentReceipt}</p>
                  )}
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
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Clear
                </button>
                <button type="submit" className="submit-btn" disabled={isSubmitting}>
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