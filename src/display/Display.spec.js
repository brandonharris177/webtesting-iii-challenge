// Test away!
import React from 'react';
import Display from './Display';
import {render} from '@testing-library/react';

test('Display renders without crashing', () => {
    render(<Display />);
});

test('should match snapshot', () => {
    expect(render(<Display/>)).toMatchSnapshot();
});

test('is open/unlocked', () => {
    const {getByText} = render(<Display closed = {false} locked = {false}/>);
    getByText(/open/i)
    getByText(/unlocked/i)
    
});

test('is closed/unlocked', () => {
    const {getByText} = render(<Display closed = {true} locked = {false}/>);
    getByText(/closed/i)
    getByText(/unlocked/i)
    
});

test('is open/locked', () => {
    const {getByText} = render(<Display closed = {false} locked = {true}/>);
    getByText(/open/i)
    getByText(/locked/i)
    
});

test('is closed/locked', () => {
    const {getByText} = render(<Display closed = {true} locked = {true}/>);
    getByText(/closed/i)
    getByText(/locked/i) 
});