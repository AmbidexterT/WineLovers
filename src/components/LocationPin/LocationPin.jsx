import React from 'react';

import './LocationPin.css';

const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
