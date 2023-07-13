import React from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';
import LocationPin from '../LocationPin/LocationPin';

const location = {
  address: 'Golden Bridge, San Francisco, CA, USA',
  lat: 37.818633,
  lng: -122.478502,
};

const Map = ({ zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
