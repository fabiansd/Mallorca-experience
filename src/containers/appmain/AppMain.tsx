import { CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import useWindowPosition from '../../hooks/useWindowPosition';
import mainTheme from '../../styles/MainTheme';
import InfoBar from '../infobar/InfoBar';
import ContainerFour from '../containerfour/ContainerFour';
import ContainerTwo from '../containertwo/ContainerTwo';
import Header from '../header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${process.env.PUBLIC_URL + 'files/images/background/mallorca-background.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
    },
}));

function AppMain() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <ThemeProvider theme={mainTheme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                    <InfoBar />
                    <ContainerTwo />
                    <ContainerFour />
            </div>
        </ThemeProvider>
    );
}

export default (AppMain);