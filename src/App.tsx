import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./components/layout/Navbar.component";
import Home from "./components/Home.component";
import Lister from "./Lister";
import Footer from "./components/layout/Footer.component";

const theme = createMuiTheme({  
  typography: {
    fontFamily: '"Source Sans Pro", sans-serif',
  },
})

const useStyles = makeStyles(theme => ({
  site: {
    display: "flex",
    flexDirection: "column",
    minHeight: 'calc(100vh - 111px)',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <div className={classes.site}>
        <Router>
          <div>
            <Navbar />
          </div>
          <div>
            <Route path="/Lister" component={Lister} />
            <Route path="/" component={Home} />
          </div>
        </Router>
      </div>
      <Footer />
    </div>
    </MuiThemeProvider>
  );
};

export default App;