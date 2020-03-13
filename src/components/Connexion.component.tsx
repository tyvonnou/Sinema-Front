import React, { useState } from "react";
import axios from 'axios';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [inputs, setInputs] = useState({username: '', password: ''});
  const [logged, setLogged] = useState(false);

  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs(inputs => ({...inputs, [name]: value}));
  }

  const handleSubmit = (event : React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    axios.post('/connection', {}, { params: { ...inputs }}).then(res => {
      console.log(res.data);
      setLogged(res.data);
    });
  }

  if (logged) {
    return (<Redirect to='/Profile'/>);
  }
  else {
  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Connexion
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nom d'utilisateur"
          name="username"
          autoFocus
          onChange={handleInputChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Mot de passe"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Se souvenir de moi"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
        >
          Se connecter
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Mot de passe oublié ?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Pas encore de compte ? S'inscrire"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
  }
}