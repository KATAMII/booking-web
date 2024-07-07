import React from "react";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import { MdOutlinePool } from "react-icons/md";
import { MdLocalDining } from "react-icons/md";
import { BiSolidMoviePlay } from "react-icons/bi";
import { FcConferenceCall } from "react-icons/fc";
import "./Amenities.css";
import swimming from '../../assets/swim.jpeg'
import cinema from '../../assets/cinema.jpeg'

function Amenities() {
  return (
    <div className="amenities">
      <Banner mainTitle="OUR AMENITIES" subTitle="View our facilities"/>
      <div className="amenities-container">
        <div className="amenities-description">
          <h2>Our Amenities</h2>
          <p>
            Our stay at Sarova Hotel was truly exceptional, from the warmly greeted arrival to the elegantly appointed rooms and impeccable service. The dining experience surpassed expectations with a delightful .
          </p>
          <div className="icons-container">
            <div className="icon-item">
              <p className="icon">  <MdOutlinePool /> swimming pool</p>
            </div>
            <div className="icon-item">
              <p className="icon"> <MdLocalDining />dinning area</p>
            </div>
            <div className="icon-item">
             
              <p className="icon"><BiSolidMoviePlay />cinema hall</p>
            </div>
            <div className="icon-item">
            
              <p className="icon"><FcConferenceCall />conference hall</p>
            </div>
          </div>
        </div>
        <div className="amenities-images">
          <div className="image-item">
            <div className="image"><img src={swimming} alt="Swimming Pool" /></div>
            <p>We offer swimming pool for you to have fun </p>
          </div>
          <div className="image-item">
            <img src={cinema} alt="Cinema" />
            <p>A Cinema Hall Where you enjoy your movies.</p>
          </div>
        </div>
      </div>
      <div className="amenities-container" id="amen2">
        <div className="amenities-description" id="amaaa">
          <h2>Room Amenities</h2>
      
          <div className="icons-container">
            <div className="icon-item"id="item2">
              <p className="icon" id="item1"><span>Beds</span><li>confortable beds</li></p>
            </div>
            <div className="icon-item"id="item2" >
              <p className="icon"id="item1"> <span>Bathroom Amenities</span> <li>Walk-in shower</li></p>
            </div>
            <div className="icon-item"id="item2">
             
              <p className="icon"id="item1"><span>Room Classification</span> <li>Standard rooms</li></p>
            </div>
            <div className="icon-item"id="item2">
            
              <p className="icon"id="item1"><span>Smoking Policy</span> <li>None-smoking</li></p>
            </div>
          </div>
        </div>
        <div className="amenities-images">
          <div className="image-item"id="amenity2">
            <div className="image" ><img src={swimming} alt="Swimming Pool" /></div>
          </div>
          <div className="image-item"id="amenity2">
            <img src={cinema} alt="Cinema" />
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Amenities;
