import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../../Server/authentication/authentication';
import { apiUrl } from '../../../utils/config';

const AdminDashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Fetching bookings");
     
      const fetchBookings = async () => {
        try {
          const response = await fetch(`${apiUrl}/api/bookings/bookings`)
          const data = await response.json();
          console.log("Bookings data:", data);
          if (response.ok) {
            setBookings(data);
          } else {
            setError(data.message || 'Failed to fetch bookings');
          }
        } catch (error) {
          console.error('Error fetching bookings:', error);
          setError('An error occurred while fetching bookings.');
        }
      }; [fetchBookings()];
    }
  }, [isLoggedIn]);
  
  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Room</th>
            <th>Status</th>
            <th>CheckIn Date</th>
            <th>Checkout Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user ? `${booking.user.firstName} ${booking.user.lastName}` : 'N/A'}</td>
              <td>{booking.roomType}</td>
              <td>{booking.status}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
