import { css } from '@emotion/css';
import { theme } from 'theme/theme';

export const styles = {
    headerBox: css`
        background-color: ${theme.colors.primary.main};
        color: ${theme.colors.white};
        padding: ${theme.spacing(2)};
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: ${theme.shape.borderRadius * 2}px;
        height: 50px;
        margin: ${theme.spacing(1)};
        overflow: hidden;
    `,
    selectContainer: css`
        display: flex;
        align-items: center;
        height: 100%;
    `,
};
