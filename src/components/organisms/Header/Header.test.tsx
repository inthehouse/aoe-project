import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import { usePlayerStore } from 'store/playerStore';
import { theme } from 'theme/theme';

jest.mock('store/playerStore', () => ({
    usePlayerStore: jest.fn(),
}));

const mockSetSortOrder = jest.fn();
const mockSortOrder = 'asc';

beforeEach(() => {
    (usePlayerStore as unknown as jest.Mock).mockReturnValue({
        sortOrder: mockSortOrder,
        setSortOrder: mockSetSortOrder,
    });
});

describe('Header Component', () => {
    test('renders with the correct background style', () => {
        render(<Header />);
        const headerBox = screen.getByTestId('header');
        expect(headerBox).toHaveStyle(`background-color: ${theme.colors.primary.main}`);
    });

    test('renders the Select component correctly and changes sort order', () => {
        render(<Header />);

        const selectElement = screen.getByTestId('header-select');
        expect(selectElement).toBeInTheDocument();

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(3);
        expect(options[1]).toHaveTextContent('Ascending');
        expect(options[2]).toHaveTextContent('Descending');

        fireEvent.change(selectElement, { target: { value: 'desc' } });
        expect(mockSetSortOrder).toHaveBeenCalledWith('desc');
    });
});
