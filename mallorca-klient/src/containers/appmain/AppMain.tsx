import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import React from 'react';
import theme from '../../styles/Theme';
import Home from '../home/Home';
import Contact from '../contact/Contact';
import { CssBaseline } from '@material-ui/core';
// import Background from '../../files/images/background/beach1.jpg';
//
// var backgroundStyle = {
//     width: '100%',
//     height: '400px',
//     backgroundImage: 'url(' + { Background } + ')'
// };

const styles = {
    root: {
        backgroundImage: `url(require("../../files/images/background/beach1.jpg"))`
    },
};

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`
    };
}

interface LinkTabProps {
    label?: string;
    href?: string;
}

function LinkTab(props: LinkTabProps) {
    return (
        <Tab
            component="a"
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const navbarStyle = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper

    }
}));

function AppMain() {
    const classes = navbarStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
                <div
                    className={classes.root}
                    style={{ backgroundImage: `url(require("../../files/images/background/beach1.jpg"))` }}>
                    <AppBar position="static">
                        <Tabs
                            variant="fullWidth"
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                        >
                            <LinkTab label="Home" href="/drafts" {...a11yProps(0)} />
                            <LinkTab label="Gallery" href="/trash" {...a11yProps(1)} />
                            <LinkTab label="FAQ" href="/spam" {...a11yProps(2)} />
                            <LinkTab label="Contact" href="/spam" {...a11yProps(3)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Home />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Page Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Page Three
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Contact />
                    </TabPanel>
                </div>
        </ThemeProvider>
    );
}

export default withStyles(styles)(AppMain);