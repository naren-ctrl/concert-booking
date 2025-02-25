import React from "react";
 import  "../styles/Aboutus.css"

 
 const AboutUs = () => {
   return (
     <div className="about-us-container">
       <h1 className="about-us-title">About Us</h1>
       <p className="about-us-description">
         Welcome to our Concert Booking Application! We are passionate about bringing live music experiences to you.
         Whether you are a die-hard fan or someone exploring music for the first time, we are dedicated to making your concert journey unforgettable.
       </p>
 
       <h2 className="concerts-title">Our Previous Concerts</h2>
       <div className="concerts-list">
         <div className="concert-item">
           <h3>AR's Magic Concert 2023</h3>
           <p>
             This was one of our most iconic concerts featuring AR Rahman. With stunning visuals, impeccable acoustics, and a night filled with mesmerizing music, this concert left the audience in awe. Held at the grand Arena Hall, this concert had over 10,000 attendees.
           </p>
         </div>
 
         <div className="concert-item">
           <h3>Rock Legends Tour 2022</h3>
           <p>
             The Rock Legends Tour brought together legendary rock bands such as "The Electric Waves" and "Stone Roots". The event was a massive success, with an audience of 15,000+ rock enthusiasts. Fans rocked out all night, creating unforgettable memories.
           </p>
         </div>
 
         <div className="concert-item">
           <h3>Pop Fest 2021</h3>
           <p>
             Pop Fest 2021 was a vibrant celebration of the best in pop music. Featuring artists like "Melody Star" and "Rhythm Vibe", the concert was an explosion of color, energy, and fun. Over 12,000 attendees enjoyed a night filled with chart-topping hits.
           </p>
         </div>
 
         <div className="concert-item">
           <h3>Indie Music Showcase 2020</h3>
           <p>
             The Indie Music Showcase brought together some of the brightest rising stars in the indie music scene. Hosted at the Green Park Theatre, this intimate concert provided fans with an up-close and personal experience. The event attracted 3,000 music lovers.
           </p>
         </div>
       </div>
 
       <h3 className="mission-title">Our Mission</h3>
       <p className="mission-description">
         Our mission is simple: to connect music lovers with the best live performances while providing a seamless concert booking experience. We’re here to bring the magic of live music to your fingertips.
       </p>
 
       {/* Address Section */}
       <div className="address-container">
         <h3 className="address-title">Contact Us</h3>
         <p className="address-details">
           YeZz Group of Companies Pvt Ltd, <br />
           customerYezgroups@gmail.com,<br/>
           Sivakasi 626121, India.
         </p>
       </div>
     </div>
   );
 };
 
 export default AboutUs;
 