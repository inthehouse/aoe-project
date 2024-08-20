import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerDetail from './PlayerDetail';
import { usePlayerStore } from 'store/playerStore';
import { Player } from 'models/Player/Player';

jest.mock('store/playerStore', () => ({
    usePlayerStore: jest.fn(),
}));

describe('PlayerDetail Component', () => {
    const mockPlayer: Player = {
        id: 1,
        realName: 'Bobby Deol',
        playerName: 'bobbydeol',
        asset: 'Some asset description',
        imageURL: 'https://example.com/image.jpg',
    };

    const mockDeselectPlayer = jest.fn();
    const mockSubmitPlayer = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();

        (usePlayerStore as unknown as jest.Mock).mockReturnValue({
            selectedPlayer: mockPlayer,
            deselectPlayer: mockDeselectPlayer,
            submitPlayer: mockSubmitPlayer,
        });
    });

    test('renders player details card correctly', () => {
        render(<PlayerDetail />);

        expect(screen.getByTestId('card-detail')).toBeInTheDocument();
        expect(screen.getByText(mockPlayer.realName)).toBeInTheDocument();
        expect(screen.getByText(mockPlayer.playerName)).toBeInTheDocument();
        expect(screen.getByText(mockPlayer.asset)).toBeInTheDocument();
        expect(screen.getByAltText(mockPlayer.realName)).toHaveAttribute('src', mockPlayer.imageURL);
    });

    test('calls submitPlayer when submit button is clicked', async () => {
        render(<PlayerDetail />);

        const submitButton = screen.getByTestId('submit-button');
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockSubmitPlayer).toHaveBeenCalledWith(mockPlayer);
        });
    });

    test('calls deselectPlayer when close button is clicked', () => {
        render(<PlayerDetail />);

        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);

        expect(mockDeselectPlayer).toHaveBeenCalled();
    });
});
