import React from "react";
import { Route, Switch } from "react-router-dom";
import InviteeWelcome from "../components/InviteeWelcome";
import InviteeStepOne from "../components/InviteeStepOne";
import InviteeStepTwo from "../components/InviteeStepTwo";
import InviteeStepThree from "../components/InviteeStepThree";

const RegistInvitee = () => {
  return (
    <>
      <Switch>
        <Route path="/regist/invitee/welcome">
          <InviteeWelcome />
        </Route>
        <Route path="/regist/invitee/step1" exact>
          <InviteeStepOne />
        </Route>
        <Route path="/regist/invitee/step2" exact>
          <InviteeStepTwo />
        </Route>
        <Route path="/regist/invitee/step3" exact>
          <InviteeStepThree />
        </Route>
      </Switch>
    </>
  );
};

export default RegistInvitee;
