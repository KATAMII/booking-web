import React from "react";
import { MdLocationPin } from "react-icons/md";
import poolImage from "../../assets/swim2.jpeg";
import roomImage from "../../assets/bed.jpeg";
import "./About.css";
function About() {
  return (
    <div className="about-us">
        
        <div className="para">
            <h2>ABOUT US</h2>
            <h1>SAROVA WHITES</h1>
            <p>Welcome to Sarova Hotel</p>
            <div className="location">
                 <MdLocationPin />
                <span> Mombasa, Nyali</span>
            </div>
            <a href="#" className="view-more-btn">view more</a>
        </div>
            
        <div className="images">
            <div className="rating">
                <span>360+<br />Per year</span>
                <span>48+<br />Qualified chefs</span>
                <span>4500+<br />Hosts</span>
            </div>
                <div className="pool"><img src={poolImage} alt="Swimming Pool" className="pool-image" /></div>
                <div className="room"><img src={roomImage} alt="Hotel Room" className="room-image" /></div>
            </div>
           
        </div>
  );
}

export default About;
