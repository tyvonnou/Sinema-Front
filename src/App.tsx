import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/layout/Navbar.component";
import Home from "./components/Home.component";
import Connexion from "./components/Connexion.component";
// import Stepper from "./components/Stepper.component";
import Register from "./components/Register.component";
import Footer from "./components/layout/Footer.component";
import Profile from "./components/Profile.component";

const theme = createMuiTheme({  
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#60FFA6',
      main: '#01D277',
      dark: '#009E49',
      contrastText: '#000',
    },
    secondary: {
      light: '#30434C',
      main: '#081C24',
      dark: '#000',
      contrastText: '#FFF',
    },
    text: {
      primary: '#FFF',
      secondary: '#B9B9B9'
    },
    background: {
      default: '#171717'
    }
  },
})

/*const useStyles = makeStyles(theme => ({
  site: {
    display: "flex",
    flexDirection: "column",
    minHeight: 'calc(100vh - 111px)',
  },
}));*/

const App = () => {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
          <Switch>
            <Route path="/Register" component={Register} />
            <Route path="/Connexion" component={Connexion} />
            <Route path="/Profile" component={Profile} />
            <Route exactpath="/" component={Home} />
          </Switch>
        </Router>
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;