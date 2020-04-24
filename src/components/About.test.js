import React from "react";
import {render,cleanup} from '@testing-library/react'
import About from './About';

afterEach(cleanup)

describe('About', () => {
    it('should take a snapshot', () => {
        const { asFragment } = render(<About />)
        expect(asFragment(<About />)).toMatchSnapshot()
       })
});



