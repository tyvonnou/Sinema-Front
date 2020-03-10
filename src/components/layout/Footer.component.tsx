import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: theme.spacing(3),
    borderTopColor: 'rgb(34, 31, 31)',
    borderTopStyle: 'solid',
    borderTopWidth: 2
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="body2" color="textSecondary">
          {"Copyright © Projet SI "}{new Date().getFullYear()}{"."}
        </Typography>
      </Box>
    </footer>
  );
}