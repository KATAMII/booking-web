import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../../../Server/authentication/authentication';

const AdminDashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchBookings();
    }
  }, [isLoggedIn]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('/api/admin/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings', error);
    }
  };

  const approveBooking = async (bookingId) => {
    try {
      await axios.post(`/api/admin/bookings/${bookingId}/approve`);
      fetchBookings();
    } catch (error) {
      console.error('Error approving booking', error);
    }
  };

  const deleteBooking = async (bookingId) => {
    try {
      await axios.delete(`/api/admin/bookings/${bookingId}`);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking', error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Room</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.userId}</td>
              <td>{booking.roomType}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => approveBooking(booking.id)}>Approve</button>
                <button onClick={() => deleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
