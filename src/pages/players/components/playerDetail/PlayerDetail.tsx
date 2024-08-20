import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { usePlayerStore } from 'store/playerStore';

import Button from 'components/atoms/Button/Button';
import Card from 'components/atoms/Card/Card';
import { styles } from './PlayerDetail.styles';


const PlayerDetail: React.FC = () => {

    const { selectedPlayer, deselectPlayer, submitPlayer } = usePlayerStore();

    if (!selectedPlayer) {
        return null;
    }
    const { realName, playerName, asset, imageURL } = selectedPlayer;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await submitPlayer(selectedPlayer);
        } catch (error) {
            console.error('Submission error:', error);
        }
    };

    return (
        <Card className={styles.playerDetail} testId="card-detail">
            <div className={styles.gridContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.closeButton}>
                        <Button
                            testId='submit-button'
                            variant='contained'
                            type='submit'
                            size='small'
                            className={styles.submitButton}
                        >
                            Submit
                        </Button>
                        <Button
                            testId='close-button'
                            variant='text'
                            onClick={deselectPlayer}
                            size='small'
                        >
                            <CloseOutlined className={styles.closeIcon} />
                        </Button>
                    </div>
                    <div>
                        {imageURL && (
                            <div className={styles.imageContainer}>
                                <img
                                    src={imageURL}
                                    alt={realName}
                                    className={styles.image}
                                />
                            </div>
                        )}
                        <div className={styles.textContainer}>
                            <div className={styles.realName}>
                                {realName}
                            </div>
                            <div className={styles.divider} />
                            <div className={styles.playerName}>
                                {playerName}
                            </div>
                            <div className={styles.asset}>
                                {asset}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
};

export default PlayerDetail;
