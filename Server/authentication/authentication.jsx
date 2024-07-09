import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('hotel_access_token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('hotel_access_token');
    localStorage.removeItem('user_id');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
