import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../../Server/authentication/authentication';
import { apiUrl } from '../../../utils/config';
import './admin.css';

const AdminDashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Fetching bookings");
     
      const fetchBookings = async () => {
        try {
          const response = await fetch(`${apiUrl}/api/bookings/bookings`);
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
      }; 
      fetchBookings();
    }
  }, [isLoggedIn]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/bookings/bookings/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setBookings(bookings.filter((booking) => booking.id !== id));
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to delete booking');
      }
    } catch (error) {
      console.error('Error deleting booking:', error);
      setError('An error occurred while deleting booking.');
    }
  };

  const handleApprove = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/api/bookings/${id}/approve`, {
        method: 'POST',
      });
      const data = await response.json();
      console.log("API Response:", data); 
      if (response.ok) {
        setBookings(bookings.map((booking) =>
          booking.id === id ? { ...booking, status: 'approved' } : booking
        ));
      } else {
        setError(data.message || 'Failed to approve booking');
      }
    } catch (error) {
      console.error('Error approving booking:', error.message);
      setError('An error occurred while approving booking.');
    }
  };
  
  
  
  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      {error && <p className="error">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Room</th>
            <th>CheckIn Date</th>
            <th>Checkout Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.user ? `${booking.user.firstName} ${booking.user.lastName}` : 'N/A'}</td>
              <td>{booking.roomType}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>{booking.status}</td>
              <td>
                <button className="approve" onClick={() => handleApprove(booking.id)}>Approve</button>
                <button className="delete" onClick={() => handleDelete(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
