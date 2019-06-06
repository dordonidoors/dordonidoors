import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
	return (
		<div>
			<div className='fixed-image bg bg-image1'>
				<div className='container content'>
					<img src='/images/dordonidoorstransparent.png' className='responsive' style={{width: '70%', margin: '0 auto'}}/>
					<h1 className='title'>Building trust with quality work</h1>
					<h3 className='subtitle'>We'll get it done!</h3>
				</div>
			</div>

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

				<div style={{paddingLeft: '20%', paddingRight: '20%'}}>
					<h1>Our Mission</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
						eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
						sunt in culpa qui officia deserunt mollit anim id est laborum
					</p>
				</div>

				<div style={{marginTop: '10%', paddingLeft: '20%', paddingRight: '20%'}}>
					<h1>We'd love to hear from you</h1>
					<em>If you have questions about any of our services, quotes, and  more, our team is ready to answer any and all your questions!</em>
				</div>

				<div style={{marginTop: '50px'}}>
					<Link to='/contact' className='btn btn-primary'>Contact Us</Link>
				</div>
			</div>
		</div>
	);
};

/*

*/

Home.propTypes = {

};

export default Home;
