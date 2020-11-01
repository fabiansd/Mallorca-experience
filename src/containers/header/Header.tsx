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
        height: '100vh'
    },
    appbarStyle: {
        background: 'none'

    },
    appbarTitle: {
        flexGrow: 1
    },
    appbarTitleStyle: {
        display: 'inline-block',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '0.4rem',
    },
    appbarUnderTitle: {
        color: mainTheme.palette.secondary.main,
        fontSize: '4.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem'
        }
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
        color: mainTheme.palette.secondary.main
    },
    container: {
        textAlign: 'center'
    },
    iconDown: {
        color: mainTheme.palette.secondary.main,
        fontSize: '4rem'
    },
    colorText: {
        color: mainTheme.palette.common.white
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
                            <span className={classes.colorText}>
                             The
                        </span> Beecoin <span className={classes.colorText}>
                             Experience.
                        </span>
                        </div>
                    </h1>
                    <AppMenu />
                </Toolbar>
            </AppBar>

            <Collapse
                in={checked}
                {...({ timeout: 2000 })}
                collapsedHeight={14}>
                <div className={classes.container}>
                    <h1 className={classes.appbarUnderTitle}>
                        Smak vår <br />
                        <span className={classes.colorText}>
                         Hjemmelagde honning
                    </span>
                    </h1>
                    <Scroll to='container-one' smooth={true}>
                        <IconButton>
                            <KeyboardArrowDownIcon className={classes.iconDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>

        </div>
    );
}
