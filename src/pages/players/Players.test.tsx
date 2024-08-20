import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Players from './Players';
import '@testing-library/jest-dom/extend-expect';
import { usePlayerStore } from 'store/playerStore';
import { getPlayers } from 'services/playerService';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('services/playerService', () => ({
    getPlayers: jest.fn(),
}));

jest.mock('store/playerStore', () => ({
    usePlayerStore: jest.fn(),
}));

describe('Players Component', () => {
    const mockSetPlayers = jest.fn();
    const mockSelectPlayer = jest.fn();
    const mockDeselectPlayer = jest.fn();

    const queryClient = new QueryClient();

    beforeEach(() => {
        jest.clearAllMocks();

        (usePlayerStore as unknown as jest.Mock).mockReturnValue({
            selectedPlayer: null,
            selectPlayer: mockSelectPlayer,
            deselectPlayer: mockDeselectPlayer,
            setPlayers: mockSetPlayers,
        });

        (getPlayers as jest.Mock).mockResolvedValue([
            {
                id: 1,
                realName: 'Alice',
                playerName: 'alice',
                asset: 'Asset 1',
                imageURL: '',
            },
            {
                id: 2,
                realName: 'Bob',
                playerName: 'bob',
                asset: 'Asset 2',
                imageURL: '',
            },
        ]);
    });

    test('renders header', async () => {
        await act(async () => {
            render(
                <QueryClientProvider client={queryClient}>
                    <Players />
                </QueryClientProvider>
            );
        });

        // Adjust the query to match the actual test ID or role used in Header component
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    test('displays player grid with mock players', async () => {
        await act(async () => {
            render(
                <QueryClientProvider client={queryClient}>
                    <Players />
                </QueryClientProvider>
            );
        });

        await waitFor(() => {
            // Adjust the test ID or role based on your PlayerGrid component's implementation
            expect(screen.getByTestId('player-grid')).toBeInTheDocument();
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
        });
    });

    test('shows PlayerDetail when a player is selected', async () => {
        (usePlayerStore as unknown as jest.Mock).mockReturnValue({
            selectedPlayer: {
                id: 1,
                realName: 'Joy',
                playerName: 'joyboy',
                asset: 'Asset 1',
                imageURL: '',
            },
            selectPlayer: mockSelectPlayer,
            deselectPlayer: mockDeselectPlayer,
            setPlayers: mockSetPlayers,
        });

        await act(async () => {
            render(
                <QueryClientProvider client={queryClient}>
                    <Players />
                </QueryClientProvider>
            );
        });

        await waitFor(() => {
            expect(screen.getByTestId('player-detail')).toBeInTheDocument();
        });

        expect(screen.getByText('joyboy')).toBeInTheDocument();
    });
});
