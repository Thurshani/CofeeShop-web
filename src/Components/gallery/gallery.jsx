import React from "react";
import "./Gallery.css";
import pro from "../../assets/2031.jpg";
// Importing images from src/assets
import Cappuccino from "../../assets/cappuccino.jpg";
import LatteCream from "../../assets/flat-white.jpg";
import EspressoShot from "../../assets/latte.jpg";
import IcedMocha from "../../assets/mocha.jpg";
import VanillaColdBrew from "../../assets/macchiato.jpg";
import CaramelMacchiato from "../../assets/cold-brew.jpg";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      name: "Cappuccino Arabica",
      image: Cappuccino,
    },
    {
      id: 2,
      name: "Latte Cream",
      image: LatteCream,
    },
    {
      id: 3,
      name: "Espresso Shot",
      image: EspressoShot,
    },
    {
      id: 4,
      name: "Iced Mocha",
      image: IcedMocha,
    },
    {
      id: 5,
      name: "Vanilla Cold Brew",
      image: VanillaColdBrew,
    },
    {
      id: 6,
      name: "Caramel Macchiato",
      image: CaramelMacchiato,
    },
  ];

  return (
    <div className="gallery-section" id="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.name} />
            <div className="gallery-caption">{item.name}</div>
          </div>
        ))}
      </div>

      {/* Promotional Offer Section */}
     
<section className="promo-section">
      <div className="promo-image-container">
        <img src={pro} alt="" className="promo-image" />
      </div>
      <div className="promo-card">
        <h3 className="promo-title">Cappuccino Arabica</h3>
        <p className="promo-offer">Get 40% Offer</p>
        <p className="promo-description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its normal distribution layout.
        </p>
        <button className="promo-button">Order Now</button>
      </div>
    </section>
    </div>
  );
};

export default Gallery;