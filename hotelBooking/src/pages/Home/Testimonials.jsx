import dp from "../../assets/hotel.jpg"
import React from 'react';
import { MdStar } from 'react-icons/md';
import './Testimonials.css';


const testimonials = [
  {
    name: 'Saul Goodman',
    title: 'Tourist',
    feedback: 'Our aim is to show readers how easy experimenting with the worthy potentialities of the elegantly timeless will ever have our mission!',
    stars: 5,
    image: dp,
  },
  {
    name: 'Sara Wilson',
    title: 'Traveler',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    stars: 5,
    image: dp,
  },
  {
    name: 'Jena Karlis',
    title: 'Tourist',
    feedback: 'Your eye of license ideas was truly exceptional, from the warmly personal arrival at the destination.',
    stars: 5,
    image:dp,
  }
];

function Testimonial() {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <p id="para">Hear from our satisfied clients who have experienced our benefits</p>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial-card ${index === 1 ? 'highlighted' : ''}`} key={index}>
            <div className="testimonial-feedback">
                <div className="stars">
              {[...Array(testimonial.stars)].map((_, i) => (
                <MdStar key={i} className="star-icon" />
              ))}
              </div>
              <p>{testimonial.feedback}</p>
            </div>
            <div className="testimonial-author">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="indicator-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Testimonial;
