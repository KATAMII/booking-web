import React from 'react';
import roomimg from '../../assets/room1.jpeg';
import studio from '../../assets/STUDIO.jpeg'
import prince from '../../assets/prince.jpeg'
import single from '../../assets/single.jpeg'
import double from '../../assets/double.jpeg'
import suite from '../../assets/suite.jpeg'
import { MdLocationPin } from 'react-icons/md';
import './Rooms.css';
import { TbHearts } from "react-icons/tb";
import { RiHeartsFill } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';


function Featured() {
  const rooms = [
    {
      id: 1,
      image: roomimg,
      title: 'Queens room',
      price: 25000,
      bath:3,
      bed: 2,
      rate:4.8,
      people: 2,
    },
    {
      id: 2,
      image: studio,
      title: 'Mia room',
      price: 55000,
      bath:5,
      bed: 5,
      rate: 4.7,
      people: 5,
    },
    {
      id: 3,
      image: prince,
      title: 'Prince room',
      price: 17000,
      bath:1,
      bed: 1,
      rate: 4.9,
      people: 1,
    },
    {
      id: 4,
      image: double,
      title: 'Double room',
      location: 'Upper plaza',
      price: 16000,
      bath:2,
      bed: 3,
      rate: 4.9,
      people: 4,
    },
    {
      id: 5,
      image: single,
      title: 'Single room',
      location: 'Lower plaza',
      price: 8000,
      bath: 1,
      bed: 1,
      rate: 4.8,
      people: 2,
    },
    {
      id: 6,
      image: suite,
      title: 'Suite room',
      location: 'Beach plaza',
      price: 12000,
      bath:2,
      bed: 2,
      rate: 4.8,
      people: 4,
    },
    {
      id: 6,
      image: suite,
      title: 'Suite room',
      location: 'Beach plaza',
      price: 12000,
      bath:2,
      bed: 2,
      rate: 4.8,
      people: 4,
    },
    {
      id: 5,
      image: single,
      title: 'Single room',
      location: 'Lower plaza',
      price: 8000,
      bath: 1,
      bed: 1,
      rate: 4.8,
      people: 2,
    },
    {
      id: 6,
      image: suite,
      title: 'Suite room',
      location: 'Beach plaza',
      price: 12000,
      bath:2,
      bed: 2,
      rate: 4.8,
      people: 4,
    },
  ];

  return (
    <div className="featured">
        <Banner mainTitle="Our Rooms" subTitle="Our Luxurious Hotel Houses"/>
    <div className="room-list">
       
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="romimg">
            <img src={room.image} alt="room" />
          </div>
          <div className="info">
            <h3>{room.title} <p><RiStarSFill />
              {room.rate}</p></h3>
            <div className="beds">
              <p className='bed'><IoIosBed />
              {room.bed}BED</p>
              <p className='bed'> <FaBath />
              {room.bath} BATH</p>
              <p className='heart'><IoMdPeople />
              {room.people} people
              </p>
            </div>
          </div>
          <div className="price">
            <h3>${room.price}</h3>
            <p>Per Night</p>
            <a href="#" className="view-more-btn">view more</a>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
}

export default Featured;
