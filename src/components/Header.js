import React from 'react';
import { Link } from 'react-router-dom';
import GoogleOuth from './GoogleOuth';
const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>
        Streamer
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All Stream
        </Link>
        <GoogleOuth className='item' />
      </div>
    </div>
  );
};

export default Header;
