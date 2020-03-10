import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/layout/Navbar.component";
import Home from "./components/Home.component";
import Lister from "./Lister";
import Footer from "./components/layout/Footer.component";

const theme = createMuiTheme({  
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
  },
  palette: {
    primary: {
      light: '#60FFA6',
      main: '#01D277',
      dark: '#009E49',
      contrastText: '#FFF',
    },
    secondary: {
      light: '#30434C',
      main: '#081C24',
      dark: '#000',
      contrastText: '#FFF',
    },
    text: {
      secondary: '#B9B9B9'
    },
    background: {
      default: '#171717',
      paper: '#FFF'
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
            <Route path="/Lister" component={Lister} />
            <Route exactpath="/" component={Home} />
          </Switch>
        </Router>
      <Footer />
    </MuiThemeProvider>
  );
};

export default App;