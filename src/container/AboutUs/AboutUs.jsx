import React from 'react';
import {images} from "../../constants"

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'> About Us</h1>
        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">Experience excellence in every aspect of dining with our team of passionate individuals dedicated to delivering exceptional quality and unparalleled service.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'> Our History</h1>
        <img src={images.spoon} alt="" className='spoon__img'/>
        <p className="p__opensans">Our rich history of culinary innovation and commitment to excellence has made us a leader in the fine dining industry.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
