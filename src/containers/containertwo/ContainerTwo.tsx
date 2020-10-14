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

export default function ContainerTwo() {
    const classes = useStyles();
    // const checked = useWindowPosition('header');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id='container-two'>

            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <ImageCard
                    checked={checked}
                    imagePath='files/images/card/rokter.jpg'
                    title={title.menuitem2}
                    text={text.card2intro}
                    text1={text.card2text1}
                    text2={text.card2text2}
                    text3={text.card2text3}
                />
            </Grid>
        </div>
    );
}
