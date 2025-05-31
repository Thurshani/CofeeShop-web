import React from 'react';
import './About.css';
import aboutImage from '../../assets/about1.webp'; // Replace with your actual image path

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Coffero" />
        </div>
        <div className="about-text">
  <h2>About Us</h2>
  <h1>Fresh Quality And Organic Tasty Coffee House For You</h1>
  <p>
    At Coffero, we are passionate about coffee. Our mission is to deliver
            rich, aromatic coffee experiences using the finest beans and artisan
            techniques. Whether you're looking for your morning boost or an
            afternoon delight, we offer a cozy space and a delightful menu to
            satisfy every coffee lover.
  </p>
        </div>
      </div>
    </div>
  );
};

export default About;
