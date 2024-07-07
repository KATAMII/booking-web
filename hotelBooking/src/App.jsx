import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Amenities from './pages/Amenities/Amenities';
import Contact from './pages/Contacts/Contact';
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import { AuthProvider } from '../../Server/authentication/authentication.jsx';  // Ensure correct path and file extension

function App() {
  return (
    <AuthProvider>  {/* Wrap the application with AuthProvider */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Amenities" element={<Amenities />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
