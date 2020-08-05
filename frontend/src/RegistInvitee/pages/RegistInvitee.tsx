import React from "react";
import { Route, Switch } from "react-router-dom";
import Welcome from "../components/Welcome";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

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
        <Route exact path="/regist_invitee/step_three">
          <StepThree />
        </Route>
      </Switch>
    </>
  );
};

export default RegistInvitee;
