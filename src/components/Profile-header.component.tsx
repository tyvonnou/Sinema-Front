import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import BackgroundHeader from 'images/user-header.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      background: 'radial-gradient(at 30% top, rgba(7, 64, 52, 1) 0%, rgba(8, 28, 36, 1) 70%)',
    },
    headerBackground: {
      backgroundImage: `url(${BackgroundHeader})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center -250px',
      paddingTop: 40,
      paddingBottom: 40
    },
    avatar: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      height: 150,
      width: 150,
      fontSize: '4em'
    },
    usernameSection: {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.only("xs")]: {
        marginLeft: theme.spacing(0)
      }
    },
    username: {
      fontWeight: 900
    }
  })
);

interface Header {
  username: string,
  registrationDate: string
}

export default function ProfileHeader(props: Header) {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const typoVariant = isSmallScreen ? "h4" : "h3";

  const {username, registrationDate } = props;

  return (
    <div className={classes.header}>
      <div className={classes.headerBackground}>
        <Container maxWidth="lg">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Hidden only="xs">
              <Avatar className={classes.avatar}>X</Avatar>
            </Hidden>
            <Box display="flex" flexDirection="column" className={classes.usernameSection}>
              <Typography variant={typoVariant} component="h2" className={classes.username}>
                {username}
              </Typography>
              <Typography variant="subtitle1" component="h2" color="textSecondary">
                Membre depuis le {registrationDate}
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}