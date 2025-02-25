import React from 'react';
import  "../styles/HomePage.css";
import BookingForm from './BookingForm';
//import './style1.css';

import { Navigate, useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  return (
    <div className='div1'>
      {/* Welcome Message Section */}
      <header>
      <div className='service'> 
      
      <a className="about-btn"href="/Aboutus">Services</a>
      <a className="event-btn"href="/Event">Events</a>
        <a className="logout-btn"href="/SignIn">Logout ↻  </a>
        </div>
      </header>
      <div className="welcome-message">
        <h1>AR's Magic concert '25</h1>
      </div>
      

      {/* Content Section */}
      <div className="content">
        <p>Get Ready To 'Stuck' in the world of 'Music!'</p>
        <div className="button-container">
          <a href="/BookingForm" id="book-btn">Book Now!</a>
        </div>
      </div>
     

      <footer >
        &copy; All Rights Reserved 2025
      </footer>

      
      {/* Pop-up Menu */}
      <div id="popup-menu" className="popup">
        <div className="popup-content">
          <span id="close-btn" className="close-btn"></span>
          
        </div>
      </div>

    </div>
    
  );
};

export default WelcomePage;
