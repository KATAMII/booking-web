import React, { useState } from 'react';
import { useFormik } from 'formik';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../../utils/config';
// const apiUrl=import.meta.env.VITE_API_URL_ROOT

function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(`${apiUrl}/api/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      if (data.success) {
        navigate("/SignIn");
      } else {
        setError(data.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: handleSubmit
  });

  return (
    <div className='signup'>
      <div className="sign">
        <div className="btn">
          <a href="/SignIn" className='back-button'>←</a>
          <h2 className='signup-label'>Sign Up</h2>
        </div>
        <form onSubmit={formik.handleSubmit} className='form2'>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input-field"
            {...formik.getFieldProps('firstName')}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input-field"
            {...formik.getFieldProps('lastName')}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-field"
            {...formik.getFieldProps('email')}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-field"
            {...formik.getFieldProps('password')}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input-field"
            {...formik.getFieldProps('confirmPassword')}
          />

          <button type="submit" className="signup-button" disabled={loading}>
            {loading ? "please wait..." : "Sign up"}
          </button>
          <p className="signin-again">
            Already have an account? <a href="/SignIn">Sign In</a>
          </p>
          <p className="error">{error && error}</p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
