import React from 'react';
import { cx } from '@emotion/css';

import Card from 'components/atoms/Card/Card';
import { Player } from 'models/Player/Player';

import { styles } from './CardPlayer.styles';

interface CardPlayerProps {
    player: Player;
    selected?: boolean;
}

const CardPlayer: React.FC<CardPlayerProps> = ({ player, selected = false }) => {
    const { realName, playerName, asset, imageURL } = player;

    return (
        <Card
            className={cx(styles.card(selected), 'card')}
            maxWidth={345}
            radius={8}
            padding={2}
            noBorder={false}
        >
            {imageURL && (
                <div className={styles.imageContainer}>
                    <img
                        src={imageURL}
                        alt={realName}
                        className={styles.image}
                        data-testid="player-image"
                    />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={cx(styles.realName(selected), 'realName')} data-testid="real-name">
                    {realName}
                </div>
                <div className={cx(styles.divider(selected), 'divider')} data-testid="divider" />
                <div className={cx(styles.playerName(selected), 'playerName')} data-testid="player-name">
                    {playerName}
                </div>
                <div className={cx(styles.assetText(selected), 'assetText')} data-testid="asset">
                    {asset}
                </div>
            </div>
        </Card>
    );
};

export default CardPlayer;
