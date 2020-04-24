import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BookForm from './BookForm'
import BookContext from '../contexts/BookContext'

afterEach(cleanup);
const renderWithContext = (
    component) => {
    return {
      ...render(
          <BookForm value={BookContext}>
              {component}
          </BookForm>)
    }
  }
 
describe('About', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<BookForm />)
        expect(asFragment(<BookForm />)).toMatchSnapshot()
       })

       });
