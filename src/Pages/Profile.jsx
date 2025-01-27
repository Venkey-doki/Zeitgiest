import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (i.e., if 'user' exists in localStorage)
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      // If not logged in, redirect to login page
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Your Profile</h2>
      {/* Display profile details here */}
    </div>
  );
}
    