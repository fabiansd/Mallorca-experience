import { IconButton, MenuItem } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import React from 'react';
import { Link as Scroll } from 'react-scroll';
import mainTheme from '../../styles/MainTheme';

import * as text from '../../text/menuitems.json';

const useStyles = makeStyles((theme) => ({
    root: {},
    iconMenu: {
        color: mainTheme.palette.text.primary,
        fontSize: '3rem'
    },
    menuItems: {
        color: mainTheme.palette.common.black,
        '&:focus': {
            background: 'rgba(255,255,255,0.8)'
        }
    }
}));

const menyStyle = {
    color: mainTheme.palette.primary.main
};

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div
            onKeyDown={handleDrawerClose}
        >
            <IconButton
                onClick={handleDrawerOpen}
                aria-controls="long-menu"
                id='menu'
                className={classes.iconMenu}
            >
                <SortIcon />
            </IconButton>
            <Drawer
                anchor="top"
                open={open}
                onClose={handleDrawerClose}
                onClick={handleDrawerClose}
                elevation={3}
                PaperProps={{
                    style: menyStyle
                }}
            >
                <MenuItem onClick={handleDrawerClose} className={classes.menuItems}>
                    <Scroll to='container-one' smooth={true}>
                        <p>
                            {text.menuitem1}
                        </p>
                    </Scroll>
                </MenuItem>
                <MenuItem onClick={handleDrawerClose} className={classes.menuItems}>
                    <Scroll to='container-two' smooth={true}>
                        <p>
                            {text.menuitem2}
                        </p>
                    </Scroll>
                </MenuItem>
                <MenuItem onClick={handleDrawerClose} className={classes.menuItems}>
                    <Scroll to='container-four' smooth={true}>
                        <p>
                            {text.menuitem4}
                        </p>
                    </Scroll>
                </MenuItem>
            </Drawer>
        </div>
    );
}
