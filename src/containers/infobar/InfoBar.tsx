import { Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import mainTheme from '../../styles/MainTheme';
import EuroIcon from '@material-ui/icons/Euro';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import KingBedIcon from '@material-ui/icons/KingBed';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        },
        backgroundColor: mainTheme.palette.secondary.main,
    },
    container: {
        margin: '1rem',
        marginTop: '3rem',
        marginBottom: '3rem',
        textAlign: 'center',
    },
    title: {
        width: '100%',
    },
    icon: {
        textAlign: 'center',
        color: mainTheme.palette.text.secondary,
    },
    divider: {
        height: '0.2rem',
        fontColor: mainTheme.palette.text.secondary,
        marginTop: '1rem',
        marginBottom: '1rem',
    },
    textContent: {
        textAlign: 'center',
        fontSize: '1.5rem',
        color: mainTheme.palette.text.secondary,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

export default function InfoBar() {
    const classes = useStyles();

    return (
        <div
            id='info-bar'
            className={classes.root}>
            <Grid
                container
                justify='center'
                spacing={4}
                className={classes.container}
            >
                <Grid item xs={3}>
                    <div>
                        <div className={classes.icon}>
                        <EuroIcon
                            fontSize='large'
                            />
                        </div>
                        <Divider
                            variant="middle"
                            className={classes.divider}/>
                        <Typography className={classes.textContent}>
                            The price is of weekly basis. The first half is paid in advance, and the rest is paid after the stay.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <div className={classes.icon}>
                            <BeachAccessIcon
                                fontSize='large'
                            />
                        </div>
                        <Divider
                            variant="middle"
                            className={classes.divider}/>
                        <Typography className={classes.textContent}>
                            The property is located in Sant Elm South in Mallorca, and has direct beach access.
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <div className={classes.icon}>
                            <KingBedIcon
                                color='inherit'
                                fontSize='large'
                            />
                        </div>
                        <Divider
                            variant="middle"
                            className={classes.divider}/>
                        <Typography className={classes.textContent}>
                            We offer 6 bed rooms and several balconies divided over three floor with beatuiful ocean view.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
