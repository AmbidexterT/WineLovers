import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Awards.css';

const AwardCard = ({ award: { imgUrl, title, score, region, year } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans color-black">Score: {score}</p>
      <p className="p__opensans color-black">Region: {region}</p>
      <p className="p__opensans color-black">Year: {year}</p>
    </div>
  </div>
);

const Awards = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards" color="black" />
      <h1 className="headtext__cormorant">Our Awards</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.wineBottles} alt="laurels_img" />
    </div>
  </div>
);

export default Awards;
