import React from "react";
import { Route, Switch } from "react-router-dom";
import InviteeWelcome from "../components/InviteeWelcome";
import InviteeStepOne from "../components/InviteeStepOne";
import InviteeStepTwo from "../components/InviteeStepTwo";
import InviteeStepThree from "../components/InviteeStepThree";
import Dialog from "@material-ui/core/Dialog";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";

import "./RegistInvitee.css";
import Container from "@material-ui/core/Container";

const RegistInvitee = () => {
  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/regist_invitee/welcome">
              <InviteeWelcome />
            </Route>
            <Route exact path="/regist_invitee/step_one">
              <InviteeStepOne />
            </Route>
            <Route exact path="/regist_invitee/step_two">
              <InviteeStepTwo />
            </Route>
            <Route exact path="/regist_invitee/step_three">
              <InviteeStepThree />
            </Route>
          </Switch>
        </Container>
      </Dialog>
    </>
  );
};

export default RegistInvitee;
