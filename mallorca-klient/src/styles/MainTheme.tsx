import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: 'rgba(255,171,7,0.95)',
            light: 'rgba(250,232,215,0.39)',
            dark: 'rgba(255,171,7,0.95)',

        },
        text: {
            primary: 'rgb(0,0,0)',
            secondary: 'rgba(0,0,0,0.9)',
            disabled: 'rgba(255,255,255,0.4)'
        }
    },
    typography: {
      fontFamily: 'Nunito',
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