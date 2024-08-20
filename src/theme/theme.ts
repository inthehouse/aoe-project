export const theme = {
    colors: {
        primary: {
            main: '#404040',
            light: '#bfbfbf',
            dark: '#2a2a2a',
            contrastText: '#fff',
        },
        secondary: {
            main: '#038fd1',
            light: '#81d5fd',
            dark: '#02567e',
            contrastText: '#fff',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            main: '#fcb82e',
            light: '#fdd481',
            dark: '#d18d03',
            contrastText: '#000',
        },
        info: {
            main: '#038fd1',
            light: '#81d5fd',
            dark: '#02567e',
            contrastText: '#fff',
        },
        success: {
            main: '#72993b',
            light: '#c4dca3',
            dark: '#445c23',
            contrastText: '#fff',
        },
        white: '#fff'
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
    shape: {
        borderRadius: 2
    },
    fonts: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px'
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
};
