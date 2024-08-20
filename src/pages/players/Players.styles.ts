import { css } from '@emotion/css';
import { theme } from 'theme/theme';

export const styles = {
    container: css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow-x: hidden;
    `,
    mainContent: css`
        display: flex;
        flex: 1;
        margin-top: ${theme.spacing(3)};
        overflow: hidden;
    `,
    playerGrid: css`
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        transition: width 0.4s ease; 
    `,
    playerGridShrunk: css`
        width: 70%; 
    `,
    playerDetail: css`
        top: 0;
        right: 0;
        width: 30%;
        height: 100%;
        opacity: 1;
        transition: width 0.4s ease, opacity 0.4s ease;
        transform: translateX(100%);
    `,
    playerDetailVisible: css`
        opacity: 1;
        transform: translateX(0);
    `,
    playerDetailHidden: css`
        opacity: 0;
        width: 0px;
        transform: translateX(100%);
        pointer-events: none;
    `,
};
