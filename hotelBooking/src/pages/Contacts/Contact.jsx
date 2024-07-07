import React from "react";
import './Contact.css'
import Banner from "../../components/Banner";
import Footer from '../../components/Footer';
import { MdPermPhoneMsg } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoTimerSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";



function Contacts() {
  return (
    <div className="conta">
      <Banner mainTitle="Contact Us" subTitle="Feel Free to Contact Us"/>
      <div className="contact-us-container">
      <div className="contact-info">
        <div className="info-item">
        <MdPermPhoneMsg />
          <p className="here">Phone Number <span>0753126154</span></p>  
        </div>
        <div className="info-item">
        <MdEmail />
          <p className="here">Email<span>sarova@sarova.com</span></p>
        </div>
        <div className="info-item">
        <IoTimerSharp />
          <p className="here"> Working Hours<span>Open fulltime</span></p>
        </div>
        <div className="info-item">
        <MdLocationPin />
          <p className="here"> Location<span>Mombasa Kenya</span></p>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form className="contactform">
          <input type="text" placeholder="fullName" required />
          <input type="email" placeholder="your email" required />
          <input type="text" placeholder="subject" required />
          <textarea placeholder="message" required></textarea>
          <button type="submit">send</button>
        </form>
      </div>
    </div>
     <div className="map">
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.1269812342816!2d39.730705174271904!3d-3.9943021445811326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18400dd5963208d5%3A0x740e7f0c37eee742!2sSarova%20Whitesands%20Beach%20Resort%20%26%20Spa%20Mombasa%20-%20Beach%20Hotel%20in%20Mombasa!5e0!3m2!1sen!2ske!4v1719925030982!5m2!1sen!2ske" width="800" height="600" ></iframe>
     </div>
      <Footer/>
    </div>
  );
}

export default Contacts;
