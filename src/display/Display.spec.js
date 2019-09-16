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
    const open = getByText(/open/i)
    const unlocked = getByText(/unlocked/i)
    expect (open.className).toMatch(/led green-led/i)
    expect (unlocked.className).toMatch(/led green-led/i)
});

test('is closed/unlocked', () => {
    const {getByText} = render(<Display closed = {true} locked = {false}/>);
    const closed = getByText(/closed/i)
    const unlocked = getByText(/unlocked/i)  
    expect (closed.className).toMatch(/led red-led/i)
    expect (unlocked.className).toMatch(/led green-led/i)
});

test('is open/locked', () => {
    const {getByText} = render(<Display closed = {false} locked = {true}/>);
    const open = getByText(/open/i)
    const locked = getByText(/locked/i)
    expect (open.className).toMatch(/led green-led/i)
    expect (locked.className).toMatch(/led red-led/i)
});

test('is closed/locked', () => {
    const {getByText} = render(<Display closed = {true} locked = {true}/>);
    const closed = getByText(/closed/i)
    const locked = getByText(/locked/i) 
    expect (closed.className).toMatch(/led red-led/i)
    expect (locked.className).toMatch(/led red-led/i)
});