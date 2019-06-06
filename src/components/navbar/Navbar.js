import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// css
import './Navbar.css';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentRoute: this.props.location.pathname
		};
	}
	handleLinkClick(linkName) {
		this.setState({currentRoute: linkName});
	}
	render () {
		return(
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarToggleExternalContent' aria-controls='navbarToggleExternalContent' aria-expanded='false' aria-label='ToggleNavigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='container'>
					<div className='navbar-header'>
						<Link className='navbar-brand' to='/home'><img src='/images/dordonidoorstransparent.png' style={{maxHeight: '70px'}}/></Link>
					</div>

					<div className='collapse navbar-collapse'>
						<ul className='navbar-nav'>
							<li className={'nav-item ' + (this.state.currentRoute === '/home' ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/home')} className='nav-link' to='/home'>Home</Link>
							</li>
							<li className={'nav-item ' + (this.state.currentRoute === '/contact' ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/contact')} className='nav-link' to='/contact'>Contact Us</Link>
							</li>
							<li className={'nav-item ' + (this.state.currentRoute === '/services'  ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/services')} className='nav-link' to='/services'>Services</Link>
							</li>
							<li className={'nav-item ' + (this.state.currentRoute === '/gallery'  ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/gallery')} className='nav-link' to='/gallery'>Gallery</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar
