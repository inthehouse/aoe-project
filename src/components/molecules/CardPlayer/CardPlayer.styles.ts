import { css } from '@emotion/css';
import { theme } from 'theme/theme';

export const styles = {
    card: (selected: boolean) => css`
        cursor: pointer;
        color: ${selected ? theme.colors.white : theme.colors.primary.main};
        background-color: ${selected ? theme.colors.primary.main : theme.colors.white};
    `,
    imageContainer: css`
        padding-bottom: ${theme.spacing(4)};
        text-align: center;
    `,
    image: css`
        width: 150px;
        height: 150px;
        border-radius: ${theme.shape.borderRadius}px;
        margin: auto;
    `,
    textContainer: css`
        text-align: center;
        padding: ${theme.spacing(2)};
    `,
    divider: (selected: boolean) => css`
        max-width: 10%;
        margin: ${theme.spacing(2)} auto;
        background-color: ${selected ? theme.colors.white : theme.colors.primary.light};
        height: 1px;
    `,
    realName: (selected: boolean) => css`
        text-transform: uppercase;
        font-size: ${theme.fonts.xs};
        margin-bottom: ${theme.spacing(4)};
        color: ${selected ? theme.colors.white : theme.colors.primary.dark};
    `,
    playerName: (selected: boolean) => css`
        color: ${selected ? theme.colors.white : theme.colors.primary.main};
        margin-bottom: ${theme.spacing(4)};
        font-size: ${theme.fonts.lg};
    `,
    assetText: (selected: boolean) => css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${selected ? theme.colors.white : theme.colors.primary.main};
    `,
};
