import React, {PropTypes} from 'react';

// css
import './Footer.scss';

export default class Footer extends React.Component {
	render() {
		return (
			<footer className='footer'>
				<div className='content has-text-centered'>
					<p>
						Copyright © 2019 Dordoni Doors - All Rights Reserved
					</p>
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
};
