import React, { useState } from 'react';
import PropTypes from 'prop-types';

// styles
import './Navbar.scss';

// components
import {scrollToRef} from '../scrollToRef/scrollToRef';

const Navbar = (props) => {
	const [navbarState, setNavbarState] = useState({isCollapsed: true});
	return(
		<nav id='navbar' className='navbar has-shadow'>
				<div className='container'>
					<div className='navbar-brand'>
						<a className='navbar-item is-hidden-touch'>
							<img src={`${process.env.REACT_APP_IMAGES_PREFIX}/dordonidoorstransparent.png`} style={{maxHeight: '60px'}}/>
						</a>

						<a
							role='button'
							className={`navbar-burger burger ${!navbarState.isCollapsed ? 'is-active' : ''}`}
							aria-label='menu'
							aria-expanded='true'
							data-target='navMenu'
							onClick={() => setNavbarState({isCollapsed: !navbarState.isCollapsed})}>
							<span></span>
							<span></span>
							<span></span>
						</a>
					</div>

					<div className={`navbar-menu ${!navbarState.isCollapsed ? 'is-active' : ''}`} id='navMenu'>
						<div className='navbar-end'>
							<a className='navbar-item' onClick={() => window.scrollTo(0, 0)}>
								Home
							</a>

							<a className='navbar-item' onClick={() => scrollToRef(props.aboutRef)}>
								About Us
							</a>

							<a className='navbar-item' onClick={() => scrollToRef(props.servicesRef)}>
								Services
							</a>

							<a className='navbar-item' onClick={() => scrollToRef(props.galleryRef)}>
								Gallery
							</a>

							<a className='navbar-item' onClick={() => scrollToRef(props.contactRef)}>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
	);
};

Navbar.propTypes = {
	aboutRef: PropTypes.object,
	servicesRef: PropTypes.object,
	aboutgalleryRefRef: PropTypes.object,
	contactRef: PropTypes.object,
};

Navbar.defaultProps = {
	aboutRef: null,
	servicesRef: null,
	aboutgalleryRefRef: null,
	contactRef: null,
};

export default Navbar;
