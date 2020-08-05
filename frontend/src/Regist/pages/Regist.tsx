import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepBoard from "../components/StepBoard";
import Dialog from "@material-ui/core/Dialog";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      position: "relative",
    },
  })
);

const Regist = () => {
  const classes = useStyles();
  return (
    <>
      <Dialog open keepMounted maxWidth="xl" className={classes.dialog}>
        <Switch>
          <Route exact path="/regist/welcome">
            <Welcome />
          </Route>
          <Route exact path="/regist/step_board">
            <StepBoard />
          </Route>
        </Switch>
      </Dialog>
    </>
  );
};

export default Regist;
