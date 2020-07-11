import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
test('renders learn react link', () => {
    const { getByText } = render(<Home />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

test('renders correctly', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  })
})
