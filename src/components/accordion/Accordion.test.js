import React from 'react';
import { render, wait } from '@testing-library/react';
import UserEvents from '@testing-library/user-event';

import AccordionComponent from './Accordion';

describe('AccordionComponent', () => {
    test('should open only the first index on render', () => {
        const mockProps = [
            { title: 'someTitle', contents: 'someContents' }
        ];
        const { getByText } = render(<AccordionComponent items={mockProps} />);

        expect(getByText('someTitle')).toBeInTheDocument();
        expect(getByText('someContents')).toBeInTheDocument();
    });

    test('should not open the accordion after the first index', () => {
        const mockProps = [
            { title: 'someTitle', contents: 'someContents' },
            { title: 'someOtherTitle', contents: 'someOtherContents' }
        ];
        const { getByText, queryByText } = render(<AccordionComponent items={mockProps} />);

        expect(getByText('someTitle')).toBeInTheDocument();
        expect(getByText('someContents')).toBeInTheDocument();
        expect(getByText('someOtherTitle')).toBeInTheDocument();
        expect(queryByText('someOtherContents')).not.toBeInTheDocument();
    });

    test('should open the accordion when the button is clicked', async () => {
        const mockProps = [
            { title: 'someTitle', contents: 'someContents' },
            { title: 'someOtherTitle', contents: 'someOtherContents' }
        ];
        const { getByText, queryByText } = render(<AccordionComponent items={mockProps} />);

        UserEvents.click(getByText('someOtherTitle'));

        await wait(() => {
            expect(queryByText('someOtherContents')).toBeInTheDocument();
        });
    });

    test('should close other accordions when another is opened', async () => {
        const mockProps = [
            { title: 'someTitle', contents: 'someContents' },
            { title: 'someOtherTitle', contents: 'someOtherContents' }
        ];
        const { getByText, queryByText } = render(<AccordionComponent items={mockProps} />);

        UserEvents.click(getByText('someOtherTitle'));

        await wait(() => {
            expect(queryByText('someContents')).not.toBeInTheDocument();
            expect(queryByText('someOtherContents')).toBeInTheDocument();
        });
    });
});
