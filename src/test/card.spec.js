import Card from '../Components/Card';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Card test cases',() => {
    test('should have Card component',() => {
        render(
            <Router>
                <Card/>
            </Router>
        )
    });
});

