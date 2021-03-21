import Register from '../Components/Register';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Card test cases',() => {
    test('should have register component',() => {
        render(
            <Router>
                <Register/>
            </Router>
        )
    });
});