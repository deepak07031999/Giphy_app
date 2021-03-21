import ReadCard from '../Components/ReadCard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Card test cases',() => {
    test('should have readcard component',() => {
        render(
            <Router>
                <ReadCard/>
            </Router>
        )
    });
});