// Test away!
import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/react/cleanup-after-each'; // function at the top
import "jest-dom/extend-expect"; // added functionality (disabled)
import Control from './Controls'

describe ("test buttons", ()=>{
    describe ("test if buttons exist",()=>{
        it("find the buttons at initial state", ()=>{
            //render component
            const control = render(<Control closed={false} locked={false}/>) //diff combinations.
            //grab the element
            control.getByText('Lock Gate') // dot notation to find // not using var just checking
            control.getByText('Close Gate') // dot notation to find
            //
            expect(control.getByText('Lock Gate')).toBeDisabled()
            expect(control.getByText('Close Gate')).not.toBeDisabled()
        })
        it("find the buttons open gate", ()=>{
            //render component
            const control = render(<Control closed={true} locked={false}/>) //diff combinations.
            //grab the element
            control.getByText('Lock Gate') // dot notation to find // not using var just checking
            control.getByText('Open Gate') // dot notation to find
            //
            expect(control.getByText('Lock Gate')).not.toBeDisabled()
            expect(control.getByText('Open Gate')).not.toBeDisabled()
        })
        it("unlock Gate", ()=>{
            //render component
            const control = render(<Control closed={true} locked={true}/>) //diff combinations.
            //grab the element
            control.getByText('Unlock Gate') // dot notation to find // not using var just checking
            control.getByText('Open Gate') // dot notation to find
            //
            expect(control.getByText('Unlock Gate')).not.toBeDisabled()
            expect(control.getByText('Open Gate')).toBeDisabled()
        })
    })
})