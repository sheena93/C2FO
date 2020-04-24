/**
 * @component About
 * This component is a stateless component to show the about page
 * @return {element} returns About component
 */

import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h5>About Us</h5>
      <p>
        This Application show the book list with add and delete functionality.
      </p>
    </div>
  );
};

export default About;