import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import './Services.scss';

const Services = (props) => {
  return (
		<section className='section is-medium' ref={props.refProp}>
      <div className='container'>
        <h1 className='title is-2'>Services</h1>
        <p className='content is-medium'>
          We specialize in a broad range of commercial installation from hollow metal frames and specialty wooden doors to commercial hardware.
        </p>

        <div id='service-cards' className='columns'>
          <div className='column'>
            <div className='card grow' >
              <div className='card-content'>
                <div className='content'>
                  <p className='title'>
                    <span className='icon is-large'><i className='fas fa-3x fa-door-open'></i></span>
                  </p>
                  <p className='subtitle is-5'>
                    Hollow Metal Frames
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card grow'>
              <div className='card-content'>
                <div className='content'>
                  <p className='title'>
                    <span className='icon is-large'><i className='fas fa-3x fa-door-closed'></i></span>
                  </p>
                  <p className='subtitle is-5'>
                    Aluminum Frames
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card grow'>
              <div className='card-content'>
                <div className='content'>
                  <p className='title'>
                    <span className='icon is-large'><i className='fas fa-3x fa-tree'></i></span>
                  </p>
                  <p className='subtitle is-5'>
                    Wood Doors
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='column'>
            <div className='card grow'>
              <div className='card-content'>
                <div className='content'>
                  <p className='title'>
                    <span className='icon is-large'><i className='fas fa-3x fa-wrench'></i></span>
                  </p>
                  <p className='subtitle is-5'>
                    Commercial Hardware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// prop types
Services.propTypes = {
  refProp: PropTypes.object
};

// default props
Services.defaultProps = {
  refProp: null
};

export default Services;
