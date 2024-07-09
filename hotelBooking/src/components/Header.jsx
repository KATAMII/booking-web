import React, { useContext } from "react";
import logo from "../assets/sarova2.png";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../../Server/authentication/authentication";
import "./Header.css";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();  
    navigate('/');  
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="media">
        <div className="navbar__menu">
          <ol className="header-nav-list">
            <li className="header-navs">
              <Link to="/">Home</Link>
            </li>
            <li className="header-navs">
              <Link to="/Rooms">Rooms</Link>
            </li>
            <li className="header-navs">
              <Link to="/Amenities">Amenities</Link>
            </li>
            <li className="header-navs">
              <Link to="/Contact">Contacts</Link>
            </li>
          </ol>
        </div>
        <div className="headerbtn">
          {isLoggedIn ? (
            <button className="btnn" onClick={handleLogout}>Log Out</button>
          ) : (
            <button className="btnn">
              <Link to="/SignIn">Sign In</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
