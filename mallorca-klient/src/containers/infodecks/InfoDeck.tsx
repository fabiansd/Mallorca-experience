import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import ImageCard from '../../components/card/ImageCard';
import useWindowPosition from '../../hooks/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        maxHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignitems: 'center'
    }
}));

export default function PlacesToGo() {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
        <div className={classes.root}>
            <ImageCard
                checked={checked}
                imagePath='files/images/deck/beach.jpg'
                title="Info One"
                text="Blir denne boksen litt tom og stusselig?" />
            <ImageCard
                checked={checked}
                imagePath='files/images/deck/mountains.jpg'
                title="Info Two"
                text="This is some blank text just to show how the text would look like if we wrote something that actually made sense here. Not that i write anything that makes sense anytime anyways.." />
        </div>
    );
}
