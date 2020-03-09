import React from "react";
import { Link } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';



interface Movie {
  id: number,
  title: string,
  date: string, 
  poster: string,
  rate: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      backgroundColor: 'transparent',
    },
    actionArea: {
      color: 'rgb(255, 255, 255)',
      '&:hover': {
        color: '#01d277',
      },
      "&:hover $focusHighlight": {
        opacity: 0
      }
    },
    focusHighlight: {},
    media: {
      position: 'relative'
    },
    rateBox: {
      position: 'absolute',
      top: '0.75em',
      left: '0.3875em'
    },
    rateChip: {
      fontWeight: 900,
      color: 'rgb(255, 255, 255)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    star: {
      color: '#fbbd08'
    },
    content: {
      padding: theme.spacing(0),
    },
    title: {
      fontWeight: 900,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    subtitle: {
      color: 'rgb(185, 185, 185)',
      lineHeight: 1,
    }
  })
);

export default function MovieThumbnail(props : Movie) {
  const classes = useStyles();
  const {id, title, date, poster, rate } = props;

  return (
    <div>
      <Card elevation={0} className={classes.card}>
        <CardActionArea classes={{root: classes.actionArea, focusHighlight: classes.focusHighlight}} disableRipple={true} component={Link} to={`/film/${id}`}>
          <CardMedia component="img" alt={title} width="100%" image={poster} title={title} className={classes.media} />
          <Box component="span" className={classes.rateBox}>
            <Chip icon={<StarIcon className={classes.star}/>} size="small" label={rate} className={classes.rateChip} />
          </Box>
          <CardContent className={classes.content}>
            <Typography variant="h6" component="h2" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="caption" component="p" className={classes.subtitle}>
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}