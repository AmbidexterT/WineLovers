import React from 'react';
import './Navbar.css';
import { IoCloseSharp } from 'react-icons/io5';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GiWineBottle } from 'react-icons/gi';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <GiWineBottle fontSize={47} className="overlay__close" color="var(--color-golden)" />
        <p>WineLovers</p>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Shop</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="contact-button"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Sign In</a>
      </div>
      <div className="app__navbar-hamburger">
        <HiOutlineMenuAlt3 color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-hamburger_overlay flex__center slide-bottom">
            <IoCloseSharp fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-hamburger_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Shop</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      <div className="app__navbar-smallscreen">
        <HiOutlineMenuAlt3 color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoCloseSharp fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
