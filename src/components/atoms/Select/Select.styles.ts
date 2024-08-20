import { css } from '@emotion/css';
import { theme } from 'theme/theme';

const getFontSize = (size: 'small' | 'medium') =>
    size === 'small' ? '0.875rem' : '1rem';

const getPadding = (size: 'small' | 'medium') =>
    size === 'small' ? '0.25rem 0.5rem' : '0.5rem 1rem';

export const styles = {
    select: (size: 'small' | 'medium') => css`
        margin: ${theme.spacing(1)};
        min-width: 120px;
        border-radius: ${theme.shape.borderRadius}px;
        background-color: ${theme.colors.white};
        border: 1px solid ${theme.colors.primary.main};
        font-size: ${getFontSize(size)};
        padding: ${getPadding(size)};
        outline: none;
        cursor: pointer;
        &:focus {
            border-color: ${theme.colors.primary.dark};
        }
    `,
    container: css`
        position: relative;
        display: inline-block;
        width: 100%;
    `,
};
