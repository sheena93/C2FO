import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BookContext from './BookContext'

afterEach(cleanup);
 
describe('BookContext', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<BookContext />)
        expect(asFragment(<BookContext />)).toMatchSnapshot()
       })

       it('should equal to ', () => {
        const { getByTestId } = render(<BookContext  />); 
        expect(getByTestId('book')).toHaveTextContent(2)
       });
});
