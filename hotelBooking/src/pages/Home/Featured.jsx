import React from 'react';
import roomimg from '../../assets/room1.jpeg';
import studio from '../../assets/STUDIO.jpeg'
import prince from '../../assets/prince.jpeg'
import single from '../../assets/single.jpeg'
import double from '../../assets/double.jpeg'
import suite from '../../assets/suite.jpeg'
import { MdLocationPin } from 'react-icons/md';
import './Featured.css';
import { TbHearts } from "react-icons/tb";
import { RiHeartsFill } from "react-icons/ri";


function Featured() {
  const rooms = [
    {
      id: 1,
      image: roomimg,
      title: 'Queens room',
      location: 'Queens plaza',
      price: 25000,
      bath:3,
      bed: 2,
    },
    {
      id: 2,
      image: studio,
      title: 'Mia room',
      location: 'Mia plaza',
      price: 55000,
      bath:5,
      bed: 5,
    },
    {
      id: 3,
      image: prince,
      title: 'Prince room',
      location: 'Prince plaza',
      price: 17000,
      bath:1,
      bed: 1,
    },
    {
      id: 4,
      image: double,
      title: 'Double room',
      location: 'Upper plaza',
      price: 16000,
      bath:2,
      bed: 3,
    },
    {
      id: 5,
      image: single,
      title: 'Single room',
      location: 'Lower plaza',
      price: 8000,
      bath:1,
      bed: 1,
    },
    {
      id: 6,
      image: suite,
      title: 'Suite room',
      location: 'Beach plaza',
      price: 12000,
      bath:2,
      bed: 2,
    },
  ];

  return (
    <div className="featured">
        <h1 className="title">Featured Rooms</h1>
    <div className="room-list">
       
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <div className="romimg">
            <img src={room.image} alt="room" />
          </div>
          <div className="info">
            <h3>{room.title}</h3>
            <p className='heart'>
              <MdLocationPin />
              {room.location}
            </p>
            <div className="beds">
              <p className='bed'>{room.bed}BED</p>
              <p className='bed'> {room.bath} BATH</p>
              <p className='heart'><RiHeartsFill />
              </p>
            </div>
          </div>
          <div className="price">
            <h3>${room.price}</h3>
            <p>Per Night</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Featured;
