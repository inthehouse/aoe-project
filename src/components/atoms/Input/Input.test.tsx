import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component', () => {
    test('renders correctly with given props', () => {
        render(<Input id="test-id" name="test-name" value="test-value" placeholder="Test Placeholder" size="large" variant="outlined" onChange={() => { }} />);

        const inputElement = screen.getByPlaceholderText('Test Placeholder');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('id', 'test-id');
        expect(inputElement).toHaveAttribute('name', 'test-name');
        expect(inputElement).toHaveValue('test-value');
    });

    test('handles value changes correctly', async () => {
        const handleChange = jest.fn();
        const { rerender } = render(<Input value="initial" onChange={handleChange} />);

        const inputElement = screen.getByDisplayValue('initial') as HTMLInputElement;
        fireEvent.change(inputElement, { target: { value: 'new value' } });

        rerender(<Input value="new value" onChange={handleChange} />);

        await waitFor(() => {
            expect(handleChange).toHaveBeenCalledTimes(1);
            expect(handleChange).toHaveBeenCalledWith(expect.objectContaining({
                target: expect.objectContaining({ value: 'new value' })
            }));
            expect(inputElement.value).toBe('new value');
        });
    });

    test('shows placeholder text', () => {
        render(<Input placeholder="Test Placeholder" onChange={() => { }} />);

        const inputElement = screen.getByPlaceholderText('Test Placeholder');
        expect(inputElement).toBeInTheDocument();
    });

    test('applies CSS classes correctly', () => {
        render(<Input className="custom-class" size="small" variant="standard" onChange={() => { }} />);

        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveClass('custom-class');
        expect(inputElement).toHaveStyle('font-size: 0.75rem');
        expect(inputElement).toHaveStyle('border: none');
    });
});
