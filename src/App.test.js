import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('pages/home/Home', () => () => 'Home')
    .mock('pages/accordion/Accordion', () => () => 'Accordion');

const renderMemoryRouter = (initialRoute = '/') => (
    render(
        <MemoryRouter initialRoute={initialRoute}>
            <App />
        </MemoryRouter>
    )
);

describe('App', () => {
    test('should render Home component on root route', () => {
        const { getByText } = renderMemoryRouter();

        expect(getByText('Home')).toBeInTheDocument();
    });

    test('should render accordion on /accordion route', () => {
        const { getByText, debug } = renderMemoryRouter('/accordion');

        debug();

        expect(getByText('Accordion')).toBeInTheDocument();
    })
});