import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import Dialog from "@material-ui/core/Dialog";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";

import "./RegistInvitee.css";

const RegistInvitee = () => {
  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
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
