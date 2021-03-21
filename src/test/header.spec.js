import Header from '../Components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';

describe('Card test cases',() => {
    test('should have header component',() => {
        render(
            <Router>
                <Header/>
            </Router>
        )
    });
});