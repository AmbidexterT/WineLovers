import React from 'react';

import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Founder.css';

const Founder = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.founder} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="All you need to know is Wine" color="black" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <BiSolidQuoteAltLeft fontSize={30} color="var(--color-golden)" />
          <p className="p__opensans color-black ml-5">Making the world a better place one glass at a time </p>
          <p className="p__opensans color-golden ml-5">one glass at a time.</p>
          <BiSolidQuoteAltRight fontSize={30} color="var(--color-golden)" className="ml-5" />
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Olivier Bouchard, Founder</p>
      </div>
    </div>
  </div>
);

export default Founder;
