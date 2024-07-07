import React, { useContext, useState } from 'react';
import './Hero.css';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../../Server/authentication/authentication';
import { apiUrl } from '../../../utils/config';

function Hero() {
  const { isLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    kids: 0,
    roomType: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!isLoggedIn) {
      alert("You must be logged in to book.");
      navigate('/SignIn');
      return;
    }

    const userId = localStorage.getItem('user_id');
    if (!userId) {
      alert("User ID not found. Please log in again.");
      navigate('/SignIn');
      return;
    }

    try {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);

      if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
        setError('Invalid date format');
        return;
      }

      const response = await fetch(`${apiUrl}/api/bookings/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          checkIn: checkInDate.toISOString(),
          checkOut: checkOutDate.toISOString(),
          userId: userId,
        }),
        credentials: 'include'
      });

      const data = await response.json();
      console.log('Booking response:', data); 
      if (data.success) {
        alert('Booking successful!');
      } else {
        setError(data.message || 'Booking failed!');
        alert('Booking failed!');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="heroall">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="herowelcome">SAROVA WHITESAND</h1>
          <h3 className="herowelcome2">BEACH RESORT AND SPA</h3>
          <div className="herotext">
            <p className="heropara">Home Away From Home</p>
          </div>
        </div>
        <div className="hero-link">
          <button className="herobtn">
            <Link to="/SignUp">Sign Up</Link>
          </button>
          <button className="herobtn">
            <Link to="/SignIn">Sign In</Link>
          </button>
        </div>
      </div>
      <div className="book">
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>CHECK IN</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>CHECK OUT</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Adults</label>
            <input type="number" name="adults" value={formData.adults} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>KIDS</label>
            <input type="number" name="kids" value={formData.kids} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>ROOM</label>
            <select name="roomType" value={formData.roomType} onChange={handleChange} required>
              <option value="">Select Room</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <button type="submit" className="button">BOOK NOW</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Hero;
