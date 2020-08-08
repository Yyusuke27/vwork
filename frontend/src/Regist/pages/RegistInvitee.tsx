import React from "react";
import { Route, Switch } from "react-router-dom";
import InviteeWelcome from "../components/InviteeWelcome";
import InviteeStepOne from "../components/InviteeStepOne";
import InviteeStepTwo from "../components/InviteeStepTwo";
import InviteeStepThree from "../components/InviteeStepThree";
import "./RegistInvitee.css";

const RegistInvitee = () => {
  return (
    <>
      <Switch>
        <Route path="/regist/regist_invitee/welcome">
          <InviteeWelcome />
        </Route>
        <Route path="/regist/regist_invitee/step_one">
          <InviteeStepOne />
        </Route>
        <Route path="/regist/regist_invitee/step_two">
          <InviteeStepTwo />
        </Route>
        <Route path="/regist/regist_invitee/step_three">
          <InviteeStepThree />
        </Route>
      </Switch>
    </>
  );
};

export default RegistInvitee;
