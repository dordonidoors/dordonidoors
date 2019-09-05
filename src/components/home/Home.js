import React from 'react';
import PropTypes from 'prop-types';

import './Home.scss';

const Home = () => {
	return (
		<section id='home' className='section is-large bg bg-image1' style={{
				backgroundImage: `url('${process.env.REACT_APP_IMAGES_PREFIX}/office2.jpg')`
			}}>
			<div className='container'>
				<h1 className='title is-1'>Dordoni Doors & Hardward Installation</h1>
				<h2 className='subtitle is-4'>Building trust with quality work</h2>

				<hr style={{
					color: '#333 !important',
					width: '340px',
					margin: '0 auto',
					marginBottom: '20px',
					}}/>

				<h4 className='subtitle is-6'>Over 30 years experience</h4>

				<a className='button is-info'>Request Quote</a>
			</div>
		</section>
	);
};

/*
<div className='static-section content'>
	<h1 className='title'>About Us</h1>

	<div className='row'>
		<div className='col'>
			<div className='image-circular bg bg-image2'></div>

			<h2>What We Do</h2>

			<div className='about-text center'>
				Installation of commercial and residential doors, frames, windows & finish hardware.
				We pride ourselves on finishing our jobs correctly and in a timely manor.
				We go above and beyond to make sure our customers are fully satisfied during the whole project.
			</div>
		</div>
		<div className='col'>
			<div className='image-circular bg bg-image3'></div>


			<h2>Why Choose Us?</h2>

			<div className='about-text center'>
				We work with architects and general contractors to produce beautiful, functional structures.
				Contact us today so we can bring our project management skills and extensive construction experience
				to your next project.
			</div>
		</div>

		<br style={{clear: 'both'}}/>
	</div>
</div>

<div className='fixed-image bg bg-image4 content' style={{height: '100%'}}>

	<div className='container'>
		<h2>Our Mission</h2>
		<p>
			Dordoni Doors aims to provide the highest level of quality door construction and installation to
			our customers, to ensure quality work with competitive prices and to gaurantee professionalism, honesty, integrity,
			and fairness to all our customers.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
			eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
			sunt in culpa qui officia deserunt mollit anim id est laborum
		</p>
	</div>

	<div className='container' style={{marginTop: '10%'}}>
		<h2>We'd love to hear from you</h2>
		<em>If you have questions about any of our services, quotes, and  more, our team is ready to answer any and all your questions!</em>
	</div>

	<div style={{marginTop: '50px'}}>
		<a className='btn btn-primary'>Contact Us</a>
	</div>
</div>

*/

Home.propTypes = {

};

export default Home;
