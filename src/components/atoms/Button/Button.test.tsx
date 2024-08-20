import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
import { theme } from 'theme/theme';

describe('Button Component', () => {
    test('renders with default props', () => {
        render(<Button onClick={() => { }} testId="default-button">Click Me</Button>);
        const button = screen.getByTestId('default-button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click Me');
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} testId="clickable-button">Click Me</Button>);
        const button = screen.getByTestId('clickable-button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('applies correct styles for contained variant', () => {
        render(<Button onClick={() => { }} variant="contained" testId="contained-button">Contained</Button>);
        const button = screen.getByTestId('contained-button');
        expect(button).toHaveStyle(`background-color: ${theme.colors.primary.main}`);
        expect(button).toHaveStyle(`color: ${theme.colors.primary.contrastText}`);
        expect(button).toHaveStyle(`border: none`);
    });

    test('applies correct styles for outlined variant', () => {
        render(<Button onClick={() => { }} variant="outlined" testId="outlined-button">Outlined</Button>);
        const button = screen.getByTestId('outlined-button');
        expect(button).toHaveStyle(`border: 1px solid ${theme.colors.primary.main}`);
        expect(button).toHaveStyle(`color: ${theme.colors.primary.contrastText}`);
        expect(button).toHaveStyle(`background-color: transparent`);
    });

    test('applies correct size styles for large size', () => {
        render(<Button onClick={() => { }} size="large" testId="large-button">Large Button</Button>);
        const button = screen.getByTestId('large-button');
        expect(button).toHaveStyle('font-size: 1.25rem');
        expect(button).toHaveStyle('padding: 0.75rem 1.5rem');
    });

    test('applies correct size styles for small size', () => {
        render(<Button onClick={() => { }} size="small" testId="small-button">Small Button</Button>);
        const button = screen.getByTestId('small-button');
        expect(button).toHaveStyle('font-size: 0.75rem');
        expect(button).toHaveStyle('padding: 0.25rem 0.5rem');
    });

    test('applies correct size styles for medium size', () => {
        render(<Button onClick={() => { }} size="medium" testId="medium-button">Medium Button</Button>);
        const button = screen.getByTestId('medium-button');
        expect(button).toHaveStyle('font-size: 1rem');
        expect(button).toHaveStyle('padding: 0.5rem 1rem');
    });
});
