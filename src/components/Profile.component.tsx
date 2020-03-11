import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import ProfileHeader from './Profile-header.component'
import ProfileNavigation from './Profile-navigation.component'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  })
);

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfileHeader username="XxFan2shreKxX" registrationDate="11 Septembre 2001" />
        <Container maxWidth="lg">
          <ProfileNavigation />
        </Container>
    </div>
  );
}
