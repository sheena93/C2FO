/**
 * @component BookContextProvider
 * This component is a stateless component to create Context object
 * @return {element} returns BookContextProvider component
 */

import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'Number the Stars',
      author: 'Lois Lowry'
    },
    {
      id: 2,
      title: 'The Very Hungry Caterpillar',
      author: 'Eric Carle'
    }
  ]);

  const addBook = book => {
    setBooks([...books, { ...book, id: uniqid() }]);
  };

  const deleteBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;