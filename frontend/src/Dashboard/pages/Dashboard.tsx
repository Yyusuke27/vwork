import React from "react";
import { Route, Switch } from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./Home";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import MyTask from "../Task/pages/MyTask";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MainNavigation />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/my_task" exact>
            <MyTask />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;
