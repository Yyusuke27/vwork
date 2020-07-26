import React from "react";
import Dashboard from "./Dashboard/pages/Dashboard";
import Auth from "./Auth/pages/Auth";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
