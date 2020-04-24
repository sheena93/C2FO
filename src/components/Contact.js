/**
 * @component Contact
 * This component is a stateless component to show the about page
 * @return {element} returns Contact component
 */

import React from 'react';

const Contact = () => {
  return (
    <div className='container'>
      <h5>Contact Us</h5>
      <p>
      This Application show the book list with add and delete functionality.
      </p>
      <div className='divider' />
      <h6>Address:</h6>
      <ul>
        <li>2020 C2FO</li>
        <li>Noida</li>
      </ul>
    </div>
  );
};

export default Contact;