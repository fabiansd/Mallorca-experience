import { CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider  } from '@material-ui/core/styles';
import React from 'react';
import mainTheme from '../../styles/MainTheme';
import InfoDeck from '../infodecks/InfoDeck';
import Header from '../header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'files/images/background/ocean.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: 'Nunito'
    }
}));

function AppMain() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={mainTheme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                <InfoDeck />
            </div>
        </ThemeProvider>
    );
}

export default (AppMain);