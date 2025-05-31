import React from 'react';
import './Testimonials.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope
} from 'react-icons/fa';

const testimonials = [
  {
    name: "Reid E. Ball",
    role: "Customer",
    text: "There are many variations of passages of the available but the majority have suffered to the alteration in some form by injected humour or randomised words.",
    avatar: "https://i.pravatar.cc/100?img=1",
    rating: 5
  },
  {
    name: "Parker Suarez",
    role: "Customer",
    text: "There are many variations of passages of the available but the majority have suffered to the alteration in some form by injected humour or randomised words.",
    avatar: "https://i.pravatar.cc/100?img=2",
    rating: 5
  },
  {
    name: "Sylvia H. Green",
    role: "Customer",
    text: "There are many variations of passages of the available but the majority have suffered to the alteration in some form by injected humour or randomised words.",
    avatar: "https://i.pravatar.cc/100?img=3",
    rating: 5
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <h2 className="section-title">What Clients Say</h2>

      {/* Testimonials Cards */}
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">"{item.text}"</p>
            <div className="testimonial-footer">
              <img src={item.avatar} alt={item.name} className="avatar" />
              <div className="testimonial-info">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
                <div className="stars">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-container">
          {/* About Section */}
          <div className="footer-section about">
            <h2 className="footer-logo">Coffero</h2>
            <p>
              There are many variations of passages available but the majority have suffered alteration
              in some form by injected humour words which don’t look even slightly believable.
            </p>
            <p>📞 +123 654 7898</p>
            <p>📍 25/18 Milford Road, New York</p>
            <p>📧 info@example.com</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li>About Us</li>
              <li>Menu</li>
              <li>Features</li>
              <li>Gallery</li>
              <li>Team</li>
              <li>Reservation</li>
            </ul>
          </div>

          {/* Opening Hours with box */}
          <div className="footer-section hours hours-box">
            <h3>Opening Hours</h3>
            <ul>
              <li>Saturday: 09AM – 06PM</li>
              <li>Monday: 09AM – 06PM</li>
              <li>Tuesday: 09AM – 06PM</li>
              <li>Wednesday: 09AM – 06PM</li>
              <li>Thursday: 09AM – 06PM</li>
              <li>Friday: 09AM – 06PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get latest update and news</p>
            <input type="email" placeholder="Your Email" />
            <button>Subscribe</button>
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaEnvelope />
            </div>
          </div>
        </div>

        <hr />

        <p className="copyright">
          &copy; Copyright 2025 Coffero. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
