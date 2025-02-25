import React from 'react';
import  "../styles/Event.css"
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const concerts = [
  {
    id: 1,
    title: "AR's Magic Concert 2025",
    description: "A thrilling rock concert featuring popular bands.",
    venue: "Madison Square, India",
    time: "March 25, 2025 - 8:00 PM",
    status: "Booking Open",
  },
  {
    id: 2,
    title: "Classical Night",
    description: "An evening of classical music with world-renowned musicians.",
    venue: "Royal Opera House, London",
    time: "April 15, 2025 - 7:30 PM",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Jazz Under the Stars",
    description: "A relaxing jazz concert under the stars.",
    venue: "Central Park, NYC",
    time: "May 5, 2025 - 9:00 PM",
    status: "Ongoing",
  },
  {
    id: 4,
    title: "Electronic Dance Festival",
    description: "An electrifying EDM valentine festival with top DJs.",
    venue: "Electric Arena, LA",
    time: "Feburary 14, 2025 - 10:00 PM",
    status: "Completed",
  },
];

const ConcertList = () => {
    const navigate=useNavigate();
  const renderStatus = (status) => {
    switch (status) {
      case "Booking Open":
        return <span className="status booking-open">Booking Open</span>;
      case "Ongoing":
        return <span className="status ongoing">Ongoing</span>;
      case "Completed":
        return <span className="status completed">Completed</span>;
      case "Coming Soon":
        return <span className="status coming-soon">Coming Soon</span>;
      default:
        return null;
    }
  };

  return (
    <div className="concert-container">
      {concerts.map((concert) => (
        <div key={concert.id} className="concert-item">
          <div className="concert-details">
            <h2>{concert.title}</h2>
            <p className="description">{concert.description}</p>
            <div className="concert-meta">
              <p className="venue">{concert.venue}</p>
              <p className="time">{concert.time}</p>
            </div>
          </div>
          <div className="concert-status">
            {renderStatus(concert.status)}
            {concert.status === "Booking Open" && (
            
            <a className="book-btn"href="/BookingForm">Book Now</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConcertList;
{/* <button className='book-btn' onClick={() => navigate("/BookingForm")}>Book Now</button> */}