import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags, year, newPrice }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      </div>
      <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        {newPrice ? (
          <div>
            <p className="p__cormorant old-price">{price}</p>
            <p className="p__cormorant">{newPrice}</p>
          </div>
        ) : (<p className="p__cormorant">{ price }</p>)}
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}, {year}</p>
    </div>
  </div>
);

export default MenuItem;
