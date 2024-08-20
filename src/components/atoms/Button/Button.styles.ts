import { css } from '@emotion/css';
import { theme } from 'theme/theme';

interface ButtonStylesProps {
    variant: 'text' | 'contained' | 'outlined';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size: 'small' | 'medium' | 'large';
}

const getButtonSize = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small': return '0.75rem';
        case 'large': return '1.25rem';
        default: return '1rem';
    }
};

const getPadding = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
        case 'small': return '0.25rem 0.5rem';
        case 'large': return '0.75rem 1.5rem';
        default: return '0.5rem 1rem';
    }
};

export const styles = {
    button: ({ variant, color, size }: ButtonStylesProps) => {
        const buttonSize = getButtonSize(size);
        const padding = getPadding(size);
        const buttonColor = theme.colors.primary.main;
        const buttonTextColor = theme.colors.primary.contrastText;
        const buttonBackgroundColor = variant === 'contained' ? buttonColor : 'transparent';
        const buttonBorder = variant === 'outlined' ? `1px solid ${buttonColor}` : 'none';

        return css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-family: ${theme.typography.fontFamily};
            font-size: ${buttonSize};
            border-radius: ${theme.shape.borderRadius}px;
            padding: ${padding};
            border: ${buttonBorder};
            background-color: ${buttonBackgroundColor};
            color: ${buttonTextColor};
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: center;
            text-decoration: none;
            line-height: 1;

            &:hover {
                opacity: 0.9;
            }

            &:focus {
                outline: none;
            }
        `;
    },
};
