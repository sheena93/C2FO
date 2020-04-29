/**
 * @component About
 * This component is a stateless component to link the navigation of pages
 * @return {element} returns About component
 */


import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'right' });
  });

  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
        <AppBar>
        <Toolbar>
         <Typography variant="title" color="inherit">
          <a href='/' className='brand'>
            Novel<span>App</span>
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='right sidenav-trigger'
          >
            <i className='material-icons'>Menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          </Typography>
                </Toolbar>
          </AppBar>
        </div>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/' className='waves-effect sidenav-close'>
            <i className='material-icons'>home</i>Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='waves-effect sidenav-close'>
            <i className='material-icons'>business</i>About
          </Link>
        </li>
        <li>
          <Link to='/contact' className='waves-effect sidenav-close'>
            <i className='material-icons'>mail</i>Contact
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;