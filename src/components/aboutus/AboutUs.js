import React from 'react';

import './AboutUs.scss';

const AboutUs = () => {
	return (
		<section id='about-us' className='section is-medium has-text-left'>
			<div className='container'>
				<div className='columns'>
					<div className='column is-half'>
						<h1 className='title is-2'>About Us</h1>
						<p className='content is-medium'>
              Dordoni Doors is a full service door installation company with over
							30 years of experience in the field equipped with the necessary tools and knowledge
							that aims to provide the highest level of quality to all our clients.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

/*
<div className='column'>
  <div className='image-circular bg bg-image2'></div>

  <h2 className='title is-3'>What We Do</h2>

  <div className='about-text center'>
    Installation of commercial and residential doors, frames, windows & finish hardware.
    We pride ourselves on finishing our jobs correctly and in a timely manor.
    We go above and beyond to make sure our customers are fully satisfied during the whole project.
  </div>
</div>
<div className='column'>
  <div className='image-circular bg bg-image3'></div>


  <h2>Why Choose Us?</h2>

  <div className='about-text center'>
    We work with architects and general contractors to produce beautiful, functional structures.
    Contact us today so we can bring our project management skills and extensive construction experience
    to your next project.
  </div>
</div>

*/

export default AboutUs;
