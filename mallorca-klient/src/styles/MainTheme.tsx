import { createMuiTheme } from '@material-ui/core/styles';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#3b3b40'
        },
        secondary: {
            main: '#e26800'
        },
        text: {
            primary: 'rgba(255,255,255,1)',
            secondary: 'rgba(255,255,255,0.9)',
            disabled: 'rgba(255,255,255,0.4)',
        }
    }
});

export default mainTheme;