import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import React, { useEffect, useState } from 'react';
import { Link as Scroll } from 'react-scroll';
import AppMenu from '../../components/menu/SideMenu';
import mainTheme from '../../styles/MainTheme';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlgin: 'center',
        height: '100vh',
    },
    appbarStyle: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: 1,
    },
    appbarTitleStyle: {
        borderStyle: 'solid',
        borderWidth: '0.2rem',
        display: 'inline-block',
        backgroundColor: mainTheme.palette.primary.dark,
        fontColor: mainTheme.palette.text.primary,
        padding: '0.4rem',
    },
    appbarUnderTitle: {
        fontSize: '4.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem'
        },
        marginRight: '2.5rem',
        marginLeft: '2.5rem',
        marginBottom: '0.5rem',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    container: {
        textAlign: 'center'
    },
    iconDown: {
        color: mainTheme.palette.text.primary,
        fontSize: '4rem',
    },
    colorTextPrimary: {
        color: mainTheme.palette.text.primary,
    },
    colorTextSecondary: {
        color: mainTheme.palette.text.secondary,
    },
    containerUnderTitle: {
        background: mainTheme.palette.primary.dark,
        margin: '1rem',
    }
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbarStyle} elevation={0} position='fixed'>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        <div className={classes.appbarTitleStyle}>
                            <span className={classes.colorTextPrimary}>
                             The
                            </span>
                            <span className={classes.colorTextSecondary}> Mallorca </span>
                            <span className={classes.colorTextPrimary}>
                            Experience.
                            </span>
                        </div>
                    </h1>
                    <AppMenu />
                </Toolbar>
            </AppBar>

            <div className={classes.containerUnderTitle}>
                <Collapse
                    in={checked}
                    {...({ timeout: 2500 })}
                    collapsedHeight={14}>
                    <div className={classes.container}>
                        <h1 className={classes.appbarUnderTitle}>
                            <span>
                                Enjoy our <br />
                            </span>
                            <span className={classes.colorTextSecondary}>
                             Mallorca beach house
                            </span>
                        </h1>
                        <Scroll to='info-bar' smooth={true}>
                            <IconButton>
                                <KeyboardArrowDownIcon className={classes.iconDown} />
                            </IconButton>
                        </Scroll>
                    </div>
                </Collapse>
            </div>
        </div>
    );
}
