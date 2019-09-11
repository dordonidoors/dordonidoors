import React from 'react'
import PropTypes from 'prop-types'

import './TopBar.scss';

const TopBar = (props) => {
  let phone = process.env.REACT_APP_PHONE;
  phone = phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
  return (
    <nav id='topbar' className='level'>
      <div className='level-left'>
        <p className='content is-small'>
          <span><a href={`teL:${phone}`}><i className='fas fa-phone'></i><strong>&nbsp;(714) 777-7777</strong></a></span>&nbsp;&nbsp;
          <span><a href={`mailto:dordonidoors@gmail.com`}><i className='fas fa-envelope'></i><strong>&nbsp;dordonidoors@gmail.com</strong></a></span>
        </p>
      </div>
    </nav>
  );
};

export default TopBar;
