import React from 'react';
import { FooterOverlay,Newsletter } from '../../components';
import { images } from '../../constants';

import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">123 Main Street Anytown, USA 12345</p>
        <p className="p__opensans">+1 234-546-3142</p>
        <p className="p__opensans"> +1 675-085-3276</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the services of others."</p>
        <img src={images.spoon} alt="" className='spoon__img' style={{ marginTop: "15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00am - 12:00am</p>
        <p className="p__opensans"> Saturday - Sunday:</p>
        <p className="p__opensans"> 07:00am - 11:00pm</p>
      </div>
    </div>±
    <div className="footer__copyright">
      <p className="p__opensans">2023 Gerich. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
