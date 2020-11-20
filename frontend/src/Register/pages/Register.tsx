import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBarOfRegistration from "../../shared/components/Navigation/SideBarOfRegistration";
import Dialog from "@material-ui/core/Dialog";
import Container from "@material-ui/core/Container";
import RegisterUser from "./RegisterUser";
import RegisterInvitee from "./RegisterInvitee";

import "./Register.css";

const Register = () => {
  return (
    <>
      <SideBarOfRegistration />
      <Dialog open keepMounted maxWidth="xl" className="registDialog">
        <Container maxWidth="md">
          <Router>
            <Switch>
              <Route path="/register/invitee">
                <RegisterInvitee />
              </Route>
              <Route path="/register">
                <RegisterUser />
              </Route>
            </Switch>
          </Router>
        </Container>
      </Dialog>
    </>
  );
};

export default Register;
