import { css } from '@emotion/css';
import { theme } from 'theme/theme';

interface CardStylesProps {
    maxWidth: number | string;
    radius: number;
    padding: number;
    noBorder: boolean;
}

const getCardBorder = (noBorder: boolean) => 
    noBorder ? 'none' : `1px solid ${theme.colors.primary.light}`;

export const styles = {
    card: ({ maxWidth, radius, noBorder }: CardStylesProps) => css`
        max-width: ${maxWidth};
        border-radius: ${radius}px;
        margin: auto;
        border: ${getCardBorder(noBorder)};
    `,
    content: (padding: number) => css`
        padding: ${padding}rem;
    `,
};
