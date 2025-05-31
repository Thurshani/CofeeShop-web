import React from 'react';
import './Menu.css';
import coffeeImg from '../../assets/cappuccino.jpg'; // small coffee image

const menuData = [
  {
    name: "Espresso",
    price: "3.00",
    description: "Strong and bold coffee with a rich aroma."
  },
  {
    name: "Latte",
    price: "4.00",
    description: "Smooth coffee with steamed milk."
  },
  {
    name: "Cappuccino",
    price: "4.50",
    description: "Rich espresso with foamed milk."
  },
  {
    name: "Cold Brew",
    price: "5.00",
    description: "Brewed cold for a refreshing taste."
  },
  {
    name: "Mocha",
    price: "5.50",
    description: "Chocolate-flavored coffee treat."
  },
  {
    name: "Flat White",
    price: "4.20",
    description: "Smooth blend of espresso and milk."
  },
  {
  name: "Macchiato",
  price: "4.50",
  description: "Espresso topped with a small amount of foamed milk."
},
{
  name: "Flat White",
  price: "4.75",
  description: "Rich espresso with velvety steamed milk."
}
];

const Menu = () => {
  return (
    <section className="menu-section" id='menu'>
      <h2>Our Coffee Menu!</h2>
      <div className="menu-grid">
        {menuData.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={coffeeImg} alt="coffee" className="coffee-icon" />
            <h4>{item.name} <span>Rs.{item.price}</span></h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
