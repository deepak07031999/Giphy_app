import Home2 from '../Components/Home2';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Card test cases',() => {
    test('should have home 2 component',() => {
        render(
            <Router>
                <Home2/>
            </Router>
        )
    });
});