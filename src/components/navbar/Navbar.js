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
	render () {
		return(
			<nav id='navbar' className='navbar has-shadow'>
				<div className='container'>
					<div className='navbar-brand'>
						<a className='navbar-item is-hidden-touch'>
							<img src={`${process.env.REACT_APP_IMAGES_PREFIX}/dordonidoorstransparent.png`} style={{maxHeight: '60px'}}/>
						</a>

						<a
							role='button'
							className={`navbar-burger burger ${!this.state.isCollapsed ? 'is-active' : ''}`}
							aria-label='menu'
							aria-expanded='true'
							data-target='navMenu'
							onClick={() => this.setState({isCollapsed: !this.state.isCollapsed})}>
							<span></span>
							<span></span>
							<span></span>
						</a>
					</div>

					<div className={`navbar-menu ${!this.state.isCollapsed ? 'is-active' : ''}`} id='navMenu'>
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
			</nav>
		);
	}
}

export default Navbar

/*


*/
