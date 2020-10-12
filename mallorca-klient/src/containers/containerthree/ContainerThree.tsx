import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignitems: 'center',
        backgroundImage: `url(${process.env.PUBLIC_URL + 'files/images/background/honeydrip.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    },
    container: {
        textAlign: 'center',
        margin: '0',
        position: 'absolute',
        top: '50%',
        left: '50%'

    }
}));

export default function ContainerThree() {
    const classes = useStyles();
    // const checked = useWindowPosition('header');

    return (
        <div className={classes.root}>

        </div>
    );
}
