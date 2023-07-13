import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { GiWineBottle } from 'react-icons/gi';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';
import { weekdaysFull, weekdaysHours, weekendFull, weekendHours } from '../consts/working-hours.const';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans color-black">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans color-black">+1 212-344-1230</p>
        <p className="p__opensans color-black">+1 212-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <GiWineBottle fontSize={27} className="overlay__close" color="var(--color-golden)" />
        <p className="p__opensans color-black">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans color-black">{weekdaysFull}</p>
        <p className="p__opensans color-black">{weekdaysHours}</p>
        <p className="p__opensans color-black">{weekendFull}</p>
        <p className="p__opensans color-black">{weekendHours}</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans color-black">{new Date().getFullYear()} WineLovers. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
