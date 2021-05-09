import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ImageCard from '../../components/card/ImageCard';
import * as text from '../../text/card.json';
import * as title from '../../text/menuitems.json';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignitems: 'center',
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
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='container-four'>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <ImageCard
                    checked={checked}
                    imagePath='files/images/card/bee2.jpg'
                    title={title.menuitem4}
                    text={text.card4intro}
                />
            </Grid>
        </div>
    );
}