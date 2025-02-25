import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  "../styles/Booking.css"

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [ticketDetails, setTicketDetails] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare booking data
    const bookingData = {
      name,
      tickets,
    };

    try {
      // Send data to the mock API
      const response = await axios.post('http://localhost:5000/api/bookings', bookingData);


      // Set the response as ticket details to display
      setTicketDetails(response.data);
      setBookingConfirmed(true);
    } catch (error) {
      console.error('Error submitting the booking:', error);
      alert('Error submitting the booking.');
    }
  };  

  return (
    <div>
      {!bookingConfirmed ? (
        <div>
          {/* Booking Form */}
          <div className="concert-details">
            <h1>Book Your Tickets</h1>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Number of Tickets"
                required
                value={tickets}
                onChange={(e) => setTickets(e.target.value)}
              />
              <button type="submit" className="book-now">
                Book Now
              </button>
            </form>
          </div>

          {/* Back Button */}
          <div className="back-btn-container">
            <a href="/Homepage">Back</a>
          </div>
        </div>
      ) : (
        <div>
          {/* Display Booking Confirmation */}
          <div className="ticket-details">
            <h1>Booking Confirmed!</h1>
            <p><strong>Ticket ID:</strong> {ticketDetails.id}</p>
            <p><strong>Name:</strong> {ticketDetails.name}</p>
            <p><strong>Number of Tickets:</strong> {ticketDetails.tickets}</p>
          </div>

          {/* Option to go back or make a new booking */}
          <div className="back-btn-container">
            <button onClick={() => window.location.reload()} className="back-btn">
              Book Another Ticket
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
