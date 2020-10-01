import { Collapse } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
// import mainTheme from '../../styles/MainTheme';

const useStyles = makeStyles({
    root: {
        maxWidth: 645,
        background: 'rgba(0,0,0,.5)',
        margin: '2rem'
    },
    media: {
        height: 440
    },
    title: {
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    description: {
        fontFamily: 'Nunito',
        fontSize: '1.1rem'
    }
});

interface ImageCardProps {
    checked: boolean;
    imagePath: string;
    title?: string;
    text?: string;
}

export default function ImageCard(props: ImageCardProps) {
    const classes = useStyles();

    return (
        <Collapse
            in={true}
            {...({ timeout: 2000 })}
        >
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={process.env.PUBLIC_URL + props.imagePath}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                        {props.text}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>
    );
}
