import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/Header.css";
import logo from "../assets/logo.jpg";

export default function Header() {
  const [user, setUser] = useState(null); // Store logged-in user
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle for profile dropdown
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Check if user data exists in localStorage (if the user is logged in)
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser)); // Set user state if logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setUser(null); // Clear user state
    setIsMenuOpen(false); // Close the dropdown menu
    navigate("/"); // Redirect to the login page
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle profile dropdown visibility
  };

  const isAdmin = user?.role === "admin"; // Check if the logged-in user is an admin

  return (
    <div className="container mb-2 rounded align-items-center">
      <nav className="navbar navbar-expand-lg header container-fluid fixed-top bg-dark">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img src={logo} height={70} width={70} alt="Logo" />
            <h3 className="navbar-brand mt-2 ms-2 ">Zeitgeist'25</h3>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Zeitgeist
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {/* Regular Menu Items */}
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="eventsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Events
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                    <li>
                      <Link to="/technicalEvents" className="dropdown-item">
                        Technical Events
                      </Link>
                    </li>
                    <li>
                      <Link to="/onlineEvents" className="dropdown-item">
                        Online Events
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/workshop" className="nav-link ">
                    Workshop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contests" className="nav-link ">
                    Contests
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/accommodation" className="nav-link ">
                    Accommodation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sponsors" className="nav-link ">
                    Sponsors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link ">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/team" className="nav-link ">
                    Team
                  </Link>
                </li>
        

                {/* User Menu (Profile or Login) */}
                {user ? (
                    <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="eventsDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    {user.fullname}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                    <li>
                        <Link to="/profile" className="dropdown-item">
                        Profile
                        </Link>
                    </li>
                    <li>
                        <Link  onClick={handleLogout} className="dropdown-item">
                        Logout                        </Link>
                    </li>
                    </ul>
                </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link ">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}