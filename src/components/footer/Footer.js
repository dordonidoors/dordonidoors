import React, {PropTypes} from 'react';

// css
import './Footer.css';

export default class Footer extends React.Component {
	render() {
		return (
			<div class='footer'>
				<div className='copyright'>
					Copyright © 2019 Dordoni Doors - All Rights Reserved
				</div>
			</div>
		);
	}
}

Footer.propTypes = {
};
