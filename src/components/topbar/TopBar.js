import React from 'react';

import './TopBar.scss';

const TopBar = () => {
  let phone = process.env.REACT_APP_PHONE;
  phone = phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
  return (
    <nav id='topbar' className='level'>
      <div className='level-left'>
        <p className='content is-small'>
          <span><a href={`tel:${phone}`}><i className='fas fa-phone'></i><strong>&nbsp;{process.env.REACT_APP_PHONE}</strong></a></span>&nbsp;&nbsp;
          <span><a href='mailto:dordonidoors@gmail.com'><i className='fas fa-envelope'></i><strong>&nbsp;dordonidoors@gmail.com</strong></a></span>
        </p>
      </div>
      <div className='level-right'>
        <p className='content is-small'>
          <span><strong>CSLB LICENCE #1048585</strong></span>
        </p>
      </div>
    </nav>
  );
};

export default TopBar;
