// src/components/Footer.js
import React from 'react';
import { FaTwitterSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer id="footer" className="footer position-relative">
        <div className="container footer-top">
          <div className="footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">SAROVA HOTEL</span>
            </a>
            <div className="footer-contact ">
              <p>Address</p>
              <p>Mombasa, Kenya</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+254702762544</span>
              </p>
              <p><strong>Email:</strong> <span>sarovahotel@sarova.com</span></p>
            </div>
            <div className="social-links ">
              <a href="#" title="Twitter"><FaTwitterSquare /></a>
              <a href="#" title="Facebook"><IoLogoFacebook /></a>
              <a href="#" title="Instagram"><AiFillInstagram /></a>
              <a href="#" title="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Useful Links</h3>
            <ul>
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
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form className='subscribe'>
              <div className="newsletter-form">
                <label htmlFor="newsletter-email">Email:</label>
                <input type="email" name="email" id="newsletter-email" />
                <input type="submit" value="Subscribe" />
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your subscription request has been sent. Thank you!
              </div>
            </form>
          </div>
        </div>

        <div className="copyright">
          © <span>Copyright</span>
          <strong className="sitename2">Katamii </strong> Mwas<span> All Rights Reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
