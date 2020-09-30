import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../styles/Theme';
import 'fontsource-roboto';
import React from 'react';

const useStyles = makeStyles({
    backgroundStyle: {
        backgroundImage: `url(require("../../files/images/background/beach1.jpg"))`,
        backgroundColor: theme.palette.background.paper
    }
})

function Gallery() {

    const classes = useStyles();

    return (
        <div className={classes.backgroundStyle}>
            <Typography variant="h4">
                Hello there
            </Typography>
        </div>
    );
}

export default Gallery;