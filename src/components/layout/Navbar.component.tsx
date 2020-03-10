import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

import SliderMenu from "./SliderMenu.component";
import SearchInput from "./SearchInput.component";
import logo from 'images/logo.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    toolBar: {
      minHeight: 70,
      [theme.breakpoints.up("md")]: {
        minHeight: 111
      }
    },
    logo: {
      maxWidth: 40,
    },
    title: {
      flexGrow: 1,
      marginLeft: theme.spacing(3),
      fontWeight: 600
      
    },
    link: {
      margin: theme.spacing(1, 1.5),
      "&:hover": {
        textDecoration: "none"
      },
      [theme.breakpoints.down("sm")]: {
        display: "none"
      },
      fontWeight: 600
    },
    linkButton: {
      marginLeft: theme.spacing(0),
      [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(5)
      },
      fontWeight: 600
    },
    search: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <SliderMenu />
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h5" className={classes.title}>
            Le Sinema
          </Typography>
          <nav>
            <Link variant="button" color="inherit" component={RouterLink} to="/" className={classes.link}>
              Films
            </Link>
            <Link variant="button" color="inherit" component={RouterLink} to="/formations" className={classes.link}>
              Formations
            </Link>
            <Link
              variant="button"
              color="inherit"
              component={RouterLink}
              to="/rejoindre"
              className={classes.link}
            >
              Nous rejoindre
            </Link>
            <Button
              variant="outlined"
              color="inherit"
              component={RouterLink}
              to="/connexion"
              className={classes.linkButton}
            >
              Se connecter
            </Button>
          </nav>
        </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.search}>
        <Container maxWidth="lg">
          <SearchInput />
        </Container>
      </div>
    </div>
  );
}