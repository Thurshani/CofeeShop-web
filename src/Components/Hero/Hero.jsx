import React, { useState } from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home" className="hero">
      <nav className="navbar">
        <a className="coffero"><span><i>Coffero</i></span></a>

        <div className="menu-icons">
          {!menuOpen ? (
            <svg onClick={() => setMenuOpen(true)} className="menu-icon" xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
          ) : (
            <svg onClick={() => setMenuOpen(false)} className="menu-icon" xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          )}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'>About</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#features'>Features</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#menu'>Menu</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#gallery'>Gallery</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#chefs'>Chefs</AnchorLink></li>
          <li><AnchorLink className='anchor-link' offset={50} href='#testimonials'>Testimonials</AnchorLink></li>
        </ul>
      </nav>

      <div className="hero-content">
        <h1>Welcome To Cofee!</h1>
        <h2>Discover Amazing Cofee</h2>
        <h2>House & Get Enery</h2>
        <p>Enjoy the finest blends of freshly brewed coffee in a cozy and relaxing atmosphere. Start your day with the perfect cup that energizes you for success.</p>
        <div className='hero-action'>
          <div className='hero-connect'>
            <AnchorLink className='anchor-link' offset={50} href='#menu'>Check menu</AnchorLink>
          </div>
          <AnchorLink className='hero-resume' offset={50} href="#reservation">Book Table</AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
