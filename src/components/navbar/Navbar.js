import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// css
import './Navbar.css';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentRoute: this.props.location.pathname,
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
			<div className='pos-f-t'>
				<div className={this.state.isCollapsed ? 'collapse' : 'collapsed'} id='navbarToggleExternalContent'>
					<div className='bg-dark p-4 text-left'>
						<ul className='navbar-nav'>
							<li className={'nav-item ' + (this.state.currentRoute === '/home' ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/home')} className='nav-link' to='/home'><span className='text-muted'>Home</span></Link>
							</li>
							<li className={'nav-item ' + (this.state.currentRoute === '/contact' ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/contact')} className='nav-link' to='/contact'><span className='text-muted'>Contact Us</span></Link>
							</li>
							<li className={'nav-item ' + (this.state.currentRoute === '/services'  ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/services')} className='nav-link' to='/services'><span className='text-muted'>Services</span></Link>
							</li>
							<li className={'nav-item ' + (this.state.currentRoute === '/gallery'  ? 'active' : '')}>
								<Link onClick={this.handleLinkClick.bind(this, '/gallery')} className='nav-link' to='/gallery'><span className='text-muted'>Gallery</span></Link>
							</li>
						</ul>
					</div>
				</div>
				<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
					<button className='navbar-toggler' onClick={this.handleNavbarToggle.bind(this)}>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='container'>
						<div className='navbar-header'>
							<Link className='navbar-brand' to='/home'><img src={`/images/dordonidoorstransparent.png`} style={{maxHeight: '60px'}}/></Link>
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
			</div>
		);
	}
}

export default Navbar
