import React from 'react';
import PropTypes from 'prop-types';

// css
import './Navbar.scss';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isCollapsed: true
		};
	}
	handleLinkClick(linkName) {
		this.setState({currentRoute: linkName});
	}
	handleNavbarToggle() {
		this.setState({isCollapsed: !this.state.isCollapsed});
	}
	render () {
		return(
			<div className='navbar' role='navigation' aria-label='main navigation'>
				<div className='container'>
					<div className='navbar-brand'>
						<a className='navbar-item'>
							<img src={`${process.env.REACT_APP_IMAGES_PREFIX}/dordonidoorstransparent.png`} style={{maxHeight: '60px'}}/>
						</a>

						<a role='button' className='navbar-burger burger' aria-label='Main Menu' aria-expanded='false' data-target='navbarBasicExample'>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
							<span aria-hidden='true'></span>
						</a>
					</div>

					<div className='navbar-menu' id='navbarBasicExample'>
						<div className='navbar-end'>
							<a className='navbar-item'>
								Home
							</a>

							<a className='navbar-item'>
								Contact
							</a>

							<a className='navbar-item'>
								Services
							</a>

							<a className='navbar-item'>
								Gallery
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar
