import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { theme } from "./shared/util/theme";
import Register from "./Register/pages/Register";
import WorkSpaces from "./WorkSpaces/pages/WorkSpaces";
import Dashboard from "./Dashboard/pages/Dashboard";
import Auth from "./Auth/pages/Auth";
import { selectLoader } from "./appSlice";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1500,
      color: "#fff",
    },
  })
);

const App = () => {
  const classes = useStyles();
  const loading = useSelector(selectLoader);

  const vworkInfoInlocalStorage = localStorage.vwork;

  const path = window.location.pathname

  useEffect(() => {
    if(path === "/") {
      window.location.href = "/workspaces"
    }
  }, [path]);

  return (
    <MuiThemeProvider theme={theme}>
      {loading ? (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="primary" />
        </Backdrop>
      ) : (
        ""
      )}
      <Router>
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/workspaces">
            {vworkInfoInlocalStorage ? <WorkSpaces /> : <Redirect to="/auth/login" />}
          </Route>
          <Route path="/:workspacePathId">
            {vworkInfoInlocalStorage ? <Dashboard /> : <Redirect to="/auth/login" />}
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
