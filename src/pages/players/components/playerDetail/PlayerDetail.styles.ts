import { css } from '@emotion/css';
import { theme } from 'theme/theme';

export const styles = {
    playerDetail: css`
        position: relative;
        margin-left: ${theme.spacing(2)};
        margin-right: ${theme.spacing(2)};
    `,
    gridContainer: css`
        min-height: 345px;
    `,
    closeButton: css`
        position: absolute;
        top: ${theme.spacing(1)};
        right: ${theme.spacing(1)};
        color: ${theme.colors.primary.dark};
    `,
    submitButton: css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};
    top: ${theme.spacing(1)};
    left: ${theme.spacing(1)};
`,
    closeIcon: css`
        color: ${theme.colors.primary.dark};
    `,
    input: css`
    border: none;
    outline: none;
    :focus {
        box-shadow:none;
    }
`,
    imageContainer: css`
        padding-bottom: ${theme.spacing(4)};
        text-align: center;
    `,
    image: css`
        width: 100%;
        height: auto;
        border-radius: ${theme.shape.borderRadius}px;
    `,
    textContainer: css`
        text-align: center;
        padding: ${theme.spacing(2)};
    `,
    divider: css`
         max-width: 30%;
        margin: ${theme.spacing(2)} auto;
        background-color: ${theme.colors.primary.light};
        height: 1px;
    `,
    realName: css`
       text-transform: uppercase;
        font-size: ${theme.fonts.xs};
        margin-bottom: ${theme.spacing(4)};
        color: ${theme.colors.primary.dark};
    `,
    playerName: css`
        color: ${theme.colors.primary.main};
        margin-bottom: ${theme.spacing(4)};
        font-size: ${theme.fonts.lg};
    `,
    asset: css`
        font-size: 0.875rem;
        color: ${theme.colors.primary.main};
    `,
};
