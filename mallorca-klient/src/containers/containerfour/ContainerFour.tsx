import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import ImageCard from '../../components/card/ImageCard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignitems: 'center',
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

export default function ContainerFour() {
    const classes = useStyles();
    // const checked = useWindowPosition('header');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="container-four">

            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
            >
                <ImageCard
                    checked={checked}
                    imagePath='files/images/card/beeroktere.jpg'
                    title="Info One"
                    text="This is some blank text just to show how the text would look like if we wrote something that actually made sense here. Not that i write anything that makes sense anytime anyways.." />
            </Grid>
        </div>
    );
}
