import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import './SignIn.css';
import svg from '../../assets/SVG.svg';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../../../Server/authentication/authentication';
import { apiUrl } from '../../../utils/config';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${apiUrl}/api/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (data.success) {
       
        document.cookie = `hotel_access_token=${data.token}; path=/`;
        localStorage.setItem('user_id', data.data.id); 
        setIsLoggedIn(true);
        navigate("/");
      } else {
        setError('Invalid email or password');
      }
    } catch (e) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className='signin'>
      <div className="sign">
        <div className="sign__container">
          <img src={svg} alt="Login illustration" />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="login" className="login-label">Log in</label>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="remember-me"
              name="remember"
              onChange={formik.handleChange}
              checked={formik.values.remember}
            />
            <label htmlFor="remember-me">Remember me</label>
            <a href="#" className="forgot-password">Forgot password</a>
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Please wait..." : "Log in"} 
          </button>
          <a href="/SignUp" className="forgot-password2">Sign Up</a>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default SignIn;
