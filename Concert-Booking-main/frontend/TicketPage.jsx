import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TicketPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from the mock API
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookings');
        setBookings(response.data); // Set the bookings data
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []); // Empty array ensures this runs only once on component mount

  return (
    <div>
      <h1>Tickets</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Number of Tickets</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.tickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketPage;
