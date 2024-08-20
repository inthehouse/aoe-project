import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';
import { theme } from 'theme/theme';

describe('Card Component', () => {
    test('renders with default props', () => {
        render(<Card testId="card">Default Card</Card>);
        const card = screen.getByTestId('card');
        const cardContent = screen.getByTestId('card-content');
        expect(card).toBeInTheDocument();
        expect(cardContent).toBeInTheDocument();
        expect(card).toHaveStyle(`max-width: 100%`);
        expect(card).toHaveStyle(`border-radius: 8px`);
        expect(card).toHaveStyle(`border: 1px solid ${theme.colors.primary.light}`);
    });

    test('applies custom maxWidth', () => {
        render(<Card testId="card" maxWidth="300px">Custom Width Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toHaveStyle('max-width: 300px');
    });

    test('applies custom radius', () => {
        render(<Card testId="card" radius={16}>Custom Radius Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toHaveStyle('border-radius: 16px');
    });

    test('applies custom padding', () => {
        render(<Card testId="card" padding={3}>Custom Padding Card</Card>);
        const cardContent = screen.getByTestId('card-content');
        expect(cardContent).toHaveStyle('padding: 3rem');
    });

    test('applies noBorder when true', () => {
        render(<Card testId="card" noBorder={true}>No Border Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toHaveStyle('border: none');
    });

    test('applies border when noBorder is false', () => {
        render(<Card testId="card" noBorder={false}>With Border Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toHaveStyle(`border: 1px solid ${theme.colors.primary.light}`);
    });
});
