import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardPlayer from './CardPlayer';
import { theme } from 'theme/theme';
import { Player } from 'models/Player/Player';

const mockPlayer: Player = {
    id: 123,
    realName: 'John Doe',
    playerName: 'The Player',
    asset: 'Asset Description',
    imageURL: 'https://example.com/image.jpg'
};

describe('CardPlayer Component', () => {
    test('renders with default props', () => {
        render(<CardPlayer player={mockPlayer} />);

        expect(screen.getByTestId('player-image')).toBeInTheDocument();
        expect(screen.getByTestId('real-name')).toHaveTextContent('John Doe');
        expect(screen.getByTestId('divider')).toBeInTheDocument();
        expect(screen.getByTestId('player-name')).toHaveTextContent('The Player');
        expect(screen.getByTestId('asset')).toHaveTextContent('Asset Description');
    });

    test('applies styles based on selected prop', () => {
        const { rerender } = render(<CardPlayer player={mockPlayer} selected={true} />);

        expect(screen.getByTestId('real-name')).toHaveStyle(`color: ${theme.colors.white}`);
        expect(screen.getByTestId('divider')).toHaveStyle(`background-color: ${theme.colors.white}`);
        expect(screen.getByTestId('player-name')).toHaveStyle(`color: ${theme.colors.white}`);
        expect(screen.getByTestId('asset')).toHaveStyle(`color: ${theme.colors.white}`);

        rerender(<CardPlayer player={mockPlayer} selected={false} />);

        expect(screen.getByTestId('real-name')).toHaveStyle(`color: ${theme.colors.primary.dark}`);
        expect(screen.getByTestId('divider')).toHaveStyle(`background-color: ${theme.colors.primary.light}`);
        expect(screen.getByTestId('player-name')).toHaveStyle(`color: ${theme.colors.primary.main}`);
        expect(screen.getByTestId('asset')).toHaveStyle(`color: ${theme.colors.primary.main}`);
    });

    test('renders image correctly when imageURL is provided', () => {
        render(<CardPlayer player={mockPlayer} />);

        const image = screen.getByTestId('player-image') as HTMLImageElement;
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', mockPlayer.imageURL);
        expect(image).toHaveAttribute('alt', mockPlayer.realName);
    });

    test('displays correct text content', () => {
        render(<CardPlayer player={mockPlayer} />);

        expect(screen.getByTestId('real-name')).toHaveTextContent(mockPlayer.realName);
        expect(screen.getByTestId('player-name')).toHaveTextContent(mockPlayer.playerName);
        expect(screen.getByTestId('asset')).toHaveTextContent(mockPlayer.asset);
    });
});
