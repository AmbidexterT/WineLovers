import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';
import SketchExample from '../SketchPicker/SketchPicker';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" color="white" />
      <h1 className="headtext__cormorant">Shop Now</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading color-white">Wine</p>
        <div className="app__specialMenu_menu_items color-white">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} year={wine.year} newPrice={wine.newPrice} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.bottleDesign} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading color-white">Make your own bottle design</p>
        <div className="app__specialMenu_menu_items color-white">
          <p className="p__opensans" style={{ margin: '2rem 0' }}>Choose your wine</p>
          <p className="p__opensans" style={{ margin: '2rem 0' }}>Personalize label</p>
          <p className="p__opensans" style={{ margin: '2rem 0' }}>Color the bottle</p>
          <SketchExample />
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
