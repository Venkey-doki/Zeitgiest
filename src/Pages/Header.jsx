import { React, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../CSS/Header.css';

export default function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Function to get user from localStorage
  const fetchUser = () => {
    const loggedInUser = localStorage.getItem("user");
    setUser(loggedInUser ? JSON.parse(loggedInUser) : null);
    
  };

  useEffect(() => {
    // Fetch user initially
    fetchUser();

    // Listen for changes in localStorage (manual trigger included)
    const handleStorageChange = () => {
      fetchUser();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("storage")); // Trigger update event
    navigate("/");
  };

  const navItems = [
    { path: "/", icon: "fa-home", text: "Home" },
    { path: "/about", icon: "fa-info-circle", text: "About" },
    { 
      type: "dropdown",
      text: "Events",
      icon: "fa-calendar-alt",
      subItems: [
        { path: "/TechnicalEvents", icon: "fa-code", text: "Technical" },
        { path: "/OnlineEvents", icon: "fa-laptop", text: "Online" }
      ]
    },
    { path: "/workshop", icon: "fa-chalkboard", text: "Workshops" },
    { path: "/contests", icon: "fa-trophy", text: "Contests" },
    { path: "/accommodation", icon: "fa-bed", text: "Stay" },
  ];

  const dropdownItems = [
    { path: "/team", icon: "fa-users", text: "Team" },
  ];

  return (
    <header className="glass-header">
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        {navItems.map((item, index) => (
          item.type === "dropdown" ? (
            <div key={index} className="nav-dropdown">
              <button className="nav-link">
                <i className={`fas ${item.icon}`} />
                <span>{item.text}</span>
              </button>
              <div className="dropdown-menu">
                {item.subItems.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.path} className="dropdown-item">
                    <i className={`fas ${subItem.icon}`} />
                    {subItem.text}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={index} to={item.path} className="nav-link">
              <i className={`fas ${item.icon}`} />
              <span>{item.text}</span>
            </Link>
          )
        ))}
        
        <div className="nav-dropdown">
          <button className="nav-link">
            <i className="fas fa-ellipsis-h" />
            <span>More</span>
          </button>
          <div className="dropdown-menu">
            {dropdownItems.map((item, index) => (
              <Link key={index} to={item.path} className="dropdown-item">
                <i className={`fas ${item.icon}`} />
                {item.text}
              </Link>
            ))}
          </div>
        </div>

        {user ? (
          <div className="nav-dropdown">
            <button className="nav-link">
              <i className="fas fa-user-circle" />
              <span>{user.fullname}</span>
            </button>
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                <i className="fas fa-user" /> Profile
              </Link>
              <button onClick={handleLogout} className="dropdown-item">
                <i className="fas fa-sign-out-alt" /> Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-in-alt" />
            <span>Login</span>
          </Link>
        )}
      </nav>

      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        {navItems.slice(0, 3).map((item, index) => (
          item.type === "dropdown" ? (
            <div key={index} className="nav-dropdown">
              <button className="nav-link">
                <i className={`fas ${item.icon}`} />
              </button>
              <div className="dropdown-menu">
                {item.subItems.map((subItem, subIndex) => (
                  <Link key={subIndex} to={subItem.path} className="dropdown-item">
                    <i className={`fas ${subItem.icon}`} />
                    {subItem.text}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={index} to={item.path} className="nav-link">
              <i className={`fas ${item.icon}`} />
            </Link>
          )
        ))}
        
        <div className="nav-dropdown">
          <button className="nav-link">
            <i className="fas fa-ellipsis-h" />
          </button>
          <div className="dropdown-menu">
            {[...navItems.slice(3), ...dropdownItems].map((item, index) => (
              item.path ? (
                <Link key={index} to={item.path} className="dropdown-item">
                  <i className={`fas ${item.icon}`} />
                  {item.text}
                </Link>
              ) : null
            ))}
            {user ? (
              <>
                <Link to="/profile" className="dropdown-item">
                  <i className="fas fa-user" /> Profile
                </Link>
                <button onClick={handleLogout} className="dropdown-item">
                  <i className="fas fa-sign-out-alt" /> Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="dropdown-item">
                <i className="fas fa-sign-in-alt" /> Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
