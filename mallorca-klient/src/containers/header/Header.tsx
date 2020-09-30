import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlgin: 'center',
        height: '100vh',
        fontFamlily: 'Nunito'
    },
    appbarStyle: {
        background: 'none'

    },
    appbarTitle: {
        flexGrow: 1
    },
    appbarUnderTitle: {
        color: '#fff',
        fontSize: '4.5rem'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    container: {
        textAlign: 'center'
    },
    iconMenu: {
        color: '#fff',
        fontSize: '2rem'
    },
    iconDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    },
    colorText: {
        color: '#5AFF3D'
    }
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() =>{
        setChecked(true);
    }, [])

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbarStyle} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        Mallorca <span className={classes.colorText}>
                         Experience.
                    </span>
                    </h1>
                    <IconButton>
                        <SortIcon className={classes.iconMenu} />

                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...({ timeout: 2000 })}
                collapsedHeight={14}>
                <div className={classes.container}>
                    <h1 className={classes.appbarUnderTitle}>
                        Welcome to our <br />
                        <span className={classes.colorText}>
                         Mallorca Experience.
                    </span>
                    </h1>
                    <IconButton>
                        <KeyboardArrowDownIcon className={classes.iconDown} />
                    </IconButton>
                </div>
            </Collapse>
        </div>
    );
}
