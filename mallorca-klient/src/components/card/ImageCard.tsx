import { CardActions, Collapse, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import mainTheme from '../../styles/MainTheme';
// import mainTheme from '../../styles/MainTheme';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: 745,
        background: 'rgba(0,0,0,.5)'
    },
    media: {
        height: 440
    },
    title: {
        fontWeight: 'bold',
        fontSize: '2rem'
    },
    description: {
        fontSize: '1.1rem'
    },
    expand: {
        color: mainTheme.palette.common.white,
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
}));

interface ImageCardProps {
    checked: boolean;
    imagePath: string;
    title?: string;
    text?: string;
    text1?: string;
    text2?: string;
    text3?: string;
}

export default function ImageCard(props: ImageCardProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const displayMore = (!!props.text1 || !!props.text2 || !!props.text3);

    return (
        <Collapse
            in={props.checked}
            {...({ timeout: 1000 })}
            collapsedHeight={0}>
            <Card
                className={classes.root}
                elevation={2}
            >
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
                {displayMore &&
                <>
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {!!props.text1 &&
                            <Typography paragraph>
                                {props.text1}
                            </Typography>
                            }
                            {!!props.text2 &&
                            <Typography paragraph>
                                {props.text2}
                            </Typography>
                            }
                            {!!props.text3 &&
                            <Typography paragraph>
                                {props.text3}
                            </Typography>
                            }
                        </CardContent>
                    </Collapse>
                </>
                }
            </Card>
        </Collapse>
    );
}
