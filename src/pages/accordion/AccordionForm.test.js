import React from 'react';
import { render } from '@testing-library/react';

import Accordion from './Accordion';

describe('Accordion Page', () => {
    test('should render correctly', () => {
        const { container } = render(<Accordion />);

        expect(container).toMatchSnapshot();
    });
});
