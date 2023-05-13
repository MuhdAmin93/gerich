import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs"
import { SubHeading } from '../../components';
import {images} from "../../constants"
import './Gallery.css';


const imagess = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08]

const Gallery = () => {

const scrollRef = useRef(null)

const scroll = (direction) => {
  const {current } = scrollRef

  if (direction ===  "left") {
    current.scrollLeft -= 300
  } else {
    current.scrollLeft += 300
  }
}
  return (

    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant"> Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rems"}}>Through the lens: a behind-the-scenes look at the passion and skill that goes into each dish.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagess.map((image, index) => {
            return (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt="" />
                <BsInstagram className='gallery__image-icon' />
              </div>
            )
          })}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
