/**
 * @component Dashboard
 * This component is a stateless component to render the components in fragment
 * @return {element} returns Dashboard component
 */

import React, { Fragment } from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Dashboard = () => {
  return (
    <Fragment>
      <BookList />
      <BookForm />
    </Fragment>
  );
};

export default Dashboard;