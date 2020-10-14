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
        color: mainTheme.palette.common.white,
        fontSize: '3rem'
    },
    menuItems: {
        // backgroundColor: 'rgba(255,255,255,0.25)',
        color: mainTheme.palette.common.black,
        '&:focus': {
            background: 'rgba(255,255,255,0.8)'
        }
    }
}));

const menyStyle = {
    // backgroundColor: 'rgba(255,255,255,0.25)',
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
                anchor="right"
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

// return (
//         <div className={classes.root}>
//                 <IconButton onClick={handleClick} aria-controls="long-menu" id='menu'>
//                     <SortIcon className={classes.iconMenu} />
//                 </IconButton>
//                 <Drawer
//                     anchor='right'
//                     onClick={handleClose}
//                     open={Boolean(anchorEl)}
//                     onClose={handleClose}>
//                     <div className={classes.menuItems}>
//                         <MenuItem onClick={handleClose}>
//                             <Scroll to='house-deck' smooth={true}>
//                                 The Beach House
//                             </Scroll>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>
//                             <Scroll to='experiences-deck' smooth={true}>
//                                 Experiences
//                             </Scroll>
//                         </MenuItem>
//                         <MenuItem onClick={handleClose}>My account</MenuItem>
//                         <MenuItem onClick={handleClose}>Logout</MenuItem>
//                     </div>
//                 </Drawer>
//         </div>);
// }