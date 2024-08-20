import { css } from '@emotion/css';
import { theme } from 'theme/theme';

export const styles = {
    input: (size: 'small' | 'medium' | 'large', variant: 'standard' | 'outlined') => {
        const getSizeStyles = (size: 'small' | 'medium' | 'large') => {
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

        const fontSize = getSizeStyles(size);
        const padding = getPadding(size);
        const borderColor = theme.colors.primary.main;
        const borderStyle = variant === 'outlined' ? `1px solid ${borderColor}` : 'none';

        return css`
            font-size: ${fontSize};
            padding: ${padding};
            border: ${borderStyle};
            border-radius: ${theme.shape.borderRadius}px;
            outline: none;
            width: 100%;
            box-sizing: border-box;
            transition: border-color 0.3s ease;

            &:focus {
                border-color: ${borderColor};
                box-shadow: 0 0 0 2px ${borderColor}20;
            }

            &::placeholder {
                color: ${theme.colors.primary.light};
            }
        `;
    },
};
