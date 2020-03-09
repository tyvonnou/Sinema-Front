import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

import MovieThumbnail from './MovieThumbnail.component';

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
      color: 'rgb(255, 255, 255)',
      paddingBottom: '0.3em',
      borderBottom: '2px solid #01d277',
      fontWeight: 900,
      textTransform: 'uppercase',
    }
  })
);

function Home(props: WithWidth) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const gridProps = isSmallScreen ? "center" : "flex-start";

  return (
    <div className={classes.root}>
      <Container fixed maxWidth="lg">
        <Typography variant="h5" component="h2" className={classes.section}>
          <Box component="span" display="inline-block" className={classes.sectionText}>Derniers films</Box>
        </Typography>
        <Grid container spacing={3} justify={gridProps} >
          <Grid item xs={10} sm={6} md={4} lg={3}>
            <MovieThumbnail id={1} title="Shrek" date="16 Mai 2001" poster="/images/shrek.jpg" rate={5.00} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withWidth()(Home);