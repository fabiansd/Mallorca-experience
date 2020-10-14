import { CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import mainTheme from '../../styles/MainTheme';
import ContainerOne from '../containerone/ContainerOne';
import ContainerFour from '../containerfour/ContainerFour';
import ContainerTwo from '../containertwo/ContainerTwo';
import Header from '../header/Header';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: mainTheme.palette.secondary.light,
        backgroundImage: `url(${process.env.PUBLIC_URL + 'files/images/background/dark-comb.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    },
    containers: {
        backgroundImage: `url(${process.env.PUBLIC_URL + 'files/images/card/rokter.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
    }
}));

function AppMain() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={mainTheme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                {/*<div className={classes.containers}>*/}
                    <ContainerOne />
                    <ContainerTwo />
                    <ContainerFour />
                    {/*<ContainerFour />*/}
                {/*</div>*/}
            </div>
        </ThemeProvider>
    );
}

export default (AppMain);