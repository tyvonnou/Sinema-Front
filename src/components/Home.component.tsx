import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

import MovieThumbnail from './MovieThumbnail.component';

import axios from "axios";
import { Thumbnail as IThumbnail } from "../../types/movie";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(8)
    },
    section: {
      paddingLeft: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    sectionText: {
      color: theme.palette.common.white,
      fontWeight: 900,
      paddingBottom: '0.3em',
      borderBottomColor: theme.palette.primary.main,
      borderBottomStyle: 'solid',
      borderBottomWidth: 2,
      textTransform: 'uppercase',
    }
  })
);

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const gridProps = isSmallScreen ? "center" : "flex-start";

  const [newestMovies, setNewestMovies] = useState<IThumbnail[]>([]);

  useEffect(() => {
    axios.get('/movie').then(res => {
      setNewestMovies(res.data);
    })
  }, []);

  return (
    <div className={classes.root}>
      <Container fixed maxWidth="lg">
        <Typography variant="h5" component="h2" className={classes.section}>
          <Box component="span" display="inline-block" className={classes.sectionText}>Derniers films</Box>
        </Typography>
        <Grid container spacing={3} justify={gridProps} >
          { newestMovies.map((movie, i) => 
            <Grid item xs={10} sm={6} md={4} lg={3} key={i}>
              <MovieThumbnail id={movie.id} title={movie.title} date={movie.releaseDate} poster="/images/shrek.jpg" rate={5.00} />
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}
