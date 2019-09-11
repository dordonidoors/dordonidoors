import React from 'react';
import PropTypes from 'prop-types';

import './Home.scss';
import {scrollToRef} from '../scrollToRef/scrollToRef';

const Home = (props) => {
	return (
		<section id='home' ref={props.refProp} className='section is-large bg bg-image1' style={{
				backgroundImage: `url('${process.env.REACT_APP_IMAGES_PREFIX}/office2.jpg')`
			}}>
			<div className='container'>
				<h1 className='title is-1'>Dordoni Doors & Hardware Installation</h1>
				<h2 className='subtitle is-4'>Building trust with quality work</h2>

				<hr style={{
					color: '#333 !important',
					width: '340px',
					margin: '0 auto',
					marginBottom: '20px',
					}}/>

				<h4 className='subtitle is-6'>Over 30 years experience</h4>

				<a className='button is-info' onClick={() => scrollToRef(props.refPropContact)}>Request Quote</a>
			</div>
		</section>
	);
};

// prop types
Home.propTypes = {
	refProp: PropTypes.object,
	refPropContact: PropTypes.object
};

// default props
Home.defaultProps = {
	refProp: null,
	refPropContact: null
};

export default Home;
