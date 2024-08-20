import React from 'react';
import { styles } from './Card.styles';

interface CardProps {
    children: React.ReactNode;
    maxWidth?: number | string;
    radius?: number;
    padding?: number;
    noBorder?: boolean;
    className?: string;
    testId?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    maxWidth = '100%',
    radius = 8,
    padding = 2,
    noBorder = false,
    className,
    testId,
}) => {
    const cardStyles = styles.card({ maxWidth, radius, padding, noBorder });
    const contentStyles = styles.content(padding);

    return (
        <div className={`${cardStyles} ${className || ''}`} data-testid={testId}>
            <div className={contentStyles} data-testid="card-content">
                {children}
            </div>
        </div>
    );
};

export default Card;
