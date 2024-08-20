import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from './Select';

describe('Select Component', () => {
    test('renders with default props', () => {
        render(
            <Select value="option1" onChange={() => { }} testId="select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        const select = screen.getByTestId('select');
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue('option1');
    });

    test('applies small size styles', () => {
        render(
            <Select value="option1" onChange={() => { }} size="small" testId="select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        const select = screen.getByTestId('select');
        expect(select).toHaveStyle(`font-size: 0.875rem`);
        expect(select).toHaveStyle(`padding: 0.25rem 0.5rem`);
    });

    test('applies medium size styles', () => {
        render(
            <Select value="option1" onChange={() => { }} size="medium" testId="select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        const select = screen.getByTestId('select');
        expect(select).toHaveStyle(`font-size: 1rem`);
        expect(select).toHaveStyle(`padding: 0.5rem 1rem`);
    });

    test('calls onChange handler when value changes and updates value correctly', async () => {
        const handleChange = jest.fn();
        const { rerender } = render(
            <Select value="option1" onChange={handleChange} testId="select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        const select = screen.getByTestId('select') as HTMLSelectElement;
        fireEvent.change(select, { target: { value: 'option2' } });
        rerender(
            <Select value="option2" onChange={handleChange} testId="select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </Select>
        );
        await waitFor(() => {
            expect(handleChange).toHaveBeenCalled();
            expect(select.value).toBe('option2');
        });
    });
});
