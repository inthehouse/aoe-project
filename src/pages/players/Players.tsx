import React from 'react';
import PlayerGrid from './components/playerGrid/PlayerGrid';
import Header from 'components/organisms/Header/Header';
import PlayerDetail from './components/playerDetail/PlayerDetail';
import { usePlayerStore } from 'store/playerStore';

import { styles } from './Players.styles';

const Players: React.FC = () => {

    const { selectedPlayer } = usePlayerStore();

    return (
        <div data-testid="players-page" className={styles.container}>
            <Header />
            <div className={styles.mainContent}>
                <div className={`${styles.playerGrid} ${selectedPlayer ? styles.playerGridShrunk : ''}`} data-testid="player-grid">
                    <PlayerGrid />
                </div>
                {selectedPlayer && (
                    <div data-testid="player-detail" className={`${styles.playerDetail} ${selectedPlayer ? styles.playerDetailVisible : styles.playerDetailHidden}`}>
                        <PlayerDetail />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Players;