import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import Dialog from "@material-ui/core/Dialog";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dialog: {
      position: "relative",
    },
  })
);

const RegistInvitee = () => {
  const classes = useStyles();
  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className={classes.dialog}>
        <Switch>
          <Route exact path="/regist_invitee/welcome">
            <Welcome />
          </Route>
          <Route exact path="/regist_invitee/step_one">
            <StepOne />
          </Route>
          <Route exact path="/regist_invitee/step_two">
            <StepTwo />
          </Route>
          <Route exact path="/regist_invitee/step_three">
            <StepThree />
          </Route>
        </Switch>
      </Dialog>
    </>
  );
};

export default RegistInvitee;
