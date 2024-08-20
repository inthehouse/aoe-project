import { css } from '@emotion/css';
import { theme } from 'theme/theme';

export const styles = {
    masonryContainer: css`
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing(2)};
    `,
    cardItem: css`
        width: calc(33.333% - ${theme.spacing(3)});
        box-sizing: border-box;
        margin-right: ${theme.spacing(3)};
        margin-bottom: ${theme.spacing(3)};
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.02);
        }
    `,
};
