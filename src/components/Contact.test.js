import React from "react";
import {render,cleanup} from '@testing-library/react'
import Contact from './Contact';

afterEach(cleanup)

describe('Contact', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment(<Contact />)).toMatchSnapshot()
       })
});



