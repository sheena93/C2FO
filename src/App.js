/**
 * @component App
 * This component is a stateless component to nest all the components we have created in the application
 * @return {element} returns App component
 */


import React from 'react';
import BookContextProvider from './contexts/BookContext';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <BookContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </BrowserRouter>
    </BookContextProvider>
  );
};

export default App;