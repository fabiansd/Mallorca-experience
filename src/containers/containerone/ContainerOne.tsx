import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import mainTheme from '../../styles/MainTheme';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignitems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        backgroundColor: mainTheme.palette.primary.main,
    },
    container: {
        margin: '3rem',
        justifyContent: 'center',

    },
    item: {
        textAlign: 'center',
        margin: '2rem',
    },
}));

export default function ContainerOne() {
    const classes = useStyles();

    return (
        <div className={classes.root} id='container-one'>
        <Grid container className={classes.container}>

            <Grid item className={classes.item}>
                <p> slkdjf lskjdf ølskdjf lsdkfj</p>
            </Grid>
            <Grid item className={classes.item}>
                <p> slkdjf lskjdf ølskdjf lsdkfj</p>
            </Grid>
            <Grid item className={classes.item}>
                <p> slkdjf lskjdf ølskdjf lsdkfj</p>
            </Grid>
            <Grid item className={classes.item}>
                <p> slkdjf lskjdf ølskdjf lsdkfj</p>
            </Grid>
        </Grid>

        </div>
    );
}
