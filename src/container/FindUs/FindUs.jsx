import React from 'react';

import { SubHeading, Map } from '../../components';
import { weekdaysHours, weekdaysShort, weekendHours, weekendShort } from '../consts/working-hours.const';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" color="black" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans color-black">Golden Bridge, San Francisco, CA, USA, RG9C XM</p>
        <p className="p__cormorant color-black" style={{ color: '#DCCA87', margin: '2rem 0' }}>Working Hours</p>
        <p className="p__opensans color-black">{weekdaysShort} {weekdaysHours}</p>
        <p className="p__opensans color-black">{weekendShort} {weekendHours}</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <Map zoomLevel={17} />
    </div>
  </div>
);

export default FindUs;
