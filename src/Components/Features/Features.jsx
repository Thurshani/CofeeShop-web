import React from 'react';
import './Features.css';


const featuresData = [
  {
    title: "Free Shipping",
    description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
   
  },
  {
    title: "Organic Certified",
    description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    
  },
  {
    title: "High Quality",
    description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    
  },
  {
    title: "Proper Roasting",
    description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    
  }
];

const Features = () => {
  return (
    <section className="features-section" id="features">
  <h3>Features</h3>
  <h2>Our Best Features</h2>
  <div className="features-grid">
    {featuresData.map((feature, index) => (
      <div className="feature-card" key={index}>
        
        <h4>{feature.title}</h4>
        <p>{feature.description}</p>
      </div>
    ))}
  </div>
</section>
  );
};

export default Features;