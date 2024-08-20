import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerGrid from './PlayerGrid';
import { usePlayerStore } from 'store/playerStore';
import { usePlayerQuery } from 'pages/players/hooks/playerQuery';
import { Player } from 'models/Player/Player';

jest.mock('store/playerStore', () => ({
    usePlayerStore: jest.fn(),
}));

jest.mock('pages/players/hooks/playerQuery', () => ({
    usePlayerQuery: jest.fn(),
}));

const mockSelectPlayer = jest.fn();
const mockDeselectPlayer = jest.fn();

const mockPlayers: Player[] = [
    { id: 1, realName: 'Alice', playerName: 'alice', asset: 'Asset A', imageURL: '' },
    { id: 2, realName: 'Malice', playerName: 'malice', asset: 'Asset A', imageURL: '' },
];

describe('PlayerGrid Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();

        (usePlayerStore as unknown as jest.Mock).mockReturnValue({
            sortOrder: 'asc',
            selectPlayer: mockSelectPlayer,
            deselectPlayer: mockDeselectPlayer,
            selectedPlayer: null,
        });

        (usePlayerQuery as unknown as jest.Mock).mockReturnValue({
            isLoading: false,
            error: null,
            players: mockPlayers,
        });
    });

    test('renders the correct number of players', () => {
        render(<PlayerGrid />);

        const playerItems = screen.getAllByTestId('card-item');
        expect(playerItems).toHaveLength(mockPlayers.length);
    });

    test('renders players in the correct order based on sortOrder', async () => {
        render(<PlayerGrid />);

        const playerItems = await screen.findAllByTestId('card-item');
        expect(playerItems[0]).toHaveTextContent('Alice');
        expect(playerItems[1]).toHaveTextContent('Malice');
    });

    test('calls selectPlayer or deselectPlayer when a player card is clicked', async () => {
        render(<PlayerGrid />);

        const playerItems = await screen.findAllByTestId('card-item');

        fireEvent.click(playerItems[0]);
        expect(mockSelectPlayer).toHaveBeenCalledWith(mockPlayers[0]);

    });
});
