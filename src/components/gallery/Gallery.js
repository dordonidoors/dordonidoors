import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

// styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Gallery.scss';

const Gallery = (props) => {
  window.scrollTo(0,0);
  return (
    <section id='gallery' className='section is-medium'>
      <h1 className='title is-2'>Gallery</h1>
      <div className='container'>
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          dynamicHeight={true}>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image7.JPG`}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image1.JPG`}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image5.JPG`}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image2.JPG`}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/image3.JPG`}/>
          </div>
          <div>
            <img src={`${process.env.REACT_APP_IMAGES_PREFIX}/firerated.jpg`}/>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
