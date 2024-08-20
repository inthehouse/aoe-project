import React, { useEffect, useRef, useMemo } from 'react';
import Masonry from 'masonry-layout';

import { usePlayerStore, SortOrder } from 'store/playerStore';
import CardPlayer from 'components/molecules/CardPlayer/CardPlayer';
import { Player } from 'models/Player/Player';

import { styles } from './PlayerGrid.styles';
import { usePlayerQuery } from 'pages/players/hooks/playerQuery';

const PlayerGrid: React.FC = () => {
    const { sortOrder, selectPlayer } = usePlayerStore();
    const { isLoading, players = [], error } = usePlayerQuery();
    const { selectedPlayer } = usePlayerStore();

    const containerRef = useRef<HTMLDivElement>(null);

    const sortingFunctions: Record<SortOrder, (a: Player, b: Player) => number> = {
        'asc': (a, b) => a.realName.localeCompare(b.realName),
        'desc': (a, b) => b.realName.localeCompare(a.realName),
        'none': () => 0
    };

    const sortedPlayers = useMemo(() => {
        const sortFunction = sortingFunctions[sortOrder];
        return sortOrder === 'none' ? players : [...players].sort(sortFunction);
    }, [players, sortOrder]);

    useEffect(() => {
        const masonry = containerRef.current ? new Masonry(containerRef.current, {
            itemSelector: '.card-item',
            columnWidth: '.card-item',
            percentPosition: true,
        }) : null;

        return () => masonry?.destroy();
    }, [sortedPlayers]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching players</div>;

    return (
        <div className={styles.masonryContainer} ref={containerRef}>
            {sortedPlayers.map((player) => (
                <div
                    data-testid="card-item"
                    onClick={() => {
                        selectPlayer(player);
                    }}
                    key={player.id}
                    className={`${styles.cardItem} card-item`}
                >
                    <CardPlayer
                        player={player}
                        selected={player.id === selectedPlayer?.id}
                    />
                </div>
            ))}
        </div>
    );
};

export default PlayerGrid;
