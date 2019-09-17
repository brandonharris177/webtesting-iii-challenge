// Test away!
import React from 'react';
import Controls from './Controls';
import {render, fireEvent } from '@testing-library/react';

test('Controls renders without crashing', () => {
    render(<Controls />);
});

test('Controls should match snapshot', () => {
    expect(render(<Controls/>)).toMatchSnapshot();
});

test('is open/unlocked', () => {
    const openedSpy = jest.fn();
    const unlockedSpy = jest.fn();
    const {getByText} = render(<Controls closed = {true} locked = {true} toggleClosed = {openedSpy} toggleLocked = {unlockedSpy}/>);
    const openGateButton = getByText(/open gate/i)
    const unlockGateButton = getByText(/unlock gate/i)
    expect (openGateButton.disabled).toBeTruthy()
    expect (unlockGateButton.className).toBeTruthy()

    fireEvent.click(openGateButton);
    expect(openedSpy).toBeCalled();
});

test('is closed/unlocked', () => {
    const closedSpy = jest.fn();
    const lockedSpy = jest.fn();
    const {getByText} = render(<Controls closed = {false} locked = {true} toggleClosed = {closedSpy} toggleLocked = {lockedSpy}/>);
    const closeGateButton = getByText(/close gate/i)
    const unlockGateButton = getByText(/unlock gate/i)  
    expect (closeGateButton.disabled).toBeTruthy()
    expect (unlockGateButton.className).toBeTruthy()
    
    fireEvent.click(closeGateButton);
    expect(closedSpy).toBeCalled();
});

test('is open/locked', () => {
    const {getByText} = render(<Controls closed = {true} locked = {false}/>);
    const openGateButton = getByText(/open gate/i)
    const lockGateButton = getByText(/lock gate/i)
    expect (openGateButton.disabled).toBeFalsy()
    expect (lockGateButton.className).toBeTruthy()
});

test('is closed/locked', () => {
    const {getByText} = render(<Controls closed = {false} locked = {false}/>);
    const closeGateButton = getByText(/close Gate/i)
    const lockGateButton = getByText(/lock Gate/i) 
    expect (closeGateButton.disabled).toBeFalsy()
    expect (lockGateButton.className).toBeTruthy()
});

