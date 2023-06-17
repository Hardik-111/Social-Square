

import React from 'react';
import { useHistory } from 'react-router-dom';
import "../logout/logout.css";

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Add your logout logic here
    // This can include clearing session data, updating user status, etc.
    // For the sake of this example, let's assume we simply log out and redirect to the login or register page.
    console.log("You have been logged out successfully.");
    history.push('/login'); // Redirect to the login page
    // history.push('/register'); //  if you want to redirect to the register page instead
  };

  return (
    <>
   <h1> LOGOUT NOW</h1>
    <button onClick={handleLogout} style={{ color:'white' , backgroundColor:'teal' , width:'100%' , height:'30%' , fontSize:'22px'}}>
      Logout
    </button>
    </>
  );
};

export default LogoutButton;

