import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Header from "../header/Header";


const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'files/images/background/island.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        fontFamily: 'Nunito',
    }
}));

function AppMain() {
const classes = useStyles();
    return (
    <div className={classes.root}>
        <CssBaseline/>
        <Header/>
    </div>
    )
}

export default (AppMain);