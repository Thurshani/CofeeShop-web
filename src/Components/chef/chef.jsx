import React from "react";
import "./Chef.css";

// Import different chef images (replace with actual images if available)
import chef1 from "../../assets/chef1.jpg";
import chef2 from "../../assets/chef2.jpg";
import chef3 from "../../assets/chef3.jpg";
import chef4 from "../../assets/chef4.jpg";

const chefs = [
  { name: "Malissa Fie", title: "Senior Chef", image: chef1 },
  { name: "Chad Smith", title: "Senior Chef", image: chef2 },
  { name: "Arron Rodri", title: "Senior Chef", image: chef3 },
  { name: "Tony Pinto", title: "Senior Chef", image: chef4 },
];

const Chefs = () => {
  return (
    <>
      {/* Chef Section */}
      <section className="chefs-section" id="chefs">
        <h2 className="section-title">Chef's</h2>
        <h3 className="section-subtitle">Meet Our Experts</h3>
        <div className="chefs-grid">
          {chefs.map((chef, index) => (
            <div className="chef-card" key={index}>
              <img src={chef.image} alt={chef.name} className="chef-image" />
              <h4 className="chef-name">{chef.name}</h4>
              <p className="chef-title">{chef.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation Section */}
      <section className="reservation-section" id="reservation">
        <h2 className="section-title">Reservation</h2>
        <h3 className="section-subtitle">Book A Table</h3>
        <form className="reservation-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Your Phone" required />
          <input type="text" placeholder="Date Ex: DD/MM/YY" required />
          <input type="text" placeholder="Time Ex: 01:25PM" required />
          <input type="number" placeholder="Number Of People" required />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Chefs;
