import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";

import Dashboard from "./Dashboard/pages/Dashboard";
import Auth from "./Auth/pages/Auth";

import { theme } from "./shared/util/theme";

import "./App.css";
import Regist from "./Regist/pages/Regist";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/regist">
            <Regist />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
