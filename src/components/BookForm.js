/**
 * @component BookForm
 * This component is a stateless component to render the for for adding new book record in the application
 * @return {element} returns BookForm component
 */

import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import Button from '@material-ui/core/Button';

const BookForm = () => {
  const { addBook } = useContext(BookContext);

  const [book, setBook] = useState({
    title: '',
    author: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    addBook(book);
    setBook({
      title: '',
      author: ''
    });
  };

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Book</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='title'
              name='title'
              value={book.title}
              onChange={handleChange}
              placeholder='e.g. The Kite Runner'
              className='validate'
              required
            />
            <label className='active' htmlFor='title'>
              Title
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='author'
              name='author'
              value={book.author}
              onChange={handleChange}
              placeholder='e.g. Khaled Hosseini'
              className='validate'
              required
            />
            <label className='active' htmlFor='author'>
              Author
            </label>
          </div>
          <div className='input-field center'>
          <Button variant="contained" color="primary">
              <i className='material-icons right'>add_circle</i>Add
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
