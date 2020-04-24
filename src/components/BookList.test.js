import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BookList from './BookList'

afterEach(cleanup);
 
describe('BookList', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<BookList />)
        expect(asFragment(<BookList />)).toMatchSnapshot()
       })

       it('should equal to ', () => {
        const { getByTestId } = render(<BookList />); 
        expect(getByTestId('book')).toHaveTextContent(2)
       });
});
