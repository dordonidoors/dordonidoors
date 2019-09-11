import React from 'react'
import PropTypes from 'prop-types'

import './TopBar.scss';

const TopBar = (props) => {
  return (
    <nav id='topbar' className='level'>
      <div className='level-left'>
        <p className='content is-small'>
          <span><i className='fas fa-phone'></i><strong>&nbsp;(714) 777-7777</strong></span>&nbsp;&nbsp;
          <span><i className='fas fa-envelope'></i><strong>&nbsp;dordonidoors@gmail.com</strong></span>
        </p>
      </div>
    </nav>
  );
};

export default TopBar;
