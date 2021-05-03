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
        top: '60%',
        left: '70%'

    }
}));

export default function ContainerOne() {
    const classes = useStyles();
    // const checked = useWindowPosition('header');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='container-one'>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <ImageCard
                    checked={checked}
                    imagePath='files/images/card/honning_3_sorter.jpg'
                    title={title.menuitem1}
                    text={text.card1intro}
                    text1={text.card1text1}
                    text2={text.card1text2}
                    // text3={text.card1text3}
                />
            </Grid>
        </div>
    );
}
