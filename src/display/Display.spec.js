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