import React from 'react';
import { images } from "../../constants"

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'> The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: "2rem 0"}}>Unlock the secrets of exquisite dining and elevate your taste buds with the key to fine dining, an indulgent journey of flavors and refinement. Join us on this gastronomic adventure and savor the essence of haute cuisine.</p>
      <button type='button' className='custom__button'> Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
