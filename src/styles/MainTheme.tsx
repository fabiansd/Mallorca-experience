import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#f7f7f7',
            dark: 'rgba(0,0,0,0.2)',
        },
        secondary: {
            main: 'rgba(247,247,247,0.95)',
            light: 'rgba(247,247,247,1)',
            dark: 'rgb(188,188,188)',

        },
        text: {
            primary: '#f5f5f5',
            secondary: '#cf923f',
            disabled: '#706350'
        }
    },
    typography: {
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    },
    overrides: {
        MuiMenuItem: {
            root: {
                backgroundColor: 'rgba(255,255,255,0.8)'
            }
        }
    }
});

export default mainTheme;