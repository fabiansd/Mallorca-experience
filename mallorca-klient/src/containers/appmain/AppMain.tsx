import { CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import mainTheme from '../../styles/MainTheme';
import ContainerFour from '../containerfour/ContainerFour';
import ContainerOne from '../containerone/ContainerOne';
import ContainerThree from '../containerthree/ContainerThree';
import ContainerTwo from '../containertwo/ContainerTwo';
import Header from '../header/Header';

const useStyles = makeStyles((theme) => ({
    root: {

        backgroundColor: mainTheme.palette.secondary.light,
    }
}));

function AppMain() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={mainTheme}>
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                <ContainerOne />
                <ContainerTwo />
                <ContainerThree />
                <ContainerFour />
            </div>
        </ThemeProvider>
    );
}

export default (AppMain);