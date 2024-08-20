import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { theme } from 'theme/theme';

describe('Header Component', () => {
    test('renders with the correct background style', () => {
        render(<Header />);
        const headerBox = screen.getByTestId('header');
        expect(headerBox).toHaveStyle(`background-color: ${theme.colors.primary.main}`);
    });

    test('renders the correct text', () => {
        render(<Header />);
        const headerBox = screen.getByTestId('header');
        expect(headerBox).toHaveTextContent('AOE Card Game');
    });
});
