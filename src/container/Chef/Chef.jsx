import React from 'react';
import {images} from "../../constants"
import {SubHeading} from "../../components"
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading  title="Chef's Word"/>
      <h1 className='headtext__cormorant'> What We Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans"> As chefs, we believe that food has the power to transcend cultural boundaries, spark joy and emotion, and bring people together in ways that nothing else can.</p>
        </div>
      </div>
      <div className="app__chef-sign">
        <p> Kevin Luo </p>
        <p className="p__opensans"> Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
