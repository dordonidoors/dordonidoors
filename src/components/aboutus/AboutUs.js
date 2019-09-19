import React from 'react';
import PropTypes from 'prop-types';

// styles
import './AboutUs.scss';

const AboutUs = (props) => {
	return (
		<section id='about-us' ref={props.refProp} className='section is-medium has-text-left'>
			<div id='about-container' className='container'>
				<div className='columns'>
					<div className='column is-one-third' style={{alignItems: 'center'}}>
						<figure className='image' style={{width: '200px'}}>
							<img src={`${process.env.REACT_APP_IMAGES_PREFIX}/doorspresident.jpg`}/>
							<p>Dordoni Doors President</p>
						</figure>
					</div>
					<div className='column'>
						<div>
							<h1 className='title is-2'>About Us</h1>
							<h1 className='title is-4'>We'll get the job done</h1>

							<hr />

							<p className='content is-medium'>
								Dordoni Doors is a full service door installation company with over
								30 years of experience in the field. We are equipped with the necessary tools and knowledge
								and we aim to provide the highest level of quality to all our clients.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

// prop types
AboutUs.propTypes = {
	refProp: PropTypes.object
};

// default props
AboutUs.defaultProps = {
	refProp: null
};

export default AboutUs;
