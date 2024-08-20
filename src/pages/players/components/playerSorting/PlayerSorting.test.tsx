import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerSorting from './PlayerSorting';
import { usePlayerStore } from 'store/playerStore';

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

describe('Player Sorting Component', () => {
    test('renders the Select component correctly and changes sort order', () => {
        render(<PlayerSorting />);

        const selectElement = screen.getByTestId('sorting-select');
        expect(selectElement).toBeInTheDocument();

        const options = screen.getAllByRole('option');
        expect(options).toHaveLength(3);
        expect(options[1]).toHaveTextContent('Ascending');
        expect(options[2]).toHaveTextContent('Descending');

        fireEvent.change(selectElement, { target: { value: 'desc' } });
        expect(mockSetSortOrder).toHaveBeenCalledWith('desc');
    });
});
