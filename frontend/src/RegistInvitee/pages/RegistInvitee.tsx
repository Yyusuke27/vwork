import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepOne from "../components/StepOne";
import StepTwo from "../components/SteoTwo";

const RegistInvitee = () => {
  return (
    <>
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
      </Switch>
    </>
  );
};

export default RegistInvitee;
