import React from 'react';
import { styles } from './Button.styles';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'text' | 'contained' | 'outlined';
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    testId?: string;

}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    className,
    type = 'button',
    testId,

}) => {
    const buttonStyles = styles.button({ variant, color, size });

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${buttonStyles} ${className || ''}`}
            data-testid={testId}
        >
            {children}
        </button>
    );
};

export default Button;
